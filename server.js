const express = require('express')
const dotenv = require('dotenv')

const app = express()

const connectDB = require('./src/database/database')
const notFound = require('./src/middlewares/notFound')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
dotenv.config()

connectDB()


app.get('/', (req,res) => {
    res.send('Hello world')
})


const auth = require('./src/routes/auth')
const verifyId = require('./src/routes/verifyId')
const withDraw = require('./src/routes/WithdrawalService')
const Referral = require('./src/routes/Referral')
const Services = require('./src/routes/AccountService')

app.use('/api/user', auth)
app.use('/api/verify-id', verifyId)
app.use('/api/withdraw', withDraw)
app.use('/api/referral', Referral)
app.use('/api/account-service', Services)

app.use(notFound)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`port started on: http://localhost:${port}`)
})