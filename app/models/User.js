const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize-client');

class User extends Model {}

User.init({
   mail: {
    type: DataTypes.STRING,
    allowNull: false
   },
   firstname : {
    type: DataTypes.STRING,
    allowNull: false
   },
   lastname: {
    type: DataTypes.STRING,
    allowNull: true
   },
   password: {
    type: DataTypes.STRING,
    allowNull: false
   },
   avatar_path: {
    type: DataTypes.STRING,
    allowNull: true
   }
}, {
    sequelize,
    tableName: "users"
});

module.exports = User;