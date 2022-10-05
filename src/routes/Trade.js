const router = require('express').Router()
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')
const Trade = require('../service/Trade')

router.post('/', protect, auth('user', "admin"), Trade.buyTrade)
router.put('/upload-trade/:id', protect, auth('user', "admin"), upload.single("uploadProof"), Trade.uploadProof)

module.exports = router
