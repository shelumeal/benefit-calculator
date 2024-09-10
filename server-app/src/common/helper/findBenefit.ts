import getAgeGroup from "./getAgeGroup";

// Helper function to match records to the correct benefit rule
function findBenefit(record: any, familyIncome: any, benefitRule: any) {
    const { age, isCitizen, incomePerMonth } = record;
    // Get all possible age groups
    const ageGroups = getAgeGroup(age);
  
    // Determine age group
    const ageGroup =
    age < 15
      ? "<15"
      : age <= 25
      ? "15-25"
      : age <= 45
      ? "30-45"
      : age <= 60
      ? "25-60" 
      : ">60";
  
    // Determine salary range
    const salaryRange =
    incomePerMonth <= 4000
      ? "<= 4K"
      : incomePerMonth < 5000
      ? "<= 5K"
      : incomePerMonth <= 6000
      ? "<= 6K"
      : "<= 7K";
  
    // Determine nationality
    const nationality = isCitizen ? "SG" : "ALL";
  
    // Find the matching rule in the in-memory benefitRules
    const rule = benefitRule.find((rule:any) => {
      return (
        ageGroups.includes(rule.ageRange) &&
        rule.nationality === nationality &&
        rule.additionalClause === (familyIncome ? "Family/month" : "Individual") &&
        rule.incomeLimit === salaryRange
      );
    });
    
    // Return the benefit output or a default value if no rule matches
    return rule ? rule.output : "No Benefit";
  }

  export default findBenefit;