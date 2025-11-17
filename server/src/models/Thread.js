import { Schema, model, Types } from 'mongoose'
const ThreadSchema=new Schema({participants:[{type:Types.ObjectId,ref:'users',index:true}],jobId:{type:Types.ObjectId,ref:'jobs'},contractId:{type:Types.ObjectId,ref:'contracts'}},{timestamps:true})
export default model('threads',ThreadSchema)
