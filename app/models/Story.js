const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class Story extends Model {}

Story.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    thumbnail_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "stories",
  }
);

module.exports = Story;
