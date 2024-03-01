const { SavedStory } = require('../models');

const saveStoryController = {
  
  getUserSavedStories: async (req, res) => {
    const userId = req.userId;
    try { 
      const savedStories = await SavedStory.findAll({ where : { user_id : userId }});
      res.status(200).json(savedStories);

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
  
  getOneUserSavedStory: async (req, res) => {
    const savedStoryId = req.params.id;
    try {
      const savedStory = await SavedStory.findByPk(savedStoryId);
      if (!savedStory) res.status(404).json({message : "La sauvegarde n'a pas été trouvé"})
      res.status(200).json(savedStory)
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  createUserSavedStory: async (req, res) => {
    const userId = req.userId;
    const {
      story_id,
      saved_story_name,
      is_story_finished,
      block_progression,
      character_gender,
      character_name
    } = req.body;
    
    try { 
      const newSaved = SavedStory.build({
        user_id : userId, story_id, is_story_finished, block_progression, character_gender
      });

      if (saved_story_name !== '') newSaved.saved_story_name = saved_story_name;
      if (character_name !== '') newSaved.character_name = character_name;
      
      await newSaved.save();
      res.status(202).json(newSaved);

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  modifyUserSavedStory: async (req, res) => {
    const savedStoryId = req.params.id;

    const {
      saved_story_name,
      is_story_finished,
      block_progression,
      character_gender,
      character_name
    } = req.body;

    try {
      const savedStory = await SavedStory.findByPk(savedStoryId);
      if (!savedStory)
        return res.status(404).json({ message: `Aucune sauvegarde trouvée`});

      if (saved_story_name) savedStory.saved_story_name = saved_story_name;
      if (is_story_finished) savedStory.is_story_finished = is_story_finished;
      if (block_progression) savedStory.block_progression = block_progression;
      if (character_gender) savedStory.character_gender = character_gender;
      if (character_name) savedStory.character_name = character_name;

      await savedStory.save();
      res.status(201).json(savedStory);

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  deleteAllUserSavedStories: async (req, res) => {
    const userId = req.userId;
    
    try {
      const savedStories = await SavedStory.findAll({ where : { user_id : userId } });
      if (!savedStories)
        return res.status(404).json({ message: `Aucune sauvegarde trouvée`});
      
      // Boom !
      for (const savedStory of savedStories)
        await savedStory.destroy();
      res.status(201).json({ message: "Les sauvegardes ont bien été supprimée. "})

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  deleteOneUserSavedStory: async (req, res) => {
    const storyId = req.params.id;
    try {
      const story = await SavedStory.findByPk(storyId);
      if (!story) {
        return res.status(404).json({ message: `Aucune sauvegarde trouvée` });
      }

      await story.destroy();
      res.status(201).json({ message : "La sauvegarde a bien été supprimée." });

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
};

module.exports = saveStoryController;
