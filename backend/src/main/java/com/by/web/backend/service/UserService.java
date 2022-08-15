package com.by.web.backend.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.by.web.backend.dao.UserMapper;
import com.by.web.backend.dto.CommonResponse;
import com.by.web.backend.dto.LoginRequest;
import com.by.web.backend.dto.RegisterRequest;
import com.by.web.backend.entites.User;
import com.by.web.backend.utils.JwtUtils;
import com.by.web.backend.utils.modelmappers.ModelMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/15
 */
@Service
public class UserService extends ServiceImpl<UserMapper, User> {

    @Autowired
    private UserMapper userMapper;

    public CommonResponse register(RegisterRequest request){
        request.verify();
        User user = new User();
        ModelMapperUtils.map(request,user);
        userMapper.insert(user);
        return new CommonResponse<>().success(null);
    }

    public CommonResponse login(LoginRequest request){
        request.verify();
        String credit = request.getLoginCredit();
        User user;
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        if(credit.contains("@")){
            queryWrapper.eq("email",credit);
        }else{
            queryWrapper.eq("nickName",credit);
        }
        try {
            user = userMapper.selectOne(queryWrapper);
        }catch (Exception e){
            log.error("There is an error occurs when querying user!",e);
            return new CommonResponse().failed("Internal Service Error!");
        }
        if(user==null){
            return new CommonResponse().failed("The user is not exist!");
        }
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if(!passwordEncoder.matches(request.getPassword(),user.getPassword())){
            return new CommonResponse().failed("Password is not correct!");
        }
        String token = JwtUtils.createToken(user.getUserId());
        return new CommonResponse().success(token);

    }

}
