import { Schema, model, Types } from 'mongoose'
const ProposalSchema=new Schema({jobId:{type:Types.ObjectId,ref:'jobs',index:true,required:true},freelancerId:{type:Types.ObjectId,ref:'users',index:true,required:true},coverLetter:String,bidType:{type:String,enum:['fixed','hourly'],required:true},bidAmount:Number,etaDays:Number,status:{type:String,enum:['submitted','shortlisted','hired','rejected'],index:true,default:'submitted'},createdAt:{type:Date,default:Date.now}})
export default model('proposals',ProposalSchema)
