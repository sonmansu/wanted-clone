import React from 'react';
import '../styles/contentThumbnail.css';

const ContentThumbnail = ({ src }) => {
  return (
    <div class="section-contents__thumb">
      <img src={src} alt="콘텐츠 썸네일" />
    </div>
  );
};

export default ContentThumbnail;
