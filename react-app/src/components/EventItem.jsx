import React, { useState } from 'react';
import ContentThumbnail from './ContentThumbnail';
import ContentTitle from './ContentTitle';
import EventKindItem from './EventKindItem';
import { Link } from 'react-router-dom';
import 'styles/eventItem.css';

const EventItem = ({ img, kinds, title }) => {
  // console.log(kinds);
  const eventKinds = kinds.map((kind) => <EventKindItem kind={kind} />);
  return (
    <li>
      <Link>
        <ContentThumbnail big>
          <img src={img} alt="콘텐츠 썸네일" />
        </ContentThumbnail>
        <div className="event-kinds-box">{eventKinds}</div>
        <ContentTitle text={title} />
      </Link>
    </li>
  );
};

export default EventItem;
