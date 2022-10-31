import React from 'react';
import '../styles/btnCircle.css';

const BtnCircle = ({ direction }) => {
  if (direction === 'left') {
    return (
      <div class="btn-gradient-bg">
        <button class="arrow-btn-bg">
          <img
            src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
            alt="left button"
          />
        </button>
      </div>
    );
  } else {
    return (
      <div class="btn-gradient-bg btn-gradient-bg--right">
        <button class="arrow-btn-bg arrow-btn-bg--right">
          <img
            class="rotate-180"
            src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
            alt="right button"
          />
        </button>
      </div>
    );
  }
};

export default BtnCircle;
