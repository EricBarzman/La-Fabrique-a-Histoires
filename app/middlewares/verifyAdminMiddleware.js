/**
 * Vérifie l'authorisation administrateur
 */
function verifyAdminMiddleware (req, res, next) {
    console.log("Are you an admin ?");
    // A implémenter
    next();
}

module.exports = verifyAdminMiddleware;