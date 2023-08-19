const express = require("express");
const product = require("./controller");
const router = express.Router();

router
    .route("/product")
    .get(product.getProduct)
    .post(product.postProduct)
router
    .route("/product/:id")
    .get(product.singleProduct)
    .patch(product.updateProduct)
    .delete(product.deleteProduct)
    
module.exports = router;