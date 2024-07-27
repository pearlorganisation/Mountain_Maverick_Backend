// ---------------------------------------------Imports---------------------------------------------------
import mongoose from "mongoose";

import { envAccess } from "../../../utils/index.js";
// import { configDotenv } from "dotenv";
// configDotenv({ path: ".././config" });
// -------------------------------------------------------------------------------------------------------

// connectMongo -- function to call in order to connect to the database
export const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.log(error.message);
  }
};
