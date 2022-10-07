const {model, Schema} = require('mongoose')

const TraderSchema = new Schema ({
name:{
    type:String,
    required:true
},
winsOffSet:{
    type:Number,
    required:true 
},
lossOffSet:{
    type:Number,
    required:true
},
profitShare:{
    type:Number,
    required:true
},
referralLink:{
    type:String
},
photo:String,
wins:Number,
losses:Number,
tradesCount:Number,
winPercent:String, 
pendingRequests: [{ type: Schema.Types.ObjectId, ref:"User" }],
description:String,
price:Number,
type:{
    type:String,
    enum:['Human','Bot']
}
})

module.exports = model('Trader', TraderSchema)