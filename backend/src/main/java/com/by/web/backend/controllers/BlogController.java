package com.by.web.backend.controllers;

import com.by.web.backend.dto.CommonResponse;
import com.by.web.backend.dto.QueryBlogByDateRequest;
import com.by.web.backend.dto.SearchBlogRequest;
import com.by.web.backend.entites.Blog;
import com.by.web.backend.service.BlogService;
import com.by.web.backend.utils.PageModel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
    public CommonResponse<PageModel<Blog>> searchForBlog(@RequestBody SearchBlogRequest request){
        return null;
    }

}
