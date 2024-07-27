import express from "express";
import { createTrek, deleteTrek, getAllTreks, getTrek, updateTrek } from "../../controllers/treks/treks.js";
import { upload } from "../../configs/cloudinary.js";



const router = express.Router();


router.route("/")
.get(getAllTreks)
.post(upload.single('banner'),createTrek);

router.route("/:id")
.get(getTrek)
.delete(deleteTrek)
.put(updateTrek);







export default router;