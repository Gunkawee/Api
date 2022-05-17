'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("AppointmentHistories", "userId", {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("AppointmentHistories", "userId", 
    );
  },
};
