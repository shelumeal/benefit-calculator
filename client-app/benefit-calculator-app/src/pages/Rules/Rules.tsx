import { useEffect, useState } from "react";
import BenefitRule from "../../models/BenefitRule";
import ruleService from "../../services/RuleService";
import RuleItem from "../../components/RuleItem/RuleItem";

const Rules: React.FC = () => {
  /* Define states */
  const [benefitRules, setBenefitRules] = useState<BenefitRule[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchRules();
  }, []);

  // Fetch Benefit Rules
  const fetchRules = async () => {
    const { data, error } = await ruleService.fetchBenefitRuleResults();
    setBenefitRules(data);
    if (error.length > 0) setError(error);
  };

  return (
    <div>
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {error}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setError("")}
          ></button>
        </div>
      )}
      <RuleItem benefitRules={benefitRules}></RuleItem>
    </div>
  );
};

export default Rules;
