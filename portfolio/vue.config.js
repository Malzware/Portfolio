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
    host: '0.0.0.0',  // Écoute sur toutes les interfaces réseau
    port: 8080,        // Assure-toi que ce port est correct
    allowedHosts: "all", // Autorise toutes les connexions (remplace disableHostCheck)
    historyApiFallback: true, // Corrige les problèmes de rafraîchissement sur Vue Router en mode history
  }
};
