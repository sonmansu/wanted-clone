package com.example.demo.src.home.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class GetHomeRes {
    private int mainId;
    private String text;
    private List<SubCategory> subCategory;
}
/**
 * {
 *       "mainId": 19,
 *       "text": "공공·복지",
 *       "subCategory": [
 *         { "subId": 0, "text": "공공·복지 전체" },
 *         { "subId": 1, "text": "정보 분석가" },
 *         { "subId": 2, "text": "카운셀러" },
 *         { "subId": 3, "text": "공무원" },
 *         { "subId": 4, "text": "지역 전문가" },
 *         { "subId": 5, "text": "사회복지사" },
 *         { "subId": 6, "text": "소방관" },
 *         { "subId": 7, "text": "환경 전문가" },
 *         { "subId": 8, "text": "인명 구조원" },
 *         { "subId": 9, "text": "직업군인" },
 *         { "subId": 10, "text": "응급구조사" },
 *         { "subId": 11, "text": "요양보호사" },
 *         { "subId": 12, "text": "자원봉사자" }
 *       ]
 *     }
 */