package com.by.web.backend.dto;

import lombok.Data;
import org.springframework.util.Assert;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/17
 */
@Data
public class SearchBlogRequest implements ApiReq{

    private String searchString;

    private int pageNum = 1;

    private int pageSize = 10;

    @Override
    public void verify() {
        Assert.hasText(searchString,"搜索内容不能为空！");
    }
}
