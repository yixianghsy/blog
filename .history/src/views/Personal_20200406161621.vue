<template>
     <div class="wrapper" >
            <div class="content">
                    <el-form :model="form" ref="form"  label-width="80px">
                        <el-form-item label="昵称" >
                                <el-input v-model="orm.nickname" class="nickname" ></el-input>
                        </el-form-item>
                        <el-form-item  label="头像"
                                <el-upload 
                                    class="avatar-uploader" 
                                       action="http://127.0.0.1:3000/api/user/upload"
                                       :show-file-list="false"
                                        :on-success="handleAvatarSuccess"
</template>