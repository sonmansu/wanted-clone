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
          <ContentThumbnail src={img} />
          <button
            type
            className="section-contents__bookmark-icon"
            onClick={() => dispatch(toggle(id))}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                fill="white"
              ></path>
              <path
                d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                {...(isBookmark
                  ? { fill: '#36f' }
                  : { fill: 'black', fillOpacity: '0.25' })}
              ></path>
            </svg>
          </button>
        </div>

        <div className="position-body">
          <ContentTitle text={position} />
          <p className="position-body__corp-name">{corp}</p>
          <ResponseLevelLabel text={response} />
          <p className="position-body__locate">{location}</p>
          <p className="position-body__reward">
            채용보상금 {priceToString(reward)}원
          </p>
        </div>
      </Link>
    </li>
  );
}
