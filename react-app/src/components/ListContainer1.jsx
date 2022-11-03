import React, { useEffect, useLayoutEffect, useState } from 'react';
import eventText from '../mock/events.json';
import articleText from '../mock/articles.json';
import vodText from '../mock/vods.json';
import positionText from '../mock/positions.json';

import EventItem from './EventItem';
import ArticleItem from './ListItems/ArticleItem';
import VodItem from './ListItems/VodItem';
import PositionList from './PositionList';

const ListContainer = ({ listType }) => {
  console.log(articleText);
  let list;

  useLayoutEffect(() => {
    console.log('useLayoutEffect()');
    switch (listType) {
      case 'event':
        list = eventText.map((event) => (
          <EventItem img={event.img} kinds={event.kind} title={event.title} />
        ));
        break;
      case 'article':
        list = articleText.map((article) => (
          <ArticleItem
            img={article.img}
            title={article.title}
            tag={article.tag}
          />
        ));
        console.log('useeffect list', list);
        console.log('아티클');
        break;
      default:
    }
  }, []);

  console.log('before return');
  console.log('list :>> ', list);
  return (
    <ul className="section-contents__ul">{list ? list : '없음'}</ul>
    // <ul className="section-contents__ul section-contents__ul--big">{list}</ul>
  );
  console.log('after return :>> ', 'after return');
};

export default ListContainer;
