<template>
  <div>
    <div class="header">
      <div class="left">
        <h2>xxx后台管理系统</h2>
      </div>
      <div class="right">
        <span>欢迎{{username}}登录我们xxx的系统</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "HeaderTop",
    data(){
      return{
        username:''
      }
    },
    mounted(){
      this.username=JSON.parse(window.localStorage.getItem('user'));
    }
  }
</script>

<style>
  .header{

    height: 50px;
    background-color: #678;
    display: flex;
    flex-flow:row nowrap;
    justify-content: space-between;
  }
  .header .left{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .header .right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-end;
  }
  .header .right>span{
    display: inline-block;
  }
</style>
