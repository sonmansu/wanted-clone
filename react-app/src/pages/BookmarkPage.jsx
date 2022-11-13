import React from 'react';
import positionArr from '../mock/positions.json';
import { add, remove } from '../features/bookmark/bookmarkSlice';
import { useSelector, useDispatch } from 'react-redux';
import PositionList from 'components/PositionList';
import PositionItem from 'components/PositionItem';

export default function BookmarkPage() {
  const bookmarkIds = useSelector((state) => state.bookmark.positionId);
  console.log(bookmarkIds);

  const poisitionList = bookmarkIds.map((id) =>
    positionArr.find((obj) => id === obj.id),
  );

  return (
    <section className="contents-box">
      <h5 className="postions-title">북마크</h5>
      <ul className="section-contents__ul">
        {poisitionList.map((position) => (
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
        ))}
      </ul>
    </section>
  );
}
