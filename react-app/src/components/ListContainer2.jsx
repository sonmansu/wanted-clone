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
  // const [array, setArray] = useState([]);
  const [list, setList] = useState([]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect()');
    switch (listType) {
      case 'event':
        setList(
          eventText.map((event) => (
            <EventItem img={event.img} kinds={event.kind} title={event.title} />
          )),
        );
        break;
      case 'article':
        setList(
          articleText.map((article) => (
            <ArticleItem
              img={article.img}
              title={article.title}
              tag={article.tag}
            />
          )),
        );
        console.log('useeffect list', list);
        break;
      default:
        setList([]);
    }
  }, []);
  console.log('before return');
  console.log('list :>> ', list);
  return <ul className="section-contents__ul">{list}</ul>;
  console.log('after return :>> ', 'after return');
};

export default ListContainer;
