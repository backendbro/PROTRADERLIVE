const  router = require('express').Router()
const Referral = require('../service/Referral')
const {protect, auth} = require('../middlewares/protect-route')

router.get('/get-link', protect, auth('user', 'admin'), Referral.getRefferalLink)
router.get('/get-referrals/:userId', protect, auth('user', 'admin'), Referral.getReferral)

module.exports = router


