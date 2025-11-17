import { Router } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { env } from '../config/env.js'

const router = Router()

// SIGNUP
router.post('/signup', async (req, res) => {
  const { email, password, role } = req.body

  const exists = await User.findOne({ email })
  if (exists) return res.status(400).json({ error: "User already exists" })

  const passwordHash = await bcrypt.hash(password, 10)

  const user = await User.create({ email, passwordHash, role })

  return res.status(201).json({ message: "User created", userId: user._id })
})

// SIGNIN
router.post('/signin', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(404).json({ error: "User not found" })

  const match = await bcrypt.compare(password, user.passwordHash)
  if (!match) return res.status(401).json({ error: "Invalid password" })

  const token = jwt.sign(
    { id: user._id, role: user.role },
    env.JWT_SECRET,
    { expiresIn: "7d" }
  )

  return res.json({ message: "Login success", token })
})

// LOGOUT (Client side: delete token)
router.post('/logout', (req, res) => {
  return res.json({ message: "Logout success" })
})

export default router