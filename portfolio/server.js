const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, 'dist');

// Servir les fichiers statiques
app.use(express.static(DIST_DIR));

// Middleware pour vérifier si le fichier demandé existe avant de renvoyer index.html
app.get('*', (req, res) => {
  const filePath = path.join(DIST_DIR, req.url);

  if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
    return res.sendFile(filePath);
  }

  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
