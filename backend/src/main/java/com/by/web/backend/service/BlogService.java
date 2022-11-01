package com.by.web.backend.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.by.web.backend.dao.BlogDetailDao;
import com.by.web.backend.dao.BlogMapper;
import com.by.web.backend.dao.StudyContentDao;
import com.by.web.backend.dto.*;
import com.by.web.backend.entites.Blog;
import com.by.web.backend.entites.BlogDetail;
import com.by.web.backend.entites.StudyContent;
import com.by.web.backend.utils.PageModel;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
    private StudyContentDao studyContentDao;

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

    @Transactional(rollbackFor = Throwable.class)
    public void postBlog(PostBlogRequest request){
        Blog blog = new Blog();
        blog.setAvatar(request.getAvatar());
        //初始化
        blog.setComments(0);
        blog.setLikes(0);
        blog.setCreatedDate(request.getCreatedDate());
        blog.setAccessMinLevel(0);
        blog.setDescription(request.getDescription());
        blog.setTitle(request.getTitle());

        BlogDetail blogDetail = new BlogDetail();
        blogDetail.setBlogId(blog.getBlogId());
        blogDetail.setBlogContent(request.getBlogContent());
        blogDetail.setCommentList(new ArrayList<>());

        blogMapper.insert(blog);
        blogDetailDao.save(blogDetail);
    }

    public BlogRespDto getBlogById(String id){
        Blog blog = blogMapper.selectById(id);
        if(null == blog){
            return null;
        }else{
            BlogRespDto dto = new BlogRespDto();
            BlogDetail detail = blogDetailDao.findById(id);
            dto.setBlogId(id);
            dto.setAvatar(blog.getAvatar());
            dto.setCreatedDate(blog.getCreatedDate());
            dto.setTitle(blog.getTitle());
            dto.setDescription(blog.getDescription());
            dto.setBlogContent(detail.getBlogContent());
            dto.setCommentList(detail.getCommentList());
            log.warn(dto.toString());
            return dto;
        }
    }

    public List<StudyContentDto> getStudyNavigatePage(Map map){
        int part = (Integer)map.get("part");
        List<StudyContent> list = studyContentDao.selectList(new QueryWrapper<StudyContent>().lambda().eq(StudyContent::getType, part));
        List<StudyContentDto> resultList = list.stream().map(content -> {
            StudyContentDto dto = new StudyContentDto();
            dto.setSrc(content.getSrc());
            dto.setDescription(content.getDescription());
            dto.setTitle(content.getTitle());
            dto.setTo(content.getRef());
            return dto;
        }).collect(Collectors.toList());

        return resultList;
    }


}
