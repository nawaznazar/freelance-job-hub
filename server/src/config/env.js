import 'dotenv/config'
export const env={PORT:Number(process.env.PORT||8080),MONGODB_URI:process.env.MONGODB_URI,JWT_SECRET:process.env.JWT_SECRET||'dev-secret',CORS_ORIGIN:process.env.CORS_ORIGIN||'*'}
