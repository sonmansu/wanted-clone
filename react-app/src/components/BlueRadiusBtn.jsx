import React from 'react';
import styled, { css } from 'styled-components';

const BlueRadiusBtn = styled.button`
  width: 100%;
  height: ${(props) => props.height || '50px'};
  border-radius: 27px;
  background-color: #36f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.marginTop || '14px'};

  span {
    margin-left: 7px;
    font-size: 16px;
    font-weight: 600;
  }
  ${(props) => {
    // console.log(props);
    return (
      props.unactivated &&
      css`
        color: #cacaca;
        background-color: #f2f4f7;
        cursor: not-allowed;
      `
    );
  }}
  ${(props) => {
    return (
      props.bgWhite &&
      css`
        background-color: white;
        border: 1px solid #36f;
        color: #36f;
      `
    );
  }}
`;

export default BlueRadiusBtn;

// export default function BlueRadiusBtn({ text, onClick, className }) {
//   return (
//     <button className={`btn ${className}`} onClick={onClick}>
{
  /* <span className="material-icons-round">mail_outline</span> */
}
//       <span className="btn__text">{text}</span>
//     </button>
//   );
// }
