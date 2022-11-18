import React, { useState } from 'react';
import ContentThumbnail from './ContentThumbnail';
import ContentTitle from './ContentTitle';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import 'styles/eventItem.css';

const EventItem = ({ img, kinds, title }) => {
  return (
    <li>
      <Link>
        <ContentThumbnail big>
          <img src={img} alt="콘텐츠 썸네일" />
        </ContentThumbnail>
        <div className="event-kinds-box">
          {kinds.map((kind) => (
            <EventKind>
              {kind === '온라인' && <i className="xi-central-signal" />}
              {kind}
            </EventKind>
          ))}
        </div>
        <ContentTitle>{title}</ContentTitle>
      </Link>
    </li>
  );
};

const EventKind = styled.span`
  height: 20px;
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  padding: 0 6px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: white;
  margin-right: 5px;

  i {
    margin-right: 4px;
  }

  ${(props) => {
    // console.log(props.children);
    if (props.children[1] === '온라인') {
      return css`
        background-color: black;
        color: white;
      `;
    } else if (props.children[1] === '네트워킹') {
      return css`
        border-color: #a149e4;
        color: #a149e4;
      `;
    } else if (props.children[1] === '아티클') {
      return css`
        border-color: #ff9100;
        color: #ff9100;
      `;
    }
  }}
`;

export default EventItem;
