'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Appointments", "locationId", {
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn("Appointments", "locationId", {
      type: Sequelize.STRING
    });
  },
};
