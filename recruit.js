let horizonCorps = {
    'imgs': [
        `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F33739%2Fo1muyet8rxgdo6bx__1080_790.jpg&w=520&q=100`,
        `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F3843%2Fel1bersjpzir1u17__1080_790.jpg&w=520&q=100`,

    ],
    'logos': [
        'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.ebb69df3.png&w=42&q=100',
        'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.91086642.jpg&w=42&q=100',
    ],
    'titles': [
        '프레시코드',
        '낭만상회',
    ],
    'kinds': [
        '판매, 유통',
        'IT, 컨텐츠'
    ]
}
let positions = {
    'imgs': [
        `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F33739%2Fo1muyet8rxgdo6bx__1080_790.jpg&w=520&q=100`,
        `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F3843%2Fel1bersjpzir1u17__1080_790.jpg&w=520&q=100`,
        `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F33739%2Fo1muyet8rxgdo6bx__1080_790.jpg&w=520&q=100`,
        `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F3843%2Fel1bersjpzir1u17__1080_790.jpg&w=520&q=100`,
    ],
    'positionNames': [
        '디지털 광고 제작', '콘텐츠 마케터 팀장', 'MD (파트장/팀장)', 'UI/UX 기획 & 디자이너',
    ],
    'corpNames': [
        '테크트리컴퍼니', '킨다그로스', '하우스미디어', '롱기스트',
    ],
    'locates': [
        '서울·한국', '서울·한국', '서울·한국', '서울·한국', 
    ],
    'rewards': [
        '채용보상금 1,000,000원', '채용보상금 1,000,000원', '채용보상금 1,000,000원', '채용보상금 1,000,000원', 
    ]

}

let $sectionContentsHorizonCorp = document.querySelector('.section-contents__ul--horizon-corp');
let $sectionContentsRewardCorp = document.querySelector('.section-contents__ul--reward-corp');
let $sectionContentsPosition = document.querySelector('.section-contents__ul--position');

function paintHorizonCorpContents() {
    for (let i = 0; i < horizonCorps.imgs.length; i++) {
        const $li = `
        <li class="section-contents__li">
            <a href="#">
                <div class="section-contents__thumb section-contents__thumb--big">
                    <img src=${horizonCorps.imgs[i]}" alt="콘텐츠 썸네일">
                </div>
                <div class="corp-body">
                    <div class="corp-body__logo">
                        <img src=${horizonCorps.logos[i]} alt="회사 로고">
                    </div>
                    <div class="corp-body__info">
                        <p class="corp-body__info__title">${horizonCorps.titles[i]}</p>
                        <p class="corp-body__info__kind">${horizonCorps.kinds[i]}</p>
                    </div>
                    <div class="corp-body__follow-btn">팔로우</div>
                </div>
            </a>
        </li>
        `
        $sectionContentsHorizonCorp.insertAdjacentHTML('beforeend', $li);
    }
}
function paintRewardCorpContents() {
    for (let i = 0; i < horizonCorps.imgs.length; i++) {
        const $li = `
        <li class="section-contents__li">
            <a href="#">
                <div class="section-contents__thumb section-contents__thumb--big">
                    <img src=${horizonCorps.imgs[i]}" alt="콘텐츠 썸네일">
                </div>
                <div class="corp-body">
                    <div class="corp-body__logo">
                        <img src=${horizonCorps.logos[i]} alt="회사 로고">
                    </div>
                    <div class="corp-body__info">
                        <p class="corp-body__info__title">${horizonCorps.titles[i]}</p>
                        <p class="corp-body__info__kind">${horizonCorps.kinds[i]}</p>
                    </div>
                    <div class="corp-body__follow-btn">팔로우</div>
                </div>
            </a>
        </li>
        `
        $sectionContentsRewardCorp.insertAdjacentHTML('beforeend', $li);
    }
}
function paintPositionContents() {
    for (let i = 0; i < positions.imgs.length; i++) {
        const $li = `
        <li class="section-contents__li">
            <a href="#">
                <div class="section-contents__thumb">
                    <img src=${positions.imgs[i]}" alt="콘텐츠 썸네일">
                    <div class="section-contents__bookmark-icon">
                        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fill-opacity="0.25"></path></svg>
                    </div>
                </div>
                <div class="position-body">
                    <p class="position-body__pos-name">${positions.positionNames[i]}</p>
                    <p class="position-body__corp-name">${positions.corpNames[i]}</p>
                    <p class="position-body__locate">${positions.locates[i]}</p>
                    <p class="position-body__reward">${positions.rewards[i]}</p>
                </div>
            </a>
        </li>
        `
        $sectionContentsPosition.insertAdjacentHTML('beforeend', $li);
    } 
}
paintHorizonCorpContents();
paintRewardCorpContents();
paintPositionContents();