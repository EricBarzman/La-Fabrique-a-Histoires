const jsonwebtoken = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

/**
 * Vérifie le token JWT
 */
const verifyTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Accès non autorisé" });

  jsonwebtoken.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token invalide" });
    }
    req.userId = decoded.userId;
    next();
  });
};

module.exports = verifyTokenMiddleware;
