const express = require("express");
const Student = require("./models/studet");
require("./db/conn");
const app = express();
const port = process.env.PORT || 8080;
const theRouter = require("./router/router")


//2 middelWare
app.use(express.json());
app.use(theRouter)

// 3 for routing 

// 4 listing the server & port
app.listen(port, (err) => {
    console.log("server Creatd");
})