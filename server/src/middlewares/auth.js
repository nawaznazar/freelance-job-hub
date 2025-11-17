import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'

export function auth(required = true, roles = []) {
  return (req, res, next) => {
    const token = req.headers.authorization?.replace("Bearer ", "")

    if (!token) {
      return required
        ? res.status(401).json({ error: "No token provided" })
        : next()
    }

    try {
      const decoded = jwt.verify(token, env.JWT_SECRET)

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ error: "Access denied" })
      }

      req.user = decoded
      next()
    } catch (err) {
      return res.status(401).json({ error: "Invalid token" })
    }
  }
}