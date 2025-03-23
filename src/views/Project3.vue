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
            <img src="@/assets/unity2.png" alt="Small Image" class="small-image" />
            <img src="@/assets/unity3.png" alt="Small Image" class="small-image" />
          </div>
          <div class="image-small">
            <img src="@/assets/unity4.png" alt="Small Image" class="small-image" />
          </div>
        </div>
        <div v-else class="text-placeholder">
          <p>Sujet : Développement d'un projet en réalité virtuelle via Unity</p>
          <p>Objectif : Créer une expérience immersive permettant à l'utilisateur de visualiser la maison de 2050 à travers une interface VR interactive. Le projet vise à intégrer des éléments futuristes et des technologies avancées, pour imaginer un habitat de demain. L'utilisateur pourra interagir avec l'environnement de manière réaliste, en explorant les fonctionnalités et les innovations de cette maison du futur. L'objectif est que l'utilisateur vive dans cette maison une journée type, du réveil au couchée.</p>
          <p>Méthodologie :</p>
          <ul>
            <li><strong>Travail de recherche et de gestion de projet</strong> : Phase de recherche sur les tendances en architecture, domotique et technologies émergentes pour définir une vision crédible de la maison de 2050.</li>
            <br>
            <li><strong>Création d'un environnement 3D</strong> : Conception détaillée de l'environnement de la maison en utilisant Unity pour modéliser chaque pièce, intégrer des éléments interactifs et explorer des solutions architecturales durables et innovantes.</li>
            <br>
            <li><strong>Développement d'interactions VR</strong> : Utilisation de C# pour implémenter des interactions qui permettent à l'utilisateur d'interagir avec les objets et les éléments de la maison (ajuster l'éclairage et contrôler la température via une tablette, récupérer sa commande Uber Eats et l'ouvrir, pouvoir écouter de la musique et pouvoir regarder la télévision, ou encore avoir une voix qui lui annonce des évènements, comme lorsqu'il doit se réveiller ou aller se coucher, l'ouverture et la fermeture automatique des fenêtres et l'allumage et l'extinction automatique de l'éclairage) de manière fluide et intuitive en VR.</li>
          </ul>
          <p><strong>Défis rencontrés :</strong> Optimisation des performances en VR pour garantir une expérience fluide et immersive, ainsi que la création d'interactions intuitives pour les utilisateurs.</p>
          <p><strong>Technologies et outils utilisés :</strong> Unity pour le moteur 3D, C# pour le développement des scripts d'interaction, et Oculus Rift pour la réalité virtuelle.</p>
          <p><strong>Résultats :</strong> Ce projet a permis de renforcer mes compétences en développement VR, en modélisation 3D et en gestion de projet, tout en offrant une vision de l'habitat futur qui correspond à ce que j'ai imaginé.</p>
        </div>
      </div>

      <!-- Colonne droite -->
      <div class="right-column">
        <div class="menu-container">
<a href="#" class="menu-link" @click.prevent="navigateToProjects">Menu</a>
        </div>
        <div class="text-container">
          <div class="text-block">
            <h1>2050 House</h1>
            <h3>3D Model, Virtual Reality, Unity</h3>
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
      selectedImage: { src: require('@/assets/unity1.png') },
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
  font-family: 'apfelGrotezk', 'apfelGrotezk', Regular;
  font-size: 8px;
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
  max-height: 500px;
  justify-content: space-between;
  gap: 15px;
  padding: 0px;
  margin-bottom: 15px;
}

.small-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.video-small {
  display: flex;
  gap: 12px;
}

.small-video {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px; /* Optionnel : coins arrondis */
}

.text-placeholder {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  font-size: 16px;
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

.menu-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
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

.text-container {
  margin-top: auto;
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
