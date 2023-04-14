const mongoose=require('mongoose');
const schema= new mongoose.Schema({
    userName:String,
    emaiId:String,
    phoneNumber:Number,
    password:String,
})

module.exports= mongoose.model("employer",schema);