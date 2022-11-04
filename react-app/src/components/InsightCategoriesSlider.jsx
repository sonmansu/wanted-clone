import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BtnCircle from './BtnCircle';
import '../styles/insightCategoriesSlider.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BtnCircle
      direction={'right'}
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '0',
      }}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BtnCircle
      direction={'left'}
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '0',
        zIndex: '1',
      }}
    />
  );
}
export default class InsightCategoriesSlider extends Component {
  render() {
    const insightCategories = [
      '회사생활',
      'IT/기술',
      '조직문화',
      '라이프스타일',
      '커리어고민',
      '인간관계',
      '리더십',
      '취업/이직',
      '노무',
      '경영/전략',
      '브랜딩',
      '서비스기획',
      '디자인',
      '데이터',
      'HR',
      'UX/UI',
      '마케팅',
      '콘텐츠 제작',
      'MD',
      '개발',
    ];
    const settings = {
      className: 'slider variable-width',
      // centerMode: true,
      variableWidth: true,
      infinite: false,
      // slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
      // slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll: 3, //스크롤 한번에 움직일 컨텐츠 개수
      arrows: true, // 옆으로 이동하는 화살표 표시 여부
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Slider {...settings} className="section-slider__list">
        {insightCategories.map((item) => (
          <li class="insight-categories__item">
            <button class="insight-categories__text">{item}</button>
          </li>
        ))}
      </Slider>
    );
  }
}
