const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class Theme extends Model {}

Theme.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail_path: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: "themes",
  }
);

module.exports = Theme;
