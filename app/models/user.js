"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Rating, {
        foreignKey: "userId",
        as: "rating",
      });
      User.hasOne(models.Machanic, {
        foreignKey: "userId",
        as: "userMechanic",
      });
      User.hasMany(models.AppointmentHistory, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  User.init(
    {
      uEmail: DataTypes.STRING,
      uName: DataTypes.STRING,
      uDisplay: DataTypes.STRING,
      uPhoneNo: DataTypes.STRING,
      role: DataTypes.ENUM('MECHANIC', 'USER'),
     
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
