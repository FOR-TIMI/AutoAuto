const { Order } = require('../models');

const orderData = [
  {
    user_id: 1,
  },
  {
    user_id: 2,
  },
  {
    user_id: 3,
  },
  {
    user_id: 4,
  },
  {
    user_id: 5,
  },
  {
    user_id: 6,
  },
];

const seedOrder = () => Order.bulkCreate(orderData);

module.exports = seedOrder;
