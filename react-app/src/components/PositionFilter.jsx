import React from 'react';
import '../styles/positionFilter.css';
import SearchTagItem from '../components/SearchTagItem';
import searchTagsText from '../mock/searchTags.json';

const PositionFilter = () => {
  return (
    <div>
      <div className="search-filter-box">
        <div>
          <button className="search-filter-btn">
            <span className="search-filter-btn__text">지역</span>
            <span className="search-filter-btn__selected-text">서울</span>
          </button>
          <button className="search-filter-btn search-filter-btn--padding-right">
            <span className="search-filter-btn__text">경력</span>
            <span className="search-filter-btn__selected-text">전체</span>
            <span className="material-icons">arrow_drop_down</span>
          </button>
          <button className="search-filter-btn search-filter-btn--padding-right">
            <span className="search-filter-btn__text">기술스택</span>
            <span className="material-icons">arrow_drop_down</span>
          </button>
        </div>
        <button className="search-filter-btn search-filter-btn--padding-right">
          <span className="search-filter-btn__text">응답률순</span>
          <span className="material-icons search-filter-btn__dropdown">
            arrow_drop_down
          </span>
        </button>
      </div>
      <div className="divider divider--margin"></div>
      <div className="search-tag-slider-box">
        {searchTagsText.map((tag, idx) => (
          <SearchTagItem
            key={idx}
            text={tag.text}
            img={tag.img}
            bgCol={tag.bgCol}
          />
        ))}
      </div>
    </div>
  );
};

export default PositionFilter;
