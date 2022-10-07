const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CarModel extends Model {}

CarModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_make_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CarMake',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'CarModel',
  }
);

module.exports = CarModel;
