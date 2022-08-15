package com.by.web.backend.utils;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Page carrier
 * 
 * @author by.
 */
@Data
@AllArgsConstructor
public class PageModel<T> {
    private Long currentPage;
    private Long totalPages;
    private T content;
}
