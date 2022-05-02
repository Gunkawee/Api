'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.hasOne(models.Appointment, {
        foreignKey: "locationId",
        as: "appointment",
      });
      Location.hasOne(models.Machanic, {
        foreignKey: "locationId",
        as: "machanic",
      });
    }
  }
  Location.init({
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};