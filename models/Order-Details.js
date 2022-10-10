const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderDetails extends Model {}

OrderDetails.init(
  {
    order_details_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'order',
        key: 'order_id',
      },
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vehicle',
        key: 'vehicle_id',
      },   
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'order_details',
  }
);

module.exports = OrderDetails;
