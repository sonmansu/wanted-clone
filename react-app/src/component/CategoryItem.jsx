import React from 'react';
import '../styles/categoryItem.css';

const CategoryItem = ({ text }) => {
  return (
    <li className="dropdown-sub-category__item">
      <a href="#" className="dropdown-sub-category__link">
        {text}
      </a>
      <span className="dropdown-sub-category__arrow-icon material-icons-round md-16">
        chevron_right
      </span>
    </li>
  );
};

export default CategoryItem;
