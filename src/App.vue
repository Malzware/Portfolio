<!-- App.vue -->
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useRouter } from 'vue-router';

const isLoading = ref(true);
const allPagesLoaded = ref(false);
const router = useRouter();

onMounted(async () => {
  // Définir les routes à précharger (toutes les routes de votre application)
  // Vous devrez ajuster cette liste selon la structure de votre application
  const routesToPreload = router.getRoutes().map(route => route.path);
  
  // Fonction pour précharger une route
  const preloadRoute = async (path) => {
    try {
      // Accéder aux composants de la route sans changer l'URL actuelle
      const matchedComponents = router.resolve(path).matched
        .flatMap(record => Object.values(record.components));
      
      // Précharger les composants
      await Promise.all(matchedComponents.map(component => {
        if (typeof component === 'function') {
          return component();
        }
        return Promise.resolve(component);
      }));
    } catch (error) {
      console.warn(`Erreur lors du préchargement de ${path}:`, error);
    }
  };

  try {
    // Précharger toutes les routes
    await Promise.all(routesToPreload.map(preloadRoute));
    
    // Attendre que le DOM soit complètement chargé
    if (document.readyState !== 'complete') {
      await new Promise(resolve => {
        document.onreadystatechange = () => {
          if (document.readyState === 'complete') {
            resolve();
          }
        };
      });
    }
    
    // Attendre que toutes les images et polices soient chargées
    await Promise.all([
      // Images
      new Promise(resolve => {
        const images = document.querySelectorAll('img');
        if (images.length === 0) resolve();
        
        let loadedImages = 0;
        images.forEach(img => {
          if (img.complete) {
            loadedImages++;
            if (loadedImages === images.length) resolve();
          } else {
            img.onload = img.onerror = () => {
              loadedImages++;
              if (loadedImages === images.length) resolve();
            };
          }
        });
      }),
      
      // Polices
      document.fonts ? document.fonts.ready : Promise.resolve(),
      
      // Délai minimum
      new Promise(resolve => setTimeout(resolve, 1000))
    ]);
    
    // Marquer le site comme entièrement chargé
    allPagesLoaded.value = true;
    
    // Désactiver le loader avec une légère transition
    await nextTick();
    setTimeout(() => {
      isLoading.value = false;
    }, 300);
    
  } catch (error) {
    console.error("Erreur lors du préchargement du site:", error);
    isLoading.value = false;
  }
  
  // Sécurité : Désactiver le loader après 8 secondes quoi qu'il arrive
  setTimeout(() => {
    isLoading.value = false;
  }, 8000);
});

// Désactiver le loader lors des changements de route puisque tout est déjà chargé
const handleRouteChange = () => {
  if (allPagesLoaded.value) {
    window.scrollTo(0, 0);
    // Pas besoin de recharger le loader
  }
};

// Ajouter l'écouteur d'événement de navigation
router.beforeEach((to, from, next) => {
  handleRouteChange();
  next();
});
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

/* Cache le clignotement pendant les transitions de page */
.router-view-leave-active {
  display: none;
}

/* Animation d'entrée pour le contenu */
.router-view-enter-active {
  animation: fadeIn 0.3s ease-out;
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