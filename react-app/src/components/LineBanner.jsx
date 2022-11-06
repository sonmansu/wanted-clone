import React from 'react';
import '../styles/lineBanner.css';
import Icon from 'assets/icons/SvgIcon';

const LineBanner = ({ kind }) => {
  if (kind === 'recommend')
    return (
      <div className="line-banner-btn">
        <span>직군/직무를 입력하면 관련 콘텐츠를 추천해드려요. 👀</span>
        <i className="xi-angle-right-thin"></i>
      </div>
    );
  else if (kind === 'seek-job')
    return (
      <div className="line-banner-btn">
        <Icon size={28} color={'rgb(255, 255, 255)'} icon="magnifyingGlass" />
        <span className="line-banner-btn__text">채용 중인 포지션 보러가기</span>
      </div>
    );
};

export default LineBanner;
