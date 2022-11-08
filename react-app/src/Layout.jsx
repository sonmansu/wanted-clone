import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/layout.css';
import SearchModal from './components/SearchModal';
import { useState } from 'react';
import LoginSignUpModal from 'components/LoginModal/LoginSignUpModal';

const Layout = () => {
  const [isSearchModalOn, setSearchModalOn] = useState(false);
  // const [isLoginModalOn, setLoginModalOn] = useState(false);
  const [activatedModal, setActivatedModal] = useState(0);
  /**
   * activatedModal === 0: default, all modals off
   * activatedModal === 1: email modal on
   * activatedModal === 2: signup modal on
   * activatedModal === 3: password modal on
   */

  const onClickSearchBtn = () => {
    if (isSearchModalOn) {
      setSearchModalOn(false);
    } else {
      setSearchModalOn(true);
    }
  };

  const onClickLoginBtn = () => {
    console.log('login btn');
    // if (isLoginModalOn) setLoginModalOn(false);
    // else setLoginModalOn(true);
    if (activatedModal === 0) setActivatedModal(1); // 로그인 모달 on
    else setActivatedModal(0); // off
  };

  return (
    <div>
      <Header
        onClickSearchBtn={onClickSearchBtn}
        onClickLoginBtn={onClickLoginBtn}
      />
      {isSearchModalOn && <SearchModal setSearchModalOn={setSearchModalOn} />}
      {/* {isLoginModalOn && <LoginModal setLoginModalOn={setLoginModalOn} />} */}
      {activatedModal !== 0 && (
        <LoginSignUpModal
          activatedModal={activatedModal}
          setActivatedModal={setActivatedModal}
        />
      )}

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
