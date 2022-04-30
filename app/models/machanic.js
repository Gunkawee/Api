"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Machanic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Machanic.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      Machanic.hasMany(models.Rating, {
        foreignKey: "machanicId",
        as: "rating",
      });
      Machanic.belongsTo(models.Location, {
        foreignKey: "locationId",
        as: "lcoation",
      });
    }
  }
  Machanic.init(
    {
      idCard: DataTypes.STRING,
      mfName: DataTypes.STRING,
      mlName: DataTypes.STRING,
      homeImage: DataTypes.STRING,
      workPlaceImage: DataTypes.STRING,
      faceImage: DataTypes.STRING,
      workPlace: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      locationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Location",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Machanic",
    }
  );
  return Machanic;
};
