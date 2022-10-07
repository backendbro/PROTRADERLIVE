const Action = require('../models/Action')
const UserModel = require('../models/UserModel')

class ActionService  {

    async createAction(req,res) {
        const userId = req.user.id
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"USER DOES NOT EXIST"})
        }

       if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }
       
       const action = await Action.create(req.body)
       res.status(200).json({message:"ACTION CREATED", action})
    }

    async updateAction(req,res) {
        const userId = req.user.id
        const {id} = req.params
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"USER DOES NOT EXIST"})
        }

       if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }

       const actionExist = await Action.findById(id)
       if(!actionExist){
        return res.status(404).json({message:"ACTION DOES NOT EXIST"})
       }

       const action = await Action.findByIdAndUpdate(id, req.body, {new:true})
       res.status(200).json({message:"ACTION UPDATED", action})
    }

    async deleteAction(req,res) {
        const userId = req.user.id
        const {id} = req.params
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"USER DOES NOT EXIST"})
        }

       if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }
       
       const actionExist = await Action.findById(id)
       if(!actionExist){
        return res.status(404).json({message:"ACTION DOES NOT EXIST"})
       }

       const action = await Action.deleteOne({id})
       res.status(200).json({message:'ACTION DELTED', action})
    }

}


module.exports = new ActionService()