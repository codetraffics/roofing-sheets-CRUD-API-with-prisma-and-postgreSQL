const express = require('express');
const roofController = require('../controllers/roofController');

const router = express.Router();

router.post('/add-new-roof', roofController.addRoof);
router.get('/get-all-roofs', roofController.getAllRoofs);
router.get('/:id', roofController.getRoofById);
router.put('/:id', roofController.updateRoof);
router.delete('/:id', roofController.deleteRoof);

module.exports = router;
