import mongoose from "mongoose";

const desitnationSchema = new mongoose.Schema({

    title: String,
    itineraryData :[String]

});


const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Is Required !!"]
    },
    banner: {
        type: [{}],
        required: [true, "Banner is Required"]
    },
    gallery: {
        type: [{}]
    },
    tourBriefIntro: {
        type: String,
    },
    inclusion: {
        type: [String],
    },
    exclusion: {
        type: [String]
    },
    estimatedCost: {
        priceNote: {
            type: String
        },
        price: {
            type: Number,
        }
    },
    itinerary: {
        type: [desitnationSchema]
    }
});


export default mongoose.model('tour', tourSchema); 