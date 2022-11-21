import React from 'react';
import 'styles/insightItem.css';
import { Link } from 'react-router-dom';
import ContentThumbnail from 'components/ContentThumbnail';
import ContentTitle from 'components/ContentTitle';

export default function InsightItem({
  img,
  title,
  desc,
  platformIcon,
  author,
}) {
  return (
    <li>
      <Link>
        <ContentThumbnail>
          <img src={img} alt="콘텐츠 썸네일" />
        </ContentThumbnail>
        <ContentTitle>{title}</ContentTitle>
        <div className="section-contents__desc">{desc}</div>
        <div className="section-contents__writer">
          <button className="section-contents__writer__button">
            <img src={platformIcon} alt="유튜브 버튼" />
          </button>
          <span className="section-contents__writer__title">{author}</span>
        </div>
      </Link>
    </li>
  );
}
