import React, { useState } from 'react';
import ContentThumbnail from './ContentThumbnail';
import ContentTitle from './ContentTitle';
import '../styles/vodItem.css';

const VodItem = ({ img, playtime, author, title, desc }) => {
  return (
    <li>
      <a href="#">
        <div className="thumbnail-playtime-wrap">
          <ContentThumbnail src={img} />
          <span className="section-contents__playtime">{playtime}</span>
        </div>
        <div className="section-contents__author">{author}</div>
        <ContentTitle text={title} />
        <div className="section-contents__desc section-contents__desc--1line">
          {desc}
        </div>
      </a>
    </li>
  );
};

export default VodItem;
