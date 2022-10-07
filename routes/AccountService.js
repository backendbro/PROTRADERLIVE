const router = require('express').Router()
const AccountService = require('../service/AccountService')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.post('/token', protect, auth('user', "admin"), AccountService.requestToken)
router.post('/update-email', protect, auth('user', "admin"), AccountService.UpdateEmail)
router.post('/update-photo', protect, auth('user', "admin") ,upload.fields([{ name: 'profilePicture', maxCount: 1 }]), AccountService.UpdatePhoto)
router.get('/profile', protect, auth('user', "admin"), AccountService.myProfile)
router.put('/update-address', protect, auth('user', "admin"), upload.fields([{ name: 'addressBill', maxCount: 1 }]), AccountService.updateAddress)
module.exports = router