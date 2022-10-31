import React from 'react';
import categoryList from '../mock/categoryList.json'; // json파일을 subCategory란 이름으로 불러옴
import { useState, useEffect, useRef } from 'react';
import '../styles/dropdown.css';
import SubcategoryItem from './SubcategoryItem';
import { Link } from 'react-router-dom';

const Dropdown = ({ onDropdownLeave, isMenuHover }) => {
  const { mainCategory, subCategory } = categoryList;
  const [isMainHover, setMainHover] = useState(false);
  const [subcategoryWidth, setSubcategoryWidth] = useState(0);

  const [dropdownMainCategory, setDropdownMainCategory] =
    useState(mainCategory);
  const [dropdownSubCategory, setDropdownSubCategory] = useState([]);

  const subCategoryRef = useRef();
  const subCategoryItemRef = useRef();
  const onMainOver = (e, mainId) => {
    setMainHover(true);
    console.log(e, mainId);
    console.log('onMainOver');
    console.dir(e.target);
    // 개발에 관련된 sub category들을 subcategory list에 뿌려줌
    if (subCategory[mainId]) {
      // console.log('카테고리:', subCategory[mainId]);
      const subcategoryText = subCategory[mainId]; //json파일에서 카테고리 텍스트 가져옴
      subCategoryList = subcategoryText.map((item) => {
        return (
          <SubcategoryItem
            mainId={mainId}
            subId={item.subId}
            text={item.text}
            ref={subCategoryItemRef}
          />
        );
      });
      //   console.log('subcategoryList :>> ', subCategoryList);
      // setDropdownSubCategory(subcategoryText);
      setDropdownSubCategory(subCategoryList);
      // setSubcategoryWidth(calcSubcategoryWidth());
      setSubCategoryListWidth();
    }

    // if (subCategory[mainCategoryText]) {
    //   // console.log('카테고리:', subCategory[mainCategoryText]);
    //   subCategoryList = subCategory[mainCategoryText].map((item) => (
    //     <SubcategoryItem
    //       mainId={1}
    //       subId={1}
    //       text={item.text}
    //       ref={subCategoryItemRef}
    //     />
    //   ));
    //   setDropdownSubCategory(subCategoryList);
    //   // setSubCategoryListWidth();
    // }
    // }
  };

  const mainCategoryList = dropdownMainCategory.map((item) => (
    <li
      className="dropdown-main-category__item"
      key={item.mainId}
      onMouseOver={(e) => {
        onMainOver(e, item.mainId);
      }}
    >
      <Link
        to={`/jobList${item.mainId === 0 ? '' : `/${item.mainId}`}`}
        className="dropdown-main-category__link"
      >
        {item.text}
      </Link>
    </li>
  ));
  let subCategoryList = [];
  let $subcategoryList = [];

  // function calcSubcategoryWidth() {
  //   /* position: absolute 값 때문에 width값을 명시적으로 줘야함 */
  //   const itemCnt = subCategoryRef.current.children.length;
  //   const listHeight = subCategoryRef.current.clientHeight;
  //   const itemHeight = subCategoryRef.current.children[0]?.offsetHeight; // 40, clientHeight는 38나옴
  //   console.dir(subCategoryRef.current);
  //   console.log('subCategoryItemRef.current', subCategoryItemRef.current);
  //   const itemWidth = subCategoryRef.current?.children[0]?.offsetWidth; // 200, clientWidth는 198나옴
  //   const itemCntPerLine = listHeight / itemHeight; // 18
  //   const lineCnt = Math.ceil(itemCnt / itemCntPerLine); // 올림
  //   return itemWidth * lineCnt;
  // }
  function setSubCategoryListWidth() {
    /* position: absolute 값 때문에 width값을 명시적으로 줘야함 */
    const itemCnt = subCategoryRef.current.children.length;
    const listHeight = subCategoryRef.current.clientHeight;
    const itemHeight = subCategoryRef.current.children[0]?.offsetHeight; // 40, clientHeight는 38나옴
    console.dir(subCategoryRef.current);
    console.log('subCategoryItemRef.current', subCategoryItemRef.current);
    const itemWidth = subCategoryRef.current.children[0]?.offsetWidth; // 200, clientWidth는 198나옴
    const itemCntPerLine = listHeight / itemHeight; // 18
    const lineCnt = Math.ceil(itemCnt / itemCntPerLine); // 올림
    setSubcategoryWidth(itemWidth * lineCnt);
    subCategoryRef.current.style.width = subcategoryWidth + 'px';
  }
  useEffect(setSubCategoryListWidth, [setDropdownSubCategory]);

  return (
    <div
      className={isMenuHover ? 'dropdown-menu-box' : 'dropdown-menu-box hidden'}
      onMouseLeave={() => {
        onDropdownLeave();
        setMainHover(false);
      }}
    >
      <nav>
        <ul className="dropdown-main-category__list">{mainCategoryList}</ul>
      </nav>
      <nav className="dropdown-subcategory-nav">
        <ul
          width="100px"
          // width={subcategoryWidth + 'px'}
          ref={subCategoryRef}
          className={
            isMenuHover && isMainHover
              ? 'dropdown-sub-category__list'
              : 'dropdown-sub-category__list hidden'
          }
        >
          {/* {subCategoryList} */}
          {dropdownSubCategory}
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
