<template>
  <div>
    <el-button type="primary" @click="$router.back()">返回</el-button>
    <el-table
      v-loading="!searchGoods.length"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      ref="multipleTable"
      :data="searchGoods"
      tooltip-effect="dark"
      style="width: 100%"
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
            @click="handleEdit(scope.$index, scope.row)">待修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="error">
      <p>sorry，客官！没有搜索到任何相关信息,请返回重新搜索~~</p>
    </div>
    <Pagination :goods="searchGoods" :total="searchGoods.length"></Pagination>
  </div>
</template>
<script>
  import Pagination from '../../../components/Pagination/Pagination'
  import {mapState} from 'vuex'
  export default {
    methods: {
    },
    components:{
      Pagination
    },
    computed:{
      ...mapState(['searchGoods']),

    },
    data() {
      return {
        value:'',
        keyword:'',
      }
    },
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
