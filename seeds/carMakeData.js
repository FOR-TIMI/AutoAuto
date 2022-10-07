const { CarMake } = require('../models');

const carMakeData = [
  {
    name: 'Chevrolet',
  },
  {
    name: 'Ford',
  },
  {
    name: 'Toyota',
  },
  {
    name: 'Dodge',
  },
  {
    name: 'Nissan',
  },
  {
    name: 'Porsche',
  },
];

const seedCarMake = () => CarMake.bulkCreate(carMakeData);

module.exports = seedCarMake;
