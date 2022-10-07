const {model, Schema} = require('mongoose')

const WithDrawalSchemaCashApp = new Schema ({
    from:{
        type:String,
        required:true
    },
    withdrawalCode:{
        type:Number,
        required:true
    },
    cashTag:{
        type:String,
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

module.exports = model('WithDrawCashApp', WithDrawalSchemaCashApp)