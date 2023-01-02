package com.example.demo.src.home;

import com.example.demo.src.home.model.GetHomeRes;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class HomeDao {
    private final JdbcTemplate jdbcTemplate;

    public GetHomeRes getCategories() {
        String getCategoriesQuery = "SELECT M.mainId as mainId, mainText, subId, subText" +
                                    "FROM MAIN_CATEGORY M" +
                                    "INNER JOIN SUB_CATEGORY S ON (M.mainId = S.mainId);";
        String getMainCategoriesQuery =
        String getSubCategoryQuery =

                new RowMapper<Member>() {
                    @Override
                    public Member mapRow(ResultSet rs, int rowNum) throws SQLException {
                        Member member = new Member(
                                rs.getString("EMAIL"),
                                rs.getString("PASSWORD"),
                                rs.getString("NAME"),
                                rs.getTimestamp("REGDATE").toLocalDateTime());
                        member.setId(rs.getLong("ID"));
                        return member;
                    }
                }

        List<GetHomeRes> getHomeResList = this.jdbcTemplate.query(getCategoriesQuery,
                (rs, rowNum) -> new GetHomeRes(
                        rs.getInt("mainId"),
                        rs.getString("mainText")

                ));
        return this.jdbcTemplate.query(getCategoriesQuery,
                (rs, rowNum) -> new GetHomeRes(
                        rs.getInt("mainId"),
                        rs.getString("mainText")

                )
                );
    }
}
