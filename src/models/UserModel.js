const { Schema, model } = require('mongoose')
const {customCreateToken} = require('../ultis/jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const UserSchema = new Schema ({
    firstName: {
        type:String,
        required:true,
        trim:true
    },
    lastName: {
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
          ]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    profilePicture:String,
    role:{
        type:String,
        enum:['admin', 'user'],
        default:'admin'
    },
    currency:{
        type:String,
        enum:['USD', 'GBP', 'EUR','AUR'],
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    postCode:{
        type:Number,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    isVerifiedAcct:{
        type:Boolean,
        default:false
    },
    FACode:String,
    FACodeExp:Date,
    frontImageUrl:String,
    backImageUrl:String,
    addressBillPic:String,
    referredUser:[{ type: Schema.Types.ObjectId, ref:"User" }]

    }, {timestamps:true})


UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createToken = function(time){
    const token = customCreateToken(this._id, time)
    return token
}


UserSchema.methods.send2FACode = function(){
    const token = crypto.randomBytes(3).toString('hex')
    this.FACode = token

    this.FACodeExp = Date.now() + 100 * 60 * 1000
    return token
}

module.exports = model('User', UserSchema)