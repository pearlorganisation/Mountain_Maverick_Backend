import charDham from "../../models/charDhamModel/charDham.js";
import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";




//@Route /charDham/getAllCharDham
export const getAllCharDham = asyncErrorHandler(async (req, res, next) => {
    const data = await charDham.find();

    if (!data) {
        return next(new CustomError('No Data found', 404));
    }

    res.status(200).json({ status: true, data });
});

// @Route /charDham/get
export const getCharDham = asyncErrorHandler(async ( req , res , next )=>{
    
    const {id} = req?.params;
    


    const data = await charDham?.findById(id);

    if(!data)
       return next(new CustomError("This Id Doesn't exist", 400));



     res.status(200).json({status:true,message:"Fetched Successfully !!",data});
});



// @Route /charDham/delete
export const deleteCharDham = asyncErrorHandler(async ( req , res , next )=>{

    const {id} = req?.params;
    
    const data = await charDham.deleteOne({_id:id});
      if (!data) {
    return next(new CustomError("This Id Doesn't exist", 400));
  }

    res.status(200).json({status:true,message:"Successfully deleted trek"});

});


// @Route /charDham/update
export const updateCharDham = asyncErrorHandler(async ( req , res , next )=>{


  //    const { id } = req?.params;
  // const existingData = await charDham.find();

  // const data = await charDham.findByIdAndUpdate(id, {
  //   ...req?.body,
  //   gallery: req?.files?.path,
  // });
  // if (!data) {
  //   return next(new CustomError("This Id Doesn't exist", 400));
  // }

  res.status(200).json({ status: true, message: "Trek Updated Successfully" });
});


// @Route /trek/create
export const createCharDham = asyncErrorHandler(async ( req , res , next )=>{
   
  const { banner, gallery } = req.files;

  const bannerPath = banner ? banner[0].path : null;

  // console.log()
   // Ensure gallery is an array and map the paths
    const galleryPaths = gallery ? gallery : [];

  const newDham = new charDham({
    ...req?.body,
    banner: bannerPath,
    gallery:galleryPaths
    
  });

  await newDham.save();


  res
    .status(200)
    .json({ status: true, message: "Trek created successfully!!",newDham });




    
});



