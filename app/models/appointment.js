"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsTo(models.Location, {
        foreignKey: "locationId",
        as: "location",
      });
      Appointment.hasMany(models.AppointmentHistory, {
        foreignKey: "appointmentId",
        as: "Appointment",
      });
    }
  }
  Appointment.init(
    {
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      jobDescription: DataTypes.STRING,
      locationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Location",
          key: "id",
        },
      },
      machanicId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Machanic",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Appointment",
    }
  );
  return Appointment;
};
