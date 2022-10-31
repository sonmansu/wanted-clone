import React from 'react';
import BottomBanner from '../components/BottomBanner';
import '../styles/jobList.css';
import { useParams } from 'react-router-dom';
import PositionList from '../components/PositionList';

const JobList = () => {
  const { mainId, subId } = useParams();
  console.log(mainId, subId);

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
          <div className="search-filter-box">
            <div>
              <button className="search-filter-btn">
                <span className="search-filter-btn__text">지역</span>
                <span className="search-filter-btn__selected-text">서울</span>
              </button>
              <button className="search-filter-btn search-filter-btn--padding-right">
                <span className="search-filter-btn__text">경력</span>
                <span className="search-filter-btn__selected-text">전체</span>
                <span className="material-icons">arrow_drop_down</span>
              </button>
              <button className="search-filter-btn search-filter-btn--padding-right">
                <span className="search-filter-btn__text">기술스택</span>
                <span className="material-icons">arrow_drop_down</span>
              </button>
            </div>
            <button className="search-filter-btn search-filter-btn--padding-right">
              <span className="search-filter-btn__text">응답률순</span>
              <span className="material-icons search-filter-btn__dropdown">
                arrow_drop_down
              </span>
            </button>
          </div>
          <div className="divider divider--margin"></div>
          <div className="search-tag-slider-box">
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button className="search-tag">
                <span className="search-tag__text">연봉이 최고의 복지</span>
                <img
                  className="search-tag__img"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
            </div>
            <button className="search-tag">
              <span>재택근무</span>
              <img
                className="search-tag__img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="search-tag">
              <span>퇴사율 10% 이하</span>
              <img
                className="search-tag__img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="search-tag">
              <span>연봉이 최고의 복지</span>
              <img
                className="search-tag__img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="search-tag">
              <span>재택근무</span>
              <img
                className="search-tag__img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="search-tag">
              <span>퇴사율 10% 이하</span>
              <img
                className="search-tag__img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="search-tag">
              <span>연봉이 최고의 복지</span>
              <img
                className="search-tag__img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="search-tag">
              <span>재택근무</span>
              <img
                className="search-tag__img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="search-tag">
              <span>퇴사율 10% 이하</span>
              <img
                className="search-tag__img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="search-tag">
              <span>퇴사율 10% 이하</span>
              <img
                className="search-tag__img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
          </div>
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
            <li className="hiring-corp-item">
              <a href="#">
                <div className="hiring-corp-item-bg-img-wrap">
                  <div className="hiring-corp-item__bg-img"></div>
                </div>
                <div className="hiring-corp-item__logo-img"></div>
                <div className="hiring-corp-item__text-box">
                  <h4 className="hiring-corp-item__title">로민</h4>
                  <p className="hiring-corp-item__subtitle">11개 포지션</p>
                </div>
              </a>
            </li>
            <li className="hiring-corp-item">
              <a href="#">
                <div className="hiring-corp-item-bg-img-wrap">
                  <div className="hiring-corp-item__bg-img"></div>
                </div>
                <div className="hiring-corp-item__logo-img"></div>
                <div className="hiring-corp-item__text-box">
                  <h4 className="hiring-corp-item__title">로민</h4>
                  <p className="hiring-corp-item__subtitle">11개 포지션</p>
                </div>
              </a>
            </li>
            <li className="hiring-corp-item">
              <a href="#">
                <div className="hiring-corp-item-bg-img-wrap">
                  <div className="hiring-corp-item__bg-img"></div>
                </div>
                <div className="hiring-corp-item__logo-img"></div>
                <div className="hiring-corp-item__text-box">
                  <h4 className="hiring-corp-item__title">로민</h4>
                  <p className="hiring-corp-item__subtitle">11개 포지션</p>
                </div>
              </a>
            </li>
            <li className="hiring-corp-item">
              <a href="#">
                <div className="hiring-corp-item-bg-img-wrap">
                  <div className="hiring-corp-item__bg-img"></div>
                </div>
                <div className="hiring-corp-item__logo-img"></div>
                <div className="hiring-corp-item__text-box">
                  <h4 className="hiring-corp-item__title">로민</h4>
                  <p className="hiring-corp-item__subtitle">11개 포지션</p>
                </div>
              </a>
            </li>
            <li className="hiring-corp-item">
              <a href="#">
                <div className="hiring-corp-item-bg-img-wrap">
                  <div className="hiring-corp-item__bg-img"></div>
                </div>
                <div className="hiring-corp-item__logo-img"></div>
                <div className="hiring-corp-item__text-box">
                  <h4 className="hiring-corp-item__title">로민</h4>
                  <p className="hiring-corp-item__subtitle">11개 포지션</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        {/* <ul className="searched-corp-list">
              <li>
                  <a href="">
                      <div></div>
                  </a>
              </li>

          </ul>  */}
        {/* <div className="section-contents">
          <ul className="section-contents__ul section-contents__ul--position">
          </ul>
        </div> */}
        <PositionList />
      </section>
      <BottomBanner text="이제 밤새워 채용 공고 보지 마세요." />
    </div>
  );
};

export default JobList;
