const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedVehicle = require('./vehicleData');
const seedOrder = require('./orderData');
const seedOrderDetails = require('./orderDetailsSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedOrder();
  
  await seedVehicle();

  await seedOrderDetails();

};

seedAll();

module.exports = seedAll