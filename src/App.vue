<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const isLoading = ref(false);
const route = useRoute();

watch(route, () => {
  isLoading.value = true;
  window.scrollTo(0, 0);
  setTimeout(() => (isLoading.value = false), 500); // Simule un chargement
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div id="app" class="background">
    <!-- Barre de chargement -->
    <div v-if="isLoading" class="loading-bar"></div>

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

/* Fond noir */
body {
  background-color: black;
  color: white;
  font-family: 'apfelGrotezk', monospace;
  height: 100%;
  overflow-y: auto;
}

/* Barre de chargement */
.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ffcc00, #ff9900);
  animation: loading 0.5s ease-in-out infinite alternate;
}

/* Animation de la barre de chargement */
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
/* Réinitialisation des styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Fond noir */
body {
  background-color: black;
  color: white;
  font-family: 'apfelGrotezk', monospace;
  height: 100%;
  overflow-y: auto;
}

/* Barre de chargement */
.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ffcc00, #ff9900);
  animation: loading 0.5s ease-in-out infinite alternate;
}

/* Animation de la barre de chargement */
@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
