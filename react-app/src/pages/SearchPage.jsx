import React from 'react';
import '../styles/searchPage.css';
import { useSearchParams } from 'react-router-dom';
import PositionFilter from '../components/PositionFilter';
import PositionList from '../components/PositionList';
import { useState } from 'react';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('query');
  const [positionCnt, setPositionCnt] = useState(0);
  return (
    <div>
      <div className="search-keyword-box">
        <button className="search-keyword-text">{searchKeyword}</button>
      </div>
      <div className="searched-background">
        <div className="searched-wrapper">
          <div className="position-row">
            <h2 className="position-text">
              포지션<span>{positionCnt}</span>
            </h2>
          </div>
          <PositionFilter />
          <PositionList
            searchKeyword={searchKeyword}
            setPositionCnt={setPositionCnt}
          />
          {positionCnt === 0 && (
            <div className="searched-position-none-wrapper">
              <p>바로 지원할 곳이 없다면?</p>
              <br />
              <p>매치업에 등록하고 면접제안 받으세요!</p>
              <button className="register-btn">매치업에 등록하기</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
