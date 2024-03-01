const sanitizer = require('sanitizer');
/**
 * Middleware qui remplace le BODY envoyé dans une requête par une version sanitizé
 * @param {*} req : client request
 */       
const bodySanitizer = (req, res, next) => {
    if (req.body) {
        for (const property in req.body) {
            req.body[property] = sanitizer.escape(req.body[property]);
        }
    }
    next();
}

module.exports = bodySanitizer;