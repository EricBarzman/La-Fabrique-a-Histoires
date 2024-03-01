const { Story, Theme, Level, Block, Choice } = require('../models');

const storyController = {
  getAllStories: async (req, res) => {
    try {
      const stories = await Story.findAll({
        include: ['level', 'theme'],
        order: [
          ['id', 'ASC']
        ]
      });
      res.status(200).json(stories);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  getOneStory: async (req, res) => {
    const storyId = req.params.id;
    try {
      const story = await Story.findByPk(storyId, {
        include : [
          { 
            model: Theme,
            as: "theme"
          },
          {
            model: Level,
            as: "level"
          },
          {
            model: Block,
            as: "blocks",
            include : {
              model : Choice,
              as : "choices"
            }
          }
        ]
      });
      if (!story) res.status(404).json({message: `L'histoire avec l'id : ${storyId} n'a pas été trouvée.`})
      res.status(200).json(story);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  getStoriesByLevelAndTheme: async (req, res) => {
    const levelId = req.params.id1;
    const themeId = req.params.id2;

    try {
      
      const story = await Story.findAll({ where: {
        level_id : levelId,
        theme_id : themeId
      }, include : ['level', 'theme']
      })
      if (story.length === 0) res.status(404).json({message : 'Aucune histoire trouvée sur ce thème et avec ce niveau de difficulté'})
      res.status(200).json(story);
      
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  createStory: async (req, res) => {
    const { title, level_id, theme_id, thumbnail_path} = req.body
    try { 
      const newStory = await Story.create({ title, level_id, theme_id, thumbnail_path });
      res.status(200).json(newStory);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
  modifyStory: async (req, res) => {
    const { title, level_id, theme_id, thumbnail_path} = req.body
    const storyId = req.params.id;
    try {
      const foundStory = await Story.findByPk(storyId);
      if (!foundStory) res.status(404).json({message : 'Aucune histoire trouvée'});
      
      for (property in req.body) {
        foundStory[property] = req.body[property];
      }
      
      await foundStory.save();
      res.status(201).json(foundStory);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
  deleteStory: async (req, res) => {
    const storyId = req.params.id;
    try {
      const story = await Story.findByPk(storyId);
      if (!story) res.status(404).json({ message: `L'histoire avec l'id : ${storyId} n'a pas été trouvée.` });
      await story.destroy();
      res.status(200).json({ message: "Histoire bien supprimée"})
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
};

module.exports = storyController;
