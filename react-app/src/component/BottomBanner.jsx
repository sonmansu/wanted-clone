import React from 'react';
import '../styles/bottomBanner.css';

const BottomBanner = ({ icon, text }) => {
  console.log(icon, text);
  return (
    <button class="bottom-banner-btn">
      <div class="bottom-banner-btn-wrap">
        <div class="bottom-banner-btn-left-box">
          {icon && (
            <i class="bottom-banner-btn__icon icon-joblist_bottombar_reward"></i>
          )}
          <span class="bottom-banner-btn__text">{text}</span>
        </div>
        <div class="bottom-banner-btn__more-btn">더 알아보기</div>
      </div>
    </button>
  );
};

// BottomBanner.defaultProp = {
//     icon: null,
// };

export default BottomBanner;
