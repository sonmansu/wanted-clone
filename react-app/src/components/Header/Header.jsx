import { useRef, useState, useEffect } from 'react';
import MenuDropdown from './MenuDropdown';
import UserDropdown from './UserDropdown';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';
import SvgIcon from 'assets/icons/SvgIcon';
import { ReactComponent as MagnifyingGlassIcon } from './magnifyingGlassIcon.svg';
import { ReactComponent as MoreIcon } from './moreIcon.svg';
import { ReactComponent as NotificationIcon } from './notificationIcon.svg';

const Header = ({ onClickSearchBtn, onClickLoginBtn }) => {
  const [isLogin, setLogin] = useState(false);
  const [isMenuDropdownOn, setMenuDropdownOn] = useState(false);
  const [isUserDropdownOn, setUserDropdownOn] = useState(false);

  // 다른 탭으로 들어가면 setLogin이 날아가므로 localStorage를 확인하여 로그인 상태 유지시킴
  let user = localStorage.getItem('email');
  useEffect(() => {
    console.log('use effect');
    console.log('user', user);
    if (user) setLogin(true);
    else setLogin(false);
  }, [user, setLogin]);

  const onEnterMenu = () => setMenuDropdownOn(true);

  const onClickProfileBtn = (e) => {
    setUserDropdownOn(!isUserDropdownOn);
  };

  return (
    <header>
      <div className="header-wrap">
        <div className="left-btns-wrap">
          <div>
            <button className="menu-btn" onMouseEnter={onEnterMenu}>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                alt="메뉴버튼"
              />
            </button>
            <h1>
              <Link to="/" className="wanted-logo">
                <i className="icon-logo"></i>
              </Link>
            </h1>
          </div>
          {!isLogin && (
            <button
              className="login-btn-xs visible-md visible-sm"
              onClick={onClickLoginBtn}
            >
              회원가입하기
            </button>
          )}
        </div>
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li className="visible-sm">
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/recruit">채용</Link>
            </li>
            <li>
              <Link>이벤트</Link>
            </li>
            <li className="visible-md visible-lg">
              <Link>직군별 연봉</Link>
            </li>
            <li className="visible-md visible-lg">
              <Link>이력서</Link>
            </li>
            <li className="visible-md visible-lg">
              <Link>
                커뮤니티
                <em className="footnote">New</em>
              </Link>
            </li>
            <li className="visible-md visible-lg">
              <Link>프리랜서</Link>
            </li>
            <li className="visible-md visible-lg">
              <Link>
                AI 합격예측<em className="footnote">Beta</em>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="right-btns-wrap">
          <button className="search-btn" onClick={onClickSearchBtn}>
            <MagnifyingGlassIcon />
          </button>
          {isLogin ? (
            <div className="logined-area">
              <button className="noti-btn">
                <NotificationIcon />
              </button>
              <button
                className={
                  isUserDropdownOn
                    ? 'visible-lg profile-btn profile-btn--border-blue'
                    : 'visible-lg profile-btn'
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
                {isUserDropdownOn && <UserDropdown setLogin={setLogin} />}
              </button>
            </div>
          ) : (
            <button className="login-btn visible-lg" onClick={onClickLoginBtn}>
              회원가입/로그인
            </button>
          )}
          <div className="vertical-line visible-lg"></div>
          <Link className="corp-service-btn visible-lg">기업 서비스</Link>
          <MoreIcon className="more-btn visible-md visible-sm" />
        </div>
        {isMenuDropdownOn && (
          <MenuDropdown setMenuDropdownOn={setMenuDropdownOn} />
        )}
      </div>
    </header>
  );
};

export default Header;
