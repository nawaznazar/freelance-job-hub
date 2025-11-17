import { Router } from 'express'
import { auth } from '../middlewares/auth.js'
import User from '../models/User.js'

const router = Router()

// GET PROFILE
router.get('/profile', auth(true), async (req, res) => {
  const user = await User.findById(req.user.id).select('-passwordHash')
  res.json({ user })
})

// CHECK ADMIN
router.get('/check-admin', auth(true, ['admin']), (req, res) => {
  res.json({ isAdmin: true })
})

// CHECK USER
router.get('/check-user', auth(true, ['client', 'freelancer']), (req, res) => {
  res.json({ isUser: true })
})

export default router