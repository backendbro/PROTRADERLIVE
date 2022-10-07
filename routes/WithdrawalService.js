const router = require('express').Router()
const { protect, auth } = require('../middlewares/protect-route')
const WithDrawalService = require('../service/WithdrawalService')

router.get('/', protect,  auth('user', "admin"), WithDrawalService.getWithDrawals)
router.post('/bank', protect, auth('user', "admin"), WithDrawalService.bank)
router.post('/cash-app', protect, auth('user', "admin"), WithDrawalService.cashApp)
router.post('/crypto', protect, auth('user', "admin") , WithDrawalService.crypto)
router.post('/paypal', protect, auth('user', "admin"), WithDrawalService.paypal)

module.exports = router