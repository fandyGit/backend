<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        collapse-transition="true"
        default-openeds="[1,2,3]"
        router="true"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/shop_manger/goodsclassify">商品分类</el-menu-item>
            <el-menu-item index="/shop_manger/goodslist">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/shop_manger/changepassword">修改密码</el-menu-item>
            <el-menu-item index="/shop_manger/modifieddata">资料修改</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>交易管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">订单列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name:'LeftNav',
  }
</script>

<style>
  .el-col{
    width: 300px!important;

  }
  .el-menu-vertical-demo.el-menu{
    height: 700px!important;

  }
</style>
