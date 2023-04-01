package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.ChiwuzheEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.ChiwuzheVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.ChiwuzheView;


/**
 * 持物者
 *
 * @author 
 * @email 
 * @date 2023-03-18 08:43:58
 */
public interface ChiwuzheService extends IService<ChiwuzheEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ChiwuzheVO> selectListVO(Wrapper<ChiwuzheEntity> wrapper);
   	
   	ChiwuzheVO selectVO(@Param("ew") Wrapper<ChiwuzheEntity> wrapper);
   	
   	List<ChiwuzheView> selectListView(Wrapper<ChiwuzheEntity> wrapper);
   	
   	ChiwuzheView selectView(@Param("ew") Wrapper<ChiwuzheEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ChiwuzheEntity> wrapper);
   	

}

