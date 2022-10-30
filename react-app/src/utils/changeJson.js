const arr = [
    { "text": "엔지니어링·설계 전체" },
    { "text": "기계 엔지니어" },
    { "text": "전자 엔지니어" },
    { "text": "전기 엔지니어" },
    { "text": "로봇·자동화" },
    { "text": "CAD·3D 설계자" },
    { "text": "제품 엔지니어" },
    { "text": "제어 엔지니어" },
    { "text": "QA 엔지니어" },
    { "text": "장비 엔지니어" },
    { "text": "전기기계 공학자" },
    { "text": "설비 엔지니어" },
    { "text": "공정 엔지니어" },
    { "text": "항공우주 공학자" },
    { "text": "QC 엔지니어" },
    { "text": "RF 엔지니어" },
    { "text": "건설 엔지니어" },
    { "text": "구조공학 엔지니어" },
    { "text": "자동차 공학자" },
    { "text": "화학공학 엔지니어" },
    { "text": "토목기사" },
    { "text": "환경 엔지니어" },
    { "text": "환경 안전기사" },
    { "text": "인허가 담당 엔지니어" },
    { "text": "고압설계 엔지니어" },
    { "text": "플랜트 엔지니어" },
    { "text": "프로젝트 엔지니어" },
    { "text": "소방안전 기술자" },
    { "text": "산업 엔지니어" },
    { "text": "재료공학자" },
    { "text": "도면 담당자" },
    { "text": "시운전 엔지니어" },
    { "text": "도면 작성가" },
    { "text": "지리정보시스템" },
    { "text": "I&C 엔지니어" },
    { "text": "선박 공학자" },
    { "text": "원자력·에너지" },
    { "text": "석유공학 엔지니어" },
    { "text": "배관설계 엔지니어" },
    { "text": "사업수주 엔지니어" },
    { "text": "전자계전 엔지니어" },
    { "text": "회전기계 엔지니어" },
    { "text": "농업 공학자" },
    { "text": "유전 공학자" },
    { "text": "생물의학자" },
    { "text": "보일러 엔지니어" },
    { "text": "세라믹 엔지니어" },
    { "text": "시추 엔지니어" },
    { "text": "지리학자" },
    { "text": "지질공학자" },
    { "text": "보건안전 엔지니어" },
    { "text": "생산공학 엔지니어" },
    { "text": "해양공학자" },
    { "text": "금속 공학자" },
    { "text": "광산 기술자" },
    { "text": "광산 안전 기술자" },
    { "text": "플라스틱 엔지니어" },
    { "text": "저수처리 엔지니어" },
    { "text": "터빈공학자" }
]

function addId(arr) {
    const result = arr.map((item, idx) => {
        return { "subId": idx, "text": item.text }
    })
    return result;
}

console.log(addId(arr));