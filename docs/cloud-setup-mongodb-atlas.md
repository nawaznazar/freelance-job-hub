# MongoDB Atlas — Setup (Week 1)
1. Create org → project → M10+ cluster (region near your app host).
2. Add IP to allowlist; create DB user with readWrite.
3. Copy SRV URI to `server/.env` as MONGODB_URI.
4. Enable continuous backups with PITR.
5. Alerts + Performance Advisor + Profiler.
