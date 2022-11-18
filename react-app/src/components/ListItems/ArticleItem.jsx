import React, { useState } from 'react';
import ContentThumbnail from '../ContentThumbnail';
import ContentTitle from '../ContentTitle';
import 'styles/articleItem.css';
import { Link } from 'react-router-dom';

const ArticleItem = ({ img, title, tag }) => {
  return (
    <li>
      <Link>
        <ContentThumbnail>
          <img src={img} alt="콘텐츠 썸네일" />
        </ContentThumbnail>
        <ContentTitle text={title} />
        <div className="section-contents__tags">{tag}</div>
      </Link>
    </li>
  );
};

export default ArticleItem;
