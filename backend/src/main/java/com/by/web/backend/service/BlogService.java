package com.by.web.backend.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.by.web.backend.dao.BlogDetailDao;
import com.by.web.backend.dao.BlogMapper;
import com.by.web.backend.dto.QueryBlogByDateRequest;
import com.by.web.backend.dto.SearchBlogRequest;
import com.by.web.backend.entites.Blog;
import com.by.web.backend.utils.PageModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
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
        log.warn(request.getDate().toString());
        QueryWrapper<Blog>wrapper = new QueryWrapper<>();
        wrapper.between("created_date",new Date(request.getDate().getTime()-28800000),new Date(request.getDate().getTime()+86400000));
        return blogMapper.selectList(wrapper);
    }

    public PageModel<List<Blog>>searchBlog(SearchBlogRequest request){
        LambdaQueryWrapper<Blog>queryWrapper = new QueryWrapper<Blog>().lambda()
                .like(Blog::getTitle,request.getSearchString());
        Page<Blog> page = new Page<>(request.getPageNum(),request.getPageSize());
        page = blogMapper.selectPage(page,queryWrapper);
        log.warn(page.getRecords().toString());
        return new PageModel<>(page.getCurrent(), page.getTotal(), page.getRecords());
    }

}
