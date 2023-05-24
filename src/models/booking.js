"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //https://sequelize.org/docs/v6/core-concepts/assocs/
      // định danh các mối quan hệ
      // User.belongsTo(models.Allcode, {
      //   foreignKey: "positionId",
      //   targetKey: "keyMap",
      //   as: "positionData",
      // });
      // User.belongsTo(models.Allcode, {
      //   foreignKey: "gender",
      //   targetKey: "keyMap",
      //   as: "genderData",
      // });
      // User.hasOne(models.Markdown, { foreignKey: "doctorId" });
      // User.hasOne(models.Doctor_Infor, { foreignKey: "doctorId" });
      // User.hasMany(models.Schedule, {
      //   foreignKey: "doctorId",
      //   as: "doctorData",
      // });
      // User.hasMany(models.Booking, {
      //   foreignKey: "patientId",
      //   as: "patientData",
      // });
    }
  }
  bookings.init(
    {
      iddv: DataTypes.INTEGER,
      idbn: DataTypes.INTEGER,
      hoten: DataTypes.STRING,
      sdt: DataTypes.STRING,
      ngaysinh: DataTypes.DATE,
      diachi: DataTypes.STRING,
      stt: DataTypes.INTEGER,
      buoikham: DataTypes.STRING,
      ngaydat: DataTypes.DATE,


      // CM_heart: DataTypes.INTEGER,
      // CS_heart: DataTypes.INTEGER,
      // TĐ_heart: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bookings",
    }
  );
  return bookings;
};
