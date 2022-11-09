import { useRef, useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import SvgIcon from 'assets/icons/SvgIcon';

const Header = ({ onClickSearchBtn, onClickLoginBtn }) => {
  const [isLogin, setLogin] = useState(false);
  const [isMenuHover, setMenuHover] = useState(false);
  const [isUserDropdownOn, setUserDropdownOn] = useState(false);

  // 다른 탭으로 들어가면 setLogin이 날아가므로 localStorage를 확인하여 로그인 상태 유지시킴
  let user = localStorage.getItem('email');
  useEffect(() => {
    console.log('use effect');
    console.log('user', user);
    if (user) setLogin(true);
    else setLogin(false);
  }, [user, setLogin]);

  const onMenuEnter = () => setMenuHover(true);
  const onDropdownLeave = () => {
    setMenuHover(false);
  };

  const onClickLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('pw');
    setLogin(false);
  };

  const onClickProfileBtn = (e) => {
    setUserDropdownOn(!isUserDropdownOn);
  };

  return (
    <header>
      <div className="header-wrap">
        <div className="left-btns-wrap">
          <button className="menu-btn" onMouseEnter={onMenuEnter}>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
              alt="메뉴버튼"
            />
          </button>
          <h1>
            <Link
              to="/"
              className="wanted-logo"
              href="https://www.wanted.co.kr/"
            >
              <i className="icon-logo"></i>
            </Link>
          </h1>
        </div>
        <nav>
          <ul className="header-nav-ul">
            <li>
              <Link to="/recruit">채용</Link>
            </li>
            <li>
              <Link>이벤트</Link>
            </li>
            <li>
              <Link>직군별 연봉</Link>
            </li>
            <li>
              <Link>이력서</Link>
            </li>
            <li>
              <Link>
                커뮤니티
                <em className="footnote">New</em>
              </Link>
            </li>
            <li>
              <Link>프리랜서</Link>
            </li>
            <li>
              <Link>
                AI 합격예측<em className="footnote">Beta</em>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="right-btns-wrap">
          <button className="search-btn" onClick={onClickSearchBtn}>
            <svg
              xmlns="https://www.w3.org/2000/svg"
              xmlnsXlink="https://www.w3.org/1999/xlink"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <defs>
                <path
                  id="qt2dnsql4a"
                  d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                ></path>
              </defs>
              <g fill="none" fillRule="evenodd">
                <use
                  fill="#333"
                  fillRule="nonzero"
                  stroke="#333"
                  strokeWidth=".3"
                  xlinkHref="#qt2dnsql4a"
                ></use>
              </g>
            </svg>
          </button>
          {isLogin ? (
            <div className="logined-area">
              <button className="noti-btn">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="bpnpn3yn0a"
                      d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
                    ></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                      <mask id="1dencd96ob" fill="#fff">
                        <use xlinkHref="#bpnpn3yn0a"></use>
                      </mask>
                      <use
                        fillRule="nonzero"
                        stroke="currentColor"
                        strokeWidth=".3"
                        xlinkHref="#bpnpn3yn0a"
                      ></use>
                      <g fill="currentColor" mask="url(#1dencd96ob)">
                        <path d="M0 0H18V18H0z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <button
                className={
                  isUserDropdownOn
                    ? 'profile-btn profile-btn--border-blue'
                    : 'profile-btn'
                }
                onClick={onClickProfileBtn}
              >
                <div className="profile-btn__bg-img"></div>
                <div className="profile-btn__new-icon">
                  <svg className="" width="5" height="5" viewBox="0 0 6 6">
                    <g fill="#fff" fillRule="nonzero">
                      <path
                        d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
                        transform="translate(-123 -375) translate(20 365) translate(98 5)"
                      ></path>
                    </g>
                  </svg>
                </div>
                {isUserDropdownOn && (
                  <div className="user-dropdown-wrap">
                    <div className="user-dropdown">
                      <ul className="user-dropdown__list">
                        <li className="user-dropdown__item">
                          <Link>MY 원티드</Link>
                        </li>
                        <li className="user-dropdown__item">
                          <Link>프로필</Link>
                        </li>
                        <div className="user-dropdown__divider"></div>
                        <li className="user-dropdown__item">
                          <Link>지원 현황</Link>
                        </li>
                        <li className="user-dropdown__item">
                          <Link>제안받기 현황</Link>
                        </li>
                        <li className="user-dropdown__item">
                          <Link>좋아요</Link>
                        </li>
                        <li className="user-dropdown__item">
                          <Link>북마크</Link>
                        </li>
                        <div className="user-dropdown__divider"></div>
                        <li className="user-dropdown__item">
                          <Link>추천</Link>
                        </li>
                        <li className="user-dropdown__item">
                          <Link>포인트</Link>
                        </li>
                        <li className="user-dropdown__item user-dropdown__logout-item">
                          <button onClick={onClickLogout}>로그아웃</button>
                        </li>
                      </ul>
                    </div>
                    <div className="user-dropdown-balloon-tail" />
                  </div>
                )}
              </button>
            </div>
          ) : (
            <button className="login-btn" onClick={onClickLoginBtn}>
              회원가입/로그인
            </button>
          )}

          <div className="vertical-line"></div>
          <Link className="corp-service-btn">기업 서비스</Link>
        </div>
      </div>
      <Dropdown onDropdownLeave={onDropdownLeave} isMenuHover={isMenuHover} />
    </header>
  );
};

export default Header;
