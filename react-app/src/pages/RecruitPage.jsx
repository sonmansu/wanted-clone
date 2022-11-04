import WantedAiIcon from 'assets/icons/WantedAiIcon';
import AIIcon from 'assets/icons/AIIcon';
import BuildingIcon from 'assets/icons/BuildingIcon';
import QuestionMarkIcon from 'assets/icons/QuestionMarkIcon';
import UserIcon from 'assets/icons/UserIcon';
import LineBanner from 'components/LineBanner';
import SlideBanner from 'components/SlideBanner';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/recruitPage.css';

export default function RecruitPage() {
  return (
    <div>
      <SlideBanner />
      <LineBanner kind={'seek-job'} />
      <article class="article-ai-job">
        <div class="article-ai-job__top">
          <AIIcon />
          <WantedAiIcon sizeClass="wanted-ai-logo-big" />
        </div>
        <div class="article-ai-job__title">
          <WantedAiIcon sizeClass="wanted-ai-logo-small" />
          <span class="article-ai-job__title__text">
            가 제안하는 합격률 높은 포지션
          </span>
          <button>
            <QuestionMarkIcon size={24} />
          </button>
        </div>
        <h3 class="article-ai-job__text">
          회원가입하면 포지션을 추천해드려요.
        </h3>
        <div class="article-ai-job__start-btn">지금 시작하기</div>
      </article>
      <article class="article-career">
        <div class="article-career-wrap">
          <div class="article-career-left">
            <p class="article-career-left__title">
              입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!
            </p>
            <div class="article-career-left__check-btn">지금 확인하기</div>
          </div>
          <div class="article-career-right-bg-img"></div>
        </div>
      </article>
      <nav class="nav-shortcut">
        <ul class="nav-shortcut__list">
          <li class="nav-shortcut__profile-item align-center">
            <button class="align-center">
              <UserIcon size={28} />
              <span class="nav-shortcut__item-text">내 프로필</span>
            </button>
          </li>
          <li class="nav-shortcut__match-item align-center">
            <Link class="align-center">
              <BuildingIcon size={28} />
              <span class="nav-shortcut__item-text">매치업</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
