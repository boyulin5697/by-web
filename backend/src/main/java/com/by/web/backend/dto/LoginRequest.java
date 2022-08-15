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
public class LoginRequest implements ApiReq{
    private String loginCredit;

    private String password;

    @Override
    public void verify() {
        Assert.hasText(loginCredit,"登录名/邮箱不能为空");
        Assert.hasText(password,"密码不能为空");
    }
}
