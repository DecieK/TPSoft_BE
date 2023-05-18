"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class thongtinbenhnhans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  thongtinbenhnhans.init(
    {
      //   MSBN: DataTypes.STRING,
      Ho: DataTypes.STRING,
      Ten: DataTypes.STRING,
      Ngaysinh: DataTypes.STRING,
      Dienthoai: DataTypes.STRING,
      Gioitinh: DataTypes.STRING,
      Diachi: DataTypes.STRING,
      Trieuchung: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "thongtinbenhnhans",
    }
  );
  return thongtinbenhnhans;
};
