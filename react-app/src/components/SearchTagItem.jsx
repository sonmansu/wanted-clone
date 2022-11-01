import React from 'react';
import '../styles/searchTagItem.css';

const SearchTagItem = ({ text, img, bgCol }) => {
  return (
    <div>
      <button className="search-tag" style={{ backgroundColor: bgCol }}>
        <span className="search-tag__text">{text}</span>
        <img className="search-tag__img" src={img} alt={text} />
      </button>
    </div>
  );
};

export default SearchTagItem;
