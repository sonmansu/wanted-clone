package com.example.demo.src.home;

import com.example.demo.common.BaseException;
import com.example.demo.common.BaseResponseStatus;
import com.example.demo.src.home.model.GetHomeRes;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class HomeService {

    private final HomeDao homeDao;

    public GetHomeRes getCategories() throws BaseException {
        try {
            GetHomeRes getHomeRes = homeDao.getCategories();
            return getHomeRes;
        } catch (Exception exception) {
            System.out.println(exception);
            throw new BaseException((BaseResponseStatus.DATABASE_ERROR));
        }
    }
}
