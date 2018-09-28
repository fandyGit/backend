<template>
  <div>
    <div>
      <p>主页/商品管理/资料修改</p>
    </div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="我的角色">
        <el-input value="超级管理员" disabled></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input :value="username" disabled></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="nickname"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="头像">
        <el-input size="medium" v-model="imgs"></el-input>
        <el-upload
          multiple
          action="https://jsonplaceholder.typicode.com/posts/"
          :limit="3"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input type="tel" v-model="phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input type="email" v-model="email"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="remarks"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
        <el-button>重新填写</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
          username:'',
          nickname: '',
          sex: '男',
          imgs:'',
          phone: '',
          email: '',
          remarks: ''
      }
    },
    mounted(){
      this.username=JSON.parse(window.localStorage.getItem('user'));
    },
    computed:{
      ...mapState(['username','userInfo']),
    },
    methods: {
      onSubmit() {
        const {nickname,sex,imgs,phone,email,remarks}=this;
        // console.log(username,nickname,sex,imgs,phone,email,remarks);
        this.$store.dispatch('updateUserInfo',{nickname,sex,phone,email,remarks})
      }
    },
    watch:{
      userInfo:function (value) {
        this.$router.replace('/shop_manger')
        setTimeout(()=>{
          this.$router.replace('/shop_manger/modifieddata')
        },2)
      }
    }
  }
</script>
<style scoped>
  p{
    padding:10px;
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
  }
  .el-form-item__content{
    width: 480px;
  }
  .el-upload{
    display: inline-block;
  }
</style>
