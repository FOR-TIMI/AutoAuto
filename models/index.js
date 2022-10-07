const User = require('./User');
const Vehicle = require('./Vehicle')
const CarMake = require('./CarMake');
const CarModel = require('./CarModel');

CarMake.hasMany(CarModel, {
  foreignKey: 'car_make_id',
});

CarModel.belongsTo(CarMake, {
  foreignKey: 'car_make_id',
});

User.hasMany(Vehicle, {
  foreignKey: 'user_id',
});

Vehicle.belongsTo(User, {
  foreignKey: 'user_id',
});

Vehicle.belongsTo(CarModel, {
  foreignKey: 'car_model_id',
});

CarModel.hasOne(Vehicle, {
  foreignKey: 'car_model_id',
});

module.exports = { User, Vehicle, CarMake, CarModel };