import mongoose from "mongoose";

const schema=new mongoose.Schema({
    user:String,
    name:String,
    pswd:String,
    rid:String
})

const userpass=mongoose.model('chatAppUserPass', schema)
export default userpass