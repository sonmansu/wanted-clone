import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/layout.css';
import SearchModal from './components/SearchModal';
import { useState } from 'react';

const Layout = () => {
  const [isSearchModalOn, setSearchModalOn] = useState(false);
  const onClickSearchBtn = () => {
    if (isSearchModalOn) {
      setSearchModalOn(false);
    } else {
      setSearchModalOn(true);
    }
  };

  return (
    <div>
      <Header onClickSearchBtn={onClickSearchBtn} />
      {isSearchModalOn && <SearchModal setSearchModalOn={setSearchModalOn} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
