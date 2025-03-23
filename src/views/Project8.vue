<template>
  <div id="app" class="background">
    <div class="main-container">
      <!-- Colonne gauche avec contenu masqué remplacé par du texte -->
      <div class="left-column">
        <div v-if="!showInfo" class="images-container">
          <div class="image-full">
            <img :src="selectedImage.src" alt="Full Image" class="full-image" />
          </div>
          <div class="image-thumbnails">
            <div class="image-small">
              <img src="@/assets/pizza2.png" alt="Small Image" class="small-image" />
            </div>
            <div class="image-small">
              <img src="@/assets/pizza4.webp" alt="Small Image" class="small-image" />
            </div>
            <div class="image-small">
              <img src="@/assets/pizza5.webp" alt="Small Image" class="small-image" />
            </div>
          </div>
        </div>
        <div v-else class="text-placeholder">
          <p>Sujet : Responsable de la communication publique du restaurant Pizza Pizza Pasta Béziers lors de mon stage</p>
          <p>Objectif : Refonte de l'identité graphique du restaurant Pizza Pizza Pasta et création de supports visuels variés pour renforcer la visibilité et l'attractivité de l'établissement.</p>
          <p>Méthodologie :</p>
          <ul>
            <li><strong>Refonte de l'identité graphique</strong> : Création d'un nouveau logo, choix d'une palette de couleurs, et définition des typographies pour moderniser l'image du restaurant tout en restant fidèle à son esprit.</li>
            <br>
            <li><strong>Conception de supports visuels</strong> : Réalisation de divers supports graphiques, tels que des flyers, publications Instagram, bannières web, et tableaux, pour promouvoir le restaurant de manière cohérente sur plusieurs canaux.</li>
            <br>
            <li><strong>Gestion de la communication visuelle</strong> : Production de visuels impactants en accord avec la stratégie de communication du restaurant, et planification de la diffusion sur les différents supports (réseaux sociaux, print, web).</li>
          </ul>
          <p><strong>Technologies et outils utilisés :</strong> Adobe Creative Suite (Photoshop, Illustrator, InDesign) pour la création des supports visuels.</p>
        </div>
      </div>

      <!-- Colonne droite -->
      <div class="right-column">
        <div class="menu-container">
<a href="#" class="menu-link" @click.prevent="navigateToProjects">Menu</a>
        </div>
        <div class="text-container">
          <div class="text-block">
            <h1>Pizza Pizza Pasta <br> Internship</h1>
            <h3>Design, Branding, Communication</h3>
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
  data() {
    return {
      selectedImage: { src: require('@/assets/pizza3.png') },
      showInfo: false, // État pour afficher ou masquer le contenu de la colonne gauche
    };
  },
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

.images-container {
  display: flex;
  flex-direction: column;
  height: 100%;
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
  max-height: 100vh;
  margin-bottom: 12px;
}

.full-image {
  width: 100%;
  height: 96vh;
  object-fit: contain;
}

.image-thumbnails {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.image-small {
  width: 100%;
  height: auto;
}

.small-image {
  width: 100%;
  height: auto;
  object-fit: contain;
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
  padding-right: 20px;
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
  justify-content: flex-end;
  width: 100%;
  align-self: flex-start;
  padding: 20px;
}

.right-column .text-container {
  margin-top: auto;
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