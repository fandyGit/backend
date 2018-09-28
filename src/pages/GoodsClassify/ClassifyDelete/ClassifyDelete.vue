<template>
</template>
<!--做一个路由跳转的中转页面-->
<script>
  import {mapState} from 'vuex'
  export default {
    name: "ClassifyDelete",
    computed:{
      ...mapState(['goods','goodsTypes']),
    },
    watch:{
      goodsTypes:function (val,oldval) {
        this.$router.push('/shop_manger');
        setTimeout(()=>{
          this.$router.push('/shop_manger/goodsclassify');
        },3)
      }
      // '$router':function (route) {
      //   this.$router.go('/shop_manger/goodsclassify');
      //   this.$router.push('/shop_manger/goodsclassify');
      // }
    }
  }
</script>

<style>

</style>
