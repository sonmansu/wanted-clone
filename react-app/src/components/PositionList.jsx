import React, { useRef, useState, useEffect, useCallback } from 'react';
import positionText from '../mock/positions.json';
import ContentThumbnail from './ContentThumbnail';
import ContentTitle from './ContentTitle';
import '../styles/sectionBody.css';
import '../styles/positionList.css';
import { priceToString } from '../utils/priceToString';
import { Link } from 'react-router-dom';
import ResponseLevelLabel from './ResponseLevelLabel';
import { useInView } from 'react-intersection-observer';

const PositionList = ({ searchKeyword, setPositionCnt }) => {
  const [positionList, setPositionList] = useState([]); // 화면에 보여줄 리스트들
  // console.log('positionList', positionList);
  const [page, setPage] = useState(1);
  const [lastItemRef, lastItemInView] = useInView();

  const getList = useCallback(() => {
    console.log('page :>> ', page);
    // page1 : 0~ 7, 8개 아이템/page2: 8~16
    const nextList = positionText.slice(page * 8, page * 8 + 8);
    console.log('nextList', nextList);
    setPositionList((prevState) => [...prevState, ...nextList]);
  }, [page]);

  // `getList` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getList();
  }, [getList]);

  // 검색 키워드에 해당하는 리스트들 셋팅
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
      setPositionList(searchedList);
      setPositionCnt(searchedList.length);
    }
    // else {
    //   console.log('no searchkeyword');
    //   setPositionList(positions.slice(0, 8)); // 검색 키워드 없으면 더미데이터들 중 8개만 보여줄 예정
    // }
  }, [searchKeyword]); //searchKeyword 안넣어주면 리랜더링안됨

  useEffect(() => {
    if (lastItemInView) {
      setPage((prevState) => prevState + 1);
    }
  }, [lastItemInView]);

  return (
    <div>
      <ul className="section-contents__ul">
        {positionList.map((position, idx) => (
          <PositionItem
            // ref={positionList.length - 1 == idx ? lastItemRef : null}
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
      <div className="bottom" ref={lastItemRef} />
    </div>
  );
};

const PositionItem = ({
  id,
  img,
  position,
  response,
  corp,
  location,
  reward,
}) => {
  return (
    <li>
      <Link to={`/jobDetail/${id}`}>
        <div className="thumbnail-position-wrap">
          <ContentThumbnail src={img} />
          <div className="section-contents__bookmark-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                fill="white"
              ></path>
              <path
                d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                fill="black"
                fillOpacity="0.25"
              ></path>
            </svg>
          </div>
        </div>

        <div className="position-body">
          <ContentTitle text={position} />
          <p className="position-body__corp-name">{corp}</p>
          <ResponseLevelLabel text={response} />
          <p className="position-body__locate">{location}</p>
          <p className="position-body__reward">
            채용보상금 {priceToString(reward)}원
          </p>
        </div>
      </Link>
    </li>
  );
};

export default PositionList;
