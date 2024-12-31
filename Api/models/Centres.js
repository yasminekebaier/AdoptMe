const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    Title:{type:String,required:true, unique:true},
    desc: {type:String, required:true},
  img:{type:String,},
  Location: {type:String,required:true},
  isAdmin:{type:Boolean, default: false},},
  
   {timestamps: true}
);

module.exports = mongoose.model('Centre', CentreSchema);




/* const mongoose = require("mongoose");
const CentreSchema = new mongoose.Schema({
    Title:{type:String,required:true, unique:true},
    desc: {type:String, required:true},
  img:{type:String,},
  Location: {type:String,required:true},
  isAdmin:{type:Boolean, default: false},},
  
   {timestamps: true}
);
module.exports = mongoose.model("Centre",CentreSchema); */