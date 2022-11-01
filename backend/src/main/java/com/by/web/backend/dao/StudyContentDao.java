package com.by.web.backend.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.by.web.backend.entites.StudyContent;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * ,,,
 *
 * @author by.
 * @date 2022/11/1
 */
@Mapper
public interface StudyContentDao extends BaseMapper<StudyContent> {

    @Select("Select * from `study_content` where type = #{type}")
    List<StudyContent> getAllInType(int type);

}
