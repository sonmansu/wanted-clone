import React from 'react';
import categoryList from '../mock/categoryList.json'; // json파일을 subCategory란 이름으로 불러옴
import { useState, useEffect, useRef } from 'react';
import '../styles/dropdown.css';
import SubcategoryItem from './SubcategoryItem';
import { Link } from 'react-router-dom';

const Dropdown = ({ setMenuDropdownOn }) => {
  const [isMainMenuOn, setMainMenuOn] = useState(false);
  const [subMenuWidth, setSubMenuWidth] = useState(0);

  // 더미 json 카테고리 텍스트들 읽어옴 (원랜 서버 작업)
  const [categories, setCategories] = useState(categoryList.mainCategory);
  // subcategory state (subcategory 내용이 바뀔 때마다 리랜더링 돼야함)
  const [subcategories, setSubcategories] = useState([]);

  const subMenuRef = useRef();
  const subMenuItemRef = useRef();

  // 메인 메뉴 영역에 마우스 올렸을때 이벤트 핸들러
  const onMainOver = (e, mainId, subcategoryArr) => {
    console.log('onMainOver');
    // 각 메인 카테고리에 해당하는 서브카테고리를 subcategory list에 뿌려줌
    if (subcategoryArr) {
      setMainMenuOn(true);
      const $subCategories = subcategoryArr.map((item) => {
        return (
          <SubcategoryItem
            key={item.subId}
            mainId={mainId}
            subId={item.subId}
            text={item.text}
            ref={subMenuItemRef}
          />
        );
      });
      console.log('$subCategories :>> ', $subCategories);
      setSubcategories($subCategories); // 리랜더링
      // setSubcategoryWidth(calcSubcategoryWidth()); // 여기서 호출하면 느리게 적용됨
      // setSubCategoryListWidth();
    } else {
      setSubcategories([]);
    }
  };

  const $maincategories = categories.map((item) => (
    <li
      className="dropdown-main-category__item"
      key={item.mainId}
      onMouseOver={(e) => {
        onMainOver(e, item.maidId, item.subCategory);
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

  function calcSubcategoryWidth() {
    /* position: absolute 값 때문에 width값을 명시적으로 줘야함 */
    const itemCnt = subMenuRef.current.children.length;
    const listHeight = subMenuRef.current.clientHeight;
    const itemHeight = subMenuRef.current.children[0]?.offsetHeight; // 40, clientHeight는 38나옴
    console.dir(subMenuRef.current);
    console.log('subCategoryItemRef.current', subMenuItemRef.current);
    const itemWidth = subMenuRef.current?.children[0]?.offsetWidth; // 200, clientWidth는 198나옴
    const itemCntPerLine = listHeight / itemHeight; // 18
    const lineCnt = Math.ceil(itemCnt / itemCntPerLine); // 올림
    const result = itemWidth * lineCnt;
    //   subCategoryRef.current.style.width = result + 'px';
    //   setSubcategoryWidth(result);
    return result;
  }

  useEffect(() => setSubMenuWidth(calcSubcategoryWidth()), [subcategories]);

  return (
    <div
      className="dropdown-menu-box"
      onMouseLeave={() => {
        setMenuDropdownOn(false);
      }}
    >
      <nav>
        <ul className="dropdown-main-category__list">{$maincategories}</ul>
      </nav>
      <nav className="dropdown-subcategory-nav">
        <ul
          style={{ width: `${subMenuWidth}px` }}
          ref={subMenuRef}
          className={
            isMainMenuOn
              ? 'dropdown-sub-category__list'
              : 'dropdown-sub-category__list hidden'
          }
        >
          {/* {subCategoryList} */}
          {subcategories}
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
