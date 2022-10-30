import React from 'react';
import '../styles/jobDetail.css';
import PositionList from '../component/PositionList';
import BottomBanner from '../component/BottomBanner';

const JobDetail = () => {
  return (
    <div>
      <div class="contents-wrap">
        <div class="job-info-box">
          <div class="job-info__img-slider">
            <div class="job-info__img-box">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Feh1mycy7nnltf5ah__1080_790.jpg&w=1000&q=75"
                alt=""
              />
            </div>
            <div class="job-info__img-box">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&w=1000&q=75"
                alt=""
              />
            </div>
            <div class="job-info__img-box">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2F6kxgpommhvckijjr__1080_790.jpg&w=1000&q=75"
                alt=""
              />
            </div>
            <div class="job-info__img-box">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&w=1000&q=75"
                alt=""
              />
            </div>
          </div>
          <h2 class="job-info__title">웹 프론트엔드 개발자(React)</h2>
          <div class="job-info-subtitle">
            <a href="#" class="job-info-subtitle__corp-name">
              블루비커
            </a>
            <span class="job-info-subtitle__response">응답률 평균 이상</span>
            <span class="job-info-subtitle__locate">서울.한국</span>
          </div>
          <ul class="job-info-tag-box">
            <li class="job-info__tag-item">
              <a class="job-info__tag">#인원급성장</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#50명이하</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#설립3년이하</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#스톡옵션</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#스타트업</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#워크샵</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#간식</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#건강검진</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#IT, 컨텐츠</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#건강검진</a>
            </li>
            <li class="job-info__tag-item">
              <a class="job-info__tag">#IT, 컨텐츠</a>
            </li>
          </ul>
          <p class="job-info__description"></p>
          <p class="job-info__skill-title">기술스택 ・ 툴</p>
          <div class="job-info-skill-box">
            <span class="job-info__skill">Git</span>
            <span class="job-info__skill">Azure</span>
            <span class="job-info__skill">React</span>
            <span class="job-info__skill">JavaScript</span>
            <span class="job-info__skill">TypeScript</span>
            <span class="job-info__skill">Redux</span>
            <span class="job-info__skill">Next.js</span>
          </div>
          <div class="divider divider--width-100"></div>
          <section class="job-workplace-box">
            <div class="job-workplace-row">
              <span class="job-workplace__title">마감일</span>
              <span class="job-workplace__subtitle">상시</span>
            </div>
            <div class="job-workplace-row">
              <span class="job-workplace__title">근무지역</span>
              <span class="job-workplace__subtitle">
                서울 용산구 한강대로 366 트윈시티 남산 2 패스트파이브
              </span>
            </div>
            <img
              class="job-workplace__map-img"
              src="https://cdn.inflearn.com/public/files/posts/0eb7153f-c7cf-4a57-90ca-575a05db05eb/20191216_100730.png"
              alt="직장 지도"
            />
          </section>
          <section class="job-info-corp-box">
            <button class="job-info-corp-left-box">
              <div class="job-info-corp__logo"></div>
              <div>
                <p class="job-info-corp__corp-name">블루비커</p>
                <p class="job-info-corp__corp-kind">IT, 컨텐츠</p>
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
              <p class="job-apply__contents">500,000원</p>
            </div>
            <div class="job-apply-text-box">
              <p class="job-apply__label">지원자</p>
              <p class="job-apply__contents">500,000원</p>
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
              <span class="job-apply-like-btn__text">9</span>
            </button>
            <button class="job-apply-liked-list-btn">
              <ul class="job-apply-liked-list-btn__list">
                <li></li>
                <li></li>
                <li></li>
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
