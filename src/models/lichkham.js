"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class lichkhams extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }
    lichkhams.init(
        {
            //   MSBN: DataTypes.STRING,
            iddv: DataTypes.INTEGER,
            mabuoisa: DataTypes.STRING,
            mabuoitr: DataTypes.STRING,
            mabuoich: DataTypes.STRING,
            sang: DataTypes.STRING,
            trua: DataTypes.STRING,
            chieu: DataTypes.STRING,
            slsaHientai: DataTypes.INTEGER,
            sltrHientai: DataTypes.INTEGER,
            slchHientai: DataTypes.INTEGER,
            slsa: DataTypes.INTEGER,
            sltr: DataTypes.INTEGER,
            slch: DataTypes.INTEGER,
            ngay: DataTypes.DATE,
            chovuotsa: DataTypes.INTEGER,
            chovuottr: DataTypes.INTEGER,
            chovuotch: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "lichkhams",
        }
    );
    return lichkhams;
};
