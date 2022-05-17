'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Appointments", "machanicId", {
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn("Appointments", "machanicId", {
      type: Sequelize.INTEGER
    });
  },
};
