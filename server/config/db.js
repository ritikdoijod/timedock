import { connect } from "mongoose";
import { logger } from "./winston.js"

const connectToDB = async () => {
  const URI = process.env.APP_DB_URI;

  try {
    await connect(URI);
    logger.info("DB Connection Successfull.")
  } catch (error) {
    logger.error("DB Connection Failed.")
  }

}

export { connectToDB }
