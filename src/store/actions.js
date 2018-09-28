
import {
  RECEIVE_GOODS,
  RECEIVE_GOODS_LIST,
  RECEIVE_GOODS_MANGER,
  RECEIVE_USER_NAME,
  RECEIVE_GOODS_ADD,
  RECEIVE_GOODS_DELETE,
  UPDATA_USER_INFO,
  RECEIVE_CLASSIFY_DELETE,
  RECEIVE_GOODS_CLASSIFY,
  RECEIVE_SEARCH_GOODS,
  RECEIVE_EDIT_GOODS
} from "./mutation-type";
import {
  reqGoods,
  reqgoodslist,
  reqGoodsManger,
  reqGoodsAdd,
  reqGoodsDelete,
  updateUserInfo,
  deleteClassifyGoods,
  reqGoodsClassify,
  reqGoodsSearch,
  reqGoodsEdit
} from "../api";

export default {
  //1获取商品列表
  async getGoods({commit,state},page){
    //发送异步请求获取数据
    const {limit}=state;
    const result=await reqGoods(page,limit);
    console.log(result);
    if(result.code===0){
      const goods=result.data;
      commit(RECEIVE_GOODS,{goods})
    }
  },
  //2获取商品列表
  async getGoodslist({commit,state},page){
    //发送异步请求获取数据
    const {limit}=state;
    const result=await reqgoodslist(page,limit);
    //console.log(result);
    if(result.code===0){
      const goodsList=result.data;
      commit(RECEIVE_GOODS_LIST,{goodsList})
    }
  },
  //3获取所有的商品列表
  async getGoodsManger({commit}){
    //发送异步请求获取数据
    const result=await reqGoodsManger();
    if(result.code===0){
      const goods=result.data;
      commit(RECEIVE_GOODS_MANGER,{goods})
    }
  },
  //4获取当前用户的信息
  async getUserName({commit},username){
    commit(RECEIVE_USER_NAME,{username})
  },
  //5异步添加商品列表
  async getGoodsAdd({commit},{type,gc_name,price,sale}){
    //发送异步添加数据请求
    const result = await reqGoodsAdd({type,gc_name,price,sale});
    if(result.code===0){
      const good=result.data;
      commit(RECEIVE_GOODS_ADD,{good});//看看返回的是什么
    }
  },
  //6异步删除商品
  async getGoodsDelete({commit},obj){
    //发送异步添加数据请求
    const result = await reqGoodsDelete(obj);
    console.log(result)
    if(result.code===0){
      console.log(obj);
      commit(RECEIVE_GOODS_DELETE,obj);//看看返回的是什么
    }
  },
  //7异步更新用户数据
  async updateUserInfo({commit},objUser){
    //发送异步更新用户信息数据
    const result = await updateUserInfo(objUser);
    console.log(result)
    if(result.code===0){
      console.log(objUser);
      commit(UPDATA_USER_INFO,objUser);//看看返回的是什么
    }
  },
  //8异步删除商品分类数据
 /* async getClassifyDelete({commit},{type,deleteArr}){
    //发送异步更新用户信息数据
    const result = await deleteClassifyGoods(type);
    console.log(result)
    if(result.code===0){
      console.log(deleteArr);
      commit(RECEIVE_CLASSIFY_DELETE,deleteArr);//看看返回的是什么
    }
  },*/
  async getClassifyDelete({commit},type){
    //发送异步更新用户信息数据
    const result = await deleteClassifyGoods(type);
    if(result.code===0){
      commit(RECEIVE_CLASSIFY_DELETE,{type});//看看返回的是什么
    }
  },
  //2.1获取商品分类列表
  async getGoodsClassify({commit,state},page){
    //发送异步请求获取数据
    const {limit}=state;
    const result=await reqGoodsClassify(page,limit);
    if(result.shops.length>0){
      const {shops,totalLen}=result;
      commit(RECEIVE_GOODS_CLASSIFY,{shops,totalLen});
    }else{
      result;
    }
  },
  //9获取搜索商品列表
  async getSearchGoods({commit},{keyword,classify}){
    //发送异步请求获取数据
    const result=await reqGoodsSearch({keyword,classify});
    if(result.data.length>0){
      const searchGoods=result.data;
      commit(RECEIVE_SEARCH_GOODS,searchGoods);
    }else{
      return;
    }
  },
  //10 编辑商品数据
  async getEditGoods({commit},{id,type,gc_name,price,sale},callback){
    //发送异步请求获取数据
    const result=await reqGoodsEdit(`/shop_manger/goodslist/editgoods/${id}`,{type,gc_name,price,sale});
    if(result.code===0){
      console.log(result.data[0]);
      const editGoods=result.data[0];
      commit(RECEIVE_EDIT_GOODS,editGoods);
      callback&&callback();
    }else{
      return;
    }
  },
}
