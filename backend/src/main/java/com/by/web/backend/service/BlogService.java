package com.by.web.backend.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.by.web.backend.dao.BlogDetailDao;
import com.by.web.backend.dao.BlogMapper;
import com.by.web.backend.dto.QueryBlogByDateRequest;
import com.by.web.backend.entites.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/17
 */
@Service
public class BlogService extends ServiceImpl<BlogMapper, Blog> {
    @Autowired
    private BlogMapper blogMapper;

    @Autowired
    private BlogDetailDao blogDetailDao;

    public List<Blog> queryBlogListByDate(QueryBlogByDateRequest request){
        QueryWrapper<Blog>wrapper = new QueryWrapper<>();
        wrapper.eq("createdDate",request.getDate());
        return blogMapper.selectList(wrapper);
    }

}
