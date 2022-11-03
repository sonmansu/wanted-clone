import React from 'react';
import BottomBanner from '../components/BottomBanner';
import '../styles/jobList.css';
import { useParams } from 'react-router-dom';
import PositionList from '../components/PositionList';
import corpsText from '../mock/corps.json';
import CorpItem from '../components/CorpItem';
import PositionFilter from '../components/PositionFilter';

const JobList = () => {
  const { mainId, subId } = useParams();
  // console.log(mainId, subId);

  const getHiringCorps = () => {
    const hiringCorps = [];
    const corpsArr = Object.values(corpsText);

    for (let i = 0; i < corpsArr.length; i++) {
      if (corpsArr[i].positionCnt > 0) {
        hiringCorps.push(corpsArr[i]);
      }
      if (hiringCorps.length >= 5) break;
    }
    console.log(hiringCorps);
    return hiringCorps;
  };

  return (
    <div>
      <section className="search-section">
        <div className="search-wrap">
          <div className="search-job-box">
            <button className="search-job-btn">
              <span className="search-job-btn__text search-job__btn-text--bold">
                개발
              </span>
              <span className="search-job-btn__more-btn">
                <span className="material-icons-round md-22">expand_more</span>
              </span>
            </button>
            <button className="search-job-btn">
              <span className="search-job-btn__text">개발 전체</span>
              <span className="search-job-btn__more-btn">
                <span className="material-icons-round md-22">expand_more</span>
              </span>
            </button>
          </div>
          <PositionFilter />
        </div>
      </section>
      <section className="contents-box">
        <div className="bookmark-row">
          <button className="bookmark-btn">
            <span className="material-icons-round md-14">bookmark</span>
            <span className="bookmark-btn__text">북마크 모아보기</span>
            <span className="material-icons-round md-14">
              keyboard_arrow_right
            </span>
          </button>
        </div>
        <div className="hiring-corp-box">
          <h3 className="hiring-corp-title">적극 채용 중인 회사</h3>
          <ul className="hiring-corp-list">
            {getHiringCorps().map((corp) => (
              <CorpItem
                name={corp.corpName}
                cnt={corp.positionCnt}
                logoImg={corp.logo}
                thumbnail={corp.imgs[0]}
              />
            ))}
          </ul>
        </div>
        {/* <ul className="searched-corp-list">
              <li>
                  <a href="">
                      <div></div>
                  </a>
              </li>
          </ul>  */}
        <PositionList />
      </section>
      <BottomBanner text="이제 밤새워 채용 공고 보지 마세요." />
    </div>
  );
};

export default JobList;
