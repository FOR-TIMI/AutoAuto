const router = require('express').Router();
const carController = require('../../controllers/filter-controller');

router.route('/')
      .get(carController.findVehicle);

router.route('/year')
      .get(carController.getYears);
module.exports = router;


