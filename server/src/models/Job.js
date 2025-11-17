import { Schema, model, Types } from 'mongoose'
const JobSchema=new Schema({clientId:{type:Types.ObjectId,ref:'users',index:true,required:true},title:{type:String,required:true,index:'text'},description:{type:String,index:'text'},skills:[String],budgetType:{type:String,enum:['fixed','hourly'],required:true},budgetMin:Number,budgetMax:Number,status:{type:String,enum:['open','in_progress','completed','cancelled'],index:true,default:'open'},createdAt:{type:Date,default:Date.now,index:true}})
export default model('jobs',JobSchema)
