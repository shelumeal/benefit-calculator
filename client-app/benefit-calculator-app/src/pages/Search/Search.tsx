import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Search.scss";
import TestCase from "../../models/TestCase";
import searchService from "../../services/SearchService";
import Benefit from "../../models/Benefit";
import SearchResult from "../../components/SearchResult/SearchResult";

const Search: React.FC = () => {
  /* Define states */
  const [noOfTestCases, setNoOfTestCases] = useState<number>(0);
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [benefitList, setBenefitList] = useState<Benefit[]>([]);
  const [error, setError] = useState<string>("");

  const handleSearch = () => {
    fetchBenefit();
  };

  // Fetch Benefit
  const fetchBenefit= async()=>{
    const { data, error } = await searchService.fetchBenefitResults(noOfTestCases,testCases);
    setBenefitList(data)
    if (error.length > 0) setError(error);
  }

  return (
    <div className="search-container">
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show w-100"
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
      <h4 className="title">Search Benefits</h4>
      <SearchBar
        noOfTestCases={noOfTestCases}
        testCases={testCases}
        setNoOfTestCases={setNoOfTestCases}
        setTestCases={setTestCases}
        handleSearch={handleSearch}
      ></SearchBar>
      <SearchResult benefits={benefitList}></SearchResult>
    </div>
  );
};

export default Search;
