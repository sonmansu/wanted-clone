$(function () {
  /** 메인 슬라이더 **/
  $('.section-slider__list').slick({
    centerMode: true,
    centerPadding: 0,
    centeredSlides: true,
    variableWidth: true,
    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite: true, 	//무한 반복 옵션	 
    slidesToShow: 1,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed: 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, 		// 옆으로 이동하는 화살표 표시 여부
    //   dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true,			// 자동 스크롤 사용 여부
    autoplaySpeed: 5000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false,		// 세로 방향 슬라이드 옵션
    prevArrow: `<button class="section-slider__btn"><img src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png" alt="right button"></button>`,		// 이전 화살표 모양 설정
    nextArrow: `<button class="section-slider__btn section-slider__btn--right"><img class="rotate-180" src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png" alt="left button"></button>`,		// 다음 화살표 모양 설정
    //   dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable: true, 	//드래그 가능 여부 

    //   responsive: [ // 반응형 웹 구현 옵션
    //       {  
    //           breakpoint: 960, //화면 사이즈 960px
    //           settings: {
    //               //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //               slidesToShow:3 
    //           } 
    //       },
    //       { 
    //           breakpoint: 768, //화면 사이즈 768px
    //           settings: {	
    //               //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //               slidesToShow:2 
    //           } 
    //       }
    //   ]

  });
  // $('.insight-categories__ul').slick({
  //   centerMode: true,
  //   centerPadding: 0,
  //   centeredSlides: true,
  //   variableWidth: true,
  //   slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
  //   infinite: true, 	//무한 반복 옵션	 
  //   slidesToShow: 1,		// 한 화면에 보여질 컨텐츠 개수
  //   // slidesToScroll: 1,		//스크롤 한번에 움직일 컨텐츠 개수
  //   speed: 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
  //   arrows: true, 		// 옆으로 이동하는 화살표 표시 여부
  //   //   dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
  //   pauseOnHover: true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
  //   vertical: false,		// 세로 방향 슬라이드 옵션
  //   prevArrow: `<button class="section-slider__btn"><img src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png" alt="right button"></button>`,		// 이전 화살표 모양 설정
  //   nextArrow: `<button class="section-slider__btn section-slider__btn--right"><img class="rotate-180" src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png" alt="left button"></button>`,		// 다음 화살표 모양 설정
  //   //   dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
  //   draggable: true, 	//드래그 가능 여부 
  // });

  $('.search-tag-slider-box').slick({
    // centerMode: true,
    // centerPadding: '50px',
    // centerPadding: '230px',
    centerPadding: 0,
    variableWidth: true,
    centeredSlides: true,
    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite: true, 	//무한 반복 옵션	 
    slidesToShow: 1,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 5,		//스크롤 한번에 움직일 컨텐츠 개수
    speed: 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, 		// 옆으로 이동하는 화살표 표시 여부
    //   dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    // autoplay: true,			// 자동 스크롤 사용 여부
    //   autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false,		// 세로 방향 슬라이드 옵션
    prevArrow: `
    <div class="btn-gradient-bg btn-gradient-bg--small">
                            <button class="arrow-btn-bg arrow-btn-bg--small">
                                <img src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
                                    alt="left button" />
                            </button>
                        </div>
    `,		// 이전 화살표 모양 설정
    nextArrow: `
    <div class="btn-gradient-bg btn-gradient-bg--small btn-gradient-bg--right">
                            <button class="arrow-btn-bg arrow-btn-bg--small">
                                <img class="rotate-180"
                                    src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-arrow-digital-design-outline-set-2-outline-stroke-bomsymbols-.png"
                                    alt="right button" />
                            </button>
                        </div>
    `,		// 다음 화살표 모양 설정
    //   dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable: true, 	//드래그 가능 여부 

    //   responsive: [ // 반응형 웹 구현 옵션
    //       {  
    //           breakpoint: 960, //화면 사이즈 960px
    //           settings: {
    //               //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //               slidesToShow:3 
    //           } 
    //       },
    //       { 
    //           breakpoint: 768, //화면 사이즈 768px
    //           settings: {	
    //               //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //               slidesToShow:2 
    //           } 
    //       }
    //   ]

  });
})