import { createTour, deleteTour, getAllTour, getTour, updateTour } from "../../controllers/tours/tours.js";
import express from 'express';
import { upload } from "../../configs/cloudinary.js";

const router = express.Router();

router.route('/')
    .get(getAllTour)
    .post(upload.fields([
        { name: 'banner', maxCount: 1 },
        { name: 'gallery', maxCount: 10 }
    ]),createTour);


router.route('/:id')
    .get(getTour)
    .delete(deleteTour)
    .patch(updateTour);


export default router;




