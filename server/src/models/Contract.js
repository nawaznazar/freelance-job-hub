import { Schema, model, Types } from 'mongoose'
const ContractSchema=new Schema({jobId:{type:Types.ObjectId,ref:'jobs',required:true},clientId:{type:Types.ObjectId,ref:'users',required:true},freelancerId:{type:Types.ObjectId,ref:'users',required:true},terms:String,startAt:Date,status:{type:String,enum:['active','completed','cancelled'],index:true,default:'active'}},{timestamps:true})
export default model('contracts',ContractSchema)
