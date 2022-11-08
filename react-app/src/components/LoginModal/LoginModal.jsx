import React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/loginModal.css';
import EmailModal from './EmailModal';
import PasswordModal from './PasswordModal';
import SignUpModal from './SignUpModal';

const LoginModal = ({ activatedModal, setActivatedModal }) => {
  // const [activatedModal, setActivatedModal] = useState(1);

  // const [isEmailModalOn, setEmailModalOn] = useState(true);
  // const [isSignUpModalOn, setSignUpModalOn] = useState(false);
  // const [isPasswordModalOn, setPasswordModalOn] = useState(false);

  const loginModalRef = useRef();

  const onClickModalWindow = (e) => {
    if (!loginModalRef.current.contains(e.target)) setActivatedModal(0);
    // setLoginModalOn(false);
  };

  return (
    <div
      id="login-modal"
      className="login-modal-window"
      onClick={onClickModalWindow}
    >
      <div className="login-modal-box" ref={loginModalRef}>
        {activatedModal === 1 && (
          <EmailModal setActivatedModal={setActivatedModal} />
        )}
        {activatedModal === 2 && (
          <SignUpModal setActivatedModal={setActivatedModal} />
        )}
        {activatedModal === 3 && (
          <PasswordModal setActivatedModal={setActivatedModal} />
        )}
      </div>
    </div>
  );
};

export default LoginModal;
