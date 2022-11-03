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

  const aaa = () => {
    let list;
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
        break;
      case 'vod':
        list = vodText.map((vod) => (
          <VodItem
            img={vod.img}
            playtime={vod.playtime}
            author={vod.author}
            title={vod.title}
            desc={vod.desc}
          />
        ));
        break;
      //   case 'position':
      //     setArray(positionText);
      //     break;
      default:
    }

    return list;
  };

  return (
    <ul className="section-contents__ul">{aaa()}</ul>
    // <ul className="section-contents__ul section-contents__ul--big">{aaa()}</ul>
  );
};

export default ListContainer;
