package com.by.web.backend.dto;

import lombok.Data;
import org.springframework.util.Assert;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/15
 */
@Data
public class RegisterRequest implements ApiReq{

    private String nickName;

    private String password;

    private String email;

    private String gender;

    private String intro;

    @Override
    public void verify() {
        Assert.hasText(nickName,"昵称不能为空");
        Assert.hasText(password,"密码不能为空");
        Assert.hasText(email,"邮箱不能为空");
        Assert.hasText(gender,"性别不能为空");
    }
}
