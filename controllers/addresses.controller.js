const addressModel = require("../models/address.model")

exports.createAddress = (req, res) => {
    return res.status(200).json({
        message: "Address route is working"
    })
}