import React from 'react';
import Section from '../components/Section';
import VodList from '../components/VodList';
import LineBanner from '../components/LineBanner';
import EventList from '../components/EventList';
import SlideBanner from '../components/SlideBanner';
import '../styles/homePage.css';
import ListContainer from '../components/ListContainer2';
import QuestionMarkIcon from 'assets/icons/QuestionMarkIcon';
import insightArr from 'mock/insights.json';
import { Link } from 'react-router-dom';
import InsightCategoriesSlider from 'components/InsightCategoriesSlider';
import InsightItem from 'components/ListItems/InsightItem';
import Icon from 'assets/icons/SvgIcon';

const HomePage = () => {
  return (
    <div>
      <SlideBanner />
      <section>
        <div class="section-wrap">
          <div class="section-title section-title--button">
            <h2 class="section-title">나에게 필요한 커리어 인사이트</h2>
            <button>
              <QuestionMarkIcon size={24} />
            </button>
          </div>
          <div class="insight-categories">
            <div class="insight-categories__left">
              <ul class="insight-categories__ul">
                <InsightCategoriesSlider />
              </ul>
            </div>
            <button class="insight-categories__more-btn">
              <img
                src="https://img.icons8.com/windows/32/000000/more.png"
                alt="더보기 버튼"
              />
            </button>
          </div>
          <div class="section-contents">
            <ul class="section-contents__ul">
              {insightArr.map((obj) => (
                <InsightItem
                  img={obj.img}
                  title={obj.title}
                  desc={obj.desc}
                  platformIcon={obj.platformIcon}
                  author={obj.author}
                />
              ))}
            </ul>
            <div class="insight-more-wrap">
              <div class="insight-more-btn">
                <span>더 많은 콘텐츠 보기</span>
                <img
                  class="insight-more-btn__img"
                  src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
                  alt="더 많은 콘텐츠 보기 버튼"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="3분만에 읽는 Wanted+ 아티클" subtitle="아티클 전체보기">
        <ListContainer listType="article" />
      </Section>
      <div className="divider"></div>
      <Section title="직장인을 위한 Wanted+ VOD" subtitle="VOD 전체보기">
        <VodList />
      </Section>
      <LineBanner kind="recommend" />
      <Section
        title="커리어 성장을 위한 맞춤 이벤트"
        subtitle="이벤트 전체보기"
      >
        <EventList />
      </Section>
      <section class="section-subscribe">
        <div class="section-wrap section-subscribe-wrap">
          <div class="section-subscribe-left">
            <p class="section-subscribe__text-big">
              <span class="bold">wanted +</span>구독해야 하는 이유
            </p>
            <p class="section-subscribe__text-small">
              구독자의 서류합격률이 비구독자보다 1.5배 높아요!
            </p>
            <div class="section-subscribe__btn">
              <i class="xi-check"></i>
              <span>첫 구독 0원 신청하기</span>
            </div>
          </div>
          <div class="section-subscribe__bg-img"></div>
        </div>
      </section>
      <section>
        <div class="section-wrap">
          <h2 class="section-title">채용 정보를 찾고 계셨나요?</h2>
          <ul class="section-recruit-ul">
            <li class="section-recruit-ul__li">
              <Link>
                <div class="section-recruit-ul__top">
                  <Icon size={32} icon="magnifyingGlass" />
                </div>
                <div class="section-recruit-ul__bottom">
                  <span class="section-recruit-ul__text">채용공고</span>
                  <Icon size={16} icon="arrowRight" />
                </div>
              </Link>
            </li>
            <li class="section-recruit-ul__li">
              <Link>
                <div class="section-recruit-ul__top">
                  <Icon size={32} icon="user" />
                </div>
                <div class="section-recruit-ul__bottom">
                  <span class="section-recruit-ul__text">내 프로필</span>
                  <Icon size={16} icon="arrowRight" />
                </div>
              </Link>
            </li>
            <li class="section-recruit-ul__li">
              <Link>
                <div class="section-recruit-ul__top">
                  <Icon size={32} icon="building" />
                </div>
                <div class="section-recruit-ul__bottom">
                  <span class="section-recruit-ul__text">매치업</span>
                  <Icon size={16} icon="arrowRight" />
                </div>
              </Link>
            </li>
            <li class="section-recruit-ul__li">
              <Link>
                <div class="section-recruit-ul__top">
                  <Icon size={32} icon="filter" />
                </div>
                <div class="section-recruit-ul__bottom">
                  <span class="section-recruit-ul__text">직군별 연봉</span>
                  <Icon size={16} icon="arrowRight" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
