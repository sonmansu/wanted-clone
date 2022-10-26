import React from 'react';
import '../styles/contentThumbnail.css';

const ContentThumbnail = ({ src, is2Col }) => {
  return (
    <div
      className={
        is2Col
          ? 'section-contents__thumb section-contents__thumb--big'
          : 'section-contents__thumb'
      }
    >
      <img src={src} alt="콘텐츠 썸네일" />
    </div>
  );
};

export default ContentThumbnail;
