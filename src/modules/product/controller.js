const { 
    postProductService,
    getProductService,
    deleteProductService,singleProductService,updateProductService } = require("./service");

//  post method for added data 
module.exports.postProduct = async(req,res)=>{
    try {
        console.log(req.body);
         const result = await postProductService(req.body);
        //  console.log(result);
         res.status(200).json({
            result:result
         })
    } catch (error) { 
        res.status(200).json({
           error:error.message
         }) 
    }
}
// get data from database 
module.exports.getProduct = async(req,res)=>{
    try {
         const result = await getProductService();
         res.status(200).json({
            result:result
         })
    } catch (error) { 
        res.status(200).json({
           error:error.message
         }) 
    } 
}
// get single data 
module.exports.singleProduct = async(req,res)=>{
    try {
     
         const result = await singleProductService(req.params.id);
      
         res.status(200).json({
            result:result
         })
    } catch (error) { 
        
        res.status(200).json({
           error:error.message
         }) 
    }
}
// updat product 
module.exports.updateProduct = async(req,res)=>{
    try {
     
         const result = await updateProductService(req.body,req.params.id);
         console.log(result);
         res.status(200).json({
            result:result
         })
    } catch (error) { 
        console.log(error.message);
        res.status(200).json({
           error:error.message
         }) 
    }
}
// delete product 
module.exports.deleteProduct = async(req,res)=>{
    try {
         const result = await deleteProductService(req.params.id);
         res.status(200).json({
            result:result
         })
    } catch (error) { 
        res.status(200).json({
           error:error.message
         }) 
    }
}

