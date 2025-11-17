import { Schema, model, Types } from 'mongoose'
const NotificationSchema=new Schema({userId:{type:Types.ObjectId,ref:'users',index:true},type:String,payload:Schema.Types.Mixed,readAt:Date},{timestamps:true})
export default model('notifications',NotificationSchema)
