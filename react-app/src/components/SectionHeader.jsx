import React from 'react';
import BtnCircle from './BtnCircle';
import '../styles/sectionHeader.css';

const SectionHeader = (props) => {
  const { title, subtitle } = props;

  return (
    <div className="section-header-wrap">
      <BtnCircle direction="left" />
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="section-subtitle">
          <span>{subtitle}</span>
          <img
            className="section-subtitle__img rotate-180"
            src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
            alt="right button"
          />
        </div>
      </div>
      <BtnCircle direction="right" />
    </div>
  );
};

export default SectionHeader;
