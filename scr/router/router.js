const express = require("express");
const app = express();
const router = new express.Router();
const Student = require("../models/studet");
require("../db/conn");

router.get("/", (req, res) => {
    res.status(200).send(`This is router`)
});

router.get("/get", async (req, res) => {         // get is used read data 
    try {
        res.status(200).send('get method is used for read data ')
    }
    catch (err) { res.status(400).send(`Error due to ${err}`); }
})
router.post("/post", async (req, res) => {     // Post() is used to creat a new data 
    try {
        const { name, roll, email } = req.body
        const data = new Student({ name: name, roll: roll, email: email })
        await data.save();
        res.status(200).send(`${data} is saved`)
    }
    catch (err) {
        res.status(400).send(`Error due to ${err}`)
    }
})
router.patch("/update", async (req, res) => {
    try {
        const { name, roll, email } = req.body
        const data = await Student.findOneAndUpdate({ roll: "12" },
            {
                $set: {
                    name: name
                }
            });
        res.status(200).send(`${data.name} is updated`)
    }
    catch (err) {
        res.status(400).send(`Error due to ${err}`)
    }

})
router.delete("/delete", async (req, res) => {

    try {
        const data = await Student.findOneAndDelete({ roll: "11" })
        res.status(200).send(`${data} is delete`)
    }
    catch (err) {
        res.status(400).send(`Error due to ${err}`)

    }
})

module.exports = router;