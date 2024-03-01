const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class Choice extends Model {}

Choice.init(
  {
    choice_label: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: "choices",
  }
);

module.exports = Choice;
