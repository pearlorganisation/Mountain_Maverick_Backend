import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";
import treks from "../../models/treks/treks.js";


//@Route /trek/getAllTrek
export const getAllTreks = asyncErrorHandler(async (req, res, next) => {
    const data = await treks.find();

    if (!data) {
        return next(new CustomError('No tracks found', 404));
    }

    res.status(200).json({ status: true, data });
});

// @Route /trek/getTrek
export const getTrek = asyncErrorHandler(async ( req , res , next )=>{
    
    const {id} = req?.params;
    


    const data = await treks?.findById(id);

    if(!data)
       return next(new CustomError("This Id Doesn't exist", 400));



     res.status(200).json({status:true,message:"Fetched Successfully !!",data});
});



// @Route /trek/delete
export const deleteTrek = asyncErrorHandler(async ( req , res , next )=>{

    const {id} = req?.params;
    
    const data = await treks.deleteOne({_id:id});
      if (!data) {
    return next(new CustomError("This Id Doesn't exist", 400));
  }

    res.status(200).json({status:true,message:"Successfully deleted trek"});

});


// @Route /trek/update
export const updateTrek = asyncErrorHandler(async ( req , res , next )=>{


     const { id } = req?.params;
  const existingData = await treks.find();

  const data = await treks.findByIdAndUpdate(id, {
    ...req?.body,
    banner: req?.file?.path || existingData?.banner,
  });
  if (!data) {
    return next(new CustomError("This Id Doesn't exist", 400));
  }

  res.status(200).json({ status: true, message: "Trek Updated Successfully" });
});


// @Route /trek/create
export const createTrek = asyncErrorHandler(async ( req , res , next )=>{
   


  const newTrek = new treks({
    ...req?.body,
    banner: req?.file?.path,
    
  });

  await newTrek.save();


  res
    .status(200)
    .json({ status: true, message: "Trek created successfully!!",newTrek });




    
});



