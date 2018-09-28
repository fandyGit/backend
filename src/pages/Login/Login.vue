<template>
  <el-form :model="ruleForm2"
           v-loading="loading"
           :data="status"
           status-icon :rules="rules2" ref="ruleForm2"
           label-width="100px" class="demo-ruleForm">
    <div class="center">
      <h2>xxx后台管理系统</h2>
      <el-form-item label="姓名" prop="name">
        <el-input type="text" v-model="ruleForm2.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="passwordword" v-model="ruleForm2.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
        <el-checkbox label="记住密码"></el-checkbox>
        <el-button v-show="status" :plain="true" @click="openCenter">文字居中</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
  import {reqLogin} from "../../api";
  export default {
    data() {
      var validatepassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        this.ruleForm2.password=value;
        callback();
      };
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空'));
        }
        this.ruleForm2.name=value;
        callback();
      };
      return {
        ruleForm2: {
          password: '',
          name: '',
          status:false
        },
        rules2: {
          password: [
            { validator: validatepassword, trigger: 'blur' }
          ],
          name: [
            { validator: validateName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const {name,password}=this.ruleForm2;
            console.log(name,password);
            reqLogin(name,password).then(res=>{
              if(res.code===0){
               window.localStorage.setItem("user",JSON.stringify(name));
                this.$store.dispatch('getUserName',name);
                this.$router.push('/shop_manger');
              }else{
                alert('登录失败');
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  h2{
    padding-left: 90px;
  }
  .demo-ruleForm{
    width: 500px;
    height: 500px;
    border:1px solid #909;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin:auto;
    background: url("./login.jpg") no-repeat;
  }
  .center{
    width: 300px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
</style>
