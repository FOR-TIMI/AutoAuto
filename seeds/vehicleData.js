const { Vehicle } = require('../models');

const vehiclelData = [
  {
    car_make_id: 1,
    car_model_id: 1,
    vin: '1GCJK33608F209389',
    year: 2008,
    price: 50000,
    user_id: 1,
  },
  {
    car_make_id: 2,
    car_model_id: 2,
    vin: '1FTZR11U53PB36186',
    year: 2003,
    price: 40000,
    user_id: 2,
  },
  {
    car_make_id: 3,
    car_model_id: 3,
    vin: 'JT2AE00B0R0055402',
    year: 1994,
    price: 20000,
    user_id: 3,
  },
  {
    car_make_id: 4,
    car_model_id: 4,
    vin: '1C6RR7FG4ES242450',
    year: 2014,
    price: 35000,
    user_id: 4,
  },
  {
    car_make_id: 5,
    car_model_id: 5,
    vin: '1N4EB32HXRC793717',
    year: 1994,
    price: 25000,
    user_id: 5,
  },
  {
    car_make_id: 6,
    car_model_id: 6,
    vin: 'WP0AA2920SS820104',
    year: 1995,
    price: 30000,
    user_id: 6,
  },
];

const seedVehicle = () => Vehicle.bulkCreate(vehiclelData);

module.exports = seedVehicle;
