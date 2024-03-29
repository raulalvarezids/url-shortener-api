import mongoose from "mongoose";

const { Schema } = mongoose;


const UrlSchema = new Schema({    
    name : {
        type:String
    },
    urlOld : {
        type : String,
        required: true
    },
    urlNew : {
        type : String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user : {
        type: Schema.Types.ObjectId,
        ref:'User'
    }
    
})


export const urlModel = mongoose.model('Url',UrlSchema)