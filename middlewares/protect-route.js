const UserModel = require('../models/UserModel');
const {decryptJwt} = require('../ultis/jsonwebtoken')

const protect = async (req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    }

    if(!token){
        return res.status(404).json({message: 'INVALID TOKEN'});
    }

    try {
        const decoded = decryptJwt(token)
        const user = await UserModel.findById(decoded)
        req.user = user 
        next()
    } catch (error) {
        console.log(error)
    }
}

const auth = (...role) => {
    return (req,res,next) => {
        if(!role.includes(req.user.role)){
            return res.status(404).json({message:"YOU ARE NOT AUTHORIZED TO ACCESS THIS RESOURCE"})
        }
        next()
    }
}

module.exports = {protect, auth}