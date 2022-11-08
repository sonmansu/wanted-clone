import { useRef, useState } from 'react';
import Dropdown from './Dropdown';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = ({ onClickSearchBtn, onClickLoginBtn }) => {
  const [isMenuHover, setMenuHover] = useState(false);

  const onMenuEnter = () => setMenuHover(true);
  const onDropdownLeave = () => {
    setMenuHover(false);
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
            <img
              className=""
              src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/96/000000/external-magnifying-glass-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
              alt="검색 버튼"
            />
          </button>
          <button className="login-btn" onClick={onClickLoginBtn}>
            회원가입/로그인
          </button>
          <div className="vertical-line"></div>
          <Link className="corp-service-btn">기업 서비스</Link>
        </div>
      </div>
      <Dropdown onDropdownLeave={onDropdownLeave} isMenuHover={isMenuHover} />
    </header>
  );
};

export default Header;
