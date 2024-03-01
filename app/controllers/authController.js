const { User } = require("../models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const jsonwebtoken = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authController = {
  userSignIn: async (req, res) => {
    try {
      const { mail, firstname, lastname, password, avatar_path } = req.body;

      if (mail === undefined || mail === "")
        return res
          .status(400)
          .json({ message: "L' email ne doit pas être une chaîne vide" });
      if (firstname === undefined || firstname === "")
        return res
          .status(400)
          .json({ message: "Le prénom ne doit pas être une chaîne vide" });
      if (password === undefined || password === "")
        return res
          .status(400)
          .json({
            message: "Le mot de passe ne doit pas être une chaîne vide",
          });

      const hash = await bcrypt.hash(password, saltRounds);

      const doesUserExit = await User.findAll({ where: { mail: mail } });
      if (doesUserExit.length > 0) {
        res
          .status(401)
          .json({ message: "Ce mail est déjà pris par un autre utilisateur" });
      }

      const newUser = User.build({ mail, firstname, password: hash });
      if (lastname) newUser.lastname = lastname;
      if (avatar_path) newUser.avatar_path = avatar_path;
      await newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  userLogIn: async (req, res) => {
    const { mail, password } = req.body;
    try {
      const foundUser = await User.findOne({ where: { mail: mail } });
      if (!foundUser)
        res
          .status(401)
          .json({ message: "L'email ne renvoie à aucun utilisateur connu" });

      if (foundUser) {
        const hash = foundUser.password;
        if (!(await bcrypt.compare(password, hash)))
          res.status(401).json({ message: "Le mot de passe est incorrect" });

        const jwtContent = { userId: foundUser.id };
        const jwtOptions = { algorithm: "HS256", expiresIn: "3h" };
        res.json({
          logged: true,
          firstname: foundUser.firstname,
          lastname: foundUser.lastname,
          mail: foundUser.mail,
          token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions),
        });
      }
    } catch (error) {
      res.status(500).render("500");
    }
  },
};

module.exports = authController;
