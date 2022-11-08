import SvgIcon from 'assets/icons/SvgIcon';
import React from 'react';
import '../styles/btnCircle.css';

const BtnCircle = ({ direction, onClick, style }) => {
  if (direction === 'left') {
    return (
      <div className="btn-gradient-bg" style={style}>
        <button className="arrow-btn-bg" onClick={onClick}>
          <SvgIcon size={18} icon="arrowLeft" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="btn-gradient-bg btn-gradient-bg--right" style={style}>
        <button className="arrow-btn-bg" onClick={onClick}>
          <SvgIcon size={18} icon="arrowRight" />
        </button>
      </div>
    );
  }
};

export default BtnCircle;
