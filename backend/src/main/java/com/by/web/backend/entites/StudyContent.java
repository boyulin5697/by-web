package com.by.web.backend.entites;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.io.Serializable;

/**
 * Study content
 *
 * @author by.
 * @date 2022/11/1
 */
@Data
@TableName("study_content")
public class StudyContent implements Serializable {

    @TableId(value = "id")
    private int id;

    @TableField(value = "title")
    private String title;

    @TableField(value = "src")
    private String src;

    @TableField(value = "description")
    private String description;

    @TableField(value = "type")
    private int type;

    @TableField(value = "ref")
    private String ref;
}
