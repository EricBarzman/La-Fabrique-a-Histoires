const { User, SavedStory } = require('../models');

const userController = {

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  getOneUser: async (req, res) => {
    const userId = req.userId;
    try {
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ message: `L'utilisateur avec l'id : ${userId} n'a pas été trouvé.`})
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  modifyUser: async (req, res) => {
    const userId = req.userId;
    const { mail, firstname, lastname, password, avatar_path } = req.body;

    try {
      const user = await User.findByPk(userId);

      if (mail) user.mail = mail;
      if (password) user.password = password;
      if (firstname) user.firstname = firstname;
      if (lastname) user.lastname = lastname;
      if (avatar_path) user.avatar_path = avatar_path;

      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.userId;
    try {
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ message: `L'utilisateur avec l'id : ${userId} n'a pas été trouvé.`})
      
      const savedStories = await SavedStory.findAll({ where : { user_id : userId }});
      if (savedStories) {
        for (const savedStory of savedStories)
          await savedStory.destroy();
      }
      await user.destroy();
      res.status(240).json({ message : "Toutes les informations utilisateur ont bien été supprimées"});
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  changeAvatarPath: async (req, res) => {
    const answer = JSON.parse(JSON.stringify(req.file))
    const avatar_path = answer.path;
    const userId = 1;
    //const userId = req.userId;
    try {
      const user = await User.findByPk(userId);
      user.avatar_path = avatar_path;
      await user.save();
      res.status(200).json({ message : "Le fichier a bien été téléchargé." })
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  }
};

module.exports = userController;
