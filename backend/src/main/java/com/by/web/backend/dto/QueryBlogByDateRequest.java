package com.by.web.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.util.Assert;

import java.util.Date;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/17
 */
@Data
public class QueryBlogByDateRequest implements ApiReq{

    private Date date;

    @Override
    public void verify() {
        Assert.notNull(date,"查询日期不可为空");
    }
}
