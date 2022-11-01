package com.by.web.backend.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * Study content dto
 *
 * @author by.
 * @date 2022/11/1
 */
@Data
public class StudyContentDto implements Serializable {

    private String title;

    private String src;

    private String description;

    private String to;
}
