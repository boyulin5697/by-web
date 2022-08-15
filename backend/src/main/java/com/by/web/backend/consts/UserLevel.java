package com.by.web.backend.consts;

/**
 * 用户等级
 *
 * @author by.
 * @date 2022/8/15
 */
public interface UserLevel {
    /**
     * 普通未登录用户
     */
    int NORMAL = 0;
    /**
     * 注册用户
     */
    int REGISTERED = 1;
    /**
     * 特权用户
     */
    int HONORED = 2;
    /**
     * 最高级用户
     */
    int HIGHEST = 3;
}
