(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ershoushangpin-detail"],{"0411":function(e,t,i){"use strict";i.r(t);var r=i("5d2c"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"4ea9":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-0750b370]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-0750b370]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-0750b370]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-0750b370]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-0750b370]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-0750b370] .uni-audio-default{width:inherit}',""]),e.exports=t},"5d2c":function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a481"),i("28a5"),i("f559"),i("55dd"),i("96cf");var n=r(i("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},storeupFlag:0,thumbsupFlag:0,crazilyFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.id=t.id,t.userid&&(this.userid=t.userid);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onUnload:function(){null!=this.timer&&clearInterval(this.timer)},onShow:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.init(),i=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:r=e.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),this.getThumbsup(),n=uni.getStorageSync("discussershoushangpinCleanType"),n&&(uni.removeStorageSync("discussershoushangpinCleanType"),this.mescroll.num=1,this.upCallback(this.mescroll));case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","ershoushangpin"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},getStoreup:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:1,limit:1,refid:this.id,tablename:"ershoushangpin",userid:this.user.id,type:1},e.next=3,this.$api.list("storeup",t);case 3:i=e.sent,this.storeupFlag=i.data.list.length;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),shoucang:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"ershoushangpin",userid:t.user.id,type:1},e.next=4,t.$api.list("storeup",i);case 4:if(r=e.sent,1!=r.data.list.length){e.next=9;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=5;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:t.$utils.msg("取消成功"),t.getStoreup();case 5:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否收藏",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=5;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,name:t.detail.shangpinmingcheng,picture:t.swiperList[0],refid:t.detail.id,tablename:"ershoushangpin",type:1});case 3:t.$utils.msg("收藏成功"),t.getStoreup();case 5:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onAcrossTap:function(e,t,i,r,n){if(uni.setStorageSync("crossTable","ershoushangpin"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",i),uni.setStorageSync("statusColumnValue",n),uni.setStorageSync("tips",r),""!=i&&!i.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var s in a)if(s==i&&a[s]==n)return void this.$utils.msg(r)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.info("ershoushangpin",this.id);case 2:t=e.sent,this.detail=t.data,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[],this.detail.shangpinmiaoshu=this.detail.shangpinmiaoshu.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.list("discussershoushangpin",{page:t.num,limit:10,refid:this.id});case 2:i=e.sent,1==t.num&&(this.commentList=[]),this.commentList=this.commentList.concat(i.data.list),0==i.data.list.length&&(this.hasNext=!1),t.endSuccess(t.size,this.hasNext);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onCartTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!uni.getStorageSync("cart".concat(this.detail.id).concat(this.user.id))){e.next=3;break}return this.$utils.msg("该商品已添加到购物车"),e.abrupt("return");case 3:return e.next=5,this.$api.add("cart",{tablename:"ershoushangpin",goodid:this.detail.id,goodname:this.detail.shangpinmingcheng,chiwuzhanghao:this.detail.chiwuzhanghao,picture:this.swiperList[0],buynumber:1,userid:this.user.id,price:this.detail.price,discountprice:this.detail.vipprice});case 5:uni.setStorageSync("cart".concat(this.detail.id).concat(this.user.id),!0),this.$utils.msg("添加到购物车成功");case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onBuyTap:function(){uni.setStorageSync("orderGoods",[{tablename:"ershoushangpin",goodid:this.detail.id,goodname:this.detail.shangpinmingcheng,chiwuzhanghao:this.detail.chiwuzhanghao,picture:this.swiperList[0],buynumber:1,price:this.detail.price,discountprice:this.detail.vipprice}]),this.$utils.jump("../shop-order-confirm/shop-order-confirm?type=1")},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var t=this;e=t.$base.url+e,uni.downloadFile({url:e,success:function(i){200===i.statusCode&&(t.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:1,limit:1,status:"已完成",goodid:this.detail.id},e.next=3,this.$api.page("orders",t);case 3:if(i=e.sent,0!=i.data.list.length){e.next=7;break}return this.$utils.msg("请完成订单后再评论"),e.abrupt("return");case 7:this.$utils.jump("../discussershoushangpin/add-or-update?refid=".concat(this.id));case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getThumbsup:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:1,limit:1,refid:this.id,tablename:"ershoushangpin",userid:this.user.id,type:"%2%"},e.next=3,this.$api.list("storeup",t);case 3:i=e.sent,i.data.list.length>0&&("21"==i.data.list[0].type?this.thumbsupFlag=1:this.crazilyFlag=1);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),zan:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"ershoushangpin",userid:t.user.id,type:"%2%"},e.next=4,t.$api.list("storeup",i);case 4:if(r=e.sent,!(r.data.list.length>0)){e.next=9;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消点赞",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:return t.detail.thumbsupnum=parseInt(t.detail.thumbsupnum)-1,e.next=6,t.$api.update("ershoushangpin",t.detail);case 6:t.$utils.msg("取消成功"),t.thumbsupFlag=0;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否点赞",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,name:t.detail.shangpinmingcheng,picture:t.swiperList[0],refid:t.detail.id,tablename:"ershoushangpin",type:"21"});case 3:return t.detail.thumbsupnum=parseInt(t.detail.thumbsupnum)+1,e.next=6,t.$api.update("ershoushangpin",t.detail);case 6:t.$utils.msg("点赞成功"),t.thumbsupFlag=1;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cai:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"ershoushangpin",userid:t.user.id,type:"%2%"},e.next=4,t.$api.list("storeup",i);case 4:if(r=e.sent,!(r.data.list.length>0)){e.next=9;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消点踩",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:return t.detail.crazilynum=parseInt(t.detail.crazilynum)-1,e.next=6,t.$api.update("ershoushangpin",t.detail);case 6:t.$utils.msg("取消成功"),t.crazilyFlag=0;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否点踩",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,name:t.detail.shangpinmingcheng,picture:t.swiperList[0],refid:t.detail.id,tablename:"ershoushangpin",type:"22"});case 3:return t.detail.crazilynum=parseInt(t.detail.crazilynum)+1,e.next=6,t.$api.update("ershoushangpin",t.detail);case 6:t.$utils.msg("点踩成功"),t.crazilyFlag=1;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSHTap:function(){this.$refs.popup.open()}}};t.default=a},"9e6a":function(e,t,i){"use strict";i.r(t);var r=i("b6a1"),n=i("0411");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("b657");var s,o=i("f0c5"),p=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"0750b370",null,!1,r["a"],s);t["default"]=p.exports},b657:function(e,t,i){"use strict";var r=i("edb7"),n=i.n(r);n.a},b6a1:function(e,t,i){"use strict";var r={"mescroll-uni":i("f05e").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("mescroll-uni",{attrs:{up:e.upOption,down:e.downOption},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"container",style:{minHeight:"100vh",width:"100%",padding:"0px 0 132rpx",position:"relative",background:"url() fixed,#fff",height:"auto"}},[i("v-uni-swiper",{staticClass:"swiper",style:{border:"0px dotted #f7de91",boxShadow:"inset 0px 0px 0px 0px #f4ead8",padding:"0px 0 0px ",margin:"0 auto",borderColor:"#87acf1",borderRadius:"0",background:"rgba(255,255,255,1)",borderWidth:"0 12rpx 2rpx 12rpx",width:"calc(100% - 40rpx)",borderStyle:"solid",height:"396rpx"},attrs:{"indicator-dots":!1,autoplay:!0,circular:!1,"indicator-active-color":"#000000","indicator-color":"rgba(0, 0, 0, .3)",duration:500,interval:5e3,vertical:!1}},e._l(e.swiperList,(function(t,r){return i("v-uni-swiper-item",{key:r,style:{width:"100%",borderRadius:"0px 0px 10% 10%",background:"none",height:"360rpx"}},["http"==t.substring(0,4)?i("v-uni-image",{style:{width:"calc(100% - 40rpx)",margin:"16rpx auto",objectFit:"cover",borderRadius:"24rpx",display:"block",height:"360rpx"},attrs:{mode:"aspectFill",src:t}}):i("v-uni-image",{style:{width:"calc(100% - 40rpx)",margin:"16rpx auto",objectFit:"cover",borderRadius:"24rpx",display:"block",height:"360rpx"},attrs:{mode:"aspectFill",src:e.baseUrl+t}})],1)})),1),i("v-uni-view",{staticClass:"detail-content",style:{padding:"0px 24rpx 24rpx",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{staticClass:"detail-list-item price priceFavor",style:{padding:"0px 20rpx 8rpx",boxShadow:"inset 0px 0px 0px 0px #f1d8aa",margin:"40rpx 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{staticClass:"text",style:{display:"flex"}},[i("v-uni-view",{style:{color:"#f00",lineHeight:"80rpx",fontSize:"48rpx"}},[e._v("￥")]),i("v-uni-view",{style:{margin:"0px 0 0",lineHeight:"80rpx",fontSize:"32rpx",color:"#f00"}},[e._v(e._s(e.detail.price))])],1),1==e.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favorfill",style:{boxShadow:"0px 0px 0px #999",margin:"0px 0 0",color:"#fec55d",borderRadius:"100%",textAlign:"center",background:"none",display:"block",width:"72rpx",lineHeight:"72rpx",fontSize:"48rpx",textShadow:"4rpx 4rpx 2rpx #a39780",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shoucang.apply(void 0,arguments)}}}):e._e(),0==e.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favor",style:{boxShadow:"0px 0px 0px #999",margin:"0px 0 0",color:"#fec55d",borderRadius:"100%",textAlign:"center",background:"none",display:"block",width:"72rpx",lineHeight:"72rpx",fontSize:"48rpx",textShadow:"4rpx 4rpx 2rpx #a39780",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shoucang.apply(void 0,arguments)}}}):e._e()],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("商品名称：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.shangpinmingcheng))])],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("物品分类：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.wupinfenlei))])],1),i("v-uni-view",{staticClass:"detail-list-item title",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("品牌：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.pinpai))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("商品编号：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.shangpinbianhao))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("新旧程度：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.xinjiuchengdu))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("持物账号：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.chiwuzhanghao))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("持物姓名：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.chiwuxingming))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("联系电话：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.lianxidianhua))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("库存：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.alllimittimes))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"0 0 8rpx",margin:"20rpx 0 20rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",width:"188rpx",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"188rpx"}},[e._v("点击次数：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px 20rpx 20rpx 0",margin:"16rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.clicknum))])],1),e.thumbsupFlag||e.crazilyFlag?e._e():i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"48%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("赞：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#333",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v(e._s(e.detail.thumbsupnum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",style:{boxShadow:"0px 0px 0px #999",color:"#fec55d",borderRadius:"100%",textAlign:"center",background:"none",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"4rpx 4rpx 4rpx #a6977c",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zan.apply(void 0,arguments)}}})],1)],1),e.thumbsupFlag?i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"48%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("已赞：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#333",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v(e._s(e.detail.thumbsupnum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",style:{boxShadow:"0px 0px 0px #999",color:"#fec55d",borderRadius:"100%",textAlign:"center",background:"none",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"4rpx 4rpx 4rpx #a6977c",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zan.apply(void 0,arguments)}}})],1)],1):e._e(),e.thumbsupFlag||e.crazilyFlag?e._e():i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"48%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("踩：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#333",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v(e._s(e.detail.crazilynum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",staticStyle:{transform:"rotate(180deg)"},style:{boxShadow:"0px 0px 0px #ccc",color:"#fec55d",borderRadius:"100%",textAlign:"center",background:"none",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"4rpx 4rpx 4rpx #a6977c",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cai.apply(void 0,arguments)}}})],1)],1),e.crazilyFlag?i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx 8rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"48%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("踩：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{color:"#333",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v(e._s(e.detail.crazilynum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",staticStyle:{transform:"rotate(180deg)"},style:{boxShadow:"0px 0px 0px #ccc",color:"#fec55d",borderRadius:"100%",textAlign:"center",background:"none",width:"72rpx",lineHeight:"72rpx",fontSize:"40rpx",textShadow:"4rpx 4rpx 4rpx #a6977c",height:"72rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cai.apply(void 0,arguments)}}})],1)],1):e._e(),i("v-uni-view",{staticClass:"detail-list-item rich",style:{boxShadow:"inset 0px 0px 0px 0px #f9edd9",padding:"24rpx 24rpx",margin:"0 0 24rpx 0",borderColor:"#e9be70",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{width:"188rpx",padding:"0 20rpx 0 0",lineHeight:"1.5",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("商品描述")]),i("v-uni-view",{staticClass:"rich-text",style:{minHeight:"240rpx",border:"0px solid #f7de91",padding:"0 20rpx 0 0",boxShadow:"0 0px 0px rgba(182,158,18,.4),inset 0px 0px 0px 0px #fcf6d6",margin:"0",borderRadius:"8rpx",background:"none",width:"calc(100% - 8rpx)",lineHeight:"1.5"}},[i("v-uni-rich-text",{attrs:{nodes:e.detail.shangpinmiaoshu}})],1)],1),i("v-uni-view",{staticClass:"time-content",style:{width:"100%",margin:"0 0 24rpx 0",height:"auto"}},[i("v-uni-view",{staticClass:"comoment-header",style:{border:"0px solid #fdd802",boxShadow:"inset 0px 0px 0px 0px #fcf3bf",padding:"0px 20rpx",margin:"0px",borderRadius:"0",background:"linear-gradient(270deg, rgba(195,228,245,1) 0%, rgba(90,142,237,1) 100%),#5a8eed",display:"flex",width:"calc(100% + 0px)",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{style:{padding:"0px 20rpx",lineHeight:"80rpx",fontSize:"28rpx",color:"#fff"}},[e._v("评论")]),i("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},style:{border:"0px solid #64b7ea",padding:"0 12rpx 0 4rpx",margin:"8rpx 0 12rpx ",background:"none",display:"flex"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCommentTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cuIcon-add",style:{margin:"0px 8rpx 0",lineHeight:"60rpx",fontSize:"28rpx",color:"#fff"}}),i("v-uni-view",{style:{margin:"0px 0 0",lineHeight:"60rpx",fontSize:"28rpx",color:"#fff"}},[e._v("添加评论")])],1)],1),e._l(e.commentList,(function(t,r){return i("v-uni-view",{key:r,staticClass:"cu-item comment-item",style:{padding:"24rpx 24rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"32rpx 0 32rpx",borderColor:"#e9be70",borderRadius:"0",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",borderWidth:"0px 0px 0px",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{style:{width:"100%",display:"flex",height:"auto"}},[t.avatarurl?i("v-uni-image",{style:{width:"60rpx",margin:"0 8rpx 0 0",borderRadius:"100%",display:"block",height:"60rpx"},attrs:{mode:"aspectFill",src:e.baseUrl+t.avatarurl}}):e._e(),i("v-uni-view",{staticClass:"text-grey",style:{color:"#333",lineHeight:"60rpx",fontSize:"28rpx"}},[e._v(e._s(t.nickname))])],1),i("v-uni-view",{staticClass:"text-gray text-content text-df",style:{margin:"8rpx 0",lineHeight:"1.5",fontSize:"28rpx",color:"#666",textIndent:"2em"}},[e._v(e._s(t.content))]),i("v-uni-view",{staticClass:"margin-top-sm text-gray text-df",style:{lineHeight:"24rpx",fontSize:"24rpx",color:"#666",textAlign:"right"}},[e._v(e._s(t.addtime))]),t.reply?i("v-uni-view",{staticClass:"text-gray text-content text-df",style:{margin:"8rpx 0",lineHeight:"1.5",fontSize:"28rpx",color:"#666",textIndent:"2em"}},[e._v("回复:"+e._s(t.reply))]):e._e()],1)}))],2),i("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{width:"100%",padding:"20rpx 0px",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}},[e.detail.alllimittimes>0?i("v-uni-button",{staticClass:"cu-btn bg-orange round shadow-blur",style:{border:"0",padding:"0 20rpx",margin:"0",color:"rgb(255, 255, 255)",background:"rgb(255, 170, 51)",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCartTap.apply(void 0,arguments)}}},[e._v("加入购物车")]):e._e(),e.detail.alllimittimes>0?i("v-uni-button",{style:{border:"0",padding:"0 20rpx",margin:"0",color:"rgb(255, 255, 255)",background:"rgb(255, 170, 51)",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onBuyTap.apply(void 0,arguments)}}},[e._v("立即购买")]):e._e()],1)],1)],1)],1)],1)],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))},edb7:function(e,t,i){var r=i("4ea9");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("e019adb2",r,!0,{sourceMap:!1,shadowMode:!1})}}]);