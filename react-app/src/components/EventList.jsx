import React, { useState } from 'react';
import eventText from '../mock/events.json';
import EventItem from './EventItem';
import '../styles/sectionBody.css';

const EventList = () => {
  const [events, setEvents] = useState(eventText);

  const eventList = events.map((event) => (
    <EventItem img={event.img} kinds={event.kind} title={event.title} />
  ));

  return (
    <ul className="section-contents__ul section-contents__ul--big">
      {eventList}
    </ul>
  );
};

export default EventList;
