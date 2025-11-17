import { Router } from 'express'
import Job from '../models/Job.js'
import { auth } from '../middlewares/auth.js'

const router = Router()

// PUBLIC → list jobs
router.get('/', async (_req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 })
  res.json(jobs)
})

// CLIENT → post job
router.post('/', auth(true, ['client']), async (req, res) => {
  const job = await Job.create({
    ...req.body,
    clientId: req.user.id
  })
  res.status(201).json(job)
})

export default router