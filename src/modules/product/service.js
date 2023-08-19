const Product = require("./model")

module.exports.postProductService =async (data)=>{
    return await Product(data).save();
}
module.exports.getProductService =async()=>{
    return await Product.find({})
}
module.exports.deleteProductService =async(id)=>{
    return await Product.deleteOne({_id:id});
}
module.exports.singleProductService = async(id)=>{
    return await Product.findById(id);
}
module.exports.updateProductService = async(data,id)=>{
  return await Product.updateOne({_id:id},{$set:data})
}