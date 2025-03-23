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
            <img src="@/assets/sleep3.png" alt="Small Image" class="small-image" />
            <video autoplay muted loop class="small-video">
              <source src="/videos/sleep-app.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
          <div v-else class="text-placeholder">
            <p>Sujet : Maquette de l'application "Sleep"</p>
            <p>Objectif : Créer un concept et son prototype d'application mobile visant à améliorer la santé mentale et physique des étudiants, en optimisant l'UI et l'UX pour offrir une expérience fluide et bénéfique.</p>
            <p>Méthodologie :</p>
            <ul>
              <li><strong>Recherche et analyse des besoins des étudiants</strong> : En collaboration avec deux autres étudiants, étude des attentes et des besoins en matière de santé chez les étudiants, afin de définir les fonctionnalités clés de l'application "Sleep".</li>
              <br>
              <li><strong>Conception des prototypes</strong> : Réalisation de plusieurs prototypes interactifs sur Figma, en se concentrant sur une interface utilisateur claire et intuitive, et une expérience utilisateur optimisée pour la santé.</li>
              <br>
              <li><strong>Tests utilisateurs et ajustements</strong> : Organisation de sessions de tests avec plus d'une vingtaine d'étudiants pour recueillir des retours sur l'UI et l'UX, et ajustement des prototypes en fonction des retours obtenus afin de créer le meilleur prototype possible.</li>
            </ul>
            <p><strong>Technologies et outils utilisés :</strong> Figma pour la création des maquettes et prototypes interactifs.</p>
          </div>
      </div>

      <!-- Colonne droite -->
      <div class="right-column">
        <div class="menu-container">
<a href="#" class="menu-link" @click.prevent="navigateToProjects">Menu</a>
        </div>
        <div class="text-container">
          <div class="text-block">
            <h1>Sleep App</h1>
            <h3>Design, UI / UX</h3>
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
      selectedImage: { src: require('@/assets/sleep1-ps.png') },
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
  gap: 50px;
  padding: 0px;
  margin-bottom: 12px;
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
