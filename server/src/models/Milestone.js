import { Schema, model, Types } from 'mongoose'
const MilestoneSchema=new Schema({contractId:{type:Types.ObjectId,ref:'contracts',index:true,required:true},title:String,amount:{type:Number,min:0},dueAt:Date,status:{type:String,enum:['pending_fund','funded','in_review','released','disputed'],index:true,default:'pending_fund'}},{timestamps:true})
export default model('milestones',MilestoneSchema)
