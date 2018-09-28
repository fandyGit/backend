/*
* 包含n个向外暴露的接口函数
* */
import ajax from './ajax';

const BASE_URL='/api';
/*1管理员登录
*@method: reqLogin方法，向后台发送登录请求数据，
*@param
* username  用户名
* password 密码
* @return
* 返回一个promise对象
* */
export const reqLogin=(username,password)=>ajax(BASE_URL+'/login',{username,password},'POST');
/*2获取分类商品列表
*@method: reqGoods方法，向后台发送分页请求数据，获取指定数量的数据
*@param
* page  第几页
* limit 每一页显示几条数据
* @return
* 返回指定页数的指定数量的数据
* */
export const reqGoods=(page,limit)=>ajax(BASE_URL+'/shop_manger/goodsclassify',{page,limit});
/*3获取所有商品列表数据
*@method: reqGoods方法，向后台发送分页请求数据，获取指定数量的数据
*@param
* page  第几页
* limit 每一页显示几条数据
* @return
* 返回指定页数的指定数量的数据
* */
export const reqgoodslist=(page,limit)=>ajax(BASE_URL+'/shop_manger/goodslist',{page,limit});
/*4获取所有商品列表
*@method: reqGoodsManger方法，当路由跳转到shop_manger向后台发送请求数据，获取所有的商品数据
* @return
* 返回商品列表的的数据
* */
export const reqGoodsManger=()=>ajax(BASE_URL+'/shop_manger');
/*5修改密码
*@method: reqChangePass方法，修改密码，
*@param
* oldPass 验证原始密码是否正确
* newPass 修改后的新密码
* @return
* 返回修改后的promise数据
* */
export const reqChangePass=(oldPass,newPass)=>ajax(BASE_URL+'/shop_manger/changepassword',{oldPass,newPass},'POST');
/*6添加商品列表
*@method: reqChangePass方法，修改密码，
*@param
* type 添加的商品列表
* gc_name 修改后的名字
* price 修改后的价格
* sale 修改后的售价
* @return
* 返回修改后的promise数据
* */
export const reqGoodsAdd=({type,gc_name,price,sale})=>ajax(BASE_URL+'/shop_manger/goodslist/addgoods',{type,gc_name,price,sale},'POST');
/*7删除一个或者多个商品
*@method: reqGoodsDelete方法，删除一个或者多个商品
*@param
* obj 包含需要删除的商品的_id;
* @return
* 返回修改后的promise数据
* */
export const reqGoodsDelete=(obj)=>ajax(BASE_URL+'/shop_manger/goodslist/deletegoods',obj,'POST');
/*8更新用户信息
*@method: updateUserInfo方法，更新用户信息，
*@param
* obj 更新用户的_id
* @return
* 返回修改后的promise数据
* */
export const updateUserInfo=(obj)=>ajax(BASE_URL+'/shop_manger/goodslist/modifieddata',obj,'POST');
/*9删除同类商品
*@method: updateUserInfo方法，更新用户信息，
*@param
* type 删除商品的类型
* @return
* 返回修改后的promise数据
* */
export const deleteClassifyGoods=(type)=>ajax(BASE_URL+'/shop_manger/goodsclassify/classifydelete',{type},'POST');
/*// 10获取商品分类
*@method: reqGoodsClassify方法，获取商品分类，并且进行分页，
*@param
* page 指定的分页
* limit 指定每页的数量
* @return
* 返回修改后的promise数据
* */
export const reqGoodsClassify=(page,limit)=>ajax(BASE_URL+'/shop_manger/goodsclassify',{page,limit});
/*11获取商品搜索数据
*@method: reqGoodsSearch方法，获取搜索到的商品，
*@param
* keyword 关键字
* classify 商品分类
* @return
* 返回修改后的promise数据
* */
export const reqGoodsSearch=({keyword,classify})=>ajax(BASE_URL+'/shop_manger/searchgoods',{keyword,classify},'POST');
/*// 12编辑商品
*@method: reqGoodsSearch方法，获取搜索到的商品，
*@param
* url 跳转的路由地址
* type 商品分类
* gc_name 商品名称
* price 商品价格
* sale 商品售价
* @return
* 返回修改后的promise数据
* */
export const reqGoodsEdit=(url,{type,gc_name,price,sale})=>ajax(BASE_URL+url,{type,gc_name,price,sale},'POST');
