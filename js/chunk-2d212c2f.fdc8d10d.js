(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212c2f"],{aa92:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container pt-5 mb-5"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-10"},[e("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[t._m(1),e("div",{staticClass:"form-group"},[e("label",{staticClass:"mb-1",attrs:{for:"inputEmail"}},[t._v("帳號:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"mb-1",attrs:{for:"inputPassword"}},[t._v("密碼:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v(" 登入 ")]),e("button",{staticClass:"btn btn-outline-primary btn-block mb-5",attrs:{type:"button"},on:{click:t.signout}},[t._v(" 登出 ")])])])])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"container"},[e("div",{staticClass:"l-banner-img bg-cover mb-5"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e("i",{staticClass:"fas fa-user-tie mr-2 mb-md-5"}),t._v("管理者登入 ")])}],n=(e("99af"),{name:"Login",data:function(){return{user:{email:"",password:""},token:""}},methods:{signin:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io","/api/auth/login");this.$http.post(s,this.user).then((function(s){var e=s.data.token,a=s.data.expired;document.cookie="token=".concat(e,";expires=").concat(new Date(1e3*a),"; path=/"),t.$bus.$emit("message:push","登入成功","success"),t.$router.push("/admin/products")})).catch((function(){t.$bus.$emit("message:push","登入失敗","danger")}))},signout:function(){document.cookie="token=;expires=;",this.$bus.$emit("message:push","登出成功","success")}}}),o=n,r=e("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d212c2f.fdc8d10d.js.map