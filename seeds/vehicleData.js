const { Vehicle } = require('../models');

const vehicleData = [
  {
    car_make: 'Chevrolet',
    car_model: 'Silverado',
    vin: '1GCJK33608F209389',
    year: 2008,
    price: 50000,
    vehicle_pictures: '',
  },
  {
    car_make: 'Ford',
    car_model: 'Ranger',
    vin: '1FTZR11U53PB36186',
    year: 2003,
    price: 40000,
    vehicle_pictures: '',
  },
  {
    car_make: 'Toyota',
    car_model: 'Corolla',
    vin: 'JT2AE00B0R0055402',
    year: 1994,
    price: 20000,
    vehicle_pictures: '',
  },
  {
    car_make: 'Dodge',
    car_model: 'Ram',
    vin: '1C6RR7FG4ES242450',
    year: 2014,
    price: 35000,
    vehicle_pictures: '',
  },
  {
    car_make: 'Nissan',
    car_model: 'Sentra',
    vin: '1N4EB32HXRC793717',
    year: 1994,
    price: 25000,
    vehicle_pictures: '',
  },
  {
    car_make: 'Porsche',
    car_model: '928',
    vin: 'WP0AA2920SS820104',
    year: 1995,
    price: 30000,
    vehicle_pictures: '',
  },
];

const seedVehicle = () => Vehicle.bulkCreate(vehicleData);

module.exports = seedVehicle;
