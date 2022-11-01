package com.by.web.backend.controllers;

import com.by.web.backend.dto.CommonResponse;
import com.by.web.backend.dto.PostBlogRequest;
import com.by.web.backend.dto.QueryBlogByDateRequest;
import com.by.web.backend.dto.SearchBlogRequest;
import com.by.web.backend.service.BlogService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/17
 */
@CrossOrigin
@RequestMapping("/blog")
@RestController
@Slf4j
public class BlogController {

    @Autowired
    private BlogService blogService;

    /**
     * 根据日期查询博文
     * @param request
     * @return
     */
    @PostMapping("/queryBlogByDate")
    public CommonResponse queryBlogByDate(@RequestBody QueryBlogByDateRequest request){
        return new CommonResponse<>().success(blogService.queryBlogListByDate(request));
    }

    /**
     * 根据内容搜索博文
     * @param request
     * @return
     */
    @PostMapping("/searchForBlog")
    public CommonResponse searchForBlog(@RequestBody SearchBlogRequest request){
        return new CommonResponse<>().success(blogService.searchBlog(request));
    }

    /**
     * 发表新博文：暂时不考虑用户权限问题
     */
    @PostMapping("/postBlog")
    public CommonResponse postBlog(@RequestBody PostBlogRequest request){
        blogService.postBlog(request);
        return new CommonResponse<>().success("ok！");
    }

    @PostMapping("/getBlogDetailById")
    public CommonResponse getBlogDetailById(@RequestBody String id){
        return new CommonResponse<>().success(blogService.getBlogById(id));
    }

    @PostMapping("/getStudyNavigatePage")
    public CommonResponse getStudyNavigatePage(@RequestBody Map map){
        return new CommonResponse<>().success(blogService.getStudyNavigatePage(map));
    }


}
