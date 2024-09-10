"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBenefits = exports.getAllRules = exports.createRule = void 0;
const benefit_1 = require("../model/benefit");
const findBenefit_1 = __importDefault(require("../common/helper/findBenefit"));
const createRule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ageRange, nationality, additionalClause, incomeLimit, output } = req.body;
    try {
        // Create a new instance of the benefit rule
        const newRule = new benefit_1.benefitModel({
            ageRange,
            nationality,
            additionalClause,
            incomeLimit,
            output,
        });
        const benefitRule = yield benefit_1.benefitModel.create(newRule);
        res.status(201).send(benefitRule); // Created
    }
    catch (error) {
        res.status(500).send({ message: "Something went wrong" }); // Server Error
    }
});
exports.createRule = createRule;
const getAllRules = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const benefitRules = yield benefit_1.benefitModel.find();
        if (benefitRules.length < 0) {
            res.status(404).send({ message: "Benefit Rules not found" }); // Not found
        }
        else {
            res.status(200).send(benefitRules);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Something went wrong" }); // Server Error
    }
});
exports.getAllRules = getAllRules;
const getBenefits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { testCases, records } = req.body;
    let output = [];
    try {
        // Get all benefit rules by querying the DB
        const benefitRules = yield benefit_1.benefitModel.find();
        // Group records by family (same floor, unit, and postalCode)
        const groupedRecords = records.reduce((acc, record) => {
            const key = `${record.floor}-${record.unit}-${record.postalCode}`;
            if (!acc[key])
                acc[key] = [];
            acc[key].push(record);
            return acc;
        }, {});
        // Evaluate benefit for each family group
        for (const family of Object.values(groupedRecords)) {
            if (family.length > 1) {
                // Calculate total family income if there are multiple records
                const familyIncome = family.reduce((sum, member) => sum + member.incomePerMonth, 0);
                for (const member of family) {
                    const benefit = (0, findBenefit_1.default)(member, familyIncome, benefitRules);
                    output.push({ case: member.caseNumber, benefit });
                }
            }
            else {
                // Handle single records separately
                const member = family[0]; // Only one record in this case
                const benefit = (0, findBenefit_1.default)(member, null, benefitRules);
                output.push({ case: member.caseNumber, benefit });
            }
        }
        res.status(200).send(output);
    }
    catch (error) {
        res.status(500).send({ message: "Something went wrong" }); // Server Error
    }
});
exports.getBenefits = getBenefits;
