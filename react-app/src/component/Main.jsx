import React from 'react';
import SectionHeader from '../component/SectionHeader';
import ArticleList from '../component/ArticleList';
import '../styles/main.css';
import VodList from './VodList';
import LineBanner from './LineBanner';

const Main = () => {
  return (
    <main>
      <section>
        <div className="section-wrap">
          <SectionHeader
            title="3분만에 읽는 Wanted+ 아티클"
            subtitle="아티클 전체보기"
          />
          <ArticleList />
        </div>
      </section>
      <div className="divider"></div>
      <section>
        <div className="section-wrap">
          <SectionHeader
            title="직장인을 위한 Wanted+ VOD"
            subtitle="VOD 전체보기"
          />
          <VodList />
        </div>
      </section>
      <LineBanner kind="recommend" />
    </main>
  );
};

export default Main;
