const UserModel = require("../models/UserModel")

class Referral {

    async getRefferalLink(req,res){
        const userId = req.user.id
        const link = `http://localhost:8000/register/referral/${userId}`
        res.status(200).json({message:"Referral Link", link})
    }

    async getReferral(req,res) {
        const {userId} = req.params
        const referral = await UserModel.findById(userId).populate('referredUser')
        res.status(200).json({referrals: referral.referredUser})
    }

}

module.exports = new Referral()