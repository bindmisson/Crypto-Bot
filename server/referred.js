import mongoose from "mongoose";

const referredSchema=new mongoose.Schema({
    referredBy:String,
    referred:String
})

export default mongoose.model('referred', referredSchema)