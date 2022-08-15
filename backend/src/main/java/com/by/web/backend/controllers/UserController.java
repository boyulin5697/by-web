package com.by.web.backend.controllers;

import com.by.web.backend.dto.CommonResponse;
import com.by.web.backend.dto.LoginRequest;
import com.by.web.backend.dto.RegisterRequest;
import com.by.web.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/15
 */
@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public CommonResponse register(@RequestBody RegisterRequest request){
        return userService.register(request);
    }

    @PostMapping("/login")
    public CommonResponse login(@RequestBody LoginRequest request){
        return userService.login(request);
    }
}
