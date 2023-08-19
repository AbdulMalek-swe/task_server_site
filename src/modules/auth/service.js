const User = require("./model")
module.exports.registerService = async(userInfo)=>{
   return await User.create(userInfo) 
} 
 module.exports.findUserService = async(email)=>{
    return await User.findOne({email:email}) 
 } 