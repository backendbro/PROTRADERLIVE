const {model, Schema} = require('mongoose')

const ActionSchema = new Schema ({
    name:String,
    from:String,
    amount:Number,
    action:{type:String, enum:['withDrew', 'invested']},
    currency:{type:String, enum:['USD', 'GBP', 'EUR']}
})

module.exports = model("Action", ActionSchema)