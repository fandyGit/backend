<template>
  <section>
      <router-view></router-view>
  </section>
</template>

<script>
  import {mapState} from 'vuex';
  import router from './router'
export default {
  name: 'App',
  components:{
  },
  computed:{
    ...mapState(['username']),
  },
}
  //前置卫士导航
  router.beforeEach((to, from, next) => {
    //需要在路由组件当中添加了requiresAuth，说明了次路由是需要认证的路由组件
    if(to.meta.requiresAuth){
      //并且必须是登录的状态才可以
      if(window.localStorage.getItem('user')){
            next();
      }else{
        next({
          path:'/login'
        })
      }
    }else{
      //不需要认证的直接通过
      next();
    }
  })
</script>

<style>

</style>
