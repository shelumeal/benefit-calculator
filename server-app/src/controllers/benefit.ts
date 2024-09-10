import express from "express";
import { benefitModel } from "../model/benefit";
import Records from "../model/record";
import findBenefit from "../common/helper/findBenefit";

export const createRule = async (
  req: express.Request,
  res: express.Response
) => {
  const { ageRange, nationality, additionalClause, incomeLimit, output } =
    req.body;

  try {
    // Create a new instance of the benefit rule
    const newRule = new benefitModel({
      ageRange,
      nationality,
      additionalClause,
      incomeLimit,
      output,
    });

    const benefitRule = await benefitModel.create(newRule);
    res.status(201).send(benefitRule); // Created
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" }); // Server Error
  }
};

export const getAllRules = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const benefitRules = await benefitModel.find();
    if (benefitRules.length < 0) {
      res.status(404).send({ message: "Benefit Rules not found" }); // Not found
    } else {
      res.status(200).send(benefitRules);
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" }); // Server Error
  }
};

export const getBenefits = async (
  req: express.Request,
  res: express.Response
) => {
  const { testCases, records } = req.body;

  let output = [];

  try {
    // Get all benefit rules by querying the DB
    const benefitRules = await benefitModel.find();

    // Group records by family (same floor, unit, and postalCode)
    const groupedRecords = records.reduce((acc: any, record: Records) => {
      const key = `${record.floor}-${record.unit}-${record.postalCode}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(record);
      return acc;
    }, {});

    // Evaluate benefit for each family group
    for (const family of Object.values(groupedRecords) as Records[][]) {
      if (family.length > 1) {
        // Calculate total family income if there are multiple records
        const familyIncome = family.reduce(
          (sum: number, member: Records) => sum + member.incomePerMonth,
          0
        );
    
        for (const member of family) {
          const benefit = findBenefit(member, familyIncome, benefitRules);
          output.push({ case: member.caseNumber, benefit }); 
        }
      } else {
        // Handle single records separately
        const member = family[0]; // Only one record in this case
        const benefit = findBenefit(member, null, benefitRules);
        output.push({ case: member.caseNumber, benefit }); 
      }
    }
    res.status(200).send(output);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" }); // Server Error
  }
};




