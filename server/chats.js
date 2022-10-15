import mongoose from "mongoose";

const chatsSchema=new mongoose.Schema({
    user:String,
    chat:Array
})

export default mongoose.model('chats2', chatsSchema)