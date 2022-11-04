import React from 'react';
import '../styles/btnCircle.css';

const BtnCircle = ({ direction, onClick, style }) => {
  if (direction === 'left') {
    return (
      <div className="btn-gradient-bg" style={style}>
        <button className="arrow-btn-bg" onClick={onClick}>
          <img
            src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
            alt="left button"
          />
        </button>
      </div>
    );
  } else {
    return (
      <div className="btn-gradient-bg btn-gradient-bg--right" style={style}>
        <button className="arrow-btn-bg arrow-btn-bg--right" onClick={onClick}>
          <img
            className="rotate-180"
            src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
            alt="right button"
          />
        </button>
      </div>
    );
  }
};

export default BtnCircle;
