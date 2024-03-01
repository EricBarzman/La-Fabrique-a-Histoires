const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize-client');

class Block extends Model {}

Block.init({    
    alphanum: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    label_text: {
        type: DataTypes.STRING,
        allowNull: true
    },
    choice_question: {
        type: DataTypes.STRING,
        allowNull: true
    },
    background_img_path: {
        type: DataTypes.STRING,
        allowNull: true
    },
    boy_character_img_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    girl_character_img_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rest_img_path: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize,
    tableName: "blocks"
});

module.exports = Block;