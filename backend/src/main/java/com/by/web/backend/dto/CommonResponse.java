package com.by.web.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/15
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommonResponse<T> {
    private int code;
    private String message;
    private T data;
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date time;

    public CommonResponse<T> success(T data){
        return new CommonResponse<>(200,"请求成功！",data,new Date());
    }

    public CommonResponse<T> failed(T data){
        return new CommonResponse<>(500,"内部错误",data,new Date());
    }
}
