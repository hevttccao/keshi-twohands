(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"1f98":function(e,t,r){"use strict";var a=r("f4a7"),o=r.n(a);o.a},"27e5":function(e,t,r){"use strict";(function(e){r("6cdc"),r("921b");a(r("66fd"));var t=a(r("b1b8"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"83fd":function(e,t,r){"use strict";r.r(t);var a=r("d682"),o=r.n(a);for(var s in a)"default"!==s&&function(e){r.d(t,e,(function(){return a[e]}))}(s);t["default"]=o.a},b1b8:function(e,t,r){"use strict";r.r(t);var a=r("fc2b"),o=r("83fd");for(var s in o)"default"!==s&&function(e){r.d(t,e,(function(){return o[e]}))}(s);r("1f98");var n,d=r("f0c5"),i=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);t["default"]=i.exports},d682:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,a,o,s,n){try{var d=e[s](n),i=d.value}catch(u){return void r(u)}d.done?t(i):Promise.resolve(i).then(a,o)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var n=e.apply(t,r);function d(e){s(n,a,o,d,i,"next",e)}function i(e){s(n,a,o,d,i,"throw",e)}d(void 0)}))}}var d={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0,remark:""}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=n(a.default.mark((function t(r){var o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.type=r.type,this.seat=r.seat,this.orderGoods=e.getStorageSync("orderGoods"),1!=this.seat)for(o=0;o<this.orderGoods.length;o++)0==this.total?this.total=parseFloat(this.orderGoods[o].price)*this.orderGoods[o].buynumber:this.total=parseFloat(this.total)+parseFloat(this.orderGoods[o].price)*this.orderGoods[o].buynumber;else this.total=parseFloat(this.orderGoods[0].total),this.address=this.orderGoods[0].address;this.total=this.total.toFixed(2);case 5:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),onShow:function(){var t=n(a.default.mark((function t(){var r,o,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(o=t.sent,this.user=o.data,1==this.seat){t.next=15;break}if(s=e.getStorageSync("address"),!s||this.user.id!=s.userid){t.next=11;break}this.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,this.$api.defaultAddress(this.user.id);case 13:o=t.sent,this.address=o.data;case 15:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),methods:{onSubmitTap:function(){var t=n(a.default.mark((function t(){var r,o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=this,1==r.seat||r.address.address){t.next=4;break}return r.$utils.msg("请选择地址"),t.abrupt("return");case 4:o=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var t=n(a.default.mark((function t(s){var n,d,i,u,c,l,f;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!s.confirm){t.next=65;break}if(n=r.type,d=!0,i="已支付",1!=n){t.next=8;break}r.user.money-r.total<0&&(r.$utils.msg("余额不足，请先充值"),d=!1,i="未支付"),t.next=13;break;case 8:if(2!=n){t.next=13;break}if(!(r.user.jf-r.total<0)){t.next=13;break}return r.$utils.msg("积分不足，兑换商品失败"),d=!1,t.abrupt("return");case 13:u=0;case 14:if(!(u<r.orderGoods.length)){t.next=51;break}if("ershoushangpin"!=r.orderGoods[u].tablename){t.next=40;break}return t.next=18,r.$api.info("ershoushangpin",r.orderGoods[u].goodid);case 18:if(c=t.sent,!(c.data.onelimittimes>0)){t.next=24;break}if(!(r.orderGoods[u].buynumber>c.data.onelimittimes)){t.next=24;break}return r.$utils.msg("".concat(r.orderGoods[u].goodname,"超过可购买数量")),d=!1,t.abrupt("break",51);case 24:if(!(c.data.alllimittimes<r.orderGoods[u].buynumber)){t.next=30;break}return r.$utils.msg("".concat(r.orderGoods[u].goodname,"已售罄")),d=!1,t.abrupt("break",51);case 30:if(1==r.seat){t.next=36;break}return c.data.alllimittimes=c.data.alllimittimes-r.orderGoods[u].buynumber,t.next=34,r.$api.update("ershoushangpin",c.data);case 34:t.next=40;break;case 36:if(c.data.selected=c.data.selected+","+r.orderGoods[u].activeSeat,!d){t.next=40;break}return t.next=40,r.$api.update("ershoushangpin",c.data);case 40:return l={orderid:r.$utils.genTradeNo(),tablename:r.orderGoods[u].tablename,userid:r.user.id,goodid:r.orderGoods[u].goodid,goodname:r.orderGoods[u].goodname,picture:r.orderGoods[u].picture,buynumber:r.orderGoods[u].buynumber,discountprice:r.orderGoods[u].price,price:r.orderGoods[u].price,total:r.orderGoods[u].price*r.orderGoods[u].buynumber,discounttotal:r.orderGoods[u].price*r.orderGoods[u].buynumber,type:n,remark:r.remark,address:r.address.address,tel:r.address.phone,consignee:r.address.name,chiwuzhanghao:r.orderGoods[u].chiwuzhanghao,status:i},1==r.seat&&(l["address"]=r.address,f=r.address.split(",").length,l["buynumber"]=f,l["total"]=r.orderGoods[u].price*f,l["discounttotal"]=r.orderGoods[u].price*f),t.next=44,r.$api.add("orders",l);case 44:if(!r.orderGoods[u].id){t.next=48;break}return t.next=47,r.$api.del("cart",JSON.stringify([r.orderGoods[u].id]));case 47:e.removeStorageSync("cart".concat(r.orderGoods[u].goodid).concat(r.user.id));case 48:u++,t.next=14;break;case 51:if(!d){t.next=65;break}if(1!=n){t.next=60;break}return r.$utils.msgBack("支付成功"),r.user.money=r.user.money-r.total,(r.user.jf||0==r.user.jf)&&(r.user.jf=parseFloat(r.user.jf)+parseFloat(r.total)),t.next=58,r.$api.update(o,r.user);case 58:t.next=65;break;case 60:if(2!=n){t.next=65;break}return r.$utils.msgBack("兑换成功"),r.user.jf=r.user.jf-r.total,t.next=65,r.$api.update(o,r.user);case 65:case"end":return t.stop()}}),t)})));function s(e){return t.apply(this,arguments)}return s}()});case 6:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};t.default=d}).call(this,r("543d")["default"])},f4a7:function(e,t,r){},fc2b:function(e,t,r){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},s=[];r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return a}))}},[["27e5","common/runtime","common/vendor"]]]);