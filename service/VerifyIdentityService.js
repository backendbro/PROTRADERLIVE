const uploadSingleFile = require('../config/cloudinary')
const UserModel = require('../models/UserModel')
class VerifyIdentityService {
    
    async verifyIDLoggedInUser (req,res) {
       if(!req.files){
        res.status(404).json({message:"UPLOAD AN IMAGE"})
       }
       const {userId} = req.params

       const {frontImage, backImage} = req.files 
       
       try {
            const frontImagePath = frontImage[0].path 
            const frontImageUpload = await uploadSingleFile(frontImagePath)
            const frontImageSecureUrl = frontImageUpload.url

            const backImagePath = backImage[0].path
            const backImageUpload  = await uploadSingleFile(backImagePath)
            const backImageSecureUrl = backImageUpload.url
            console.log(backImageSecureUrl)

            const user = await UserModel.findByIdAndUpdate(userId, 
                { frontImageUrl:frontImageSecureUrl,
                backImageUrl:backImageSecureUrl}, 
                {new:true}
                )

                res.status(200).json({message:"IMAGE UPLOADED", user})
       } catch (error) {
        console.log(error)
       }

    }

    async verifyIDLoggedInUser(req,res) {
        console.log(req.files)
    }
}

module.exports = new VerifyIdentityService()