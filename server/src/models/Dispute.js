import { Schema, model, Types } from 'mongoose'
const DisputeSchema=new Schema({targetRef:{type:Types.ObjectId,refPath:'targetModel',required:true},targetModel:{type:String,enum:['contracts','milestones'],required:true},raisedBy:{type:Types.ObjectId,ref:'users',required:true},reason:String,evidence:[{title:String,url:String}],status:{type:String,enum:['open','resolved','rejected'],default:'open'},timeline:[{at:Date,action:String,by:String}]} ,{timestamps:true})
export default model('disputes',DisputeSchema)
