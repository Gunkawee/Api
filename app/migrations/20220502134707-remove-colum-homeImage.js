'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Machanics", "homeImage", {
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn("Machanics", "homeImage", {
      type: Sequelize.STRING
    });
  },
};
