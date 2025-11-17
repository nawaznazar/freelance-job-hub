import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import { env } from './config/env.js'
import { connectMongo } from './config/db.js'
import { errorHandler } from './middlewares/error.js'

// ROUTES
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import jobRoutes from './routes/jobs.js'

async function main() {
  if (!env.MONGODB_URI) throw new Error('Missing MONGODB_URI in server/.env')

  await connectMongo(env.MONGODB_URI)

  const app = express()

  // MIDDLEWARES
  app.use(cors({ origin: env.CORS_ORIGIN }))
  app.use(helmet())
  app.use(compression())
  app.use(express.json())
  app.use(morgan('dev'))

  // HEALTH CHECK
  app.get('/', (req, res) => res.json({ ok: true, message: "API running" }))

  // ROUTES
  app.use('/auth', authRoutes)   // signup / signin / logout
  app.use('/users', userRoutes)  // user profile (secured)
  app.use('/jobs', jobRoutes)    // job CRUD

  // ERROR HANDLER
  app.use(errorHandler)

  // START SERVER
  app.listen(env.PORT, () =>
    console.log(`API running at: http://localhost:${env.PORT}`)
  )
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})