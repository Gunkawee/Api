'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("AppointmentHistories", "appointmentId", {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Appointments",
          key: "id",
        },
      }
    )]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('AppointmentHistories', 'appointmentId', {
        type: Sequelize.INTEGER,
        references: {
          model: "Appointments",
          key: "id",
        },
      }),
    ]);
  }
};
