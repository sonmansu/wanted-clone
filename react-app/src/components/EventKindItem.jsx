import React from 'react';
import '../styles/eventKindItem.css';

const EventKindItem = ({ kind }) => {
  const eventKindClass = {
    온라인: 'section-contents__kinds__span--online',
    네트워킹: 'section-contents__kinds__span--network',
    아티클: 'section-contents__kinds__span--article',
  };

  return (
    <span className={`section-contents__kinds__span ${eventKindClass[kind]}`}>
      {kind === '온라인' && <i className="xi-central-signal"></i>}
      {kind}
    </span>
  );
};

export default EventKindItem;
