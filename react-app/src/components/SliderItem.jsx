import React from 'react';
import '../styles/sliderItem.css';

const SliderItem = ({ img, title, desc }) => {
  return (
    <div className="item-wrapper">
      <img className="item__img" src={img} alt="" />
      <div className="item-info-wrapper">
        <h2 className="item-info__title">{title}</h2>
        <h3 className="item-info__desc">{desc}</h3>
        <div className="item-info__divider"></div>
        <button className="item-info__go-btn">
          <span className="item-info__go-btn__text">바로가기</span>
          <img
            className="item-info__go-btn__img rotate-180"
            src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
            alt="right button"
          />
        </button>
      </div>
    </div>
  );
};

export default SliderItem;
