
function setSubCategoryListWidth() {
    /* position: absolute 값 때문에 width값을 명시적으로 줘야함 */
    const $dropdownSubCategoryList = document.querySelector('.dropdown-sub-category__list');
    const $dropdownSubCategoryItem = document.querySelector('.dropdown-sub-category__item');

    const itemCnt = $dropdownSubCategoryList.children.length;
    const listHeight = $dropdownSubCategoryList.clientHeight;
    const itemHeight = $dropdownSubCategoryItem.offsetHeight; // 40, clientHeight는 38나옴
    const itemWidth = $dropdownSubCategoryItem.offsetWidth; // 200, clientWidth는 198나옴


    const itemCntPerLine = listHeight / itemHeight; // 18
    const lineCnt = Math.ceil(itemCnt / itemCntPerLine); // 올림

    // console.log('listHeight :>> ', listHeight);
    // console.log('itemCnt :>> ', itemCnt);
    // console.log($dropdownSubCategoryItem);
    // console.log('itemCntPerLine :>> ', itemCntPerLine);
    // console.log('lineCnt :>> ', lineCnt);
    // console.log('itemWidth :>> ', itemWidth);

    $dropdownSubCategoryList.style.width = itemWidth * lineCnt + 'px';
    // console.log(itemWidth * lineCnt);
    // console.log($dropdownSubCategoryList.style.width);
}


const $menuBtn = document.querySelector('.menu-btn');
const $dropdownMenu = document.querySelector('.dropdown-menu-box');
const $dropdownMenuMain = document.querySelector('.dropdown-main-category__list');
const $dropdownMenuSub = document.querySelector('.dropdown-sub-category__list');

const HIDDEN_CLASSNAME = 'hidden'

$menuBtn.addEventListener('mouseenter', (e) => {
    $dropdownMenuMain.classList.remove(HIDDEN_CLASSNAME);
});

$dropdownMenu.addEventListener('mouseleave', (e) => {
    console.log('mouseleave!');
    $dropdownMenuMain.classList.add(HIDDEN_CLASSNAME);
    $dropdownMenuSub.classList.add(HIDDEN_CLASSNAME);
});

$dropdownMenuMain.addEventListener('mouseover', e => {
    const eventTarget = e.target;
    // console.dir(eventTarget);

    if (eventTarget.classList.contains('dropdown-main-category__link')) {
        // console.log('a 태그 만짐');
        $dropdownMenuSub.classList.remove(HIDDEN_CLASSNAME);
        setSubCategoryListWidth();
    }

    const mainCategory = eventTarget.innerText;
    if (mainCategory === '개발') {
        // 개발에 관련된 sub category들을 subcategory list에 뿌려줌
    }
});

$dropdownMenuMain.addEventListener('click', e => {
    const eventTarget = e.target;
    const mainCategory = eventTarget.innerText;
    if (mainCategory === '개발') {
        // 개발에 관련된 sub category들을 subcategory list에 뿌려줌
        location.href = 'job-list.html';
    }
})