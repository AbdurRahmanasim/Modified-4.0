const express = require("express");
const router = express.Router();

const registerController = require("../controller/registerController");
 
const updateData = require("../controller/updateController")


router.post("/register", registerController);

router.post("/update" , updateData)










module.exports = router;