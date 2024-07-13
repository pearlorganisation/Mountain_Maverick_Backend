import express from "express";
import { createTrek, deleteTrek, getAllTreks, getTrek, updateTrek } from "../../controllers/treks/treks.js";
import { upload } from "../../configs/cloudinary.js";




export const tourRouter = express.Router();


tourRouter.route("/")
.get(getAllTreks)
.post(upload.single('banner'),createTrek);

tourRouter.route("/:id")
.get(getTrek)
.delete(deleteTrek)
.put(updateTrek);







export default tourRouter;