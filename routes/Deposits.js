const router = require('express').Router()
const Deposits = require('../service/Deposit')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.get('/', protect, auth('user', "admin"), Deposits.getDeposits)
router.post('/', protect, auth('user', "admin"), Deposits.makeDeposits)
router.put('/upload-proof/:id', protect, auth('user', "admin"), upload.single("uploadProof"),Deposits.uploadProof)

module.exports = router
