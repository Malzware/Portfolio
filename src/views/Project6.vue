<template>
  <div id="app" class="background">
    <div class="main-container">
      <!-- Colonne gauche avec contenu masqué remplacé par du texte -->
      <div class="left-column">
        <div v-if="!showInfo">
          <div class="image-full">
            <img :src="selectedImage.src" alt="Full Image" class="full-image" />
          </div>
          <div class="image-small">
            <img src="@/assets/monk3.png" alt="Small Image" class="small-image" />
            <img src="@/assets/monk4.png" alt="Small Image" class="small-image" />
          </div>
          <div class="video-small">
            <video autoplay muted loop class="small-video">
              <source src="/videos/monkey-mp4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div v-else class="text-placeholder">
          <p>Sujet : Développement d'un jeu 2D de défense de cristal contre une invasion de singes</p>
          <p>Objectif : Créer un jeu 2D où le joueur doit protéger un cristal en tuant des singes qui tentent de le détruire. Le joueur se déplace à l'aide des touches ZQSD et utilise une arme à tir unique avec le bouton A, tout en récoltant des boosts pour faciliter la défense.</p>
          <p>Méthodologie :</p>
          <ul>
            <li><strong>Conception du gameplay</strong> : Développement d'un système de déplacement fluide avec les touches ZQSD et d'un mécanisme de tir avec des balles tirées une à une via le bouton A.</li>
            <br>
            <li><strong>Création de l’environnement de jeu</strong> : Conception de niveaux 2D dans Unity, avec des obstacles et des zones où les singes apparaissent de manière aléatoire, forçant le joueur à défendre le cristal tout en gérant les vagues d'ennemis.</li>
            <br>
            <li><strong>Ajout de mécaniques de boost</strong> : Implémentation de boosts aléatoires qui apparaissent tout au long du niveau, augmentant la vitesse, la puissance de feu, ou offrant des avantages temporaires pour aider le joueur à survivre et protéger le cristal.</li>
          </ul>
          <p><strong>Technologies et outils utilisés :</strong> JavaScript pour le développement du jeu 2D et la gestion des interactions.</p>
        </div>
      </div>

      <!-- Colonne droite -->
      <div class="right-column">
        <div class="menu-container">
<a href="#" class="menu-link" @click.prevent="navigateToProjects">Menu</a>
        </div>
        <div class="text-container">
          <div class="text-block">
            <h1>Monkey's Invasion</h1>
            <h3>UI / UX, Game Development</h3>
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
      selectedImage: { src: require('@/assets/monk1.png') },
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
  object-fit: cover;
}

.image-small {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 15px;
  padding: 0px;
  margin-bottom: 15px;
}

.small-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.video-small {
  display: flex;
  gap: 12px;
}

.small-video {
  width: 100%;
  height: auto;
  object-fit: cover;
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
  padding-bottom: 20px;
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
