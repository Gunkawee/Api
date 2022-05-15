"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AppointmentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // AppointmentHistory.belongsTo(models.User, {
      //   foreignKey: "userId",
      //   as: "user",
      // });
      AppointmentHistory.belongsTo(models.Appointment, {
        foreignKey: "appointmentId",
        as: "userAppointment",
      });
    }
  }
  AppointmentHistory.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      appointmentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Appointment",
          key: "id",
        },
      },
      status: DataTypes.ENUM(
        "USER_CANCEL",
        "USER_APPOINT",
        "MACHANIC_DOING",
        "MACHANIC",
        "MACHANIC_CANCEL"
      ),
    },
    {
      sequelize,
      modelName: "AppointmentHistory",
    }
  );
  return AppointmentHistory;
};
