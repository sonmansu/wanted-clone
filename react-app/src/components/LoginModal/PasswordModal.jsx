import BlueRadiusBtn from 'components/BlueRadiusBtn';
import React from 'react';
import { useState } from 'react';

export default function PasswordModal({ setActivatedModal }) {
  const [pw, setPw] = useState('');

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  return (
    <div>
      <div className="login-modal-header">
        <span className="modal-title">이메일로 로그인</span>
        <button
          className="login-modal__close-btn"
          onClick={() => {
            setActivatedModal(0);
          }}
        >
          <span className="material-icons-round">close</span>
        </button>
      </div>

      <div className="login-modal-body">
        <div className="login-modal-input-box" style={{ marginTop: '17px' }}>
          <label className="input__label">비밀번호</label>
          <div className="input-wrap">
            <input
              className="input"
              type="password"
              //   value={pw}
              placeholder="비밀번호를 입력해주세요."
              autoFocus
              onChange={onChangePw}
            />
          </div>
        </div>
        <BlueRadiusBtn
          text="다음"
          className={pw.length > 0 ? '' : 'unactivated'}
        />
        <button className="pw-change-btn">
          <span className="pw-change-btn__text">비밀번호 초기화/변경</span>
        </button>
      </div>
    </div>
  );
}
