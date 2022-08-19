package com.by.web.backend.entites;

import com.baomidou.mybatisplus.annotation.SqlCondition;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
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
    @TableId(value = "blog_id")
    private String blogId;

    /**
     * 标题
     */
    @TableField(value = "title", condition = SqlCondition.LIKE)
    private String title;

    /**
     * 头像，一个os地址
     */
    @TableField(value = "avatar")
    private String avatar;

    /**
     * 描述
     */
    @TableField(value = "description")
    private String description;

    /**
     * 创建日期
     */
    @TableField(value = "created_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createdDate;

    /**
     * 点赞数
     */
    @TableField(value = "likes")
    private int likes;

    /**
     * 评论数
     */
    @TableField(value = "comments")
    private int comments;

    /**
     * 最低可阅读等级
     *
     */
    @TableField(value = "access_min_level")
    private int accessMinLevel;
}
