import React, { useState } from 'react';
import ContentThumbnail from '../component/ContentThumbnail';
import ContentTitle from '../component/ContentTitle';
import EventKindItem from './EventKindItem';
import '../styles/eventItem.css';

const EventItem = ({ img, kinds, title }) => {
  // console.log(kinds);
  const eventKinds = kinds.map((kind) => <EventKindItem kind={kind} />);
  return (
    <li>
      <a href="#">
        <ContentThumbnail src={img} is2Col="true" />
        <div className="event-kinds-box">{eventKinds}</div>
        <ContentTitle text={title} />
      </a>
    </li>
  );
};

export default EventItem;
