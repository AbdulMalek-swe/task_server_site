const { generateToken } = require("../../utils/token");
const { 
  registerService, 
  userInfoService,
  findUserService } = require("./service");

module.exports.userRegister = async(req,res)=>{
    try {
       const arr = ['fullName','email','role','password' ];
       for(const x of arr){
            if(!req?.body[x]){
              return res.status(401).json({
                error:`${x} crediential failed`
            })
            }
       }
         const userInfo = await registerService(req.body)
         const result =  generateToken(userInfo);
         const {password:pwd,...others} = userInfo.toObject()
        res.status(200).json({
         result:others,
         access_token:result
      })
    } catch (error) {
        res.status(401).json({
            error:error.message  
        })
    }
}

module.exports.userLogin = async(req,res)=>{
  try {
     const arr = ['email','password' ];
     for(const x of arr){
          if(!req?.body[x]){
            return res.status(401).json({
              error:`${x} crediential failed`
          })
          }
     }
       const userInfo = await findUserService(req.body.email);
        if(!userInfo.comparePassword(req.body.password,userInfo.password)){
          return res.status(401).json({
            error: "password mismatch"
        })
        }
        const result =  generateToken(userInfo);
       const {password:pwd,...others} = userInfo.toObject()
       res.status(200).json({
       result:others,
       access_token:result
    })
  } catch (error) {
      res.status(401).json({
          error:error.message  
      })
  }
}
module.exports.userInformation = async(req,res)=>{
  try {
    const  userInfo = await findUserService(req.user.email) ;
    const {password:pwd,...others} = userInfo.toObject()
    res.status(200).json({
      message:"got user",
      result:others
    })
  } catch (error) {
      res.status(401).json({
          error:error.message 
      })
  }
}