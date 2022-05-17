'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn("AppointmentHistories", "userId", {
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn("AppointmentHistories", "userId", {
      type: Sequelize.INTEGER
    });
  },
};
