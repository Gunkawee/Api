"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rating.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      Rating.belongsTo(models.Machanic, {
        foreignKey: "machanicId",
        as: "machanic",
      });
    }
  }
  Rating.init(
    {
      score: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      machanicId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Machanic",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );
  return Rating;
};
