import { useState } from 'react';
import './header.css'

const Header = () => {
    const [dropdownMainCategory, setDropdownMainCategory] = useState([
        '개발',
        '경영비즈니스',
        '마케팅광고',
        '디자인',
        '영업',
        '고객서비스 리테일',
        '게임 제작',
        'HR',
        '미디어',
        '엔지니어링 설계',
        '금융',
        '제조 생산',
    ]);
    const [dropdownSubCategory, setDropdownSubCategory] = useState([
        '개발 전체',
        '웹 개발자',
        '서버 개발자',
        '소프트웨어 엔지니어',
        '프론트엔드 개발자',
        '자바 개발자',
        '안드로이드 개발자',
        'C,C++ 개발자',
        'IOS 개발자',
        '개발 전체',
        '웹 개발자',
        '서버 개발자',
        '소프트웨어 엔지니어',
        '프론트엔드 개발자',
        '자바 개발자',
        '안드로이드 개발자',
        'C,C++ 개발자',
        'IOS 개발자',
        '개발 전체',
        '웹 개발자',
        '서버 개발자',
        '소프트웨어 엔지니어',
        '프론트엔드 개발자',
        '자바 개발자',
        '안드로이드 개발자',
        'C,C++ 개발자',
        'IOS 개발자',
    ]);

    const mainCategoryList = dropdownMainCategory.map(item =>
        <li className="dropdown-main-category__item">
            <a href="#" className="dropdown-main-category__link">{item}</a>
        </li>
    );

    const subCategoryList = dropdownSubCategory.map(item =>
        <li className="dropdown-sub-category__item">
            <a href="#" className="dropdown-sub-category__link">{item}</a>
            <span className="dropdown-sub-category__arrow-icon material-icons-round md-16">
                chevron_right
            </span>
        </li>
    );

    return (
        < header >
            <div className="header-wrap">
                <div className="left-btns-wrap">
                    <button className="menu-btn">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                            alt="메뉴버튼" />
                    </button>
                    <h1>
                        <a className="wanted-logo" onclick="location.href='home.html'" href="https://www.wanted.co.kr/">
                            <i className="icon-logo"></i>
                        </a>
                    </h1>
                </div>
                <nav>
                    <ul className="header-nav-ul">
                        <li><a href="#" onclick="location.href='recruit.html'">채용</a></li>
                        <li><a href="#">이벤트</a></li>
                        <li><a href="#">직군별 연봉</a></li>
                        <li><a href="#">이력서</a></li>
                        <li>
                            <a href="#">커뮤니티
                                <em className="footnote">New</em>
                            </a>
                        </li>
                        <li><a href="#">프리랜서</a></li>
                        <li>
                            <a href="#">AI 합격예측<em className="footnote">Beta</em></a>
                        </li>
                    </ul>
                </nav>
                <div className="right-btns-wrap">
                    <button className="search-btn">
                        <img className=""
                            src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/96/000000/external-magnifying-glass-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                            alt="검색 버튼" />
                    </button>
                    <button className="login-btn">회원가입/로그인</button>
                    <div className="vertical-line"></div>
                    <a href="#" className="corp-service-btn">기업 서비스</a>
                </div>
            </div>
            <div className="dropdown-menu-box">
                <nav>
                    <ul className="hidden dropdown-main-category__list">
                        {mainCategoryList}
                    </ul>
                </nav>
                <nav className="dropdown-subcategory-nav">
                    <ul className="hidden dropdown-sub-category__list">
                        {subCategoryList}
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Header;