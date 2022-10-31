import React from 'react';
import Section from '../components/Section';
import ArticleList from '../components/ArticleList';
import VodList from '../components/VodList';
import LineBanner from '../components/LineBanner';
import EventList from '../components/EventList';
import SimpleSlider from '../components/SlideBanner';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <Section title="3분만에 읽는 Wanted+ 아티클" subtitle="아티클 전체보기">
        <ArticleList />
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
