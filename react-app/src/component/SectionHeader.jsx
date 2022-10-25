import React from 'react';
import BtnCircle from './BtnCircle';
import '../styles/sectionHeader.css';

const SectionHeader = (props) => {
  const { title, subtitle } = props;

  return (
    <div class="section-wrap-top">
      <BtnCircle direction="left" />
      <div class="section-header">
        <h2 class="section-title">{title}</h2>
        <div class="section-subtitle">
          <span>{subtitle}</span>
          <img
            class="section-subtitle__img rotate-180"
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
