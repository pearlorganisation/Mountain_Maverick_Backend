import express from "express";
import { upload } from "../../configs/cloudinary.js";
import { createCharDham, deleteCharDham, getAllCharDham, getCharDham, updateCharDham } from "../../controllers/charDhamController/charDhamController.js";

const charDhamRoutes = express.Router();

charDhamRoutes.route('/')
    .get(getAllCharDham)
    .post(upload.fields([
        { name: 'banner', maxCount: 1 },
        { name: 'gallery', maxCount: 10 }
    ]), createCharDham);

charDhamRoutes.route('/:id')
    .get(getCharDham)
    .delete(deleteCharDham)
    .put(updateCharDham);

export default charDhamRoutes;
