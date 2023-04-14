const mongoose = require('mongoose');
const schema= new mongoose.Schema({
     userName: String,
     emaild:String,
     phoneNumber:Number,
     password:String,
     skill:[{}],
});

module.exports = mongoose.model("seeker",schema)