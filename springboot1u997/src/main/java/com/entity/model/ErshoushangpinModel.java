package com.entity.model;

import com.entity.ErshoushangpinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 二手商品
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2023-03-18 08:43:58
 */
public class ErshoushangpinModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 商品名称
	 */
	
	private String shangpinmingcheng;
		
	/**
	 * 物品分类
	 */
	
	private String wupinfenlei;
		
	/**
	 * 图片
	 */
	
	private String tupian;
		
	/**
	 * 品牌
	 */
	
	private String pinpai;
		
	/**
	 * 新旧程度
	 */
	
	private String xinjiuchengdu;
		
	/**
	 * 持物账号
	 */
	
	private String chiwuzhanghao;
		
	/**
	 * 持物姓名
	 */
	
	private String chiwuxingming;
		
	/**
	 * 联系电话
	 */
	
	private String lianxidianhua;
		
	/**
	 * 单限
	 */
	
	private Integer onelimittimes;
		
	/**
	 * 库存
	 */
	
	private Integer alllimittimes;
		
	/**
	 * 商品描述
	 */
	
	private String shangpinmiaoshu;
		
	/**
	 * 赞
	 */
	
	private Integer thumbsupnum;
		
	/**
	 * 踩
	 */
	
	private Integer crazilynum;
		
	/**
	 * 最近点击时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date clicktime;
		
	/**
	 * 点击次数
	 */
	
	private Integer clicknum;
		
	/**
	 * 价格
	 */
	
	private Float price;
				
	
	/**
	 * 设置：商品名称
	 */
	 
	public void setShangpinmingcheng(String shangpinmingcheng) {
		this.shangpinmingcheng = shangpinmingcheng;
	}
	
	/**
	 * 获取：商品名称
	 */
	public String getShangpinmingcheng() {
		return shangpinmingcheng;
	}
				
	
	/**
	 * 设置：物品分类
	 */
	 
	public void setWupinfenlei(String wupinfenlei) {
		this.wupinfenlei = wupinfenlei;
	}
	
	/**
	 * 获取：物品分类
	 */
	public String getWupinfenlei() {
		return wupinfenlei;
	}
				
	
	/**
	 * 设置：图片
	 */
	 
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}
				
	
	/**
	 * 设置：品牌
	 */
	 
	public void setPinpai(String pinpai) {
		this.pinpai = pinpai;
	}
	
	/**
	 * 获取：品牌
	 */
	public String getPinpai() {
		return pinpai;
	}
				
	
	/**
	 * 设置：新旧程度
	 */
	 
	public void setXinjiuchengdu(String xinjiuchengdu) {
		this.xinjiuchengdu = xinjiuchengdu;
	}
	
	/**
	 * 获取：新旧程度
	 */
	public String getXinjiuchengdu() {
		return xinjiuchengdu;
	}
				
	
	/**
	 * 设置：持物账号
	 */
	 
	public void setChiwuzhanghao(String chiwuzhanghao) {
		this.chiwuzhanghao = chiwuzhanghao;
	}
	
	/**
	 * 获取：持物账号
	 */
	public String getChiwuzhanghao() {
		return chiwuzhanghao;
	}
				
	
	/**
	 * 设置：持物姓名
	 */
	 
	public void setChiwuxingming(String chiwuxingming) {
		this.chiwuxingming = chiwuxingming;
	}
	
	/**
	 * 获取：持物姓名
	 */
	public String getChiwuxingming() {
		return chiwuxingming;
	}
				
	
	/**
	 * 设置：联系电话
	 */
	 
	public void setLianxidianhua(String lianxidianhua) {
		this.lianxidianhua = lianxidianhua;
	}
	
	/**
	 * 获取：联系电话
	 */
	public String getLianxidianhua() {
		return lianxidianhua;
	}
				
	
	/**
	 * 设置：单限
	 */
	 
	public void setOnelimittimes(Integer onelimittimes) {
		this.onelimittimes = onelimittimes;
	}
	
	/**
	 * 获取：单限
	 */
	public Integer getOnelimittimes() {
		return onelimittimes;
	}
				
	
	/**
	 * 设置：库存
	 */
	 
	public void setAlllimittimes(Integer alllimittimes) {
		this.alllimittimes = alllimittimes;
	}
	
	/**
	 * 获取：库存
	 */
	public Integer getAlllimittimes() {
		return alllimittimes;
	}
				
	
	/**
	 * 设置：商品描述
	 */
	 
	public void setShangpinmiaoshu(String shangpinmiaoshu) {
		this.shangpinmiaoshu = shangpinmiaoshu;
	}
	
	/**
	 * 获取：商品描述
	 */
	public String getShangpinmiaoshu() {
		return shangpinmiaoshu;
	}
				
	
	/**
	 * 设置：赞
	 */
	 
	public void setThumbsupnum(Integer thumbsupnum) {
		this.thumbsupnum = thumbsupnum;
	}
	
	/**
	 * 获取：赞
	 */
	public Integer getThumbsupnum() {
		return thumbsupnum;
	}
				
	
	/**
	 * 设置：踩
	 */
	 
	public void setCrazilynum(Integer crazilynum) {
		this.crazilynum = crazilynum;
	}
	
	/**
	 * 获取：踩
	 */
	public Integer getCrazilynum() {
		return crazilynum;
	}
				
	
	/**
	 * 设置：最近点击时间
	 */
	 
	public void setClicktime(Date clicktime) {
		this.clicktime = clicktime;
	}
	
	/**
	 * 获取：最近点击时间
	 */
	public Date getClicktime() {
		return clicktime;
	}
				
	
	/**
	 * 设置：点击次数
	 */
	 
	public void setClicknum(Integer clicknum) {
		this.clicknum = clicknum;
	}
	
	/**
	 * 获取：点击次数
	 */
	public Integer getClicknum() {
		return clicknum;
	}
				
	
	/**
	 * 设置：价格
	 */
	 
	public void setPrice(Float price) {
		this.price = price;
	}
	
	/**
	 * 获取：价格
	 */
	public Float getPrice() {
		return price;
	}
			
}
