// -----------------------------------------------Imports-------------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectMongo } from "./src/configs/db/mongo/mongoConfig.js";
import { envAccess } from "./src/utils/index.js";
import { CustomError } from "./src/utils/errors/customError.js";
import morgan from "morgan";
import trekRouter from "./src/routes/treks/treks.js";
import charDhamRoutes from "./src/routes/charDhamRoutes/CharDhamRoutes.js";
import tourRouter from "./src/routes/tour/tour.js";
// -------------------------------------------------------------------------------------------------------------
dotenv.config();

const app = express();
const PORT = envAccess("PORT") || 9898;
connectMongo();
// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------------CORS HANDLING-------------------------------------------------
app.use(
  cors(
    process.env.NODE_WORKING_ENVIRONMENT === "production"
      ? {
          origin: [

            "http://localhost:4112",
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5010",
            "http://localhost:4113",
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:4114",
            "http://localhost:5175",
            "https://mountain-maverick-frontend.vercel.app",
          ]
        }
      : {
          origin: [

            "http://localhost:4112",
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5174",
            "http://localhost:5173",
            "http://localhost:5010",
            "http://localhost:4113",
            "http://localhost:4114",
            "http://localhost:5175",
          ],
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"]
        
        }
  )
);
// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------------Middlewares----------------------------------------------------
// express.json() -- middleware to parse the json coming from the http request
app.use(express.json());

app.use(morgan("dev"));

// cookieParser() -- middleware to parse the cookie coming from the http request
// app.use(cookieParser());
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------Routes----------------------------------------------------

const versionOne = (url) => {
  return `/api/v1/${url}`;
};

app.all(["/", "/api", "/api/v1"], (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Travel Maverick",
  });
});

//Tracks Routes 
app.use(versionOne('treks'), trekRouter);
app.use(versionOne('char_dham'), charDhamRoutes);
app.use(versionOne('tour'), tourRouter);


//India's Char  Dham Route

// -------------------------------------------------------------------------------------------------------------

// ------------------------------------------Global Error Handling----------------------------------------------
app.all("*", (req, res, next) => {
  return next(
    new CustomError(`Can't find the ${req.originalUrl} on the server`, 404)
  );
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

// ------------------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running at port - ${PORT}`);
});
// ------------------------------------------------------------------------------------------------------------
