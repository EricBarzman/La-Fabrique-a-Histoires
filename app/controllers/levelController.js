const { Level } = require('../models');

const levelController = {

  getAllLevels: async (req, res) => {
    try {      
      const levels = await Level.findAll({
        // trie les niveaux par ordre ascendant de difficulté (1-2-3)
        order: [
          ['value', 'ASC']
        ]
      });
      res.status(200).json(levels);

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  getOneLevel: async (req, res) => {
    const levelId= req.params.id;
    try {
      const level = await Level.findByPk(levelId);
      if (!level) return res.status(404).json({ message: `Le level avec l'id : ${levelId} n'a pas été trouvé.`});
      res.status(200).json(level);

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  createLevel: async (req, res) => {
    const { name, value } = req.body;
    // Vérifications des champs
    if (value !== undefined){
      const valueInt = Number(value);
      if (isNaN(valueInt)) return res.status(400).json({ message: 'La valeur doit être un entier'});
    }
    if (name === undefined || name === "") return res.status(400).json({ message: 'Le nom ne doit pas être une chaîne vide'});

    try {
      const newLevel = await Level.create({ name, value });
      res.status(201).json(newLevel);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  modifyLevel: async (req, res) => {
    const levelId= req.params.id;
    const { name, value } = req.body;
    // Vérifications des champs
    if (value !== undefined){
      const valueInt = Number(value);
      if (isNaN(valueInt)) return res.status(400).json({ message: 'La valeur doit être un entier'});
    }
    if (name === "") return res.status(400).json({ message: 'Le nom ne doit pas être une chaîne vide'});

    try {
      const level = await Level.findByPk(levelId);
      if (!level) return res.status(404).json({ message: `Le level avec l'id : ${levelId} n'a pas été trouvé.`});
      
      if (name) level.name = name;
      if (value) level.value = value;
      
      await level.save();
      res.status(200).json(level);

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  deleteLevel: async (req, res) => {
    const levelId= req.params.id;
    try {
      const level = await Level.findByPk(levelId);
      if (!level) return res.status(404).json({ message: `Le level avec l'id : ${levelId} n'a pas été trouvé.`});
      await level.destroy();
      res.status(200).json({message: "Le level a bien été supprimé"});

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
};

module.exports = levelController;
