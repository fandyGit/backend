<template>
  <div class="container">
    <section class="top">
      <HeaderTop></HeaderTop>
    </section>
    <div class="manger">
      <section class="left">
        <LeftNav></LeftNav>
      </section>
      <section class="right">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>
<script>
  import LeftNav from '../../components/LeftNav/LeftNav'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import GoodsClassify from '../GoodsClassify/GoodsClassify'
  import ChangePassword from '../ChangePassword/ChangePassword'
  import ModifiedData from '../ModifiedData/ModifiedData'
  import {mapState} from 'vuex'
  export default {
    name:'ShopManger',
    data() {
      return {
      };
    },
    components:{
      LeftNav,
      HeaderTop,
      GoodsClassify,
      ChangePassword,
      ModifiedData
    },
    computed:{
    },
    mounted(){
      this.$store.dispatch('getGoodsManger');
    }
  }
</script>
<style>
  *{
    margin:0;
    padding:0;
  }
  .container{
    display: flex;
    flex-direction:column;
  }
  .top{
    height: 50px;
  }
  .manger{
    display: flex;
    flex-flow:row nowrap;
    justify-content:flex-start;

  }
  .left{
    width: 300px;
  }
  .right{
    width: 1000px;
    flex:1;
  }
</style>
