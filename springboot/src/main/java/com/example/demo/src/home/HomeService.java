package com.example.demo.src.home;

import com.example.demo.common.BaseException;
import com.example.demo.common.BaseResponseStatus;
import com.example.demo.src.home.model.GetHomeRes;
import com.example.demo.src.home.model.MainCategory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
@Service
public class HomeService {

    private final HomeDao homeDao;

    public List<MainCategory> getCategories() throws BaseException {
        try {
            List<MainCategory> getHomeRes = homeDao.getCategories();
            return getHomeRes;
        } catch (Exception exception) {
            System.out.println(exception);
            throw new BaseException((BaseResponseStatus.DATABASE_ERROR));
        }
    }
}
