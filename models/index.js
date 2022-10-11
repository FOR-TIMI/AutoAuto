const Order = require('./Order');
const OrderDetails = require('./Order-Details');
const User = require('./User');
const Vehicle = require('./Vehicle')

User.hasMany(Order, {
  foreignKey: 'user_id',
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
});

Order.hasMany(OrderDetails, {
  foreignKey: 'order_details_id',
});

OrderDetails.belongsTo(Order, {
  foreignKey: 'order_details_id',
});

OrderDetails.belongsTo(Vehicle, {
  foreignKey: 'vehicle_id',
});

Vehicle.hasMany(OrderDetails, {
  foreignKey: 'vehicle_id',
});
module.exports = { User, Order, OrderDetails, Vehicle };