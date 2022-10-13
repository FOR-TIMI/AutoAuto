const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const moment = require('moment');

class Vehicle extends Model {}

Vehicle.init(
  {
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    car_make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vin: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [16,16],
      },
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vehicle_pictures: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE, 
      get() {return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY');}
    },  
    updatedAt: {
      type: DataTypes.DATE, 
      get() {return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY');}}
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehicle',
  }
);

module.exports = Vehicle;
