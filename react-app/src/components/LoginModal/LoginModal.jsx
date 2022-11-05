import React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'styles/loginModal.css';
import ModalBodyEmail from './ModalBodyEmail';
import ModalBodySignUp from './ModalBodySignUp';

const LoginModal = ({ setLoginModalOn }) => {
  const [isEmailBodyOn, setEmailBodyOn] = useState(true);
  const [isSignUpBodyOn, setSignUpBodyOn] = useState(false);

  const loginModalRef = useRef();

  const onClickModalWindow = (e) => {
    if (!loginModalRef.current.contains(e.target)) setLoginModalOn(false);
  };

  return (
    <div
      id="login-modal"
      className="login-modal-window"
      onClick={onClickModalWindow}
    >
      <div className="login-modal-box" ref={loginModalRef}>
        <div className="login-modal-header">
          <div className="icon-logo-box">
            <i className="icon-logo logo-align-center"></i>
          </div>
          <span className="login-modal__signUp-title hidden">회원가입</span>
          <button
            className="login-modal__close-btn"
            onClick={() => {
              setLoginModalOn(false);
            }}
          >
            <span className="material-icons-round">close</span>
          </button>
        </div>
        {isEmailBodyOn && (
          <ModalBodyEmail
            setEmailBodyOn={setEmailBodyOn}
            setSignUpBodyOn={setSignUpBodyOn}
          />
        )}
        {isSignUpBodyOn && <ModalBodySignUp />}
      </div>
    </div>
  );
};

export default LoginModal;
