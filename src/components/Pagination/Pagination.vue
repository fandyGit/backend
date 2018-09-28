<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[limit]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import {mapGetters,mapState} from 'vuex'
  export default {
    name: "Pagination",
    props:{
      goods:Array,
      total:Number,
    },
    methods:{
      handleCurrentChange(page){//当当前页数变化的时候触发
        if(this.$route.path==='/shop_manger/goodslist'){
          this.$store.dispatch('getGoodslist',page);
        }else if(this.$route.path==='/shop_manger/goodsclassify'){
          console.log(page)
          this.$store.dispatch('getGoodsClassify',page);
        }
      }
    },
    computed:{
      ...mapGetters(['maxPages']),
      ...mapState(['limit']),
    }
  }
</script>

<style>

</style>
