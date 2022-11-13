import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/userDropdown.css';

export default function UserDropdown({ setLogin }) {
  const onClickLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('pw');
    setLogin(false);
  };

  return (
    <div className="user-dropdown-wrap">
      <div className="user-dropdown">
        <ul className="user-dropdown__list">
          <li>
            <Link className="user-dropdown__item">MY 원티드</Link>
          </li>
          <li>
            <Link className="user-dropdown__item">프로필</Link>
          </li>
          <div className="user-dropdown__divider"></div>
          <li>
            <Link className="user-dropdown__item">지원 현황</Link>
          </li>
          <li>
            <Link className="user-dropdown__item">제안받기 현황</Link>
          </li>
          <li>
            <Link className="user-dropdown__item">좋아요</Link>
          </li>
          <li>
            <Link to="/profile/bookmarks" className="user-dropdown__item">
              북마크
            </Link>
          </li>
          <div className="user-dropdown__divider"></div>
          <li>
            <Link className="user-dropdown__item">추천</Link>
          </li>
          <li>
            <Link className="user-dropdown__item">포인트</Link>
          </li>
          <li>
            <button
              className="user-dropdown__item user-dropdown__logout-item"
              onClick={onClickLogout}
            >
              로그아웃
            </button>
          </li>
        </ul>
      </div>
      <div className="user-dropdown-balloon-tail" />
    </div>
  );
}
