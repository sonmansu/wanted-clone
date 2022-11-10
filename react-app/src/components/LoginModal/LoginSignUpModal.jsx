import React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/loginModal.css';
import EmailModal from './EmailModal';
import PasswordModal from './PasswordModal';
import SignUpModal from './SignUpModal';

const LoginSignUpModal = ({ activatedModal, setActivatedModal }) => {
  const loginModalRef = useRef();

  const onClickModalWindow = (e) => {
    console.dir(e.target);
    // 모달창 영역 밖을 클릭했다면
    if (!loginModalRef.current.contains(e.target)) {
      if (activatedModal === 1) {
        setActivatedModal(0);
      } else {
        let isCancel = window.confirm('취소하시겠습니까?');
        if (isCancel) setActivatedModal(0);
      }
    }
    // console.log(loginModalRef.current.contains('.email-modal'));
    // console.dir(loginModalRef.current.children[0] === 'div.email-modal');
    // console.dir(loginModalRef.current);
  };

  return (
    <div className="login-modal-window" onClick={onClickModalWindow}>
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

export default LoginSignUpModal;
