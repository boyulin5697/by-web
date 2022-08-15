package com.by.web.backend.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;
import java.util.List;

/**
 * Blog detail
 *
 * @author by.
 * @date 2022/8/15
 */
@Data
public class BlogDetail {
    @MongoId
    private String blogId;

    private String blogContent;

    private List<Comment> commentList;

    @Data
    @AllArgsConstructor
    public static class Comment{
        private String commenterId;

        private String commentContent;

        private Date commentTime;
    }


}
