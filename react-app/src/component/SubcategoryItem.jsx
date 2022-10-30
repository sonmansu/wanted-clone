import React from 'react';
import '../styles/subcategoryItem.css';
import { Link } from 'react-router-dom';

const SubcategoryItem = ({ mainId, subId, text }) => {
  return (
    <li className="dropdown-sub-category__item">
      <Link
        to={`/jobList/${mainId}/${subId}`}
        className="dropdown-sub-category__link"
      >
        {text}
      </Link>
      <span className="dropdown-sub-category__arrow-icon material-icons-round md-16">
        chevron_right
      </span>
    </li>
  );
};

export default SubcategoryItem;
