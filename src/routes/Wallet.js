const router = require('express').Router()
const WalletService = require('../service/Wallet')
const {protect, auth} = require('../middlewares/protect-route')

router.post('/', protect, auth('admin'), WalletService.addWallet)
router.delete('/:id', protect, auth('admin'), WalletService.deleteWallet)

module.exports = router