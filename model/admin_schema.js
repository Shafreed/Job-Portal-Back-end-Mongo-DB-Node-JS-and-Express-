const mongoose=require("mongoose");
const schema= new mongoose.Schema({
    userName:String,
    emailId:String,
    password:String,

})
module.exports = mongoose.model('Admin',schema);
