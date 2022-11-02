import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';
import '../styles/searchModal.css';

const SearchModal = ({ setSearchModalOn }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const navigate = useNavigate();
  const onSearch = (e) => {
    const searchKeyword = inputValue;
    console.log(searchKeyword);
    setSearchModalOn(false);
    e.preventDefault();
    navigate(`/search?query=${searchKeyword}`);
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickModalWindow = (e) => {
    console.dir(inputRef.current);
    console.log(inputRef.current.classList);
    if (inputRef.current.contains(e.target)) {
      console.log('contain');
    } else {
      console.log('not contain');
      setSearchModalOn(false); // 이게 되네..
    }
  };
  return (
    <div className="modal-window" onClick={onClickModalWindow}>
      <div className="modal-bg">
        <div className="modal-wrapper">
          <form className="search-form" onSubmit={onSearch}>
            <span className="material-icons-round search-form__icon">
              search
            </span>
            <input
              ref={inputRef}
              value={inputValue}
              onChange={onChangeInput}
              className="search-form__input"
              placeholder="#태그, 회사, 포지션 검색"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
