const express = require("express");
const user = require("./controller");
const { verifyToken } = require("../../middleware/veryfiToken");
const router = express.Router();
 
router
    .route("/register")
    .post(user.userRegister)
router
    .route("/login")
    .post(user.userLogin)
router
    .route("/get-me")
    .get(verifyToken, user.userInformation)
module.exports = router;