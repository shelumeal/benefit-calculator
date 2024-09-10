import { VIEW_BENEFIT_RULES_API_URL } from '../common/apiUrls';
import axios from 'axios';

const ruleService={
    fetchBenefitRuleResults: async () => {
        try {
          const response = await axios.get(VIEW_BENEFIT_RULES_API_URL);
          return { data: response.data, error: '' };
        } catch (error) {
          return { data: [], error: 'Unknown Network error occurred' };
        }
      },
};


export default ruleService;