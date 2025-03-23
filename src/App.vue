<script setup>
import { ref, watch, onMounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useRoute } from 'vue-router';
const isLoading = ref(true); // Charge dès le départ
const route = useRoute();
watch(route, () => {
  isLoading.value = true;
  window.scrollTo(0, 0);
  waitForImages();
});
onMounted(() => {
  window.scrollTo(0, 0);
  waitForImages();
});
// Fonction pour attendre que toutes les images soient chargées
const waitForImages = () => {
  const images = document.querySelectorAll("img");
  let loadedCount = 0;
  if (images.length === 0) {
    isLoading.value = false;
    return;
  }

  images.forEach(img => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          isLoading.value = false;
        }
      };
    }
  });
  // Sécurité : Si au bout de 3s, certaines images ne sont pas chargées, on désactive le loader
  setTimeout(() => isLoading.value = false, 3000);
};
</script>
<template>
  <div id="app" class="background">
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
    <!-- Contenu de la page -->
    <router-view />
  </div>
</template>
<style>
/* Réinitialisation des styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: black;
  color: white;
  font-family: 'apfelGrotezk', monospace;
  height: 100%;
  overflow-y: auto;
}
/ Barre de chargement /
.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ffcc00, #ff9900);
  animation: loading 0.5s ease-in-out infinite alternate;
}
/ Animation de la barre de chargement /
@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
<style>
/ Réinitialisation des styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Fond noir /
body {
  background-color: black;
  color: white;
  font-family: 'apfelGrotezk', monospace;
  height: 100%;
  overflow-y: auto;
}
/ Barre de chargement /
.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ffcc00, #ff9900);
  animation: loading 0.5s ease-in-out infinite alternate;
}
/ Animation de la barre de chargement */
@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>