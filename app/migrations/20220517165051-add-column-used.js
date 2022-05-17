'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("AppointmentHistories", "used", {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: 1
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("AppointmentHistories", "used", 
    );
  },
};
