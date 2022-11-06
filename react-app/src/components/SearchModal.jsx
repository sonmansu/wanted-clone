import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/searchModal.css';
import recommendTagsObj from '../mock/recommendTags.json';
import { useMemo } from 'react';

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
      setSearchModalOn(false);
    }
  };

  const getRandomTags = () => {
    const tags = [];
    for (let key in recommendTagsObj) {
      tags.push(...recommendTagsObj[key]);
    }
    const randomIdxArr = [];
    while (true) {
      const randomIdx = Math.floor(Math.random() * tags.length);
      if (randomIdxArr.indexOf(randomIdx) === -1) {
        randomIdxArr.push(randomIdx);
      }
      if (randomIdxArr.length === 5) break;
    }
    const result = randomIdxArr.map((idx) => tags[idx]);
    // console.log('randomtags', result);
    return result;
  };
  const randomTags = useMemo(() => getRandomTags(), []);

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
          <div className="search-tag-wrapper">
            <div className="search-texts-row">
              <h4 className="search-text">추천태그로 검색해보세요</h4>
              <Link className="search-link-btn">
                기업태그 홈 이동하기
                <span className="material-icons-round">chevron_right</span>
              </Link>
            </div>
            <div className="recommend-tags-row">
              <ul>
                {randomTags.map((tag) => (
                  <li className="recommend-tag__item">
                    <Link>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
