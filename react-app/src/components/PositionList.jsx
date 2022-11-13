import React, { useState, useEffect } from 'react';
import positionText from '../mock/positions.json';
import '../styles/sectionBody.css';
import '../styles/positionList.css';
import PositionItem from './PositionItem';

const PositionList = ({ searchKeyword, setPositionCnt }) => {
  const [positions, setPositions] = useState(positionText);
  console.log('searchKeyword :>> ', searchKeyword);

  useEffect(() => {
    if (searchKeyword) {
      const searchedList = positionText.filter((position) => {
        let result = [
          position['location'],
          position['position'],
          position['corpName'],
        ].join('');
        console.log('result', result);
        return result.includes(searchKeyword);
      });
      console.log('searchedList', searchedList);
      setPositions(searchedList);
      setPositionCnt(searchedList.length);
    }
  }, [searchKeyword]); //searchKeyword 안넣어주면 리랜더링안됨

  const positionList = positions.map((position) => (
    <PositionItem
      key={position.id}
      id={position.id}
      img={position.imgs[0]}
      position={position.position}
      corp={position.corpName}
      response={position.response}
      location={position.location}
      reward={position.rewards[0]}
    />
  ));

  return <ul className="section-contents__ul">{positionList}</ul>;
};

export default PositionList;
