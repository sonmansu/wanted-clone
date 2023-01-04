package com.example.demo.src.home;

import com.example.demo.src.home.model.GetHomeRes;
import com.example.demo.src.home.model.MainCategory;
import com.example.demo.src.home.model.SubCategory;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Repository
public class HomeDao {
    private final JdbcTemplate jdbcTemplate;

    public List<MainCategory> getCategories() {
        String getCategoriesQuery = "SELECT M.mainId as mainId, mainText, subId, subText FROM MAIN_CATEGORY M INNER " +
                "JOIN SUB_CATEGORY S ON (M.mainId = S.mainId) order by mainId;";

        Map<Integer, MainCategory> mainCategoriesById = new HashMap<>();
        this.jdbcTemplate.query(getCategoriesQuery,
                new RowMapper<MainCategory>() {
                    @Override
                    public MainCategory mapRow(ResultSet rs, int rowNum) throws SQLException {
                        int mainId = rs.getInt("mainId");
                        String mainText = rs.getString("mainText");
                        int subId = rs.getInt("subId");
                        String subText = rs.getString("subText");

                        MainCategory mainCategory = mainCategoriesById.get(mainId);
                        if (mainCategory == null) {
                            mainCategory = new MainCategory(mainId, mainText);
                            mainCategoriesById.put(mainCategory.getMainId(), mainCategory);
                        }
                        mainCategory.addSubCategory(new SubCategory(subId, subText));
                        return mainCategory;
                    }
                });
        List<MainCategory> mainCategories = mainCategoriesById.values()
                                                            .stream()
                                                            .sorted()
                                                            .collect(
                                                                    Collectors.toCollection(ArrayList::new)
                                                            );;

//        System.out.println(mainCategories.size());
//        Collections.sort(mainCategories);

        return mainCategories;
    }
}


