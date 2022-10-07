const sequelize = require('../config/connection');
const seedCarModel = require('./carModelData');
const seedCarMake = require('./carMakeData');
const seedUser = require('./userData');
const seedVehicle = require('./vehicleData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedCarMake();

  await seedCarModel();

  await seedVehicle();

  process.exit(0);
};

seedAll();
