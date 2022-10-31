import React from 'react';
import '../styles/lineBanner.css';

const LineBanner = ({ kind }) => {
  if (kind === 'recommend')
    return (
      <div className="line-banner-btn">
        <span>직군/직무를 입력하면 관련 콘텐츠를 추천해드려요. 👀</span>
        <i class="xi-angle-right-thin"></i>
      </div>
    );
  else if (kind === 'seek-job')
    return (
      <div className="line-banner-btn">
        <img
          className="line-banner-btn__img"
          src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/96/000000/external-magnifying-glass-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
          alt="돋보기 버튼"
        />
        <span>채용 중인 포지션 보러가기</span>
      </div>
    );
};

export default LineBanner;
