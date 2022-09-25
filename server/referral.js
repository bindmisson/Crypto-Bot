import mongoose from "mongoose";

const referralSchema=new mongoose.Schema({
    user:String,
    referralId:String,
    referredUsers:Array
})

export default mongoose.model('Referral', referralSchema)