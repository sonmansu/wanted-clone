import React from 'react';
import Section from '../component/Section';
import ArticleList from '../component/ArticleList';
import VodList from './VodList';
import LineBanner from './LineBanner';
import EventList from './EventList';
import '../styles/main.css';
import SimpleSlider from './SlideBanner';

const Main = () => {
  return (
    <main>
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
    </main>
  );
};

export default Main;
