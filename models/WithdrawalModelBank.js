const {model, Schema} = require('mongoose')

const WithDrawalSchemaBank = new Schema ({
    from:{
        type:String,
        required:true
    },
    withdrawalCode:{
        type:Number,
        required:true
    },
    bankName:{
        type:String,
        required:true
    },
    accountNumber:{
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

module.exports = model('WithDrawBank', WithDrawalSchemaBank)