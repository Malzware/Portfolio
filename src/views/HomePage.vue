<template>
  <div class="portfolio-container">
    <!-- Section d'introduction plein écran -->
    <section class="intro-section">
      <div class="intro-text">
        <p>
          HEY 👋 I'M VICTOR, <br>
          WELCOME TO MY P🎨RTF💡LIO! <br>
          HAVE A GREAT V✨SIT! 👨🏼‍💻      
        </p>
      </div>
      <!-- Flèche de défilement -->
      <div class="scroll-arrow" @click="scrollToProjects">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </section>

    <!-- Section des projets plein écran -->
    <section class="projects-section" ref="projectsSection">
      <!-- Espace de travail pour les projets -->
      <div class="projects-workspace">
        <div
          v-for="(image, index) in images"
          :key="`project-${index}`"
          class="project-item"
          :class="{ 'special-bg': image.id === 8 }"
          :style="getProjectPosition(index)"
        >
          <router-link :to="'/project' + image.id" class="image-block">
            <img
              :src="image.src"
              alt="Image"
              class="image"
              :class="{ 'contain-fit': image.id === 8 }"
            />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      images: [
        { id: 1, src: require("@/assets/woodkid1-ps.png") },
        { id: 2, src: require("@/assets/bauhauss1.png") },
        { id: 3, src: require("@/assets/unity1.png") },
        { id: 4, src: require("@/assets/sleep1-ps.png") },
        { id: 5, src: require("@/assets/valorant.png") },
        { id: 6, src: require("@/assets/monk4.png") },
        { id: 7, src: require("@/assets/spaceflake.png") },
        { id: 8, src: require("@/assets/pizza-logo.png") },
        { id: 9, src: require("@/assets/poke5.png") },
      ],
      projectPositions: []
    };
  },
  mounted() {
    this.generatePositions();
    // Recalculer les positions lors du redimensionnement de la fenêtre
    window.addEventListener('resize', this.generatePositions);
  },
  beforeUnmount() {
    // Nettoyer l'écouteur d'événement
    window.removeEventListener('resize', this.generatePositions);
  },
  methods: {
    generatePositions() {
      // Définir une grille pour la disposition
      const gridRows = 3;
      const gridCols = 4;
      
      // Créer un tableau de toutes les positions possibles
      let positions = [];
      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          positions.push({
            row,
            col
          });
        }
      }
      
      // Mélanger les positions pour plus d'aléatoire
      positions = this.shuffleArray(positions);
      
      // Assigner une position à chaque projet
      this.projectPositions = [];
      for (let i = 0; i < this.images.length; i++) {
        if (i < positions.length) {
          const pos = positions[i];
          
          // Calculer la position en pourcentage avec un peu de variation
          const baseX = (pos.col / gridCols) * 100;
          const baseY = (pos.row / gridRows) * 100;
          
          // Ajouter une variation aléatoire mais contrôlée
          const variationX = Math.random() * 10 - 5; // -5% à +5%
          const variationY = Math.random() * 10 - 5; // -5% à +5%
          
          // S'assurer que les positions restent dans des limites raisonnables
          const x = Math.min(Math.max(baseX + variationX, 5), 95);
          const y = Math.min(Math.max(baseY + variationY, 5), 95);
          
          // Rotation aléatoire
          const rotation = Math.floor(Math.random() * 10 - 5); // -5° à +5°
          
          this.projectPositions.push({
            left: `${x}%`,
            top: `${y}%`,
            rotation: rotation
          });
        }
      }
    },
    shuffleArray(array) {
      const result = [...array];
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
      return result;
    },
    getProjectPosition(index) {
      if (!this.projectPositions[index]) return {};
      
      const position = this.projectPositions[index];
      return {
        position: 'absolute',
        left: position.left,
        top: position.top,
        transform: `rotate(${position.rotation}deg)`,
        zIndex: 2
      };
    },
    scrollToProjects() {
      this.$refs.projectsSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  }
};
</script>

<style scoped>
/* Styles globaux */
.portfolio-container {
  width: 100%;
  background-color: black;
  color: white;
}

/* Section d'introduction (plein écran) */
.intro-section {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.intro-text {
  text-align: center;
  max-width: 90%;
}

.intro-text p {
  font-size: 4rem;
  font-weight: bold;
  color: white;
  line-height: 1.3;
  margin: 0;
}

/* Flèche de défilement */
.scroll-arrow {
  position: absolute;
  bottom: 40px;
  cursor: pointer;
  animation: bounce 2s infinite;
  transition: transform 0.3s;
}

.scroll-arrow:hover {
  transform: scale(1.2);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

/* Section des projets (plein écran) */
.projects-section {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.projects-workspace {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Élément de projet */
.project-item {
  width: 120px;
  height: 120px;
  background-color: #333;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, z-index 0.1s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Image dans chaque bloc */
.image-block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 15px;
  overflow: hidden;
}

/* Image */
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* Style spécifique pour l'id 8 */
.special-bg {
  background-color: #1c1611;
}

.contain-fit {
  object-fit: contain;
}

/* Ajouter un léger zoom au bloc image au survol */
.project-item:hover {
  transform: scale(1.15) rotate(0deg) !important; /* Annule la rotation au survol */
  z-index: 10 !important; /* Assure qu'il est au-dessus des autres */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .intro-text p {
    font-size: 2.5rem;
  }
  
  .project-item {
    width: 100px;
    height: 100px;
  }
}
</style>