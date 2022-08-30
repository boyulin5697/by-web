package com.by.web.backend.dto;

import com.baomidou.mybatisplus.annotation.SqlCondition;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.util.Assert;

import java.util.Date;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/30
 */
@Data
public class PostBlogRequest implements ApiReq{

    /**
     * 标题
     */
    private String title;

    /**
     * 头像，一个os地址， 暂时写死
     */
    private String avatar = "https://joeschmoe.io/api/v1/random";

    /**
     * 描述
     */
    private String description;

    /**
     * 博客内容
     */
    private String blogContent;

    /**
     * 创建日期
     */
    private Date createdDate = new Date();

    @Override
    public void verify() {
        Assert.hasText(title,"标题不能为空！");
        Assert.hasText(description,"描述不能为空!");
        Assert.hasText(blogContent,"博客内容不能为空");

    }
}
