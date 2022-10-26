// import TopBanner from './TopBanner';
// import Section from './Section';

// const Main = () => {
//     let careerInsights = {
//         'imgs': [
//             'https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F9kS%2Fimage%2FNYyzp7--e8G1MqXahXh-n8qXYhU.jpeg&w=500&q=75',
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211108%2F5%2F52227108.jpg&w=500&q=75`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon152.png&w=140&q=75`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon152.png&w=140&q=75`,
//             `https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FbxZK%2Fimage%2FD3ZvS-OetrtrFm4yJQXEwx6X6qA.jpg&w=500&q=75`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F8%2F99233240.jpg&w=500&q=75`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201229%2F9%2F96649545.jpg&w=500&q=75`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20201228%2F6%2F54160958.jpg&w=500&q=75`
//         ],
//         'titles': [
//             `트럼프도 따봉하는 '프로덕트 오너 마인드셋 Top 3'`,
//             `Live Talk : 직장 내 관계의 어려움 해결하기 - 박정환`,
//             `리더도 리더가 필요합니다.`,
//             `리더십은 만병통치약이 아니다`,
//             `디지털전환시대에 효과적인리더십`,
//             `조직 생존을 위한 Digital Leadership - 오용석`,
//             `복잡한 시대, 리더가 유지해야 할 것과 유발해야 할 것 - 정영재`,
//             `패널토론 New Leadership & HRD Re-Design - 조해리, 신제구, 임창현`
//         ],
//         'descs': [
//             `프로덕트 오너 Product Owner는 정신머리를 잘 붙들고 있어야합니다. 딸린 식구가 많기 때문입니다.`,
//             `사람은 사회적 동물이지만, 늘 인간관계에 대한 고민을 하면서 살아갑니다.인간관계가 힘들고 어`,
//             `리더의 성장과 성공을 도와주는 리더가 있어야 합니다. [1] 조직에서 임원이나 팀장님들을 만날 `,
//             `블라인드에 80명의 조직을 맡으며 번아웃 오고 있다는 한 스타트업 리더의 글에 지인들과 의견이 오`,
//             `국가과학기술연구회 주관으로 진행된 정부출연 25개 연구기관의 연구행정혁신추진단 전문분과`,
//             `최근 수많은 기업들은 생존하기 위해, 언텍트를 인정하고 빠르게 디지털화를 시도하고 있습니다. 이`,
//             `지금 조직들이 가장 많이 스터디하고 있는 'Agile'에 대한 이해를 통해 바람직한 리더의 역할`,
//             `본 글은 개인 경험을 바탕으로 서술된 글입니다. 정답이 아닌 생각의 실마리를 제공하고 각자 나름의`
//         ],
//         'icons': [
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90`,

//         ],
//         'writers': [
//             `키릴 kiril`,
//             `박정환`,
//             `그로플 백종화`,
//             `ssoo`,
//             `변화디자이너 허일무박사`,
//             `SAP Korea 오용석`,
//             `LS그룹 정영재`,
//             `서울대학교 신제구, mySUNI임창현`
//         ]
//     };
//     let articles = {
//         'imgs': [
//             'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2429%2Ffca14c2b.jpg&w=800&q=75',
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2437%2F30d52ee0.jpg&w=800&q=75`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2430%2Fd892e109.jpg&w=800&q=75`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75`,
//         ],
//         'titles': [
//             `LG전자ㅣ애플에서 8년은 일하는 방법을 가르쳐 준 시간`,
//             `스타트업에서는 어떤 방식으로 시니어를 채용해야 할까?`,
//             `IP 확장 그리고 글로벌 진출로 세계 선구자가 되다`,
//             `리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI 팀`,
//         ],
//         'tags': [
//             `#데이터 `,
//             `#HR`,
//             `#미디어 #콘텐츠 제작 #회사E생활`,
//             `#개발 #IT/기술 #취업/이직`,
//         ],
//         'icons': [
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90`,
//         ],
//     }
//     let vods = {
//         'imgs': [
//             'https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210224%2F8%2F90123633.jpg&w=800&q=75',
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210713%2F1%2F22621559.jpg&w=800&q=75`,
//             `https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210521%2F7%2F68765761.jpg&w=800&q=75`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75`,
//             // `https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210512%2F2%2F32385576.jpg&w=800&q=75`,
//         ],
//         'playtimes': [
//             `1:34:40`,
//             `1:29:15`,
//             `1:25:16`,
//             `39:34`,
//         ],
//         'authors': [
//             `노무법인 예담HR컨설팅 장내석`,
//             `리더의대화연구소 서수한`,
//             `인터비즈 팀장클럽 김진영`,
//             `애프터모멘트 박창선`
//         ],
//         'titles': [
//             `함께 일하고 싶은 리더가 되는 질문법`,
//             `팀장으로 산다는 건`,
//             `리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI 팀`,
//             `터지는 콘텐츠는 이렇게 만듭니다 Part 3 : 위트와 무리수레벨 조절하기 - 박창선`,
//         ],
//         'descs': [
//             `모춘&대오의 퇴사 후 무자본 창업기`,
//             `일잘러의 무기는 테크닉일까, 마인드셋일까 : Live Talk #26`,
//             `팀장으로 산다는 건 : Live Talk #30`,
//             `터지는 콘텐츠는 이렇게 만듭니다 : Wanted How To`,
//         ],
//     }
//     let events = {
//         'imgs': [
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2421%2F7065bb13.jpg&w=1200&q=100`,
//             `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2404%2F54ecb586.jpg&w=1200&q=100`,

//         ],
//         'kinds': [
//             ['온라인', '네트워킹'],
//             ['아티클']
//         ],
//         'titles': [
//             `10월 원티드살롱(평가보상편)`,
//             `인터뷰ㅣ여성 IT리더들의 성장 경험을 공유합니다!`
//         ],
//     }
//     let eventKindClass = {
//         '온라인': 'section-contents__kinds__span--online',
//         '네트워킹': 'section-contents__kinds__span--network',
//         '아티클': 'section-contents__kinds__span--article',
//     }

//     return (
//         // <main>
//         {/* <TopBanner />
//             <Section title='나에게 필요한 커리어 인사이트' contents={careerInsights} />
//             <div className='divider'></div>
//             <Section title='3분만에 읽는 Wanted+ 아티클' subtitle='아티클 전체보기' contents={articles} />
//             <Section title='직장인을 위한 Wanted+ VOD' subtitle='VOD 전체보기' contents={vods} /> */}
//             {/* <LineBanner /> */ }
//     {/* <Section title='커리어 성장을 위한 맞춤 이벤트' subtitle='이벤트 전체보기' contents={events} /> */ }
//     {/* <SubscribeSection />
//             <RecruitmentSection /> */}
//         // </main>
        
//     )
// }

// export default Main;