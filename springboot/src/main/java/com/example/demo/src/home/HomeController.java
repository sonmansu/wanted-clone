package com.example.demo.src.home;

import com.example.demo.common.BaseException;
import com.example.demo.common.BaseResponse;
import com.example.demo.src.home.model.GetHomeRes;
import com.example.demo.src.home.model.MainCategory;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/wanted/home")
public class HomeController {

    private final HomeService homeService;

    /**
     * 메인, 서브 카테고리 목록 조회
     * [GET] {{host}}/wanted/home/categories
     * @return BaseResponse<GetHomeRes>
     */
    @ResponseBody
    @GetMapping("/categories")
    public BaseResponse<List<MainCategory>> getCategories() {
        try {
            List<MainCategory> getHomeResList = homeService.getCategories();
            return new BaseResponse<>(getHomeResList);
        } catch (BaseException e) {
            throw new RuntimeException(e);
        }
    }
}
