const { Vehicle } = require('../models');

const vehicleData = [
  {
    car_make: 1,
    car_model: 1,
    vin: '1GCJK33608F209389',
    year: 2008,
    price: 50000,
  },
  {
    car_make: 2,
    car_model: 2,
    vin: '1FTZR11U53PB36186',
    year: 2003,
    price: 40000,
  },
  {
    car_make: 3,
    car_model: 3,
    vin: 'JT2AE00B0R0055402',
    year: 1994,
    price: 20000,
  },
  {
    car_make: 4,
    car_model: 4,
    vin: '1C6RR7FG4ES242450',
    year: 2014,
    price: 35000,
  },
  {
    car_make: 5,
    car_model: 5,
    vin: '1N4EB32HXRC793717',
    year: 1994,
    price: 25000,
  },
  {
    car_make: 6,
    car_model: 6,
    vin: 'WP0AA2920SS820104',
    year: 1995,
    price: 30000,
  },
];

const seedVehicle = () => Vehicle.bulkCreate(vehicleData);

module.exports = seedVehicle;
