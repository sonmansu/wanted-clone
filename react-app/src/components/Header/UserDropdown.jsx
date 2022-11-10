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
  );
}
