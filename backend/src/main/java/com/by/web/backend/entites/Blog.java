package com.by.web.backend.entites;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * 博客
 *
 * @author by.
 * @date 2022/8/15
 */
@Data
@TableName(value = "blog")
public class Blog {

    /**
     * 博客编号
     */
    @TableId
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

    /**
     * 点赞数
     */
    private int likes;

    /**
     * 评论数
     */
    private int comments;

    /**
     * 最低可阅读等级
     *
     */
    private int accessMinLevel;
}
