const router = require('express').Router()
const TraderService = require('../service/Trader')
const {protect, auth} = require('../middlewares/protect-route')


router.get('/:id', protect, auth('admin'), TraderService.getTrader)
router.get('/all', protect, auth('admin'), TraderService.getTraders)
router.post('/', protect, auth('admin'), TraderService.createTrader)
router.get('/search', protect, auth('admin'), TraderService.searchTrader)
router.put('/:id', protect, auth('admin'), TraderService.updateTrader)
router.get('/copiers', protect, auth('admin'), TraderService.copiers)

module.exports = router