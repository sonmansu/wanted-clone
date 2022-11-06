import React from 'react';
import '../styles/bottomBanner.css';

const BottomBanner = ({ icon, text }) => {
  console.log(icon, text);
  return (
    <button className="bottom-banner-btn">
      <div className="bottom-banner-btn-wrap">
        <div className="bottom-banner-btn-left-box">
          {icon && (
            <i className="bottom-banner-btn__icon icon-joblist_bottombar_reward"></i>
          )}
          <span className="bottom-banner-btn__text">{text}</span>
        </div>
        <div className="bottom-banner-btn__more-btn">더 알아보기</div>
      </div>
    </button>
  );
};

// BottomBanner.defaultProp = {
//     icon: null,
// };

export default BottomBanner;
