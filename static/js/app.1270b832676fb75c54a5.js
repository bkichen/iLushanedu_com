webpackJsonp([13],{"286Q":function(e,t){},"5OHe":function(e,t){},"5cJG":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){var t,n,r=e;if(0==(t=(r=r.toUpperCase()).length))return!0;if(!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(r))return!1;if(null=={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[parseInt(r.substr(0,2))])return!1;if(15==t){n=new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);var a=r.match(n);if(!((s=new Date("19"+a[2]+"/"+a[3]+"/"+a[4])).getYear()==Number(a[2])&&s.getMonth()+1==Number(a[3])&&s.getDate()==Number(a[4])))return!1}if(18==t){n=new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);var s;a=r.match(n);if(!((s=new Date(a[2]+"/"+a[3]+"/"+a[4])).getFullYear()==Number(a[2])&&s.getMonth()+1==Number(a[3])&&s.getDate()==Number(a[4])))return!1;var o,i=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),c=new Array("1","0","X","9","8","7","6","5","4","3","2"),l=0;for(o=0;o<17;o++)l+=r.substr(o,1)*i[o];if(c[l%11]!=r.substr(17,1))return!1}return!0}},LLo4:function(e,t,n){e.exports=n.p+"static/img/sicnu.a5ceb61.png"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("+RKF"),a=n("wSez"),s=n.n(a),o=(n("5OHe"),n("3cXf")),i=n.n(o),c=n("aA9S"),l=n.n(c),u={name:"app",created:function(){var e=this;sessionStorage.getItem("store")&&this.$store.replaceState(l()({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",function(){sessionStorage.setItem("store",i()(e.$store.state))})}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var m=n("C7Lr")(u,d,!1,function(e){n("QKW2")},null,null).exports,p=n("Fa/W"),f=n("4YfN"),h=n.n(f),g=n("eOoE");function v(){return Object(g.a)({url:"/api/admin/login/logout",method:"get"})}var b=n("q2Iq");var j=n("fUgm");var y={data:function(){var e=this,t=function(t,n,r){""===n?r(new Error("請輸入密碼")):(""!==e.infoForm.checkPass&&e.$refs.infoForm.validateField("checkPass"),r())};return{arrys:[],primaryColor:"#5589B1",dialogVisible:!1,infoForm:{password:"",oldPassword:"",checkPass:""},rules2:{oldPassword:[{validator:t,trigger:"blur"}],password:[{min:6,max:18,message:"長度在 5 到 18 個字符",trigger:"blur"},{validator:t,trigger:"blur"}],checkPass:[{min:6,max:18,message:"長度在 5 到 18 個字符",trigger:"blur"},{validator:function(t,n,r){""===n?r(new Error("請在此輸入密碼")):n!==e.infoForm.password?r(new Error("兩次輸入密碼不一致!")):r()},trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this,n=this;this.$refs[e].validate(function(e){if(!e)return!1;(function(e){return Object(g.a)({url:"/api/admin/my/resetPassword",method:"post",data:e})})(l()({},t.infoForm)).then(function(e){v(),t.$message.success(e.data.msg),n.$router.push({path:"/admin/login"})}).catch(function(e){t.$message.error(e),console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields()},hanleLogOut:function(){var e=this;Object(b.b)();var t=this;this.$confirm("确认退出吗","提示",{}).then(function(){e.$store.commit("logout"),v(),t.$router.push({path:"/admin/login"})})},getzdList:function(){var e=this;if(console.log("xxxxx",this.zdListsa.length),0==this.zdListsa.length){this.$startLoading(),this.arrys.push("3");(function(e){return Object(g.a)({url:"/api/admin/base/zdinfo/listAll",method:"post",data:e})})({}).then(function(t){console.log("zdLists",t.data),e.$store.commit("setzdLists",t.data),t.data.length>0&&e.arrys.splice(e.arrys.indexOf("3"),1)}).catch(function(t){console.log(t),e.$message.error("连接服务错误")})}},getsttypeLists:function(){var e=this;if(0==this.sttypeLists.length){this.$startLoading(),this.arrys.push("1");(function(e){return Object(g.a)({url:"/api/admin/base/sttype/listAll",method:"post",data:e})})({}).then(function(t){e.$store.commit("setsttypeLists",t.data),t.data.length>0&&e.arrys.splice(e.arrys.indexOf("1"),1)}).catch(function(t){console.log(t),e.$message.error("连接服务错误")})}}},watch:{arrys:{handler:function(e,t){console.log("watchnew",e.length),console.log("watchold",t),0===e.length&&this.$endLoading()}}},mounted:function(){this.getzdList(),this.getsttypeLists()},computed:h()({},Object(j.b)({zdListsa:function(e){return e.storeapp.zdLists},sttypeLists:function(e){return e.storeapp.sttypeLists}}))},w={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-header",{style:{"background-color":"#5589B1"},attrs:{height:"80px"}},[r("img",{staticClass:"header-logo",attrs:{src:n("LLo4"),alt:"element-logo"}}),e._v(" "),r("ul",{staticClass:"header-operations"},[r("li",[e._v("欢迎你，"+e._s(this.$store.state.storeapp.name))]),e._v(" "),r("li",{on:{click:function(t){e.dialogVisible=!0}}},[e._v("修改密码")]),e._v(" "),r("li",{on:{click:e.hanleLogOut}},[e._v("退出")])]),e._v(" "),r("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"infoForm",staticClass:"demo-ruleForm",attrs:{model:e.infoForm,"status-icon":"",rules:e.rules2,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"原密碼：",prop:"oldPassword"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.infoForm.oldPassword,callback:function(t){e.$set(e.infoForm,"oldPassword",t)},expression:"infoForm.oldPassword"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"新密碼：",prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.infoForm.password,callback:function(t){e.$set(e.infoForm,"password",t)},expression:"infoForm.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"確認新密碼：",prop:"checkPass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.infoForm.checkPass,callback:function(t){e.$set(e.infoForm,"checkPass",t)},expression:"infoForm.checkPass"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("infoForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("infoForm")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var _=n("C7Lr")(y,w,!1,function(e){n("NtXE")},null,null).exports,k=n("lC5x"),C=n.n(k),$=n("J0Oq"),E=n.n($),L={name:"MenuItems",data:function(){return{routers:null,isCollapse:!1}},computed:{},methods:{initData:function(){var e=this;return E()(C.a.mark(function t(){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.routers=e.$store.state.storeapp.addRouters;case 1:case"end":return t.stop()}},t,e)}))()},doCollapse:function(){this.isCollapse=!this.isCollapse,this.$emit("collapse",this.isCollapse)}},mounted:function(){var e=this;this.initData(),this.$nextTick(function(){document.body.offsetWidth<768&&(e.isCollapse=!0,e.$emit("collapse",e.isCollapse))})}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{attrs:{"default-active":e.$route.path,"unique-opened":"",collapse:e.isCollapse}},[e._l(e.routers,function(t){return[!t.hidden&&t.noDropdown&&t.children.length>0?n("router-link",{attrs:{to:t.path+"/"+t.children[0].path}},[n("el-menu-item",{attrs:{index:t.path+"/"+t.children[0].path}},[n("i",{class:t.icon}),n("span",[e._v(e._s(t.children[0].name))])])],1):e._e(),e._v(" "),t.noDropdown||t.hidden?e._e():n("el-submenu",{attrs:{index:t.name}},[n("template",{slot:"title"},[n("i",{class:t.icon}),n("span",[e._v(e._s(t.name))])]),e._v(" "),e._l(t.children,function(r){return r.hidden?e._e():[r.children&&r.children.length>0?n("sidebar-item",{attrs:{routes:[r]}}):n("router-link",{attrs:{to:t.path+"/"+r.path}},[n("el-menu-item",{attrs:{index:t.path+"/"+r.path}},[n("i",{class:r.icon}),n("span",[e._v(e._s(r.name))])])],1)]})],2)]}),e._v(" "),n("li",{staticClass:"el-submenu",on:{click:e.doCollapse}},[n("div",{staticClass:"el-submenu__title"},[n("i",{class:[e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold"],staticStyle:{color:"#409EFF"}}),e._v(" "),n("span",{staticStyle:{color:"#409EFF","font-weight":"bold"}},[e._v("收缩菜单")])])])],2)},staticRenderFns:[]};var R={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",e._l(e.levelList,function(t,r){return n("el-breadcrumb-item",{key:t.path},["noredirect"===t.redirect||r==e.levelList.length-1?n("span",{staticClass:"no-redirect"},[e._v(e._s(t.name)+" ")]):n("router-link",{attrs:{to:t.redirect||t.path}},[e._v(e._s(t.name)+" ")])],1)}),1)},staticRenderFns:[]};var z={components:{HeaderItem:_,MenuItems:n("C7Lr")(L,x,!1,function(e){n("uwyd")},null,null).exports,BreadCrumb:n("C7Lr")({created:function(){this.getBreadcrumb()},data:function(){return{levelList:null}},methods:{getBreadcrumb:function(){var e=this.$route.matched.filter(function(e){return e.name}),t=e[0];t&&"首頁"===t.name?this.levelList=[{name:"首頁",path:"/admin"}]:!t||"首頁"===t.name&&""===t.path||(e=[{name:"首頁",path:"/admin"}].concat(e),this.levelList=e)}},watch:{$route:function(){this.getBreadcrumb()}}},R,!1,function(e){n("286Q")},null,null).exports},data:function(){return{asideWidth:"300px",isCollapse:!1}},created:function(){},mounted:function(){},methods:{onCollapse:function(e){this.isCollapse=e,this.asideWidth=e?"40px":"300px",this.$root.eventHub.$emit("collapse",e)}}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("HeaderItem"),this._v(" "),t("el-container",{staticClass:"main"},[t("el-aside",{staticClass:"menu",attrs:{width:this.asideWidth}},[t("MenuItems",{on:{collapse:this.onCollapse}})],1),this._v(" "),t("el-main",{staticClass:"content",class:{"is-collapse":this.isCollapse}},[t("BreadCrumb"),this._v(" "),t("div",{staticClass:"router-body"},[t("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var O=n("C7Lr")(z,D,!1,function(e){n("YAQA")},null,null).exports,F={components:{},data:function(){return{captcha_code:""}},methods:{getCaptchaKey:function(){return Math.random().toString(36).substring(2)},changeCode:function(){var e,t=this,n=this.getCaptchaKey();(e={captcha_key:n},Object(g.a)({url:"/api/admin/login/getCaptcha",method:"post",responseType:"arraybuffer",data:e})).then(function(e){console.log(e.data),t.$refs.code.src="data:image/png;base64,"+btoa(new Uint8Array(e.data).reduce(function(e,t){return e+String.fromCharCode(t)},""))})}},created:function(){this.changeCode()},computed:{},watch:{},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("el-form-item",{attrs:{label:"验证码",prop:"captcha_code"}},[n("el-input",{staticStyle:{float:"left",width:"122px"},attrs:{placeholder:"验证码","prefix-icon":"lj-icon-yanzhengma",autocomplete:"off",autocapitalize:"off",spellcheck:"false"},model:{value:e.captcha_code,callback:function(t){e.captcha_code=t},expression:"captcha_code"}}),e._v(" "),n("div",{staticClass:"captcha_code"},[n("img",{ref:"code",attrs:{src:""},on:{click:e.changeCode}}),e._v("点击图片可更换")])],1)],1)},staticRenderFns:[]};var S=n("C7Lr")(F,I,!1,function(e){n("lK1q")},"data-v-863bd71a",null).exports,Y={components:{captcha:S},data:function(){return{logining:!1,dialogVisible:!1,loginForm:{username:"",password:"",captcha_code:""},rules2:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0}},methods:{handleLogin:function(){var e=this;this.captcha_code=this.$refs.captchaRef.captcha_code,""!==this.captcha_code?this.$refs.loginForm.validate(function(t){if(t){e.logining=!0;var n={username:e.loginForm.username,password:e.loginForm.password,captcha_code:e.captcha_code};(r=n,Object(g.a)({url:"/api/admin/login/doLogin",method:"post",data:r})).then(function(t){var n=t.data.account;e.$store.dispatch("login",{account:n}).then(function(){var t=n.menus;e.$store.dispatch("generateRoutes",{menus:t}).then(function(){e.$router.addRoutes(e.$store.state.storeapp.addRouters),e.$router.push({path:"/admin"})})})}).catch(function(t){e.$refs.captchaRef.changeCode(),e.logining=!1})}var r}):this.$message.error("请输入验证码")}}},q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"adminlogin"},[n("h3",{staticClass:"titlelogin"}),e._v(" "),n("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"login-container",attrs:{"data-title":"四川师范大学继续教育学院学位外国语水平考试报名报考系统"}},[n("el-form",{ref:"loginForm",staticClass:"demo-ruleForm ",attrs:{model:e.loginForm,rules:e.rules2,"label-width":"100px"}},[n("h3",{staticClass:"logintext"},[e._v("四川师范大学继续教育学院")]),e._v(" "),n("h2",{staticClass:"logintext"},[e._v("学位外国语水平考试报名报考系统")]),e._v(" "),n("el-form-item",{attrs:{prop:"username",label:"登录账户"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"学生登录，账号为身份证号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password",label:"登录密码"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),n("captcha",{ref:"captchaRef"}),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"success",loading:e.logining},on:{click:function(t){return e.$router.push("/reg")}}},[e._v("没账号，点击注册")])],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"warning",loading:e.logining},on:{click:function(t){return e.$router.push("/setpass")}}},[e._v("忘记密码，点击重置")])],1)],1)],1)])},staticRenderFns:[]};var T=n("C7Lr")(Y,q,!1,function(e){n("QhSM")},"data-v-da37e530",null).exports;var P=n("5cJG"),A={components:{captcha:S},data:function(){return{logining:!1,regform:{name:"",sfzh:"",tel:"",password:"",passwordConfirm:"",idcardType:1},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mail:[{required:!0,message:"请输入电子邮件",trigger:"change"}],idcardType:[{required:!0,message:"证件类型",trigger:"blur"}],sfzh:[{validator:function(e,t,n){""==t||void 0==t?n(new Error("请输入证件号")):1==Object(P.a)(t)?n():n(new Error("身份证输入有误"))},trigger:"blur"}],tel:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3|4|5|7|8|9][0-9]\d{8}$/,message:"手机号格式不对",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],passwordConfirm:[{required:!0,message:"请再次输入密码",trigger:"blur"}]},checked:!0}},methods:{sendEmail:function(){""==this.regform.mail||/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.regform.mail)||(this.$message({message:"邮箱格式不正确",type:"error"}),this.regform.mail="")},handleLogin:function(){this.$router.push({path:"/admin/login"})},handleMes:function(){alert("！！！此有效证件必须和报名数据的有限证件一致，系统将在填报报名信息时将自动绑定，不能修改有效证件，如果证件号码不一致本次注册账号无效"),this.$message.error("此有效证件必须和报名数据的有限证件一致，系统将在填报报名信息时将自动绑定，不能修改有效证件，如果证件号码不一致本次注册账号无效")},handlereg:function(){var e=this;this.$refs.regform.validate(function(t){if(t){if(e.regform.password!=e.regform.passwordConfirm)return void e.$message.error("两次输入的密码不一致，请重新输入");if(""===e.$refs.captchaRef.captcha_code)return void e.$message.error("请输入验证码");var n={captcha_code:e.$refs.captchaRef.captcha_code},r=l()({},e.regform,n);(a=r,Object(g.a)({url:"/api/admin/student/reg/register",method:"post",data:a})).then(function(t){var n=t.data.account;e.$message.success("你已经注册成功，系统自动登录"),setTimeout(function(){},"3000"),e.$store.dispatch("login",{account:n}).then(function(){var t=n.menus;e.$store.dispatch("generateRoutes",{menus:t}).then(function(){e.$router.addRoutes(e.$store.state.storeapp.addRouters),e.$router.push({path:"/admin"})})})}).catch(function(t){e.$refs.captchaRef.changeCode(),console.log("error",t),e.logining=!1})}var a})}},created:function(){},mounted:function(){}},W={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reglogin"},[n("h3",{staticClass:"title"}),e._v(" "),n("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"login-container",attrs:{"data-title":"四川师范大学学位外语报名报考系统"}},[n("el-form",{ref:"regform",attrs:{model:e.regform,rules:e.rules,"label-width":"150px"}},[n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{model:{value:e.regform.name,callback:function(t){e.$set(e.regform,"name",t)},expression:"regform.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"证件号码(登录账号)",prop:"sfzh"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"身份证号，为登录账户"},on:{change:e.handleMes},model:{value:e.regform.sfzh,callback:function(t){e.$set(e.regform,"sfzh",t)},expression:"regform.sfzh"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号码",prop:"tel"}},[n("el-input",{attrs:{maxlength:"11","show-word-limit":""},model:{value:e.regform.tel,callback:function(t){e.$set(e.regform,"tel",t)},expression:"regform.tel"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"电子邮件",prop:"mail"}},[n("el-input",{attrs:{clearable:""},on:{blur:e.sendEmail},model:{value:e.regform.mail,callback:function(t){e.$set(e.regform,"mail",t)},expression:"regform.mail"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.regform.password,callback:function(t){e.$set(e.regform,"password",t)},expression:"regform.password"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码确认",prop:"passwordConfirm"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码确认"},model:{value:e.regform.passwordConfirm,callback:function(t){e.$set(e.regform,"passwordConfirm",t)},expression:"regform.passwordConfirm"}})],1),e._v(" "),n("captcha",{ref:"captchaRef"}),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){return t.preventDefault(),e.handlereg(t)}}},[e._v("注册")])],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"danger",plain:"",loading:e.logining},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("我有账号直接登录")])],1)],1)],1)])},staticRenderFns:[]};var B=n("C7Lr")(A,W,!1,function(e){n("djz9")},null,null).exports,N={components:{captcha:S},data:function(){return{logining:!1,regform:{sfzh:"",tel:"",password:"",mail:""},rules:{mail:[{required:!0,message:"请输入电子邮件",trigger:"change"}],sfzh:[{validator:function(e,t,n){""==t||void 0==t?n(new Error("请输入证件号")):1==Object(P.a)(t)?n():n(new Error("身份证输入有误"))},trigger:"blur"}],tel:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3|4|5|7|8|9][0-9]\d{8}$/,message:"手机号格式不对",trigger:"blur"}]}}},methods:{sendEmail:function(){""==this.regform.mail||/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.regform.mail)||(this.$message({message:"邮箱格式不正确",type:"error"}),this.regform.mail="")},handleLogin:function(){this.$router.push({path:"/admin/login"})},handlereg:function(){var e=this;this.$refs.regform.validate(function(t){if(t){if(""===e.$refs.captchaRef.captcha_code)return void e.$message.error("请输入验证码");var n={captcha_code:e.$refs.captchaRef.captcha_code},r=l()({},e.regform,n);e.$startLoading();var a=e;(s=r,Object(g.a)({url:"/api/admin/student/reg/resetpassword",method:"post",data:s})).then(function(t){e.$message.success("新密码已经发送到你的邮箱请登录查看"),setTimeout(function(){a.$router.push({path:"/admin/login"})},"3000"),e.$endLoading()}).catch(function(t){e.$endLoading(),e.$refs.captchaRef.changeCode(),console.log("error",t),e.logining=!1})}var s})}},created:function(){},mounted:function(){}},V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reglogin"},[n("div",{staticClass:"title"}),e._v(" "),n("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"login-container",attrs:{"data-title":"四川师范大学继续教育学院"}},[n("el-form",{ref:"regform",staticClass:"demo-ruleForm",attrs:{model:e.regform,rules:e.rules,"label-width":"150px"}},[n("h1",{staticStyle:{"text-align":"center","margin-bottom":"12px",color:"red"}},[e._v("重置密码")]),e._v(" "),n("el-form-item",{attrs:{label:"证件号码(登录账号)",prop:"sfzh"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"身份证号，为登录账户"},model:{value:e.regform.sfzh,callback:function(t){e.$set(e.regform,"sfzh",t)},expression:"regform.sfzh"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号码",prop:"tel"}},[n("el-input",{attrs:{maxlength:"11","show-word-limit":""},model:{value:e.regform.tel,callback:function(t){e.$set(e.regform,"tel",t)},expression:"regform.tel"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"接收密码邮箱",prop:"mail"}},[n("el-input",{attrs:{clearable:""},on:{blur:e.sendEmail},model:{value:e.regform.mail,callback:function(t){e.$set(e.regform,"mail",t)},expression:"regform.mail"}})],1),e._v(" "),n("captcha",{ref:"captchaRef"}),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"danger",loading:e.logining},nativeOn:{click:function(t){return t.preventDefault(),e.handlereg(t)}}},[e._v("重置密码")])],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"warning",plain:"",loading:e.logining},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("我有账号直接登录")])],1)],1)],1)])},staticRenderFns:[]};var Q=n("C7Lr")(N,V,!1,function(e){n("tjQz")},"data-v-16d843ab",null).exports;r.default.use(p.a);var M=[{path:"/admin",component:O,name:"首頁",icon:"el-icon-menu",redirect:"/admin/zkz/zkz",noDropdown:!0,children:[{path:"dashboard",component:function(e){return n.e(6).then(function(){var t=[n("ARoL")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"首頁"}]},{path:"/admin/login",name:"登录",hidden:!0,component:T},{path:"/404",component:function(e){return n.e(7).then(function(){var t=[n("34W9")];e.apply(null,t)}.bind(this)).catch(n.oe)},hidden:!0},{path:"/401",component:function(e){return n.e(10).then(function(){var t=[n("3RDD")];e.apply(null,t)}.bind(this)).catch(n.oe)},hidden:!0},{path:"/reg",name:"reg",component:B,meta:{keepAlive:!0}},{path:"/setpass",name:"setpass",component:Q,meta:{keepAlive:!0}}],Z=[{path:"/admin/auth",component:O,name:"管理员管理",redirect:"noredirect",icon:"el-icon-setting",children:[{path:"account",name:"管理員列表",component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("tNAn")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"role",name:"角色管理",component:function(e){return n.e(9).then(function(){var t=[n("y0F4")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/admin/baseinfo",component:O,name:"基础信息",redirect:"adv",icon:"el-icon-s-flag",children:[{path:"adv",name:"公告管理",component:function(e){return n.e(11).then(function(){var t=[n("naj3")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"down",name:"下载管理",component:function(e){return n.e(1).then(function(){var t=[n("9c/E")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"bmnum",name:"报名人数设置",component:function(e){return n.e(1).then(function(){var t=[n("9c/E")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/admin/bminfo",component:O,name:"报名信息",redirect:"pricesystem",icon:"el-icon-document-copy",children:[{path:"bm",name:"报名",component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("JICN")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/admin/zkz",component:O,name:"准考证管理",redirect:"zkzmanage",icon:"el-icon-document-copy",children:[{path:"zkz",name:"准考证信息",component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("PKcW")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/admin/cj",component:O,name:"成绩管理",redirect:"zkzmanage",icon:"el-icon-document-copy",children:[{path:"cj",name:"成绩信息",component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("OO6W")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/admin/kc",component:O,name:"考次管理",redirect:"kcmanage",icon:"el-icon-document-copy",children:[{path:"kc",name:"考次信息",component:function(e){return n.e(8).then(function(){var t=[n("rzYE")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"*",name:"404",redirect:"/404",hidden:!0}],H=new p.a({scrollBehavior:function(){return{y:0}},mode:"history",routes:M}),X=n("+qDl"),K=n.n(X),J=n("WHp7"),G=n("bQIR"),U=n.n(G),ee=n("dO3j"),te=n.n(ee),ne=(n("gFLX"),n("doTX"),n("HzJ8")),re=n.n(ne),ae=n("rVsN"),se=n.n(ae);function oe(e,t){return e.filter(function(e){return!!function(e,t){var n=!1,r=!0,a=!1,s=void 0;try{for(var o,i=re()(e);!(r=(o=i.next()).done);r=!0){var c=o.value;if("404"===t.name){n=!0;break}if(c.name&&t.name===c.name){n=!0;break}if(t.children&&t.children.length){var l=!0,u=!1,d=void 0;try{for(var m,p=re()(t.children);!(l=(m=p.next()).done);l=!0)if(m.value.name===c.name){n=!0;break}}catch(e){u=!0,d=e}finally{try{!l&&p.return&&p.return()}finally{if(u)throw d}}}}}catch(e){a=!0,s=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw s}}return n}(t,e)&&(e.children&&e.children.length&&(e.children=oe(e.children,t)),!0)})}var ie={state:{username:"",name:"",status:"",menus:[],accounts:[],routers:[],addRouters:[],token:Object(b.a)(),httpHost:"/api",typeLists:[],sttypeLists:[],contentTypeLists:[],productLists:[],zdLists:[]},mutations:{username:function(e,t){e.username=t},name:function(e,t){e.name=t},status:function(e,t){e.status=t},token:function(e,t){e.token=t},login:function(e,t){e.accounts=t,e.username=t.username,e.name=t.name,e.idzd=t.idzd,e.status=t.status,e.token=t.sessionId,e.menus=t.menus,e.routers=M;var n=oe(Z,t.menus);e.addRouters=n,e.routers=M.concat(n),Object(b.c)(t.sessionId)},logout:function(e){e.accounts=[],e.openid="",e.username="",e.name="",e.status="",e.token="",e.typeLists=[],e.contentTypeLists=[],e.sttypeLists=[],e.productLists=[],e.zdLists=[],Object(b.b)()},setRouters:function(e,t){e.routers=M,e.addRouters=t,e.routers=M.concat(t)},setsttypeLists:function(e,t){e.sttypeLists=t},setproductLists:function(e,t){e.productLists=t},setzdLists:function(e,t){e.zdLists=t}},actions:{login:function(e,t){var n=e.commit;return new se.a(function(e){var r=t.account;n("login",r),e()})},generateRoutes:function(e,t){var n=e.commit;return new se.a(function(e){var r=t.menus,a=oe(Z,r);n("setRouters",a),e()})}}},ce={state:{deliveryCustomer:{},deliveryZd:{},currentProductType:{},currentDeliveryOrder:{},lastWeight:0,tempDelivery:[]},getters:{deliveryCustomer:function(e){var t=e.deliveryCustomer;return t&&t.idcustomer||(t=sessionStorage.getItem("YB.DELIVERY.CUSTOMER"))&&(t=JSON.parse(t)),t||{}},deliveryZd:function(e){var t=e.deliveryZd;return t&&t.id||(t=sessionStorage.getItem("YB.DELIVERY.ZD"))&&(t=JSON.parse(t)),t||{}},currentProductType:function(e){var t=e.currentProductType;return t&&t.idProductType||(t=sessionStorage.getItem("YB.DELIVERY.PRODUCTTYPE"))&&(t=JSON.parse(t)),t||{}},currentDeliveryOrder:function(e){var t=e.currentDeliveryOrder;return t&&t.idDeliveryOrder||(t=sessionStorage.getItem("YB.DELIVERY.DELIVERYORDER"))&&(t=JSON.parse(t)),t||{}},lastWeight:function(e){var t=e.lastWeight;if(!t||!t.lastWeight){t=sessionStorage.getItem("YB.DELIVERY.LASTWEIGHT");try{t=Number(t)}catch(e){t=0}}return t||0},tempDelivery:function(e){var t=e.tempDelivery;return t&&t.length||(t=sessionStorage.getItem("YB.ADD_DELIVERY"))&&(t=JSON.parse(t)),t||[]}},mutations:{setDeliveryCustomer:function(e,t){e.deliveryCustomer=t||{},sessionStorage.setItem("YB.DELIVERY.CUSTOMER",i()(e.deliveryCustomer))},setDeliveryZd:function(e,t){e.deliveryZd=t||{},sessionStorage.setItem("YB.DELIVERY.ZD",i()(e.deliveryZd))},setDeliveryProducttype:function(e,t){e.currentProductType=t||{},sessionStorage.setItem("YB.DELIVERY.PRODUCTTYPE",i()(e.currentProductType))},setDeliveryOrder:function(e,t){e.currentDeliveryOrder=t||{},sessionStorage.setItem("YB.DELIVERY.DELIVERYORDER",i()(e.currentDeliveryOrder))},setLastWeight:function(e,t){e.lastWeight=t||0,sessionStorage.setItem("YB.DELIVERY.LASTWEIGHT",e.lastWeight)},addTempDelivery:function(e,t){var n=e.tempDelivery;n&&n.length||((n=sessionStorage.getItem("YB.ADD_DELIVERY"))&&(n=JSON.parse(n)),e.tempDelivery=n||[]),e.tempDelivery.push(t),sessionStorage.setItem("YB.ADD_DELIVERY",i()(e.tempDelivery))}},actions:{}};r.default.use(j.a);var le=new j.a.Store({modules:{storeapp:ie,storedelivery:ce}}),ue=n("E4C3"),de=n.n(ue),me=(n("ve9D"),["/admin/login","/reg","/index","/order"]);H.beforeEach(function(e,t,n){de.a.start(),0===le.state.storeapp.menus.length?-1!==me.indexOf(e.path)?n():Object(g.a)({url:"/api/admin/login/loginBySessionId",method:"post"}).then(function(t){if(t.data.success){le.commit("login",t.data.account);var r=t.data.account.menus;le.dispatch("generateRoutes",{menus:r}).then(function(){H.addRoutes(le.state.storeapp.addRouters),n(h()({},e,{replace:!0}))})}else n("/admin/login")}).catch(function(e){console.log(e),n("/admin/login")}):(n(),de.a.done())}),H.afterEach(function(){de.a.done()});var pe=void 0,fe={install:function(e,t){e.prototype.$startLoading=function(){pe=G.Loading.service({lock:!0,text:"正在加载你要的数据请稍等，加载中……",background:"rgba(0, 0, 0, 0.7)",spinner:"my-el-custom-spinner"})},e.prototype.$endLoading=function(){pe.close()}}},he=n("ZLEe"),ge=n.n(he),ve={isEqual:function(e,t){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;if(Object.prototype.toString.call(e)!==Object.prototype.toString.call(t))return!1;switch(Object.prototype.toString.call(e)){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Array]":for(var n=0;n<e.length;n++)if(!this.isEqual(e[n],t[n]))return!1;return!0;case"[object Object]":for(var r=ge()(e),a=0;a<r.length;a++)if(!this.isEqual(e[r[a]],t[r[a]]))return!1;r=ge()(t);for(var s=0;s<r.length;s++)if(!this.isEqual(e[r[s]],t[r[s]]))return!1;return!0;default:return!1}}};r.default.prototype.$utils=ve,r.default.use(fe),r.default.use(s.a),r.default.config.productionTip=!1,r.default.use(U.a),r.default.use(J.a),r.default.component("VueEditor",J.a),r.default.use(te.a),r.default.prototype.$moment=K.a,r.default.directive("title",{inserted:function(e,t){document.title=e.dataset.title}}),new r.default({el:"#app",router:H,store:le,components:{App:m},template:"<App/>",data:{eventHub:new r.default}})},NtXE:function(e,t){},QKW2:function(e,t){},QhSM:function(e,t){},YAQA:function(e,t){},djz9:function(e,t){},doTX:function(e,t){},eOoE:function(e,t,n){"use strict";var r=n("rVsN"),a=n.n(r),s=n("2sCs"),o=n.n(s),i=n("q2Iq"),c=(n("+RKF"),n("CtzY")),l=n.n(c),u=n("bQIR");n.n(u);o.a.defaults.timeout=9e7,o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",o.a.defaults.withCredentials=!0,o.a.interceptors.request.use(function(e){return console.log("token...."+Object(i.a)()),Object(i.a)()&&(e.headers.jxtAdminSessionId=Object(i.a)()),"post"===e.method&&(e.data=l.a.stringify(e.data)),e},function(e){console.log("axios",e),a.a.reject(e)}),o.a.interceptors.response.use(function(e){if(console.log(e.data.msg+"hhhhh"),"501"===e.data.code)return console.log("axios-response",e.data.code),u.Message.error(e.data.msg),a.a.reject(e.data.msg);if("401"===e.data.code)location.href="/401";else{if(10001!==e.data.code&&10002!==e.data.code)return e;Object(u.Message)(e.data.msg),location.href="/admin/login",a.a.reject(e.data.msg)}},function(e){return u.Message.error(e),a.a.reject(e)}),t.a=o.a},gFLX:function(e,t){},hcb9:function(e,t,n){var r={"./af":"sujw","./af.js":"sujw","./ar":"Rrj4","./ar-dz":"Sevq","./ar-dz.js":"Sevq","./ar-kw":"HdsF","./ar-kw.js":"HdsF","./ar-ly":"Anuf","./ar-ly.js":"Anuf","./ar-ma":"JRrb","./ar-ma.js":"JRrb","./ar-sa":"k0hu","./ar-sa.js":"k0hu","./ar-tn":"3E7p","./ar-tn.js":"3E7p","./ar.js":"Rrj4","./az":"SO54","./az.js":"SO54","./be":"96RF","./be.js":"96RF","./bg":"gb0x","./bg.js":"gb0x","./bm":"pOeR","./bm.js":"pOeR","./bn":"3HXy","./bn.js":"3HXy","./bo":"u2ZT","./bo.js":"u2ZT","./br":"AwVA","./br.js":"AwVA","./bs":"NnH0","./bs.js":"NnH0","./ca":"vjx4","./ca.js":"vjx4","./cs":"ul0d","./cs.js":"ul0d","./cv":"G+EY","./cv.js":"G+EY","./cy":"1Bfr","./cy.js":"1Bfr","./da":"/XF1","./da.js":"/XF1","./de":"ZBqa","./de-at":"WBem","./de-at.js":"WBem","./de-ch":"vRtm","./de-ch.js":"vRtm","./de.js":"ZBqa","./dv":"7ivI","./dv.js":"7ivI","./el":"qWU1","./el.js":"qWU1","./en-au":"EtXW","./en-au.js":"EtXW","./en-ca":"iw9d","./en-ca.js":"iw9d","./en-gb":"MdAW","./en-gb.js":"MdAW","./en-ie":"4Qnp","./en-ie.js":"4Qnp","./en-il":"BDWq","./en-il.js":"BDWq","./en-in":"lYUf","./en-in.js":"lYUf","./en-nz":"amD+","./en-nz.js":"amD+","./en-sg":"Kprw","./en-sg.js":"Kprw","./eo":"T/wW","./eo.js":"T/wW","./es":"cFAv","./es-do":"6dgl","./es-do.js":"6dgl","./es-us":"K7u+","./es-us.js":"K7u+","./es.js":"cFAv","./et":"mGwW","./et.js":"mGwW","./eu":"Pg4b","./eu.js":"Pg4b","./fa":"yESV","./fa.js":"yESV","./fi":"Q//Z","./fi.js":"Q//Z","./fil":"o4Yj","./fil.js":"o4Yj","./fo":"gl/G","./fo.js":"gl/G","./fr":"47zq","./fr-ca":"5Rg3","./fr-ca.js":"5Rg3","./fr-ch":"5f/m","./fr-ch.js":"5f/m","./fr.js":"47zq","./fy":"Ng4C","./fy.js":"Ng4C","./ga":"IQpl","./ga.js":"IQpl","./gd":"nka3","./gd.js":"nka3","./gl":"mihe","./gl.js":"mihe","./gom-deva":"PHCa","./gom-deva.js":"PHCa","./gom-latn":"zVKK","./gom-latn.js":"zVKK","./gu":"dQs2","./gu.js":"dQs2","./he":"zvwm","./he.js":"zvwm","./hi":"Sq6i","./hi.js":"Sq6i","./hr":"eOEc","./hr.js":"eOEc","./hu":"MTAC","./hu.js":"MTAC","./hy-am":"qzmc","./hy-am.js":"qzmc","./id":"m0uh","./id.js":"m0uh","./is":"FtWp","./is.js":"FtWp","./it":"Gycp","./it-ch":"ZnnW","./it-ch.js":"ZnnW","./it.js":"Gycp","./ja":"1tS/","./ja.js":"1tS/","./jv":"6nzu","./jv.js":"6nzu","./ka":"Hqqu","./ka.js":"Hqqu","./kk":"kDTi","./kk.js":"kDTi","./km":"qnhy","./km.js":"qnhy","./kn":"9vXC","./kn.js":"9vXC","./ko":"PIUM","./ko.js":"PIUM","./ku":"ydN4","./ku.js":"ydN4","./ky":"YTTa","./ky.js":"YTTa","./lb":"MxgD","./lb.js":"MxgD","./lo":"K7Hs","./lo.js":"K7Hs","./lt":"Rmkd","./lt.js":"Rmkd","./lv":"TIvN","./lv.js":"TIvN","./me":"mrQB","./me.js":"mrQB","./mi":"VI+C","./mi.js":"VI+C","./mk":"s/Rp","./mk.js":"s/Rp","./ml":"16aP","./ml.js":"16aP","./mn":"0X6E","./mn.js":"0X6E","./mr":"t3c5","./mr.js":"t3c5","./ms":"5Gr9","./ms-my":"VQI3","./ms-my.js":"VQI3","./ms.js":"5Gr9","./mt":"HNPZ","./mt.js":"HNPZ","./my":"/tYy","./my.js":"/tYy","./nb":"xoya","./nb.js":"xoya","./ne":"DiT+","./ne.js":"DiT+","./nl":"Yd3n","./nl-be":"MMdN","./nl-be.js":"MMdN","./nl.js":"Yd3n","./nn":"8oEf","./nn.js":"8oEf","./oc-lnc":"K2kV","./oc-lnc.js":"K2kV","./pa-in":"+T9b","./pa-in.js":"+T9b","./pl":"Npku","./pl.js":"Npku","./pt":"sOAG","./pt-br":"JDBR","./pt-br.js":"JDBR","./pt.js":"sOAG","./ro":"1Esx","./ro.js":"1Esx","./ru":"PlOw","./ru.js":"PlOw","./sd":"va1X","./sd.js":"va1X","./se":"jVgL","./se.js":"jVgL","./si":"00wQ","./si.js":"00wQ","./sk":"YQKB","./sk.js":"YQKB","./sl":"9+DL","./sl.js":"9+DL","./sq":"koYt","./sq.js":"koYt","./sr":"FTLZ","./sr-cyrl":"wh/n","./sr-cyrl.js":"wh/n","./sr.js":"FTLZ","./ss":"EPIq","./ss.js":"EPIq","./sv":"CBBQ","./sv.js":"CBBQ","./sw":"Ongs","./sw.js":"Ongs","./ta":"Ccv8","./ta.js":"Ccv8","./te":"Ddt2","./te.js":"Ddt2","./tet":"xZj2","./tet.js":"xZj2","./tg":"M4Lt","./tg.js":"M4Lt","./th":"3uyc","./th.js":"3uyc","./tk":"63YL","./tk.js":"63YL","./tl-ph":"ZxXD","./tl-ph.js":"ZxXD","./tlh":"Gjp9","./tlh.js":"Gjp9","./tr":"xmIl","./tr.js":"xmIl","./tzl":"WQir","./tzl.js":"WQir","./tzm":"iO1J","./tzm-latn":"oWo9","./tzm-latn.js":"oWo9","./tzm.js":"iO1J","./ug-cn":"IiXR","./ug-cn.js":"IiXR","./uk":"Oo6k","./uk.js":"Oo6k","./ur":"gasK","./ur.js":"gasK","./uz":"RQ2C","./uz-latn":"V9IH","./uz-latn.js":"V9IH","./uz.js":"RQ2C","./vi":"ghVF","./vi.js":"ghVF","./x-pseudo":"gCEX","./x-pseudo.js":"gCEX","./yo":"BeWs","./yo.js":"BeWs","./zh-cn":"sb68","./zh-cn.js":"sb68","./zh-hk":"j761","./zh-hk.js":"j761","./zh-mo":"T5qO","./zh-mo.js":"T5qO","./zh-tw":"9rk6","./zh-tw.js":"9rk6"};function a(e){return n(s(e))}function s(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="hcb9"},lK1q:function(e,t){},q2Iq:function(e,t,n){"use strict";t.a=function(){return a.a.get(s)},t.c=function(e){return a.a.set(s,e,{expires:1,path:"/"})},t.b=function(){return a.a.remove(s)};var r=n("sqb0"),a=n.n(r),s="jxtAdminSessionId"},tjQz:function(e,t){},uwyd:function(e,t){},ve9D:function(e,t){}},["NHnr"]);