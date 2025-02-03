import dotenv from 'dotenv'

dotenv.config()

const {
  DB_HOST,
  DB_NAME,
  PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
  APP_URL,
  JWT_SECRET,
  BUCKET_NAME,
  BUCKET_REGION,
  ACCESS_KEY,
  SECRET_ACCESS_KEY,
  TWILIO_SID,
  TWILIO_TOKEN,
} = process.env;

export default {
  appPort: PORT,
  appUrl: APP_URL,
  jwtSecret: JWT_SECRET,
  dbUrl: DB_HOST,
  dbName: DB_NAME,
  dbPort: DB_PORT,
  dbUsername: DB_USERNAME,
  dbPassword: DB_PASSWORD,
  awsBucketName: BUCKET_NAME,
  awsBucketRegion: BUCKET_REGION,
  awsAccessKey: ACCESS_KEY,
  awsSecretAccessKey: SECRET_ACCESS_KEY,
  accountSid: TWILIO_SID, // Replace with your Twilio Account SID
  authToken: TWILIO_TOKEN,
};
