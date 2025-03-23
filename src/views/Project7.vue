<template>
  <div id="app" class="background">
    <div class="main-container">
      <!-- Colonne gauche avec contenu masqué remplacé par du texte -->
      <div class="left-column">
        <div v-if="!showInfo">
          <div class="image-full">
            <video autoplay muted loop class="full-image">
              <source src="/videos/spaceflakes-mp4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>         
          </div>
        </div>
          <div v-else class="text-placeholder">
            <p>Sujet : Vidéo non-officielle pour promouvoir la nouvelle collection de vêtements de l'artiste Seas</p>
            <p>Objectif : Créer une vidéo promotionnelle dynamique et esthétique pour mettre en avant la nouvelle collection de vêtements de l'artiste Seas, en utilisant des animations 3D.</p>
            <p>Méthodologie :</p>
            <ul>
              <li><strong>Création d'animations 3D</strong> : Modélisation et animation de visuels en 3D dans Blender.</li>
              <br>
              <li><strong>Montage vidéo</strong> : Utilisation de Premiere Pro pour monter et assembler les séquences vidéo, en intégrant les animations 3D avec des clips réels, tout en créant un rythme dynamique qui met en valeur les produits.</li>
              </ul>
            <p><strong>Technologies et outils utilisés :</strong> Blender pour la création 3D et Premiere Pro pour le montage vidéo.</p>
          </div>
      </div>

      <!-- Colonne droite -->
      <div class="right-column">
        <div class="menu-container">
<a href="#" class="menu-link" @click.prevent="navigateToProjects">Menu</a>
        </div>
        <div class="text-container">
          <div class="text-block">
            <h1>SpaceFlakes Promotional Video</h1>
            <h3>3D Modelism, Motion-Design</h3>
            <button @click="toggleInfo">{{ showInfo ? 'Retour' : '+ d\'infos' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo;
    },
    navigateToProjects() {
      // Option 1: Si vous êtes déjà sur la page d'accueil, faire défiler vers la section des projets
      if (this.$route.path === '/') {
        const projectsSection = document.querySelector('.projects-section');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      } 
      // Option 2: Si vous êtes sur une autre page, naviguer vers la page d'accueil et défiler
      else {
        this.$router.push('/').then(() => {
          // Attendre que la navigation soit terminée
          this.$nextTick(() => {
            setTimeout(() => {
              const projectsSection = document.querySelector('.projects-section');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100); // Un petit délai pour s'assurer que le DOM est bien chargé
          });
        });
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
}

.left-column {
  flex: 7;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
  min-width: 70%; /* Ajoute une largeur minimale pour éviter le décalage */
}

.image-full {
  width: 100%;
  height: 100%; /* Utilisation de la hauteur de l'écran complet */
  overflow: hidden; /* Empêche le débordement */
}

.full-image {
  width: 100%;
  height: 94.2vh;
  object-fit: cover;
}

.image-small {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 50px;
  padding: 0px;
}

.small-image {
  width: 500px;
  height: 100%;
  object-fit: contain;
}

.video-small {
  display: flex;
  gap: 12px;
}

.small-video {
  width: 100%;
  height: 500px;
  object-fit: contain;
  border-radius: 8px; /* Optionnel : coins arrondis */
}

.text-placeholder {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  gap: 20px;
}

.right-column {
  flex: 3;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Espace entre les éléments pour pousser le texte en bas */
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
  max-width: 70%;
}

.right-column .menu-container {
  display: flex;
  justify-content: flex-end;  /* Alignement à droite */
  width: 100%;  /* Ajouté pour occuper toute la largeur */
  align-self: flex-start;
  padding: 20px;
}

.right-column .text-container {
  margin-top: auto; /* Assure que le texte reste en bas */
}

.menu-link {
  color: white;
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
}

.menu-link:hover {
  color: gray;
}

.text-block {
  font-size: 18px;
  text-align: left;
  margin-bottom: 12px;
}

button {
  background-color: white;
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button:hover {
  background-color: gray;
}
</style>
