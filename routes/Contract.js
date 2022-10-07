const router = require('express').Router()
const Contract = require('../service/Contract')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.get('/', protect, auth('user', "admin"), Contract.getContracts)
router.post('/', protect, auth('user', "admin"), Contract.buyContracts)
router.put('/upload-contract/:id', protect, auth('user', "admin"), upload.single("uploadProof"), Contract.uploadProof)

module.exports = router
