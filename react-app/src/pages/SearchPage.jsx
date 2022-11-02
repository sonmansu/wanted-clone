import React from 'react';
import '../styles/searchPage.css';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('query');
  return (
    <div>
      <div className="search-keyword-box">
        <button className="search-keyword-text">{searchKeyword}</button>
      </div>
      <div className="searched-box">
        <div className="position-row">
          <h2 className="position-text">
            포지션<span>0</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
