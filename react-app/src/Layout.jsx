import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/layout.css';
import SearchModal from './components/SearchModal';
import { useState } from 'react';
import LoginModal from 'components/LoginModal/LoginModal';

const Layout = () => {
  const [isSearchModalOn, setSearchModalOn] = useState(false);
  const [isLoginModalOn, setLoginModalOn] = useState(false);

  const onClickSearchBtn = () => {
    if (isSearchModalOn) {
      setSearchModalOn(false);
    } else {
      setSearchModalOn(true);
    }
  };

  const onClickLoginBtn = () => {
    console.log('login btn');
    if (isLoginModalOn) setLoginModalOn(false);
    else setLoginModalOn(true);
  };

  return (
    <div>
      <Header
        onClickSearchBtn={onClickSearchBtn}
        onClickLoginBtn={onClickLoginBtn}
      />
      {isSearchModalOn && <SearchModal setSearchModalOn={setSearchModalOn} />}
      {isLoginModalOn && <LoginModal setLoginModalOn={setLoginModalOn} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
