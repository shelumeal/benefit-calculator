

import SearchResultProp from '../../models/SearchResultProp';
import './SearchResult.scss'

const SearchResult: React.FC<SearchResultProp> = ({benefits}) => {
    return (
        <div className='search-result'>
            <div className='panel'>
                {
                    benefits && benefits.length >0?
                    benefits.map(item=>{
                        return <div className='benefit-card' key={item.case}>
                            <label>Case Number {item.case} :</label>
                            <label className='benefit-name'>{item.benefit}</label>
                        </div>
                    })
                    :null
                }
            </div>
        </div>
    );
  };
  
  export default SearchResult;