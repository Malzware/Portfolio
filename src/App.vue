<script setup>
import { ref, watch, onMounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useRoute } from 'vue-router';

const isLoading = ref(true); 
const route = useRoute();

// Watch for route changes
watch(route, () => {
  isLoading.value = true;
  window.scrollTo(0, 0);
  waitForImages();
});

onMounted(() => {
  isLoading.value = true; // Ensure loader is visible on initial load
  window.scrollTo(0, 0);
  waitForImages();
});

const waitForImages = () => {
  // Set a minimum display time for the loader to ensure animation is seen
  const minimumLoadTime = 1000; // 1 second minimum
  const startTime = Date.now();
  
  const images = document.querySelectorAll("img");
  let loadedCount = 0;
  
  // If no images, still maintain minimum load time
  if (images.length === 0) {
    setTimeout(() => {
      isLoading.value = false;
    }, minimumLoadTime);
    return;
  }
  
  // Check if all images are already loaded
  const allImagesLoaded = Array.from(images).every(img => img.complete);
  if (allImagesLoaded) {
    setTimeout(() => {
      isLoading.value = false;
    }, Math.max(0, minimumLoadTime - (Date.now() - startTime)));
    return;
  }
  
  // Handle image loading
  images.forEach(img => {
    if (img.complete) {
      loadedCount++;
      checkAllLoaded();
    } else {
      img.onload = () => {
        loadedCount++;
        checkAllLoaded();
      };
      
      // Handle broken images
      img.onerror = () => {
        loadedCount++;
        checkAllLoaded();
      };
    }
  });
  
  function checkAllLoaded() {
    if (loadedCount === images.length) {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsed);
      
      setTimeout(() => {
        isLoading.value = false;
      }, remainingTime);
    }
  }
  
  // Safety timeout (maximum wait time)
  setTimeout(() => {
    if (isLoading.value) {
      console.log('Safety timeout reached, some images may not have loaded');
      isLoading.value = false;
    }
  }, 8000); // 8 seconds max wait time
};
</script>

<template>
  <div id="app" class="background">
    <!-- Loading component -->
    <Loading 
      v-model:active="isLoading" 
      :can-cancel="false" 
      :is-full-page="true"
      :color="'#ffcc00'"
      :background-color="'#000000'"
      :opacity="1"
      :loader="'bars'"
      :active="isLoading"
    />
    
    <!-- Ensure animation shows immediately -->
    <div v-if="isLoading" class="loading-bar"></div>
    
    <!-- Page content -->
    <router-view />
  </div>
</template>

<style>
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

.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ffcc00, #ff9900);
  animation: loading 1.5s ease-in-out infinite alternate;
  z-index: 9999; /* Ensure it's above other elements */
}

@keyframes loading {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>