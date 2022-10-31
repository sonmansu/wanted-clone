import React from 'react';
import '../styles/sliderItem.css';

const SliderItem = ({ img, title, desc }) => {
  return (
    <div className="section-slider__item">
      <img className="section-slider__img" src={img} alt="" />
      <div className="section-slider__info">
        <h2 className="section-slider__info__title">{title}</h2>
        <h3 className="section-slider__info__desc">{desc}</h3>
        <div className="divider divider--info"></div>
        <button className="section-slider__info__go-btn">
          <span className="section-slider__info__go-btn__text">바로가기</span>
          <img
            className="section-slider__info__go-btn__img rotate-180"
            src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
            alt="right button"
          />
        </button>
      </div>
    </div>
  );
};

export default SliderItem;
