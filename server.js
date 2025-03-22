const express = require('express');
const path = require('path');

const app = express();

// Définir le dossier contenant les fichiers générés par Vue
const PORT = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, 'dist');

// Servir les fichiers statiques
app.use(express.static(DIST_DIR, {
    setHeaders: function (res, path) {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        } else if (path.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        }
    }
}));

// Rediriger toutes les routes vers index.html (pour Vue Router en mode history)
app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
