(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70c2afa4"],{"4e72":function(e,a,t){},5818:function(e,a,t){"use strict";var n=t("4e72"),i=t.n(n);i.a},"90ab":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"content"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"昵称"}},[t("el-input",{staticClass:"nickname",model:{value:e.form.nickname,callback:function(a){e.$set(e.form,"nickname",a)},expression:"form.nickname"}})],1),t("el-form-item",{attrs:{label:"头像"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://120.24.80.45:3000/api/user/upload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,name:"head_img"}},[t("img",{staticClass:"avatar",attrs:{src:null!=e.imageUrl?e.imageUrl:e.imgDefault}})]),t("p",{staticClass:"tips"},[e._v("tips:请上传2M以内JPG/PNG格式的图片，比例最好1:1")])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),t("el-button",{on:{click:e.signOut}},[e._v("退出登录")])],1)],1)],1)])},i=[],s=t("cf05"),o=t.n(s),r=t("a78e"),c=t.n(r),l={data:function(){return{form:{nickname:this.nickname},imageUrl:null,imgDefault:o.a}},methods:{save:function(){var e=this;this.$axios.post("/api/user/updateUser",{nickname:this.form.nickname,head_img:this.imageUrl}).then((function(a){console.log(a),0===a.data.code&&(e.$message({message:"更新成功",type:"success"}),setTimeout((function(){location.reload()}),1500))})).catch((function(e){console.log(e)}))},handleAvatarSuccess:function(e){this.imageUrl=e.data},beforeAvatarUpload:function(e){var a="image/jpeg"===e.type,t=e.size/1024/1024<2;return a||this.$message.error("上传头像图片只能是 JPG 格式!"),t||this.$message.error("上传头像图片大小不能超过 2MB!"),a&&t},getUserInfo:function(){var e=this;this.$axios.get("/api/user/info").then((function(a){var t=a.data;0===t.code&&(e.form.nickname=t.data.nickname,""===t.data.head_img||null===t.data.head_img?e.imageUrl=null:e.imageUrl=t.data.head_img)})).catch((function(e){console.log(e)}))},signOut:function(){c.a.remove("token"),this.$store.commit("setToken",""),this.$store.commit("changIsSignIn",0),this.$router.push({name:"home"})}},created:function(){this.getUserInfo()}},m=l,u=(t("5818"),t("2877")),f=Object(u["a"])(m,n,i,!1,null,"698d9a3c",null);a["default"]=f.exports},cf05:function(e,a,t){e.exports=t.p+"img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=chunk-70c2afa4.ec933ef7.js.map