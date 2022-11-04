import React from 'react';
import Section from '../components/Section';
import VodList from '../components/VodList';
import LineBanner from '../components/LineBanner';
import EventList from '../components/EventList';
import SlideBanner from '../components/SlideBanner';
import '../styles/home.css';
import ListContainer from '../components/ListContainer2';
import QuestionMarkIcon from 'assets/icons/QuestionMarkIcon';
import BtnCircle from 'components/BtnCircle';
import insightArr from 'mock/insights.json';
import { Link } from 'react-router-dom';
import InsightCategoriesSlider from 'components/InsightCategoriesSlider';
import InsightItem from 'components/ListItems/InsightItem';
import Icon from 'assets/icons/SvgIcon';

const Home = () => {
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
      <LineBanner kind="recommend" />
      <Section title="직장인을 위한 Wanted+ VOD" subtitle="VOD 전체보기">
        <VodList />
      </Section>
      <Section
        title="커리어 성장을 위한 맞춤 이벤트"
        subtitle="이벤트 전체보기"
      >
        <EventList />
      </Section>
    </div>
  );
};

export default Home;
