import { Schema, model } from 'mongoose'
const TransactionSchema=new Schema({provider:{type:String,enum:['stripe'],required:true},providerRef:{type:String,unique:true,required:true},direction:{type:String,enum:['in','out'],required:true},status:{type:String,enum:['pending','succeeded','failed'],default:'pending'},raw:Schema.Types.Mixed},{timestamps:true})
export default model('transactions',TransactionSchema)
