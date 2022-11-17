import React from 'react';
import '../styles/positionFilter.css';
import searchTagsText from '../mock/searchTags.json';
import styled from 'styled-components';

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
          <TagBtn key={idx} bgCol={tag.bgCol}>
            <span>{tag.text}</span>
            <img src={tag.img} alt={tag.text} />
          </TagBtn>
        ))}
      </div>
    </div>
  );
};

const TagBtn = styled.button`
  background-color: ${(props) => props.bgCol};
  height: 32px;
  border-radius: 32px;
  padding: 8px 14px;
  /* padding: 8px 25px 8px 14px; ? img 크기까지 포함해서 오른쪽 패딩 조정 */
  box-sizing: border-box;
  margin-right: 8px;
  color: #333333;
  font-size: 13px;
  display: flex;
  align-items: center;
  white-space: nowrap; /* 이거 안주면 텍스트에 자동개행 생김 */
  /* word-break: nowrap; */
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid rgba(51, 102, 255, 0.3);
  }
  img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }
`;

export default PositionFilter;
