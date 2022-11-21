import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentThumbnail from './ContentThumbnail';
import ContentTitle from './ContentTitle';
import { Link } from 'react-router-dom';
import { priceToString } from '../utils/priceToString';
import ResponseLevelLabel from './ResponseLevelLabel';
import { add, remove, toggle } from '../features/bookmark/bookmarkSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import BookmarkBorderBlueIcon from 'assets/icons/BookmarkBorderBlueIcon';
import BookmarkBorderWhiteIcon from 'assets/icons/BookmarkBorderWhiteIcon';

export default function PositionItem({
  id,
  img,
  position,
  response,
  corp,
  location,
  reward,
}) {
  const [isBookmark, setIsBookmark] = useState(false);
  const dispatch = useDispatch();
  const bookmarkIds = useSelector((state) => state.bookmark.positionId);
  useEffect(() => {
    if (bookmarkIds.includes(id)) setIsBookmark(true);
    else setIsBookmark(false);
  }, [bookmarkIds, id]);

  return (
    <li>
      <Link to={`/jobDetail/${id}`}>
        <div className="thumbnail-position-wrap">
          <ContentThumbnail>
            <img src={img} alt="콘텐츠 썸네일" />
          </ContentThumbnail>
          <button
            type
            className="section-contents__bookmark-icon"
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggle(id));
            }}
          >
            <BookmarkBorderWhiteIcon isBookmark={isBookmark} />
          </button>
        </div>

        <div className="position-body">
          <ContentTitle>{position}</ContentTitle>
          <p className="position-body__corp-name">{corp}</p>
          <ResponseLevelLabel>응답률 {response}</ResponseLevelLabel>
          <p className="position-body__locate">{location}</p>
          <p className="position-body__reward">
            채용보상금 {priceToString(reward)}원
          </p>
        </div>
      </Link>
    </li>
  );
}
