'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Machanics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCard: {
        type: Sequelize.STRING
      },
      mfName: {
        type: Sequelize.STRING
      },
      mlName: {
        type: Sequelize.STRING
      },
      homeImage: {
        type: Sequelize.STRING
      },
      workPlaceImage: {
        type: Sequelize.STRING
      },
      faceImage: {
        type: Sequelize.STRING
      },
      workPlace: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      locationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Machanics');
  }
};