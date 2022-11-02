import React from 'react';
import '../styles/jobDetail.css';
import PositionList from '../components/PositionList';
import BottomBanner from '../components/BottomBanner';
import { useParams } from 'react-router-dom';

import positionDetailsText from '../mock/positionDetail.json';
import corpsText from '../mock/corps.json';

import { priceToString } from '../utils/priceToString';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기
import { NAVER_CLIENT_ID } from '../utils/credentials';

const JobDetail = () => {
  const { jobId } = useParams();

  const positionDetailObj = positionDetailsText[jobId];
  const corpId = positionDetailObj.corpId;
  const corpObj = corpsText[corpId];

  function NaverMapAPI() {
    const navermaps = window.naver.maps;

    return (
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        className="job-workplace__map-img"
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
      >
        <Marker
          key={1}
          position={new navermaps.LatLng(37.551229, 126.988205)}
          animation={2}
          onClick={() => {
            alert('여기는 N서울타워입니다.');
          }}
        />
      </NaverMap>
    );
  }

  return (
    <div>
      <div class="contents-wrap">
        <div class="job-info-box">
          <div class="job-info__img-slider">
            {positionDetailObj.imgs.map((imgSrc) => (
              <div class="job-info__img-box">
                <img src={imgSrc} alt="" />
              </div>
            ))}
          </div>
          <h2 class="job-info__title">{positionDetailObj.position}</h2>
          <div class="job-info-subtitle">
            <a href="#" class="job-info-subtitle__corp-name">
              {corpObj.corpName}
            </a>
            <span class="job-info-subtitle__response">
              응답률 {positionDetailObj.response}
            </span>
            <span class="job-info-subtitle__locate">{corpObj.location}</span>
          </div>
          <ul class="job-info-tag-box">
            {positionDetailObj.tags.map((tag) => (
              <li class="job-info__tag-item">
                <a class="job-info__tag">{tag}</a>
              </li>
            ))}
          </ul>
          <p
            class="job-info__description"
            dangerouslySetInnerHTML={{ __html: positionDetailObj.desc }}
          ></p>
          <p class="job-info__skill-title">기술스택 ・ 툴</p>
          <div class="job-info-skill-box">
            {positionDetailObj.skills.map((skill) => (
              <span class="job-info__skill">{skill}</span>
            ))}
          </div>
          <div class="divider divider--width-100"></div>
          <section class="job-workplace-box">
            <div class="job-workplace-row">
              <span class="job-workplace__title">마감일</span>
              <span class="job-workplace__subtitle">
                {positionDetailObj.due}
              </span>
            </div>
            <div class="job-workplace-row">
              <span class="job-workplace__title">근무지역</span>
              <span class="job-workplace__subtitle">{corpObj.workplace}</span>
            </div>
            {/* <div id="map"></div>
            <img
              style={{ width: '100%', height: '400px' }}
              src="https://naveropenapi.apigw-pub.fin-ntruss.com/map-static/v2/raster-cors?w=300&h=300&center=127.1054221,37.3591614&level=16&X-NCP-APIGW-API-KEY-ID=cwk6n4lxoe"
              alt=""
            ></img> */}
            <RenderAfterNavermapsLoaded
              ncpClientId={NAVER_CLIENT_ID} // 자신의 네이버 계정에서 발급받은 Client ID
              error={<p>Maps Load Error</p>}
              loading={<p>Maps Loading...</p>}
            >
              <NaverMapAPI className="job-workplace__map-img" />
            </RenderAfterNavermapsLoaded>
          </section>
          <section class="job-info-corp-box">
            <button class="job-info-corp-left-box">
              <div class="job-info-corp__logo"></div>
              <div>
                <p class="job-info-corp__corp-name">{corpObj.corpName}</p>
                <p class="job-info-corp__corp-kind">{corpObj.corpKind}</p>
              </div>
            </button>
            <button class="job-info-corp__follow-btn">팔로우</button>
          </section>
          <section class="job-info-warning-box">
            <svg class="" width="24" height="24" viewBox="0 0 24 24">
              <g fill="currentColor" fill-rule="evenodd">
                <path
                  fill-rule="nonzero"
                  d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
                ></path>
                <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
                <path
                  fill-rule="nonzero"
                  d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"
                ></path>
              </g>
            </svg>

            <div class="job-info-warning-content-box">
              <p class="job-info-warning__text">
                본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
                없으며, 구직활동 이외의
                <br />
                용도로 사용할 수 없습니다.
              </p>
              <button>
                <span class="material-icons">arrow_drop_down</span>
              </button>
            </div>
          </section>
        </div>
        <aside class="job-apply-box">
          <h3 class="job-apply__title">채용보상금</h3>
          <button class="job-apply__share-btn">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              //   xmlns:xlink="https://www.w3.org/1999/xlink"
              width="20"
              height="20"
              viewBox="0 0 19 19"
            >
              <defs>
                <path
                  id="shareIcon"
                  d="M5.336 7.75c-.551-.703-1.418-1.136-2.365-1.136C1.337 6.614 0 7.898 0 9.494c0 1.596 1.336 2.879 2.971 2.879.93 0 1.785-.419 2.338-1.102l8.495 4.482c.128.068.276.092.42.068l.025-.004c.213-.036.395-.173.489-.367.101-.21.249-.393.437-.54.673-.526 1.643-.407 2.168.266.526.673.407 1.643-.265 2.167-.673.526-1.643.407-2.168-.266-.226-.29-.644-.34-.933-.115-.29.226-.34.644-.115.933.977 1.251 2.783 1.473 4.034.496 1.25-.976 1.472-2.782.495-4.033-.977-1.251-2.783-1.473-4.033-.496-.169.132-.32.28-.454.442L5.478 9.858c-.322-.241-.816-.145-1 .255-.259.558-.844.93-1.507.93-.913 0-1.642-.7-1.642-1.55 0-.849.73-1.55 1.642-1.55.636 0 1.2.343 1.473.863.107.368.526.64.954.413l9.026-4.762.118-.079.029-.024c.233-.197.303-.527.169-.8-.104-.212-.158-.442-.158-.68 0-.853.692-1.545 1.544-1.545.853 0 1.545.692 1.545 1.544 0 .854-.691 1.545-1.545 1.545-.367 0-.664.297-.664.664 0 .367.297.665.664.665C17.714 5.747 19 4.46 19 2.873 19 1.287 17.713 0 16.126 0c-1.586 0-2.873 1.287-2.873 2.873 0 .224.026.445.076.66L5.336 7.748z"
                ></path>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <use
                  fill="#36F"
                  // xlink:href="#shareIcon"
                ></use>
              </g>
            </svg>
          </button>

          <div class="job-apply-text-box-row">
            <div class="job-apply-text-box">
              <p class="job-apply__label">추천인</p>
              <p class="job-apply__contents">
                {priceToString(positionDetailObj.rewards[0])}원
              </p>
            </div>
            <div class="job-apply-text-box">
              <p class="job-apply__label">지원자</p>
              <p class="job-apply__contents">
                {priceToString(positionDetailObj.rewards[0])}원
              </p>
            </div>
          </div>
          <div>
            <button class="job-apply__btn">
              <img src="" alt="" />
              <span>북마크하기</span>
            </button>
            <button class="job-apply__btn job-apply__btn--bg-col">
              지원하기
            </button>
          </div>
          <div class="job-apply-like-row">
            <button class="job-apply-like-btn">
              <span class="material-icons-outlined md-18">favorite</span>
              <span class="job-apply-like-btn__text">
                {positionDetailObj.likeCnt}
              </span>
            </button>
            <button class="job-apply-liked-list-btn">
              <ul class="job-apply-liked-list-btn__list">
                {positionDetailObj.likedImgs.map((img) => (
                  <li
                    style={{
                      backgroundImage: `url(${img}), url(${positionDetailObj.DefaultImg})`,
                    }}
                  ></li>
                ))}
              </ul>
            </button>
          </div>
        </aside>
      </div>
      <section class="contents-box">
        <h5 class="postions-title">이 포지션을 찾고 계셨나요?</h5>
        <PositionList />
      </section>
      <BottomBanner
        icon={true}
        text="[ 웹개발자 ] 3년 차 3,500만원이면 잘 받는 건가요?"
      />
    </div>
  );
};

export default JobDetail;
// {positionDetailObj.likedImgs[0]}
