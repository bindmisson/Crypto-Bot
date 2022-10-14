import mongoose from "mongoose";

const userdetailsSchema=new mongoose.Schema({
    name:String,
    username:String,
    totalInvestment:Number,
    totalEarned:Number,
    earnedPercentage:Number,
    totalReferrals:Number,
    license:Number,
    bot:String
})

export default mongoose.model('userdetails', userdetailsSchema)