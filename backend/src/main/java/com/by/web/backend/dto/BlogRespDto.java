package com.by.web.backend.dto;

import com.baomidou.mybatisplus.annotation.SqlCondition;
import com.baomidou.mybatisplus.annotation.TableField;
import com.by.web.backend.entites.BlogDetail;
import com.by.web.backend.utils.UuidTool;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/31
 */
@Data
public class BlogRespDto implements Serializable {
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

    private String blogContent;

    private List<BlogDetail.Comment> commentList;

}
