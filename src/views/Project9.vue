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
              <img src="@/assets/poke2.png" alt="Small Image" class="small-image" />
            </div>
            <div class="image-small">
              <img src="@/assets/poke4.png" alt="Small Image" class="small-image" />
            </div>
            <div class="image-small">
              <img src="@/assets/poke3.png" alt="Small Image" class="small-image" />
            </div>
          </div>
        </div>
        <div v-else class="text-placeholder">
          <p>Sujet : Création d'un Pokédex web avec base de données, API et intégration de fonctionnalités interactives</p>
          <p>Objectif : Développer un Pokédex web permettant aux utilisateurs de consulter les informations détaillées sur les Pokémon, telles que leurs évolutions, faiblesses, poids, taille, description, talents, etc. L'utilisateur peut également voir la version shiny de chaque Pokémon et entendre son cri.</p>
          <p>Précision : La maquette Figma a été réalisée par une autre équipe, et j'étais en charge du développement de la base de données, de l'API et de l'intégration des fonctionnalités demandées.</p>
          <p>Méthodologie :</p>
          <ul>
            <li><strong>Création de la base de données</strong> : Conception et développement de la base de données pour stocker les informations sur les Pokémon, y compris les détails tels que les évolutions, faiblesses, talents, tailles, poids, et descriptions.</li>
            <br>
            <li><strong>Développement de l'API</strong> : Mise en place d'une API RESTful avec Laravel permettant de récupérer les informations sur les Pokémon, ainsi que de gérer les versions shiny et les fichiers audio des cris des Pokémon.</li>
            <br>
            <li><strong>Fonctionnalités interactives</strong> : Intégration de la possibilité pour l'utilisateur de visualiser la version shiny de chaque Pokémon et d'écouter son cri grâce à des fichiers audio liés à chaque Pokémon dans la base de données.</li>
            <br>
            <li><strong>Interface utilisateur</strong> : Utilisation de TailwindCSS et daisyUI pour concevoir une interface utilisateur responsive et moderne, permettant une navigation fluide et agréable.</li>
          </ul>
          <p><strong>Technologies et outils utilisés :</strong> Angular pour le frontend, Laravel pour l'API et le backend, TailwindCSS pour le design, daisyUI pour les composants d'interface utilisateur, et une base de données relationnelle pour stocker les données des Pokémon.</p>
        </div>
      </div>

      <!-- Colonne droite -->
      <div class="right-column">
        <div class="menu-container">
<a href="#" class="menu-link" @click.prevent="navigateToProjects">Menu</a>
        </div>
        <div class="text-container">
          <div class="text-block">
            <h1>Pokedex App</h1>
            <h3>Web Development</h3>
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
      selectedImage: { src: require('@/assets/poke5.png') },
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
  padding: 20px 0 20px 20px;
  overflow-y: auto;
  width: 70%;
}

.images-container {
  display: flex;
  flex-direction: column;
  height: 100%;
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