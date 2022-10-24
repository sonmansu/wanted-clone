import { useRef, useState } from 'react';
import Dropdown from './Dropdown';
import '../styles/header.css';

const Header = () => {
  const [isMenuHover, setMenuHover] = useState(false);
  // const onMoustover = e => {
  //     const eventTarget = e.target;
  //     // console.dir(eventTarget);

  //     if (eventTarget.classList.contains('dropdown-main-category__link')) {
  //         // console.log('a 태그 만짐');
  //         $dropdownMenuSub.classList.remove(HIDDEN_CLASSNAME);
  //         setSubCategoryListWidth();
  //     }

  //     const mainCategory = eventTarget.innerText;
  //     if (mainCategory === '개발') {
  //         // 개발에 관련된 sub category들을 subcategory list에 뿌려줌
  //     }
  // }

  const onMenuEnter = () => setMenuHover(true);
  const onDropdownLeave = () => {
    setMenuHover(false);
  };

  // const onEnter = () => {
  //   // console.log(refs.current.querySelector('.dropdown-menu-box ul').classList.remove('hidden'))

  //   setToggle(true);
  // };
  // const onLeave = () => {
  //   setToggle(false);
  // };

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
            <a
              className="wanted-logo"
              onClick="location.href='home.html'"
              href="https://www.wanted.co.kr/"
            >
              <i className="icon-logo"></i>
            </a>
          </h1>
        </div>
        <nav>
          <ul className="header-nav-ul">
            <li>
              <a href="#" onClick="location.href='recruit.html'">
                채용
              </a>
            </li>
            <li>
              <a href="#">이벤트</a>
            </li>
            <li>
              <a href="#">직군별 연봉</a>
            </li>
            <li>
              <a href="#">이력서</a>
            </li>
            <li>
              <a href="#">
                커뮤니티
                <em className="footnote">New</em>
              </a>
            </li>
            <li>
              <a href="#">프리랜서</a>
            </li>
            <li>
              <a href="#">
                AI 합격예측<em className="footnote">Beta</em>
              </a>
            </li>
          </ul>
        </nav>
        <div className="right-btns-wrap">
          <button className="search-btn">
            <img
              className=""
              src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/96/000000/external-magnifying-glass-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
              alt="검색 버튼"
            />
          </button>
          <button className="login-btn">회원가입/로그인</button>
          <div className="vertical-line"></div>
          <a href="#" className="corp-service-btn">
            기업 서비스
          </a>
        </div>
      </div>
      <Dropdown onDropdownLeave={onDropdownLeave} isMenuHover={isMenuHover} />
    </header>
  );
};

export default Header;
