<!-- App.vue -->
<script setup>
import { ref, watch, onMounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useRoute } from 'vue-router';

const isLoading = ref(true);
const route = useRoute();

// Surveiller les changements de route
watch(route, () => {
  isLoading.value = true;
  window.scrollTo(0, 0);
  waitForPageLoad();
});

onMounted(() => {
  window.scrollTo(0, 0);
  waitForPageLoad();
});

// Fonction pour attendre le chargement complet de la page
const waitForPageLoad = () => {
  // Attendre que le DOM soit complètement chargé
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // Attendre que toutes les ressources soient chargées
      Promise.all([
        // Attendre que toutes les images soient chargées
        new Promise(resolve => {
          const images = document.querySelectorAll('img');
          if (images.length === 0) resolve();
          
          let loadedImages = 0;
          images.forEach(img => {
            if (img.complete) {
              loadedImages++;
              if (loadedImages === images.length) resolve();
            } else {
              img.onload = () => {
                loadedImages++;
                if (loadedImages === images.length) resolve();
              };
              img.onerror = () => {
                loadedImages++;
                if (loadedImages === images.length) resolve();
              };
            }
          });
        }),
        
        // Attendre que toutes les fonts soient chargées
        document.fonts ? document.fonts.ready : Promise.resolve(),
        
        // Attendre un délai minimum pour éviter un flash du loader
        new Promise(resolve => setTimeout(resolve, 800))
      ])
      .then(() => {
        // Animation de sortie du loader
        setTimeout(() => {
          isLoading.value = false;
        }, 200);
      })
      .catch(() => {
        // Sécurité : Si un problème survient, on désactive quand même le loader
        isLoading.value = false;
      });
    }
  };
  
  // Protection : Si après 5 secondes le loader est toujours actif, on le désactive
  setTimeout(() => {
    isLoading.value = false;
  }, 5000);
};
</script>

<template>
  <div id="app">
    <!-- Loader Vue Loading Overlay -->
    <Loading 
      v-model:active="isLoading" 
      :can-cancel="false" 
      :is-full-page="true"
      :color="'#ffcc00'"
      :background-color="'black'"
      :opacity="1"
      :loader="'bars'"
    />
    
    <!-- Contenu de l'application -->
    <router-view v-show="!isLoading" />
  </div>
</template>

<style>
/* Réinitialisation des styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Styles globaux */
body {
  background-color: black;
  color: white;
  font-family: 'apfelGrotezk', monospace;
  height: 100vh;
  overflow-x: hidden;
}

/* Animation de transition du loader */
.vl-overlay {
  transition: opacity 0.3s ease-out;
}

/* Animation d'entrée pour le contenu */
.router-view-enter-active {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>