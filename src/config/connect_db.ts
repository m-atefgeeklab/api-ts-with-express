import { connect } from "mongoose";
import config from "./env_file";

const connectDB = async () => {
  try {
    await connect(String(config.mongodb_uri));
    console.log("Database Connected Successfully.")
  } catch (err) {
    console.log("Error to connect", err);
  }
};

export default connectDB;
