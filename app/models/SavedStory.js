const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize-client');

class SavedStory extends Model {}

SavedStory.init({ 
    saved_story_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_story_finished : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    block_progression: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    character_gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    character_name: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    tableName: "saved_stories"
});

module.exports = SavedStory;
