import mongoose from "mongoose";
import  bcrypt from 'bcrypt'

const { Schema } = mongoose;

const UserSchema = new Schema({    
    username : {
        type:String,
        required: true
    },   
    email : {
        type : String,
        required: true
    },
    password: {
        type : String,
        required: true
    },
    
})

UserSchema.statics.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UserSchema.statics.userExist = async function (email) {
    const result = await mongoose.model('User').findOne({ email });
    return !!result;
}

UserSchema.statics.comparePassword = async function (password, receivedPassword) {
    const same = await bcrypt.compare(password, receivedPassword);
    return !!same;
}


export const userModel = mongoose.model('User',UserSchema)