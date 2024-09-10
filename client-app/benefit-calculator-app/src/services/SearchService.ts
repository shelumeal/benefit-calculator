import { SEARCH_BENEFITS_API_URL } from '../common/apiUrls';
import axios from 'axios';
import TestCase from '../models/TestCase';

const searchService={
    fetchBenefitResults: async (noOfTestCases: number, testCases: TestCase[]) => {
        const postData= {
          testCases:noOfTestCases,
          records:testCases
        }
        try {
          const response = await axios.post(`${SEARCH_BENEFITS_API_URL}`,postData,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
          return { data: response.data, error: '' };
        } catch (error) {
          return { data: [], error: 'Unknown Network error occurred' };
        }
      },
};


export default searchService;