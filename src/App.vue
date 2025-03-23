<!-- App.vue -->
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// Supprimez la ligne suivante si vous n'utilisez pas le router dans ce composant
// import { useRouter } from 'vue-router';

const isLoading = ref(true);
// Supprimez cette ligne puisque nous n'utilisons pas le router
// const router = useRouter();

onMounted(async () => {
  try {
    // Précharger les composants essentiels
    await optimizeAndPreloadContent();
    
    // Désactiver le loader avec une transition
    await nextTick();
    setTimeout(() => {
      isLoading.value = false;
    }, 300);
    
  } catch (error) {
    console.error("Erreur lors du préchargement:", error);
    isLoading.value = false;
  }
  
  // Sécurité : Désactiver le loader après 6 secondes quoi qu'il arrive
  setTimeout(() => {
    isLoading.value = false;
  }, 6000);
});

// Fonction centrale d'optimisation et préchargement
const optimizeAndPreloadContent = async () => {
  // 1. Optimiser les images (ajouter les attributs de lazy loading)
  setupImageOptimization();
  
  // 2. Optimiser les vidéos
  setupVideoOptimization();
  
  // 3. Attendre le chargement du contenu essentiel
  await Promise.all([
    // Attendre que le DOM soit chargé
    document.readyState === 'complete' 
      ? Promise.resolve() 
      : new Promise(resolve => {
          document.onreadystatechange = () => {
            if (document.readyState === 'complete') resolve();
          };
        }),
    
    // Charger uniquement les images visibles dans la viewport initiale
    preloadVisibleImages(),
    
    // Minimum delay for user experience
    new Promise(resolve => setTimeout(resolve, 800))
  ]);
};

// Fonctions d'optimisation des images
const setupImageOptimization = () => {
  // Ajouter le lazy loading à toutes les images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Ajouter lazy loading natif
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Convertir les sources en data-src pour les images hors viewport
    if (!isElementInViewport(img) && !img.hasAttribute('data-src')) {
      img.setAttribute('data-src', img.src);
      img.removeAttribute('src'); // Pour éviter le chargement immédiat
    }
  });
  
  // Configurer l'Intersection Observer pour les images avec data-src
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
        }
        
        observer.unobserve(img);
      }
    });
  }, { rootMargin: "50px 0px" });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
};

// Fonctions d'optimisation des vidéos
const setupVideoOptimization = () => {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    // Définir le préchargement sur metadata uniquement
    video.setAttribute('preload', 'metadata');
    
    // Pour les vidéos non vitales, reporter le chargement
    if (!video.hasAttribute('autoplay') && !isElementInViewport(video)) {
      const src = video.getAttribute('src');
      if (src) {
        video.setAttribute('data-src', src);
        video.removeAttribute('src'); // Empêcher le chargement immédiat
      }
    }
  });
  
  // Observer pour charger les vidéos quand elles deviennent visibles
  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const src = video.getAttribute('data-src');
        
        if (src) {
          video.src = src;
          video.load();
          video.removeAttribute('data-src');
        }
        
        observer.unobserve(video);
      }
    });
  }, { rootMargin: "100px 0px" });
  
  document.querySelectorAll('video[data-src]').forEach(video => {
    videoObserver.observe(video);
  });
};

// Précharger uniquement les images visibles dans la viewport
const preloadVisibleImages = () => {
  return new Promise(resolve => {
    const visibleImages = Array.from(document.querySelectorAll('img'))
      .filter(img => isElementInViewport(img));
    
    if (visibleImages.length === 0) {
      return resolve();
    }
    
    let loadedCount = 0;
    visibleImages.forEach(img => {
      if (img.complete) {
        loadedCount++;
        if (loadedCount === visibleImages.length) resolve();
      } else {
        img.onload = img.onerror = () => {
          loadedCount++;
          if (loadedCount === visibleImages.length) resolve();
        };
      }
    });
    
    // Sécurité: résoudre la promesse après 3 secondes
    setTimeout(resolve, 3000);
  });
};

// Fonction utilitaire pour vérifier si un élément est dans la viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
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
/* Styles identiques à votre version précédente */
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