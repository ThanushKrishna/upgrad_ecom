const addressController = require("../controllers/addresses.controller")
const express = require("express")
const router = express.Router()
const validateUserReqBody = require("../middlewares/validateUserReqBody")

router.post("/",[validateUserReqBody.validateUserReqBody], addressController.createAddress)


router.all('*', (req, res)=>{
    return res.status(404).send("invalid url")
})
module.exports = router