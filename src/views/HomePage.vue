<template>
  <div class="home-container">
    <div class=home-text>
      <p>
        HEY, I'M VICTOR, <br>
        WELCOME TO MY PORTFOLIO! <br>
        HAVE A GREAT VISIT!
      </p>
    </div>

    <!-- Grille de blocs -->
    <div class="grid-container">
      <div
        class="grid-item"
        v-for="(image, index) in images"
        :key="index"
        :class="{ 'special-bg': image.id === 8 }"
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
    };
  },
};
</script>

<style scoped>
/* Conteneur global */
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  padding: 20px;
  min-height: 100vh;
}

/* Conteneur de la grille */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: auto;
  scrollbar-width: none;
}

/* Élément de la grille */
.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #333;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

/* Image dans chaque bloc */
.image-block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none; /* Évite le soulignement */
}

/* Image */
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* Style spécifique pour l'id 7 */
.special-bg {
  background-color: #1c1611;
}

.contain-fit {
  object-fit: contain;
}

/* Ajouter un léger zoom au bloc image au survol */
.grid-item:hover {
  transform: scale(1.02);
}

.home-text {
  text-align: left;
  width: 90%; /* Même largeur que .grid-container */
  max-width: 1200px; /* Aligné avec la grille */
  padding-bottom: 20px; /* Espacement entre le texte et la grille */
}

.home-text p {
  font-size: 3rem; /* Augmente la taille du texte */
  font-weight: bold;
  color: white; /* Assure un bon contraste sur fond noir */
  line-height: 1.3; /* Améliore la lisibilité */
}

</style>
