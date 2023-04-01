package com.entity.view;

import com.entity.ChiwuzheEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 持物者
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-03-18 08:43:58
 */
@TableName("chiwuzhe")
public class ChiwuzheView  extends ChiwuzheEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ChiwuzheView(){
	}
 
 	public ChiwuzheView(ChiwuzheEntity chiwuzheEntity){
 	try {
			BeanUtils.copyProperties(this, chiwuzheEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
