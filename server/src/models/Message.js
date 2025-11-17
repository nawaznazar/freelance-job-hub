import { Schema, model, Types } from 'mongoose'
const MessageSchema=new Schema({threadId:{type:Types.ObjectId,ref:'threads',index:true,required:true},senderId:{type:Types.ObjectId,ref:'users',required:true},text:{type:String,default:''},attachments:[{key:String,url:String,type:String,size:Number}],createdAt:{type:Date,default:Date.now,index:true}})
export default model('messages',MessageSchema)
