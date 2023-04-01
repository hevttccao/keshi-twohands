package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.ChiwuzheDao;
import com.entity.ChiwuzheEntity;
import com.service.ChiwuzheService;
import com.entity.vo.ChiwuzheVO;
import com.entity.view.ChiwuzheView;

@Service("chiwuzheService")
public class ChiwuzheServiceImpl extends ServiceImpl<ChiwuzheDao, ChiwuzheEntity> implements ChiwuzheService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ChiwuzheEntity> page = this.selectPage(
                new Query<ChiwuzheEntity>(params).getPage(),
                new EntityWrapper<ChiwuzheEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ChiwuzheEntity> wrapper) {
		  Page<ChiwuzheView> page =new Query<ChiwuzheView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<ChiwuzheVO> selectListVO(Wrapper<ChiwuzheEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public ChiwuzheVO selectVO(Wrapper<ChiwuzheEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<ChiwuzheView> selectListView(Wrapper<ChiwuzheEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ChiwuzheView selectView(Wrapper<ChiwuzheEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
