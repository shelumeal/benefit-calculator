import SearchProps from "../../models/SearchProp";
import TestCase from "../../models/TestCase";
import "./SearchBar.scss";

const SearchBar: React.FC<SearchProps> = ({
  noOfTestCases,
  testCases,
  setNoOfTestCases,
  setTestCases,
  handleSearch
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoOfTestCases(parseInt(e.target.value));
  };

  const handleClick = (): void => {
    const newTestCases = [...testCases];
    for (let index = 0; index < noOfTestCases; index++) {
      newTestCases.push(creatTestItem(index));
    }
    setTestCases(newTestCases);
  };

  const findCurrentItem=(id:number, testCases: TestCase[])=>{
    return testCases.find(i=>i.id==id);
  }

  const hanldeInputChange = (id :number,e: React.ChangeEvent<HTMLInputElement>,type:string) => {
    const newArray=[...testCases];
    const currentItem=findCurrentItem(id,newArray);
    switch (type) {
      case 'age':
        currentItem!.age=parseInt(e.target.value);
        break;
      case 'income':
        currentItem!.incomePerMonth=parseInt(e.target.value);
        break;
      case 'floor':
        currentItem!.floor=e.target.value;
        break;
      case 'unit':
        currentItem!.unit=e.target.value;
        break;
      case 'postalCode':
        currentItem!.postalCode=e.target.value;
        break;
      case 'isCitizen':
        currentItem!.isCitizen=e.target.checked;
        break;
      default:
        break;
    }
    setTestCases(newArray);
  };

  const handleSearchClick = (): void => {
    handleSearch();
  };



  const creatTestItem = (index: number) => {
    const testCaseItem: TestCase = {
      id: Math.random(),
      caseNumber:index+1,
      age: 0,
      isCitizen: true,
      floor: "",
      unit: "",
      postalCode: "",
      incomePerMonth: 0,
    };

    return testCaseItem;
  };

  return (
    <div className="search-bar">
      <div className="panel">
        <div className="row g-3 align-items-center mb-4">
          <div className="col-auto">
            <label className="col-form-label">No. of Test Cases</label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              value={noOfTestCases}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-auto button-group">
            <button
              className="btn btn-outline-info"
              onClick={handleClick}
              disabled={noOfTestCases == 0}
            >
              Generate Case
            </button>
            <button className="btn btn-outline-primary" disabled={noOfTestCases == 0} onClick={handleSearchClick}>Search Benefit</button>
            <button className="btn btn-outline-secondary" disabled={noOfTestCases == 0}>Clear</button>
          </div>
        </div>
        <div className="parameter-panel">
          {testCases && testCases.length > 0 ? (
            testCases.map((item) => {
              return (
                <div key={item.id} >
                  <div className="case-title">Case {item.caseNumber}</div>
                  <div className="data-panel">
                    <div className="field">
                      <label>Age</label>
                      <input type="text" value={item.age} onChange={(e)=>hanldeInputChange(item.id,e,'age')}></input>
                    </div>
                    <div className="field">
                      <label>Floor</label>
                      <input type="text" value={item.floor} onChange={(e)=>hanldeInputChange(item.id,e,'floor')}></input>
                    </div>
                    <div className="field">
                      <label>Unit</label>
                      <input type="text" value={item.unit} onChange={(e)=>hanldeInputChange(item.id,e,'unit')}></input>
                    </div>
                    <div className="field">
                      <label>Postal Code</label>
                      <input type="text" value={item.postalCode} onChange={(e)=>hanldeInputChange(item.id,e,'postalCode')}></input>
                    </div>
                    <div className="field">
                      <label>Income Per Month</label>
                      <input type="text" value={item.incomePerMonth} onChange={(e)=>hanldeInputChange(item.id,e,'income')}></input>
                    </div>
                    <div className="field">
                      <label className="label-checkbox">
                        <input type="checkbox" defaultChecked={item.isCitizen} onChange={(e)=>hanldeInputChange(item.id,e,'isCitizen')} />
                        Is Citizen
                      </label>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Enter the number of test cases to proceed further</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
