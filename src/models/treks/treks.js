import mongoose from "mongoose";

const trekSchema = new mongoose.Schema({
  
    title:{
        type:String,
        required:true
    },
    description:{
     type:String,
        required:true
    },
    banner: { type: String, required: true },

  


},{ timestamps: true });

export default mongoose.model("trek",trekSchema,"Treks");