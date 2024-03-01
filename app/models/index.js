const Level = require('./Level');
const Block = require('./Block');
const User = require('./User');
const Story = require('./Story');
const Theme = require('./Theme');
const Choice = require('./Choice');
const SavedStory = require('./SavedStory');

// User - Story
// Cette association marche mais ne renvoit pas l'id de la sauvegarde :
// User.belongsToMany(Story, { through : SavedStory, foreignKey: "user_id" });
// Story.belongsToMany(User, { through : SavedStory, foreignKey: "story_id" });

User.hasMany(SavedStory, {
    foreignKey: "user_id",
    as: "users"
});
SavedStory.belongsTo(User, {
    foreignKey: "user_id",
    as: "users"
});

Story.hasMany(SavedStory, {
    foreignKey: "story_id",
    as: "stories"
});
SavedStory.belongsTo(Story, {
    foreignKey: "story_id",
    as: "stories"
});


// Block-Choices
Block.hasMany(Choice, {
    foreignKey: "origin_block_id",
    as: "choices"
});
Choice.belongsTo(Block, {
    foreignKey: "origin_block_id",
    as: "origin_block"
});

Block.hasMany(Choice, {
    foreignKey: "destination_block_id",
    as: "origin_choices"
});
Choice.belongsTo(Block, {
    foreignKey: "destination_block_id",
    as: "destination_block"
});

// Story - Blocks
Story.hasMany(Block, {
    foreignKey: "story_id",
    as: "blocks"
});
Block.belongsTo(Story, {
    foreignKey: "story_id",
    as: "story"
});

// Story - Level
Level.hasMany(Story, {
    foreignKey: "level_id",
    as: "stories"
});
Story.belongsTo(Level, {
    foreignKey: "level_id",
    as: "level"
});

// Story - Theme
Theme.hasMany(Story, {
    foreignKey: "theme_id",
    as: "stories"
});
Story.belongsTo(Theme, {
    foreignKey: "theme_id",
    as: "theme"
})


module.exports = { User, Block, Level, Theme, Story, SavedStory, Choice };