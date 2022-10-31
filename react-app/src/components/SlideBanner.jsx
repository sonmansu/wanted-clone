import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderListText from '../mock/sliderList.json';
import SliderItem from './SliderItem';
import '../styles/slideBanner.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: 'block', background: 'red' }}
    //   onClick={onClick}
    // />
    <button
      className="section-slider__btn section-slider__btn--right"
      onClick={onClick}
    >
      <img
        class="rotate-180"
        src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
        alt="left button"
      />
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className="section-slider__btn" onClick={onClick}>
      <img
        src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
        alt="right button"
      />
    </button>
  );
}

export default class SlideBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderList: sliderListText,
    };
  }

  render() {
    const settings = {
      centerMode: true,
      centerPadding: 0,
      centeredSlides: true,
      variableWidth: true,
      // slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
      infinite: true, //무한 반복 옵션
      slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
      speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows: true, // 옆으로 이동하는 화살표 표시 여부
      //   dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
      // autoplay: true, // 자동 스크롤 사용 여부
      autoplaySpeed: 5000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      vertical: false, // 세로 방향 슬라이드 옵션
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div>
        <section className="section-slider">
          <Slider {...settings} className="section-slider__list">
            {this.state.sliderList.map((item, idx) => (
              <SliderItem
                key={idx}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </Slider>
        </section>
      </div>
    );
  }
}
