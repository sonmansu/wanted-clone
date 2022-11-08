import React from 'react';
import '../styles/blueRadiusBtn.css';

export default function BlueRadiusBtn({ text, onClick, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {/* <span className="material-icons-round">mail_outline</span> */}
      <span className="btn__text">{text}</span>
    </button>
  );
}
