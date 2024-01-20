const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017")
.then( () => {
    console.log("connect Succesfully")})
.catch((err)=>{
    console.log(`No Connection due to ${err}`)
})
;
