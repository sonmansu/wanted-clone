import React from 'react';

const SliderItem = () => {
  return (
    <div className="section-slider__item">
      <img
        className="section-slider__img"
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1849%2Fae30cf64.jpg&w=1060&q=100"
        alt=""
      />
      <div className="section-slider__info">
        <h2 className="section-slider__info__title">
          스타트업에 코칭 리더십이 필요한 이유
        </h2>
        <h3 className="section-slider__info__desc">
          60명의 레퍼런스를 해석하자!
        </h3>
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
