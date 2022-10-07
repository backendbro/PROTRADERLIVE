const {model, Schema} = require('mongoose')

const WithDrawalSchemaCrypto = new Schema ({
    from:{
        type:String,
        required:true
    },
    withdrawalCode:{
        type:Number,
        required:true
    },
    wallet:{
        type:String,
        required:true
    },
    cryptoCurrency:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    approved:{
        type:Boolean,
        default:true
    }
}, {timestamps:true})

module.exports = model('WithDrawCrypto', WithDrawalSchemaCrypto)