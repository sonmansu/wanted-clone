import BlueRadiusBtn from 'components/BlueRadiusBtn';
import React from 'react';
import userArr from '../../mock/users.json';
import { useState } from 'react';

export default function PasswordModal({ setActivatedModal }) {
  const [pw, setPw] = useState('');
  const [isCorrectPw, setCorrectPw] = useState(false);
  const [isClickedNextBtn, setIsClickedNextBtn] = useState(false);

  const onChangePw = (e) => {
    setPw(e.target.value);
    setIsClickedNextBtn(false);
  };

  const onClikNextBtn = () => {
    const inputEmail = sessionStorage.getItem('inputEmail');
    const user = userArr.find((user) => user.email === inputEmail);
    if (user.pw === pw) {
      setActivatedModal(0);
      localStorage.setItem('email', inputEmail);
      localStorage.setItem('pw', pw);
      sessionStorage.removeItem('inputEmail');
    } else {
      setCorrectPw(false);
    }
    setIsClickedNextBtn(true);
  };

  return (
    <div className="password-modal">
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
              className={
                pw.length > 0 && !isCorrectPw && isClickedNextBtn
                  ? 'input input--border-red'
                  : 'input'
              }
              type="password"
              //   value={pw}
              placeholder="비밀번호를 입력해주세요."
              autoFocus
              onChange={onChangePw}
            />
          </div>
          {pw.length > 0 && !isCorrectPw && isClickedNextBtn ? (
            <div className="input__errorMessage">
              비밀번호가 일치하지 않습니다.
            </div>
          ) : null}
        </div>
        <BlueRadiusBtn onClick={onClikNextBtn} unactivated={pw.length === 0}>
          <span>다음</span>
        </BlueRadiusBtn>
        <button className="pw-change-btn">
          <span className="pw-change-btn__text">비밀번호 초기화/변경</span>
        </button>
      </div>
    </div>
  );
}
