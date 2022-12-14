import React, { useState } from 'react';
import articleText from '../mock/articles.json';
import ArticleItem from './ListItems/ArticleItem';
import '../styles/sectionBody.css';

const ArticleList = () => {
  const [articles, setArticles] = useState(articleText);

  const articleList = articles.map((article) => (
    <ArticleItem img={article.img} title={article.title} tag={article.tag} />
  ));

  return <ul className="section-contents__ul">{articleList}</ul>;
};

export default ArticleList;
