(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chiwuzhe/add-or-update"],{"0b26":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},"71d8":function(e,t,n){"use strict";n.r(t);var i=n("0b26"),r=n("b590");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("b933");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"49a0bd11",null,!1,i["a"],u);t["default"]=o.exports},"950c":function(e,t,n){},b14b:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var s=e[a](u),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{chiwuzhanghao:"",chiwuxingming:"",mima:"",xingbie:"",lianxidianhua:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{chiwuzhanghao:!1,chiwuxingming:!1,mima:!1,xingbie:!1,lianxidianhua:!1,money:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(i.default.mark((function t(n){var r,a,u,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(a=t.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return this.ruleForm.id=n.id,t.next=12,this.$api.info("chiwuzhe",this.ruleForm.id);case 12:a=t.sent,this.ruleForm=a.data;case 14:if(this.cross=n.cross,!n.cross){t.next=46;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 18:if((t.t1=t.t0()).done){t.next=46;break}if(s=t.t1.value,"chiwuzhanghao"!=s){t.next=24;break}return this.ruleForm.chiwuzhanghao=u[s],this.ro.chiwuzhanghao=!0,t.abrupt("continue",18);case 24:if("chiwuxingming"!=s){t.next=28;break}return this.ruleForm.chiwuxingming=u[s],this.ro.chiwuxingming=!0,t.abrupt("continue",18);case 28:if("mima"!=s){t.next=32;break}return this.ruleForm.mima=u[s],this.ro.mima=!0,t.abrupt("continue",18);case 32:if("xingbie"!=s){t.next=36;break}return this.ruleForm.xingbie=u[s],this.ro.xingbie=!0,t.abrupt("continue",18);case 36:if("lianxidianhua"!=s){t.next=40;break}return this.ruleForm.lianxidianhua=u[s],this.ro.lianxidianhua=!0,t.abrupt("continue",18);case 40:if("money"!=s){t.next=44;break}return this.ruleForm.money=u[s],this.ro.money=!0,t.abrupt("continue",18);case 44:t.next=18;break;case 46:this.styleChange();case 47:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(i.default.mark((function t(){var n,r,a,u,s,o,c,h,l,f;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.chiwuzhanghao){t.next=3;break}return this.$utils.msg("持物账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.chiwuxingming){t.next=6;break}return this.$utils.msg("持物姓名不能为空"),t.abrupt("return");case 6:if(this.ruleForm.mima){t.next=9;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){t.next=12;break}return this.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 12:if(!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){t.next=15;break}return this.$utils.msg("余额应输入数字"),t.abrupt("return");case 15:if(!this.cross){t.next=31;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){t.next=31;break}if(n||(n=e.getStorageSync("crossObj")),s.startsWith("[")){t.next=27;break}for(c in n)c==s&&(n[c]=o);return h=e.getStorageSync("crossTable"),t.next=25,this.$api.update("".concat(h),n);case 25:t.next=31;break;case 27:r=Number(e.getStorageSync("userid")),a=n["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!a||!r){t.next=53;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:r,crossrefid:a},t.next=37,this.$api.list("chiwuzhe",l);case 37:if(f=t.sent,!(f.data.total>=u)){t.next=43;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 43:if(!this.ruleForm.id){t.next=48;break}return t.next=46,this.$api.update("chiwuzhe",this.ruleForm);case 46:t.next=50;break;case 48:return t.next=50,this.$api.add("chiwuzhe",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:t.next=61;break;case 53:if(!this.ruleForm.id){t.next=58;break}return t.next=56,this.$api.update("chiwuzhe",this.ruleForm);case 56:t.next=60;break;case 58:return t.next=60,this.$api.add("chiwuzhe",this.ruleForm);case 60:this.$utils.msgBack("提交成功");case 61:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},b590:function(e,t,n){"use strict";n.r(t);var i=n("b14b"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},b933:function(e,t,n){"use strict";var i=n("950c"),r=n.n(i);r.a},f935:function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");i(n("66fd"));var t=i(n("71d8"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["f935","common/runtime","common/vendor"]]]);