import WantedAiIcon from 'assets/icons/WantedAiIcon';
import AIIcon from 'assets/icons/AIIcon';
import QuestionMarkIcon from 'assets/icons/QuestionMarkIcon';
import LineBanner from 'components/LineBanner';
import SlideBanner from 'components/SlideBanner';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/recruitPage.css';
import SvgIcon from 'assets/icons/SvgIcon';

export default function RecruitPage() {
  return (
    <div>
      <SlideBanner />
      <LineBanner kind={'seek-job'} />
      <article className="article-ai-job">
        <div className="article-ai-job__top">
          <AIIcon />
          <WantedAiIcon sizeclassName="wanted-ai-logo-big" />
        </div>
        <div className="article-ai-job__title">
          <WantedAiIcon sizeclassName="wanted-ai-logo-small" />
          <span className="article-ai-job__title__text">
            가 제안하는 합격률 높은 포지션
          </span>
          <button>
            <QuestionMarkIcon size={24} />
          </button>
        </div>
        <h3 className="article-ai-job__text">
          회원가입하면 포지션을 추천해드려요.
        </h3>
        <div className="article-ai-job__start-btn">지금 시작하기</div>
      </article>
      <article className="article-career">
        <div className="article-career-wrap">
          <div className="article-career-left">
            <p className="article-career-left__title">
              입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!
            </p>
            <div className="article-career-left__check-btn">지금 확인하기</div>
          </div>
          <div className="article-career-right-bg-img"></div>
        </div>
      </article>
      <nav className="nav-shortcut">
        <ul className="nav-shortcut__list">
          <li className="nav-shortcut__profile-item align-center">
            <button className="align-center">
              <SvgIcon size={28} icon="user" />
              <span className="nav-shortcut__item-text">내 프로필</span>
            </button>
          </li>
          <li className="nav-shortcut__match-item align-center">
            <Link className="align-center">
              <SvgIcon size={28} icon="building" />
              <span className="nav-shortcut__item-text">매치업</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
