import React, { useState } from 'react';
import ContentThumbnail from './ContentThumbnail';
import ContentTitle from './ContentTitle';
import '../styles/articleItem.css';

const ArticleItem = ({ img, title, tag }) => {
  return (
    <li>
      <a href="#">
        <ContentThumbnail src={img} />
        <ContentTitle text={title} />
        <div className="section-contents__tags">{tag}</div>
      </a>
    </li>
  );
};

export default ArticleItem;
