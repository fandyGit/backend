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
export default {
  [RECEIVE_GOODS](state,{goods}){
    return state.goods=goods;
  },
  [RECEIVE_GOODS_LIST](state,{goodsList}){
    return state.goodsList=goodsList;
  },
  [RECEIVE_GOODS_MANGER](state,{goods}){
    return state.goods=goods;
  },
  [RECEIVE_USER_NAME](state,{username}){
    return state.username=username;
  },
  [RECEIVE_GOODS_ADD](state,good){
    return state.goods.push(good);
  },
  [RECEIVE_GOODS_DELETE](state,goodarr){
    console.log(goodarr);
    //找到选中的数据并且删除掉，传递过来是数组
    let arrID=[];
    /*if(goodarr) return;*/
    goodarr.forEach(item=>{
       // console.log(item._id);
        state.goods.forEach((good,index)=>{
          if(good._id===item._id){
            return state.goods.splice(index,1);
          }
        })
    })
  },
  [UPDATA_USER_INFO](state,userInfo){
    console.log(userInfo)
  //更新用户信息数据
  return state.userInfo=userInfo;

  },
  [RECEIVE_CLASSIFY_DELETE](state,deleteArr){
    console.log(deleteArr)
    //删除同类型的数据
    deleteArr.forEach(ID=>{
      state.goods.forEach((item,index)=>{
        if(ID===item._id){
          return state.goods.splice(index,1);
        }
      })
    })

  },
  [RECEIVE_GOODS_CLASSIFY](state,goodsType){
    state.totalLen=goodsType.totalLen;
    state.goodsTypes=goodsType.shops;
  },
  [RECEIVE_SEARCH_GOODS](state,searchGoods){
    console.log(searchGoods)
    return state.searchGoods=searchGoods;
  },
  [RECEIVE_EDIT_GOODS](state,editGoods){
    console.log(editGoods)
    state.goods.forEach((item,index)=>{
      if(item._id===editGoods._id){
        return state.goods.splice(index,1,editGoods);
      }
    })
  },
}
