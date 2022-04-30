"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uEmail: {
        type: Sequelize.STRING,
      },
      uName: {
        type: Sequelize.STRING,
      },
      uDisplay: {
        type: Sequelize.STRING,
      },
      uPhoneNo: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.ENUM('MECHANIC', 'USER')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
