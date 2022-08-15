package com.by.web.backend.entites;

import com.by.web.backend.utils.UuidTool;
import lombok.Data;

/**
 * user
 *
 * @author by.
 * @date 2022/8/15
 */
@Data
public class User {
    private String userId = UuidTool.getUUID();

    private String nickName;

    private String password;

    private String email;

    private String gender;

    private String intro;
}
