"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hosodonvis extends Model {

    static associate(models) {

    }
  }
  hosodonvis.init(
    {
      iddv: DataTypes.INTEGER,
      idbn: DataTypes.INTEGER,
      hoten: DataTypes.STRING,
      sdt: DataTypes.STRING,
      ngaysinh: DataTypes.DATE,
      diachi: DataTypes.STRING,
      stt: DataTypes.INTEGER,
      buoikham: DataTypes.STRING,
      ngaykham: DataTypes.DATE,
      ngaydat: DataTypes.DATE,


      // CM_heart: DataTypes.INTEGER,
      // CS_heart: DataTypes.INTEGER,
      // TĐ_heart: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "hosodonvis",
    }
  );
  return hosodonvis;
};
