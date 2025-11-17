import { Schema, model, Types } from 'mongoose'
const ProfileSchema=new Schema({userId:{type:Types.ObjectId,ref:'users',index:true,required:true},displayName:String,avatar:String,bio:String,skills:[String],hourlyRate:Number,portfolio:[{title:String,url:String}]},{timestamps:true})
export default model('profiles',ProfileSchema)
