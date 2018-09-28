import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/Login/Login'
import ShopManger from '../pages/ShopManger/ShopManger'
import GoodsClassify from '../pages/GoodsClassify/GoodsClassify'
import GoodsList from '../pages/GoodsList/GoodsList'
import ChangePassword from '../pages/ChangePassword/ChangePassword'
import ModifiedData from '../pages/ModifiedData/ModifiedData'
import AddGoods from '../pages/GoodsList/AddGoods/AddGoods'
import DeleteGoods from '../pages/GoodsList/DeleteGoods/DeleteGoods'
import ClassifyAdd from '../pages/GoodsClassify/ClassifyAdd/ClassifyAdd'
import ClassifyDelete from '../pages/GoodsClassify/ClassifyDelete/ClassifyDelete'
import SearchGoods from '../pages/GoodsList/SearchGoods/SearchGoods'
import EditGoods from '../pages/GoodsList/EditGoods/EditGoods'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/shop_manger',
      component:ShopManger,
      meta:{
        requiresAuth: true
      },
      children:[
        {
          path:'goodsclassify',
          component:GoodsClassify,
          meta:{
            requiresAuth: true
          },
          children:[
            {
              path:'classifyadd',
              component:ClassifyAdd
            },
            {
              path:'classifydelete',
              component:ClassifyDelete
            },
          ]
        },
        {
          path:'goodslist',
          component:GoodsList,
          meta:{
            requiresAuth: true
          },
          children:[
            {
              path:'addgoods',
              component:AddGoods,
              meta:{
                requiresAuth: true
              },
            },
            {
              path:'deletegoods',
              component:DeleteGoods,
              meta:{
                requiresAuth: true
              },
            },
            {
              path:'editgoods/:id',
              component:EditGoods
            }
          ]
        },
        {
          path:'searchgoods',
          component:SearchGoods,
          meta:{
            requiresAuth: true
          },
        },
        {
          path:'changepassword',
          component:ChangePassword,
          meta:{
            requiresAuth: true
          },
        },
        {
          path:'modifieddata',
          component:ModifiedData,
          meta:{
            requiresAuth: true
          },
        },
        {
          path:'',
          redirect:'/shop_manger/goodsclassify'
        }
      ]
    },
    {
      path:'/',
      redirect:'/login'
    }
  ]
})
