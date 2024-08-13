import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import tour from "../../models/tour/tour.js";  

export const getAllTour = asyncErrorHandler(async(req, res,next) => {
    
    const data = await tour.find({}).lean();
    res.status(200).json({ status: true, message: "Data Fetched Successfully !!", data });
    
});




export const getTour = asyncErrorHandler(async (req, res, next) => {
    
    const data = await tour.findById(req.params.id);
    res.status(200).json({ status: true, message: "Data Fetched Successfully !!", data });
    
})



export const deleteTour = asyncErrorHandler(async(req, res,next) => {
    
    res.status(200).json({status : true,message:"Api is Under development"})
    
})




export const updateTour = asyncErrorHandler(async(req, res , next) => {
    
    res.status(200).json({status : true,message:"Api is Under development"})
    
});



export const createTour = asyncErrorHandler(async(req, res, next) => {
    
  const { banner, gallery } = req.files;

    const bannerPath = banner ? banner[0].path : null;
    
    const galleryPaths = gallery ? gallery : [];
    const inclusion = req.body.inclusion ? JSON.parse(req.body.inclusion) : [];
    const exclusion = req.body.exclusion ? JSON.parse(req.body.exclusion) : []; 
    const itinerary = req.body.itinerary ? JSON.parse(req.body.itinerary) : [];

    

    const data = await tour.create({
        ...req.body,
        banner: bannerPath,
        gallery: galleryPaths,
        inclusion,
        exclusion,
        itinerary
    });






    
    res.status(201).json({status : true,message:"Tour Created Successfully",data})
});


