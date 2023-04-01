package com.dao;

import com.entity.ChiwuzheEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ChiwuzheVO;
import com.entity.view.ChiwuzheView;


/**
 * 持物者
 * 
 * @author 
 * @email 
 * @date 2023-03-18 08:43:58
 */
public interface ChiwuzheDao extends BaseMapper<ChiwuzheEntity> {
	
	List<ChiwuzheVO> selectListVO(@Param("ew") Wrapper<ChiwuzheEntity> wrapper);
	
	ChiwuzheVO selectVO(@Param("ew") Wrapper<ChiwuzheEntity> wrapper);
	
	List<ChiwuzheView> selectListView(@Param("ew") Wrapper<ChiwuzheEntity> wrapper);

	List<ChiwuzheView> selectListView(Pagination page,@Param("ew") Wrapper<ChiwuzheEntity> wrapper);
	
	ChiwuzheView selectView(@Param("ew") Wrapper<ChiwuzheEntity> wrapper);
	

}
