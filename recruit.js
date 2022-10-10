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

let $sectionContentsHorizonCorp = document.querySelector('.section-contents__ul--horizon-corp');
let $sectionContentsRewardCorp = document.querySelector('.section-contents__ul--reward-corp');

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
paintHorizonCorpContents();
paintRewardCorpContents();