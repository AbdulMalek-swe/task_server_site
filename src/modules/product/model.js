const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const valid = require("validator");
const ProductSchema= mongoose.Schema({
    title: {  
        type: String,
        required: [true, "provide a valid name"],
    },
    purchasePrice:{
        type:Number,
        required:[true,"set price"],
        min:1
    },
    sellingPrice:{
        type:Number,
        required:[true,"set price"],
        min:1
    },
    description: {
        type: String,
        required: [true, "give some product description"]
    },
    productAddedDate:{
       type:Date,
       required:true
    },
    stock:{
        type:Number,
        required:[true,"set price"],
        min:1
    }
 
}, {
    timestamps: true
});
 
const Product = new mongoose.model("Product", ProductSchema
);
module.exports = Product; 