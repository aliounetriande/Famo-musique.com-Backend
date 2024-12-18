const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Accès refusé. Aucun token fourni.' });
    }

    const token = authHeader.split(' ')[1]; // Extraire le token après "Bearer"
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Vérifie le token avec la clé secrète
        req.user = decoded; // Ajoute les informations utilisateur au req
        next(); // Passe à la suite
    } catch (err) {
        return res.status(403).json({ message: 'Token invalide ou expiré.' });
    }
};

module.exports = authenticate;
