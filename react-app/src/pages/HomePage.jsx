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
import SvgIcon from 'assets/icons/SvgIcon';

const HomePage = () => {
  return (
    <div>
      <SlideBanner />
      <section>
        <div className="section-wrap">
          <div className="section-title section-title--button">
            <h2 className="section-title">나에게 필요한 커리어 인사이트</h2>
            <button>
              <QuestionMarkIcon size={24} />
            </button>
          </div>
          <div className="insight-categories">
            <div className="insight-categories__left">
              <ul className="insight-categories__ul">
                <InsightCategoriesSlider />
              </ul>
            </div>
            <button className="insight-categories__more-btn">
              <img
                src="https://img.icons8.com/windows/32/000000/more.png"
                alt="더보기 버튼"
              />
            </button>
          </div>
          <div className="section-contents">
            <ul className="section-contents__ul">
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
            <div className="insight-more-wrap">
              <div className="insight-more-btn">
                <span>더 많은 콘텐츠 보기</span>
                <img
                  className="insight-more-btn__img"
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
      <section className="section-subscribe">
        <div className="section-wrap section-subscribe-wrap">
          <div className="section-subscribe-left">
            <p className="section-subscribe__text-big">
              <span className="bold">wanted +</span>구독해야 하는 이유
            </p>
            <p className="section-subscribe__text-small">
              구독자의 서류합격률이 비구독자보다 1.5배 높아요!
            </p>
            <div className="section-subscribe__btn">
              <i className="xi-check"></i>
              <span>첫 구독 0원 신청하기</span>
            </div>
          </div>
          <div className="section-subscribe__bg-img"></div>
        </div>
      </section>
      <section>
        <div className="section-wrap">
          <h2 className="section-title">채용 정보를 찾고 계셨나요?</h2>
          <ul className="section-recruit-ul">
            <li className="section-recruit-ul__li">
              <Link>
                <div className="section-recruit-ul__top">
                  <SvgIcon size={32} icon="magnifyingGlass" />
                </div>
                <div className="section-recruit-ul__bottom">
                  <span className="section-recruit-ul__text">채용공고</span>
                  <SvgIcon size={16} icon="arrowRight" />
                </div>
              </Link>
            </li>
            <li className="section-recruit-ul__li">
              <Link>
                <div className="section-recruit-ul__top">
                  <SvgIcon size={32} icon="user" />
                </div>
                <div className="section-recruit-ul__bottom">
                  <span className="section-recruit-ul__text">내 프로필</span>
                  <SvgIcon size={16} icon="arrowRight" />
                </div>
              </Link>
            </li>
            <li className="section-recruit-ul__li">
              <Link>
                <div className="section-recruit-ul__top">
                  <SvgIcon size={32} icon="building" />
                </div>
                <div className="section-recruit-ul__bottom">
                  <span className="section-recruit-ul__text">매치업</span>
                  <SvgIcon size={16} icon="arrowRight" />
                </div>
              </Link>
            </li>
            <li className="section-recruit-ul__li">
              <Link>
                <div className="section-recruit-ul__top">
                  <SvgIcon size={32} icon="filter" />
                </div>
                <div className="section-recruit-ul__bottom">
                  <span className="section-recruit-ul__text">직군별 연봉</span>
                  <SvgIcon size={16} icon="arrowRight" />
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
