import React, { useState } from 'react';
import vodText from '../mock/vods.json';
import VodItem from './ListItems/VodItem';
import '../styles/sectionBody.css';

const VodList = () => {
  const [vods, setVods] = useState(vodText);

  const vodList = vods.map((vod) => (
    <VodItem
      img={vod.img}
      playtime={vod.playtime}
      author={vod.author}
      title={vod.title}
      desc={vod.desc}
    />
  ));

  return <ul className="section-contents__ul">{vodList}</ul>;
};

export default VodList;
