"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("lichkhams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      iddv: {
        type: Sequelize.INTEGER,
      },
      mabuoisa: {
        type: Sequelize.STRING,
      },
      mabuoitr: {
        type: Sequelize.STRING,
      },
      mabuoich: {
        type: Sequelize.STRING,
      },
      sang: {
        type: Sequelize.STRING,
      },
      trua: {
        type: Sequelize.STRING,
      },
      chieu: {
        type: Sequelize.STRING,
      },
      slsaHientai: {
        type: Sequelize.INTEGER,
      },
      sltrHientai: {
        type: Sequelize.INTEGER,
      },
      slchHientai: {
        type: Sequelize.INTEGER,
      },
      slsa: {
        type: Sequelize.INTEGER,
      },
      sltr: {
        type: Sequelize.INTEGER,
      },
      slch: {
        type: Sequelize.INTEGER,
      },
      ngay: {
        type: Sequelize.DATE,
      },
      chovuotsa: {
        type: Sequelize.INTEGER,
      },
      chovuottr: {
        type: Sequelize.INTEGER,
      },
      chovuotch: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("lichkhams");
  },
};
