import React from 'react';
import styled, { css } from 'styled-components';

const ContentThumbnail = styled.div`
  /* width: 240px; */
  width: 100%;
  height: 168px;
  margin-bottom: 17px;
  padding-bottom: 0;
  /* background-color: black; */
  background: black;
  outline: solid 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) =>
    props.big &&
    css`
      height: 273px;
      margin-bottom: 8px;
    `}
`;

export default ContentThumbnail;
