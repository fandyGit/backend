/*const mongodb=require('mongodb')*/
import mongodb from 'mongodb'
const MongoClient=mongodb.MongoClient;
const ObjectId=mongodb.ObjectId;
//连接数据库的函数
function mconnection(cb){
  const COLLECTION='gz1804';
  const DOCUMENT='user';
  const URL = "mongodb://localhost:27017/";
  MongoClient.connect(URL,(err,database)=>{
    const db=database.db(COLLECTION);
    const collections=db.collection(DOCUMENT);
    cb(collections);
  })
}
/********************************插入数据**********************************/
//插入单条数据
export const insert=function (obj,cb) {
  mconnection(collections=>{
    collections.insertOne(obj,(err,data)=>{
      if(err){
        console.log(err);
        return;
      }
      cb(data);
    })
  })
}
//插入多条数据
export const insertMany=function (obj,cb) {
  mconnection(collections=>{
    collections.insertMany(obj,(err,data)=>{
      if(err){
        console.log(err);
        return;
      }
      cb(data);
    })
  })
}
/********************************插入数据**********************************/

export const find=function (obj,cb) {
  obj=obj?obj:null;
  mconnection(collections=>{
    collections.find(obj).toArray((err,data)=>{
      cb(data);
    })
  })
}
/**************************************删除数据******************************8*/
export const deleteOne=function (obj,cb) {
  mconnection(collections=>{
    collections.deleteOne(obj,(err,data)=>{
      cb(data);
    })
  })
}
/**************************************删除数据******************************8*/
/**************************************更新数据******************************8*/
export const updateOne=function (obj,obj1,cb) {
  mconnection(collections=>{
    collections.updateOne(obj,obj1,(err,data)=>{
      cb(data);
    })
  })
}
export const updateMany=function (obj,obj1,cb) {
  mconnection(collections=>{
    collections.updateMany(obj,obj1,(err,data)=>{
      cb(data);
    })
  })
}
/**************************************更新数据******************************8*/


