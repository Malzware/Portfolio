const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/' // Ajuste le chemin public pour GitHub Pages
    : '/',
  
  chainWebpack: (config) => {
    config.module
      .rule('video')
      .test(/\.(mp4|mov)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'videos/[name].[hash:8].[ext]' // Gère les fichiers vidéo avec un hash unique
      });
  },

  devServer: {
    host: '0.0.0.0',  // Permet à l'application d'écouter sur toutes les interfaces
    port: 8080,  // Assure-toi que c'est le même port que celui sur lequel ton application écoute
    disableHostCheck: true,  // Désactive la vérification de l'hôte (utile parfois en dev)
  }
};
