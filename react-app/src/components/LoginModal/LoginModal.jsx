import React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/loginModal.css';
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
        )}
        {isSignUpBodyOn && <ModalBodySignUp />}
      </div>
    </div>
  );
};

export default LoginModal;
