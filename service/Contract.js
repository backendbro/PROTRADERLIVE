const Contract = require('../models/Contract')
const UserModel = require('../models/UserModel')
const uploadSingleFile = require('../config/cloudinary')

class Contracts {

    async getContracts (req,res) {
      
        const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
        
        const contracts = await Contract.find({confirmed:"true"})
        res.status(200).json({message:"DEPOSITS MADE", contracts})
    }

    async buyContracts (req,res) {
       
        const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }

        const contract = await Contract.create(req.body)
        res.status(200).json({message:"DEPOSIT MADE", contract})
    }

    async uploadProof(req,res){
      
        const userId = req.user.id
        const depositId = req.params.id
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
           
            const depositProof = await Contract.findByIdAndUpdate(depositId,  { depositImage:uploadProofUrl }, {new:true} )
            res.status(200).json({message:"IMAGE UPLOADED", depositProof})
       } catch (error) {
        console.log(error)
       }

    }
}

module.exports = new Contracts()