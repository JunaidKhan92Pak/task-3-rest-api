const mongoose = require("mongoose");
const validator = require("validator");

const studetSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
roll:{
    type:Number,
    required:true,
    // unique:true
},
email:{
    type:String,
    required:true
}
});
 
const Student = new mongoose.model("Student",studetSchema);
module.exports= Student;