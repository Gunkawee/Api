'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Locations", "userId", {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Locations", "userId", 
    );
  },
};
