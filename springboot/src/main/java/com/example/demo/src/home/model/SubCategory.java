package com.example.demo.src.home.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SubCategory {
    private int subId;
    private String text;

    @Override
    public String toString() {
        return "subId: " + subId + ", subText: " + text;
    }
}
