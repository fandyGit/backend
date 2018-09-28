<template>
  <div>
    <div>
      <p>主页/商品管理/密码修改</p>
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="旧密码">
          <el-input type="password" v-model="oldPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input type="password"  v-model="newPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePass">
          <el-input type="password"  v-model="rePass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  import {reqChangePass} from "../../api";

  export default {
    methods: {
      async submitForm(){
        const {oldPass,newPass,rePass}=this;
        if(newPass!==rePass){
          this.$alert('两次输入不一致')
        }else{
          const result=await reqChangePass(oldPass,newPass);
          if(result.code===0){
            this.$alert(result.msg);
          }else{
            this.$alert(result.msg);
          }
        }
      }
    },
    components:{

    },

    data() {
      return {
        oldPass:'',
        newPass:'',
        rePass:''
      }
    }
  }
</script>

<style>
  p{
    padding:10px;
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
  }
</style>
