
export default {
  goodsTypes(state){
    let shops=[];
    let obj={};
    let count=0;
    state.goods.forEach(item=>{
      if(!obj[item.type]){
        shops.push({
          id:count++,
          type:item.type,
          data:[item],
        })
        obj[item.type]=item.type;
      }else{
        shops.forEach(shop=>{
          if(shop.type===item.type){
            shop.data.push(item);
            return;
          }
        })
      }
    })
    return shops;
  },
  maxPages(state){
    return Math.floor(state.goods.length/state.limit);
  }
}
