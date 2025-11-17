import { Schema, model, Types } from 'mongoose'
const ReviewSchema=new Schema({contractId:{type:Types.ObjectId,ref:'contracts',required:true},reviewerId:{type:Types.ObjectId,ref:'users',required:true},revieweeId:{type:Types.ObjectId,ref:'users',index:true,required:true},rating:{type:Number,min:1,max:5,required:true},text:String},{timestamps:true})
export default model('reviews',ReviewSchema)
