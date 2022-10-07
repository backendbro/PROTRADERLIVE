const Trade = require('../models/Trade')
const UserModel = require('../models/UserModel')
const uploadSingleFile = require('../config/cloudinary')

class Trades {

    async buyTrade (req,res) {
      
        const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }

        const trade = await Trade.create(req.body)
        res.status(200).json({message:"DEPOSIT MADE", trade})
    }

    async uploadProof(req,res){
      
        const userId = req.user.id
        const tradeId = req.params.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }

        if(!req.file){
            return res.status(404).json({message:"PLEASE UPLOAD AN IMAGE"})
        }

        const uploadProof = req.file

        try {
            const uploadProofPath = uploadProof.path 
            const uploadProofUpload = await uploadSingleFile(uploadProofPath)
            const uploadProofUrl = uploadProofUpload.url
           
            const tradeProof = await Trade.findByIdAndUpdate(tradeId,  { depositImage:uploadProofUrl }, {new:true} )
            res.status(200).json({message:"IMAGE UPLOADED", tradeProof})
       } catch (error) {
        console.log(error)
       }

    }
}

module.exports = new Trades()