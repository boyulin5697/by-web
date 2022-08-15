package com.by.web.backend.entites;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.by.web.backend.utils.UuidTool;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * user
 *
 * @author by.
 * @date 2022/8/15
 */
@Data
@TableName("user")
public class User {
    @TableId(value = "user_id")
    private String userId = UuidTool.getUUID();

    @TableField(value = "nick_name")
    private String nickName;

    @TableField(value = "password")
    private String password;

    @TableField(value = "email")
    private String email;

    @TableField(value = "gender")
    private String gender;

    @TableField(value = "intro")
    private String intro;

    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    @TableField(value = "register_time")
    private Date registerTime = new Date();
}
