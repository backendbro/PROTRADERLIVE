const router = require("express").Router()
const ActionService = require('../service/Action')
const {protect, auth} = require('../middlewares/protect-route')

router.post('/', protect, auth('admin'), ActionService.createAction)
router.put('/:id', protect, auth('admin'), ActionService.updateAction)
router.delete('/:id', protect, auth('admin'), ActionService.deleteAction)


module.exports = router