import { Schema, model, Types } from 'mongoose'
const FileSchema=new Schema({uploaderId:{type:Types.ObjectId,ref:'users',required:true},url:String,key:String,type:String,size:Number,linkedTo:{type:String,enum:['job','proposal','message','milestone']}},{timestamps:true})
export default model('files',FileSchema)
