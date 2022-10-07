const UserModel = require("../models/UserModel")
const WithdrawalModelBank = require("../models/WithdrawalModelBank")
const WithdrawalModelCashApp = require("../models/WithdrawalModelCashApp")
const WithdrawalModelCrypto = require("../models/WithdrawalModelCrypto")
const WithdrawalModelPaypal = require("../models/WithdrawalModelPaypal")

class WithDrawalService {
    async bank(req,res){
        const user = await UserModel.findById(req.user.id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        const withDrawalDetails = await WithdrawalModelBank.create(req.body)
        res.status(200).json({withDrawalDetails})
    }   

    async crypto(req,res) {
        const user = await UserModel.findById(req.user.id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        const withDrawalDetails = await WithdrawalModelCrypto.create(req.body)
        res.status(200).json({withDrawalDetails})
    }

    async cashApp(req,res) {
        const user = await UserModel.findById(req.user.id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        const withDrawalDetails = await WithdrawalModelCashApp.create(req.body)
        res.status(200).json({withDrawalDetails})
    }


    async paypal(req,res){
        const user = await UserModel.findById(req.user.id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        const withDrawalDetails = await WithdrawalModelPaypal.create(req.body)
        res.status(200).json({withDrawalDetails})
    }

    async getWithDrawals(req,res){
        const user = await UserModel.findById(req.user.id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }

        const paypalWithDraw = await WithdrawalModelPaypal.find({approved:"true"})
        const cashAppWithDraw = await WithdrawalModelCashApp.find({approved:"true"})
        const bankWithDraw = await WithdrawalModelBank.find({approved:"true"})
        const cryptoWithDraw = await WithdrawalModelCrypto.find({approved:"true"})

        res.status(200).json({ paypalWithDraw, cashAppWithDraw, bankWithDraw, cryptoWithDraw})
    
    }

}

module.exports = new WithDrawalService()