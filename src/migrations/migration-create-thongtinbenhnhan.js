"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("thongtinbenhnhans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Ho: {
        type: Sequelize.STRING,
      },
      Ten: {
        type: Sequelize.STRING,
      },
      Ngaysinh: {
        type: Sequelize.DATE,
      },
      Dienthoai: {
        type: Sequelize.STRING,
      },
      Gioitinh: {
        type: Sequelize.STRING,
      },
      Diachi: {
        type: Sequelize.STRING,
      },
      Trieuchung: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("thongtinbenhnhans");
  },
};
