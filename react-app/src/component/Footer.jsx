import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <img
            className="footer-top__logo"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            alt="wanted 로고"
          />
          <nav className="footer-top__nav">
            <ul className="footer-top__nav__ul">
              <li>
                <a href="#">기업소개</a>
              </li>
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a href="#">개인정보 처리방침</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
            </ul>
          </nav>
          <div className="footer-top__sns">
            <a href="#">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__texts">
            <p>
              (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
              롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            </p>
            <p>
              유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
              (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
              02-539-7118
            </p>
            <p>© Wantedlab, Inc.</p>
          </div>
          <div className="footer-bottom-country-box">
            <div className="footer-bottom__country">
              <img
                src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
                alt=""
                className="footer-bottom__country__country-icon"
              />
              <select className="footer-bottom__country__select" name="" id="">
                <option value="KR">한국 (한국어)</option>
                <option value="JP">日本 (日本語)</option>
                <option value="WW">Worldwide (English)</option>
                <option value="SG">Singapore (English)</option>
              </select>
              <img
                className="footer-bottom__country__down-icon"
                src="https://img.icons8.com/material-sharp/24/000000/give-way--v1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
