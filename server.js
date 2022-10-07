const express = require('express')
const dotenv = require('dotenv')

const app = express()

const connectDB = require('./database/database')
const notFound = require('./middlewares/notFound')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
dotenv.config()

connectDB()


app.get('/', (req,res) => {
    res.send('Hello world')
})


const auth = require('./routes/auth')
const verifyId = require('./routes/verifyId')
const withDraw = require('./routes/WithdrawalService')
const Referral = require('./routes/Referral')
const Services = require('./routes/AccountService')
const Deposits = require('./routes/Deposits')
const Contract = require('./routes/Contract')
const Trade = require('./routes/Trade')
const Wallet = require('./routes/Wallet')
const Action = require('./routes/Action')
const Trader = require('./routes/Trader')

app.use('/api/user', auth)
app.use('/api/verify-id', verifyId)
app.use('/api/withdraw', withDraw)
app.use('/api/referral', Referral)
app.use('/api/account-service', Services)
app.use('/api/deposits', Deposits)
app.use('/api/contract', Contract)
app.use('/api/trade', Trade)
app.use('/api/wallet', Wallet)
app.use('/api/action', Action)
app.use('/api/trader', Trader)

app.use(notFound)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`port started on: http://localhost:${port}`)
})