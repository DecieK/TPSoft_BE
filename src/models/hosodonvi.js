"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hosodonvis extends Model {

    static associate(models) {

    }
  }
  hosodonvis.init(
    {
      // id: DataTypes.INTEGER,
      // iddv: DataTypes.INTEGER,
      tendv: DataTypes.STRING,
      tenbs: DataTypes.STRING,
     


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
