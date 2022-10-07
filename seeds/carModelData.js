const { CarModel } = require('../models');

const carModelData = [
  {
    name: 'Silverado',
    car_make_id: 1
  },
  {
    name: 'Ranger',
    car_make_id: 2
  },
  {
    name: 'Corolla',
    car_make_id: 3
  },
  {
    name: 'Ram',
    car_make_id: 4
  },
  {
    name: 'Sentra',
    car_make_id: 5
  },
  {
    name: '928',
    car_make_id: 6
  },
];

const seedCarModel = () => CarModel.bulkCreate(carModelData);

module.exports = seedCarModel;
