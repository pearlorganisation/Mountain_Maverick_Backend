// ------------------------------------------------Imports-----------------------------------------------

// -----------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------

// envAccess -- function to access the environment variables
export const envAccess = (field) => {
  return process.env[field];
};

// -----------------------------------------------------------------------------------------------------------
// ----------------------------------------------CORS CONFIG---------------------------------------------

// export const developmentWhiteListedIpAddresses = [
//   "http://localhost:5173",
//   "http://localhost:5174 ",
//   "https://hot-house-9gco.vercel.app/",
//   "https://hot-house.vercel.app/",
//   "http://localhost:3000",
// ];

// export const productionWhiteListedIpAddresses = ["https://hot-house.vercel.app/"];

export const corsConfig = () => {
  return envAccess("NODE_WORKING_ENVIRONMENT")
    ? {
        origin: developmentWhiteListedIpAddresses,
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
        methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
        exposedHeaders: ["*", "Authorization"],
      }
    : {
        origin: productionWhiteListedIpAddresses,
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
        methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
        exposedHeaders: ["*", "Authorization"],
      };
};
