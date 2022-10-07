const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CarMake extends Model {}

CarMake.init(
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'CarMake',
  }
);

module.exports = CarMake;
