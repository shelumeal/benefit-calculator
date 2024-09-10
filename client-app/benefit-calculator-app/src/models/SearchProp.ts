import TestCase from "./TestCase";

interface SearchProps {
  noOfTestCases: number;
  testCases: TestCase[];
  setNoOfTestCases: (noOfTestCases: number) => void;
  setTestCases: (testCases: TestCase[]) => void;
  handleSearch: () => void;
}

export default SearchProps;
