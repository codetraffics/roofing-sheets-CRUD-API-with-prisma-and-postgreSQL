const express = require('express');
const distributorController = require('../controllers/distributorController');

const router = express.Router();

router.post('/add-distributor', distributorController.addDistributor);
router.delete('/:id', distributorController.deleteDistributor);

module.exports = router;
