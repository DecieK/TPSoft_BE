"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      iddv: {
        type: Sequelize.INTEGER,
      },
      idbn: {
        type: Sequelize.INTEGER,
      },
      hoten: {
        type: Sequelize.STRING,
      },
      sdt: {
        type: Sequelize.STRING,
      },
      ngaysinh: {
        type: Sequelize.DATE,
      },
      diachi: {
        type: Sequelize.STRING,
      },
      stt: {
        type: Sequelize.INTEGER,
      },
      buoikham: {
        type: Sequelize.STRING,
      },
      ngaydat: {
        // allowNull: false,
        type: Sequelize.DATE,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bookings");
  },
};
