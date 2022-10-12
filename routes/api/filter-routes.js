const router = require('express').Router();
const carController = require('../../controllers/filter-controller');

router.route('/')
      .get(carController.findVehicle);

module.exports = router;


