import { Schema, model, Types } from 'mongoose'
const PaymentSchema=new Schema({contractId:{type:Types.ObjectId,ref:'contracts',index:true},milestoneId:{type:Types.ObjectId,ref:'milestones',index:true},amount:Number,currency:{type:String,default:'USD'},type:{type:String,enum:['funding','release','refund'],required:true},provider:{type:String,enum:['stripe'],default:'stripe'},status:{type:String,enum:['pending','succeeded','failed'],index:true,default:'pending'}},{timestamps:true})
export default model('payments',PaymentSchema)
