const arr = [
    {
        "img": "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F33739%2Fo1muyet8rxgdo6bx__1080_790.jpg&w=520&q=100",
        "position": "디지털 광고 제작",
        "corp": "테크트리컴퍼니",
        "location": "서울·한국",
        "reward": 1000000000
    },
    {
        "img": "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F3843%2Fel1bersjpzir1u17__1080_790.jpg&w=520&q=100",
        "position": "콘텐츠 마케터 팀장",
        "corp": "킨다그로스",
        "location": "서울·한국",
        "reward": 500000000
    },
    {
        "img": "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F33739%2Fo1muyet8rxgdo6bx__1080_790.jpg&w=520&q=100",
        "position": "MD (파트장/팀장)",
        "corp": "하우스미디어",
        "location": "서울·한국",
        "reward": 100000000
    },
    {
        "img": "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F3843%2Fel1bersjpzir1u17__1080_790.jpg&w=520&q=100",
        "position": "UI/UX 기획 & 디자이너",
        "corp": "롱기스트",
        "location": "서울·한국",
        "reward": 80000000
    },
    {
        "img": "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F33739%2Fo1muyet8rxgdo6bx__1080_790.jpg&w=520&q=100",
        "position": "디지털 광고 제작",
        "corp": "테크트리컴퍼니",
        "location": "서울·한국",
        "reward": 1000000000
    },
    {
        "img": "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F3843%2Fel1bersjpzir1u17__1080_790.jpg&w=520&q=100",
        "position": "콘텐츠 마케터 팀장",
        "corp": "킨다그로스",
        "location": "서울·한국",
        "reward": 500000000
    },
    {
        "img": "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F33739%2Fo1muyet8rxgdo6bx__1080_790.jpg&w=520&q=100",
        "position": "MD (파트장/팀장)",
        "corp": "하우스미디어",
        "location": "서울·한국",
        "reward": 100000000
    },
    {
        "img": "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F3843%2Fel1bersjpzir1u17__1080_790.jpg&w=520&q=100",
        "position": "UI/UX 기획 & 디자이너",
        "corp": "롱기스트",
        "location": "서울·한국",
        "reward": 80000000
    }
]

function addId(arr) {
    const result = arr.map((item, idx) => {
        return { "id": idx, ...item }
    })
    return result;
}

console.log(addId(arr));