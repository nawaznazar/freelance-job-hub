import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: ['client', 'freelancer', 'admin'],
      default: 'client'
    },
    status: {
      type: String,
      enum: ['active', 'pending', 'suspended'],
      default: 'active'
    }
  },
  { timestamps: true }
)

export default model('users', UserSchema)