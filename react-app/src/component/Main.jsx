import React from 'react';
import SectionHeader from '../component/SectionHeader';
import ArticleList from '../component/ArticleList';
import '../styles/section.css';

const Main = () => {
  return (
    <section>
      <div className="section-wrap">
        <SectionHeader
          title="3분만에 읽는 Wanted+ 아티클"
          subtitle="아티클 전체보기"
        />
        <ArticleList />
      </div>
    </section>
  );
};

export default Main;
