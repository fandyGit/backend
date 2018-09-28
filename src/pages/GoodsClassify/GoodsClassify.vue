<template>
  <section>
    <div>
      <p>主页/商品管理/商品分类</p>
    </div>
    <el-button type="primary" @click="addgoods">添加</el-button>
    <el-table
      v-loading="!goodsTypes.length"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      ref="singleTable"
      :data="goodsTypes"
      highlight-current-row
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        type="index"
        label="id"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        property="type"
        label="分类名"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button  @click.native.prevent="deleteRow(scope.$index,goodsTypes)"
                      type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination :goods="goodsTypes" :total="totalLen"></Pagination>
    <router-view :key="activeDate"></router-view>
  </section>
</template>
<script>
  import Pagination from '../../components/Pagination/Pagination'
  import {mapState,mapGetters} from 'vuex'
  export default {
    methods: {
      //删除同类商品，在数据库和页面同时删除一类商品
      deleteRow(index, rows) {
        this.$router.push('/shop_manger/goodsclassify/classifydelete')
        const type=rows[index].data[0].type;
        const deleteArr=[];//存放需要删除同类商品的_id的数组
        rows[index].data.forEach(item=>{
          deleteArr.push(item._id);
        })
        this.$store.dispatch('getClassifyDelete',{type,deleteArr})
        this.activeDate=new Date();//根据时间戳来刷新没有实现
      },
      //在同类商品中添加一类商品
      addgoods(){
        //跳转添加商品的路由
        this.$router.push('/shop_manger/goodsclassify/classifyadd');
      }
    },
    mounted(){
      // 初始化的时候，显示第一页，显示五条数据
      this.$store.dispatch('getGoodsClassify',1);

    },
    components:{
      Pagination
    },
    data() {
      return {
        // dialogFormVisible: false,
        form: {
          id:'',
          classify:'',
        },
        formLabelWidth: '120px',

      }
    },
    computed:{
      ...mapState(['goods','goodsTypes','totalLen','activeDate']),
    },
    watch:{
      //想用来监视数据添加或者删除的时候，实现页面刷新，然而并没有成功
      goods:function (value) {
        this.$router.push('/shop_manger');
        setTimeout(()=>{
          this.$router.replace('/shop_manger/goodsclassify');
        },3)
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
  .el-button{
    margin:10px;
  }
</style>
