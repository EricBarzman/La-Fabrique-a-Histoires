const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize-client');

class Level extends Model {}

Level.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "levels"
});

module.exports = Level;