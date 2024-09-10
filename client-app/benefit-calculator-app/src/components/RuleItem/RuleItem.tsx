import BenefitRuleProps from "../../models/BenefitRuleProps";
import "./RuleItem.scss";

const RuleItem: React.FC<BenefitRuleProps> = ({ benefitRules }) => {
  return (
    <div className="result-container">
      <h4 className="title">Benefit Rules</h4>
      <div className="panel">
        {benefitRules && benefitRules.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Age Group</th>
                <th scope="col">Nationality</th>
                <th scope="col">Additional Clause</th>
                <th scope="col">Income</th>
                <th scope="col">Output / Benefit</th>
              </tr>
            </thead>
            <tbody>
              {benefitRules.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.ageRange}</td>
                    <td>{item.nationality}</td>
                    <td>{item.additionalClause}</td>
                    <td>{item.incomeLimit}</td>
                    <td>{item.output}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="alert alert-warning">No Rules Found.</div>
        )}
      </div>
    </div>
  );
};

export default RuleItem;
