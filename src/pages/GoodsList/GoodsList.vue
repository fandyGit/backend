<template>
  <div>
    <div>
      <p>主页/商品管理/商品列表</p>
    </div>
    <div class="search">
      <label>
      关键字:<el-input v-model="keyword" placeholder="请输入内容"></el-input>
      </label>
      <label>
      商品分类:<el-select v-model="classify" placeholder="请选择">

          <el-option  v-for="(item,index) in goodsTypes"
                      :key="index"
                      :label="item.type"
                      :value='item.type'
                      >
          </el-option>
        </el-select>
      </label>
      <label>
        <el-button icon="el-icon-search"
                   @click.native.prvent="handleSearch"
                   type="primary" round>搜索</el-button>
      </label>
    </div>
    <el-button type="primary" @click="add">添加</el-button>
    <el-button type="danger" @click="remove">删除</el-button>
    <el-table
      v-loading="!goodsList.length"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      ref="multipleTable"
      :data="goodsList"
      tooltip-effect="dark"
      style="width: 100%"
      @current-change="handleSelectChange"
      @select="handleSelect">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="_id"
        label="ID"
        sortable
        width="240">
      </el-table-column>
      <el-table-column
        prop="type"
        label="商品分类"
        width="100">
      </el-table-column>
      <el-table-column
        prop="gc_name"
        label="商品名称"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="price"
        label="商品价格"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="sale"
        label="售价"
        sortable
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="发布状态">
        <template slot-scope="scope">
          <el-button
            size="mini"
            :type="goodsList[scope.$index].edit"
            @click="handleEdit(scope.$index, scope.row)">
            {{goodsList[scope.$index].edit==='primary'?'已发布':'待修改'}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination :goods="goods" :total="goods.length"></Pagination>
    <router-view></router-view>
  </div>
</template>
<script>
  import Pagination from '../../components/Pagination/Pagination'
  import {mapState,mapGetters} from 'vuex'
  import {reqGoodsDelete} from "../../api";
  export default {
    methods: {
      //点击添加按钮的时候,跳转路由地址，
      add(){
        console.log(666);
        this.$router.push('/shop_manger/goodslist/addgoods');
      },
      //点击添加按钮的时候,跳转路由地址，进行删除商品，this.selectObj保存的是要删除商品的id
      remove(){
        this.$router.push('/shop_manger/goodslist/deletegoods');
        this.$store.dispatch('getGoodsDelete',this.selectObj)
      },
      //当操作多选框的时候，获取选中的商品的id，并且保存到selectObj
      handleSelect(selection, row){
        this.selectObj=selection;
      },
      //点击页面搜索按钮的时候，进行跳转路由，并且发送dispatch到actions请求
      handleSearch(){
        const {keyword,classify}=this;
        this.$router.push('/shop_manger/searchgoods');
        this.$store.dispatch('getSearchGoods',{keyword,classify})
      },
      //点击待修改按钮的时候，跳转路由，保存点击当前行的index,并且发送dispatch到actions请求
      handleEdit(index,value){
        console.log(index,value._id)
        const id=value._id;
        this.editIndex=index;
        this.$router.push(`/shop_manger/goodslist/editgoods/${id}`)
        console.log(this.editIndex);
      },
    },
    components:{
      Pagination
    },
    computed:{
      ...mapState(['goodsList','goods','goodsTypes','searchGoods']),
    },
    mounted(){
      //显示最初的页面
      this.$store.dispatch('getGoodslist',1);
    },
    data() {
      return {
        addGoods:false,
        selectObj:{},//checkbox选中的空数组
        classify:'',//搜索中的分类商品列表
        keyword:'',//搜索关键字
        editIndex:'',//保存当前待修改的行的index
        primaried:'primary'//
      }
    },
    watch:{
      goods:function (value,oldvalue) {
        this.$router.push('/shop_manger');
        setTimeout(()=>{
          this.$router.push('/shop_manger/goodslist');
        },1)
      }
    }
  }
</script>
<style>
  p{
    padding:10px;
    border-bottom: 1px solid #000;
    margin-bottom: 5px;
  }
  .search{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 10px;
    border-bottom: 1px solid #777;
    margin-bottom: 5px;
  }
  .search>label>.el-input>input{
    width: 120px;
  }
  .search>label>.el-input{
    width: 120px;
    display: inline-block;
  }
</style>
