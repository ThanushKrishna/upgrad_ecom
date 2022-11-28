const express = require("express")
const router = express.Router()
const authRouter = require("./auth.routes")
const addressRouter = require("./addresses.routes")
const productRouter = require("./product.routes")
const orderRouter = require("./order.routes")

router.use("/auth", authRouter)
router.use("/addresses", addressRouter)
router.use("/products", productRouter)
router.use("/orders", orderRouter)

router.all('*', (req, res)=>{
    return res.status(404).send("invalid url")
})
module.exports = router