const {model, Schema} = require('mongoose')

const VerifiedSchema = new Schema ({
    email:String,
    IdentityVerification:String,
    AddressVerification:String
})

module.exports = model('Verified', VerifiedSchema)