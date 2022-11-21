import React from 'react';
import styled, { css } from 'styled-components';

const ResponseLevelLabel = styled.span`
  height: 19px;
  line-height: 19px;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid #36f;
  color: #36f;
  padding: 0px 5px;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;

  ${(props) => {
    if (props.children[1] === '매우 높음')
      return css`
        border: 1px solid #00aead;
        color: #00aead;
      `;
  }}
`;

export default ResponseLevelLabel;
