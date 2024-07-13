import mongoose from "mongoose";



const charDhamSchema = new mongoose.Schema({

    title:{
        type:String,
        required: true,
        unique:true
    },
    description:{
        type:String,
        required : true
    },
    price:{
        type:String,
        required : Number
    },
    itinerary:{
         type:[String],
    },
    banner:{
        type:String,
        required:true
    },
    gallery:{
        type:[],

    },
     do:{
        type:[]
    },
    do_not:{
        type:[]
    }
    
       
    





},{timestamps:true});


export default mongoose.model('charDham',charDhamSchema,'CharDham');