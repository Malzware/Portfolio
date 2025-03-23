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
            <img src="@/assets/bauhauss1.png" alt="Small Image" class="small-image" />
          </div>
        </div>
          <div v-else class="text-placeholder">
            <p>Sujet : Étude du courant artistique "Bauhaus" et création d'une maquette de packaging pour "La belle-iloise"</p>
            <p>Objectif : Représenter l'histoire du Bauhaus à travers une maquette visuelle et concevoir un packaging pour la marque "La belle-iloise", en respectant les principes du design Bauhaus.</p>
            <p>Méthodologie :</p>
            <ul>
              <li><strong>Recherche et analyse du style Bauhaus</strong> : Étude des caractéristiques visuelles du Bauhaus pour comprendre son impact sur le design, la typographie, et l'utilisation des formes géométriques et des couleurs primaires.</li>
              <br>
              <li><strong>Conception de la maquette</strong> : Réalisation d'une maquette sur Illustrator en intégrant les éléments visuels du Bauhaus, tout en respectant l'esthétique de la marque "La belle-iloise".</li>
              <br>
              <li><strong>Création du packaging</strong> : Élaboration d'un design de packaging inspiré du Bauhaus, en veillant à ce que l'aspect visuel soit cohérent avec l’histoire du mouvement tout en répondant aux besoins de la marque.</li>
            </ul>
            <p><strong>Technologies et outils utilisés :</strong> Illustrator pour la création de la maquette et du packaging.</p>
          </div>
      </div>

      <!-- Colonne droite -->
      <div class="right-column">
        <div class="menu-container">
<a href="#" class="menu-link" @click.prevent="navigateToProjects">Menu</a>
        </div>
        <div class="text-container">
          <div class="text-block">
            <h1>Bauhaus - Design Study</h1>
            <h3>Design</h3>
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
      selectedImage: { src: require('@/assets/bauhauss2.png') },
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

body {
  background-color: black;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  height: 100%;
  overflow-y: auto;
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
  height: 96vh;
  overflow: hidden; /* Empêche les débordements */
  display: flex;
  justify-content: center;
  align-items: center;
    margin-bottom: 15px; /* Centre l'image correctement */

}


.full-image {
  width: auto; /* Permet d'éviter l'étirement */
  max-width: 100%; /* Empêche l'image de dépasser horizontalement */
  height: 96vh; /* Garde la hauteur adaptée */
  max-height: 100%; /* Empêche tout dépassement */
  object-fit: contain; /* Assure que l'image reste bien ajustée */
  transform: rotate(270deg);
  display: block; /* Évite des problèmes d'espacement */
  margin-bottom: 12px; /* Centre l'image correctement */
}

.image-small {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px;
}

.small-image {
  width: 100%;
  height: auto;
  object-fit: cover;
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
  justify-content: space-between;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
  max-width: 70%; /* Assure une largeur constante */
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
