package com.by.web.backend.entites;

import lombok.Data;

import java.util.Date;

/**
 * 博客
 *
 * @author by.
 * @date 2022/8/15
 */
@Data
public class Blog {

    /**
     * 博客编号
     */
    private String blogId;

    /**
     * 标题
     */
    private String title;

    /**
     * 头像，一个os地址
     */
    private String avatar;

    /**
     * 描述
     */
    private String description;

    /**
     * 创建日期
     */
    private Date createdDate;
}
