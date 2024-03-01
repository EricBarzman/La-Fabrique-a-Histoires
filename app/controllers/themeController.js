const { Theme } = require("../models");

const themeController = {
  getAllThemes: async (req, res) => {
    try {
      const themes = await Theme.findAll();
      res.status(200).json(themes);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  getOneTheme: async (req, res) => {
    const themeId = req.params.id;
    try {
      const theme = await Theme.findByPk(themeId);
      if (!theme)
        return res.status(404).json({
          message: `Le theme avec l'id: ${themeId} n'a pas été trouvé.`,
        });
      res.status(200).json(theme);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  createTheme: async (req, res) => {
    const { name } = req.body;

    if (name === undefined || name === "")
      return res
        .status(400)
        .json({ message: "Le nom ne doit pas être une chaîne vide" });
        
    try {
      const newTheme = await Theme.create({ name });
      res.status(202).json(newTheme);

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  modifyTheme: async (req, res) => {
    const themeId = req.params.id;
    const name = req.body;

    if (name === "")
      return res
        .status(400)
        .json({ message: "Le nom ne doit pas être une chaîne vide" });

    try {
      const theme = await Theme.findByPk(themeId);
      if (!theme)
        return res
          .status(404)
          .json({
            message: `Le theme avec l'id : ${themeId} n'a pas été trouvé.`,
          });

      if (name) theme.name = name;
      await theme.save();

      res.status(202).json(theme);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  deleteTheme: async (req, res) => {
    const themeId = req.params.id;
    try {
      const theme = await Theme.findbyPK(themeId);
      if (!theme)
        return res.status(404).json({
          message: `Le thème avec l'id : ${themeId} n'a pas été trouvé`,
        });
      await theme.destroy();
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
};

module.exports = themeController;
