const Wallet = require('../models/Wallet')
const UserModel = require('../models/UserModel')

class WalletService {

    async addWallet() {
        const userId = req.user.id
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"USER DOES NOT EXIST"})
        }

       if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }

       const wallet = await Wallet.create(req.body)
       res.status(200).json({message:"WALLET CREATED", wallet})
    }


    async deleteWallet(){
        const userId = req.user.id
        const {walletId} = req.params

        if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }

       const wallet = await Wallet.findByIdAndUpdate(walletId)
       if(!wallet){
        return res.status(404).json({message:"WALLET DOES NOT EXIST"})
       }

        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"USER DOES NOT EXIST"})
        }


       const walletD = await Wallet.findByIdAndDelete(walletId)
       res.status(200).json({message:"WALLET DELETED", walletD})
    }   

}   

module.exports = new WalletService()