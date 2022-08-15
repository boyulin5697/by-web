package com.by.web.backend.interceptors;

import com.by.web.backend.dto.CommonResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/8/15
 */
@RestControllerAdvice
@Slf4j
public class CommonExceptionHandler{

    @ResponseBody
    @ExceptionHandler({Throwable.class})
    public CommonResponse exceptionHandler(Throwable e){
        log.error("There is an error existed in the request",e);
        return new CommonResponse<>().failed(e.getMessage());
    }
}
