<template>
  <div id="app" class="background">
    <!-- Le router-view affichera le composant correspondant à la route -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectedImage: { src: require('@/assets/poke5.png') },
      showInfo: false, // État pour afficher ou masquer le contenu de la colonne gauche
    };
  },
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo;
    }
  },
watch: {
  $route() {
    // Réinitialiser le défilement à chaque changement de route
    window.scrollTo(0, 0);
  }
},
  mounted() {
    // Réinitialiser le défilement lors du premier chargement du composant
    window.scrollTo(0, 0);
  }
};
</script>

<style>
/* Réinitialisation des marges et des bordures par défaut */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Appliquer un fond noir globalement */
body {
  background-color: black;
  color: white;
  font-family: 'apfelGrotezk', apfelGrotezk, monospace;
  height: 100%; /* Permet au body de prendre toute la hauteur de la fenêtre */
  overflow-y: auto; /* Permet le défilement vertical global */
}

/* Colonne de gauche */
.left-column {
  padding: 20px;
  overflow-y: scroll;
}

/* Colonne de droite */
.right-column {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Masquer la barre de défilement sur la colonne gauche (et les autres éléments avec scroll) */
.left-column::-webkit-scrollbar {
  display: none; /* Masque la barre de défilement sur Chrome/Safari */
}

.left-column {
  -ms-overflow-style: none; /* Masque la barre de défilement sur IE */
  scrollbar-width: none; /* Masque la barre de défilement sur Firefox */
}

</style>
