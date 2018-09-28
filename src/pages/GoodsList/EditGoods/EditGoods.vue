<template>
  <!--*****************************************-->
  <div id="center">
    <el-form>
      <el-form-item label="商品分类" :label-width="formLabelWidth">
        <el-input v-model="type" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品名称" :label-width="formLabelWidth">
        <el-input v-model="gc_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" :label-width="formLabelWidth">
        <el-input v-model="price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品售价" :label-width="formLabelWidth">
        <el-input v-model="sale" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="gotoList">取 消</el-button>
      <el-button type="primary" @click="goodsEdit">确 定</el-button>
    </div>
  </div>
  <!--*****************************************-->
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "EditGoods",
    data(){
      return{
        id:'',
        type:'',
        gc_name:'',
        price:'',
        sale:'',
        findObj:{},
      }
    },
    methods:{
      goodsEdit(){//点击确认按钮的时候
        const {id,type,gc_name,price,sale}=this
        this.$store.dispatch('getEditGoods',{id,type,gc_name,price,sale});
      },
      gotoList(){//点击取消的按钮的时候
        this.$router.push('/shop_manger/goodslist');
      }
    },
    computed:{
      ...mapState(['goods'])
    },
    mounted(){
      const id=this.$route.params.id;
      let obj=this.goods.find(item=>item._id===id);
      this.id=id;
      this.type=obj.type;
      this.gc_name=obj.gc_name;
      this.price=obj.price;
      this.sale=obj.sale;
    }

  }
</script>

<style>
#center{
  width: 600px;
  height: 500px;
  padding-left: 10px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin:auto;
  background:#eee;
  z-index: 2;
  color:#fff;
}

</style>
