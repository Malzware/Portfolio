<template>
  <div id="app" class="background">
    <div class="main-container">
      <!-- Colonne gauche avec contenu masqué remplacé par du texte -->
      <div class="left-column">
        <div v-if="!showInfo">
          <div class="image-full">
            <video autoplay muted loop class="full-image">
              <source src="/videos/valorant-mp4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>         
          </div>
        </div>
          <div v-else class="text-placeholder">
            <p>Sujet : Étude des éléments de motion-design réalisés pour le jeu "Valorant" et création d'un motion-design personnalisé</p>
            <p>Objectif : Analyser les éléments visuels et dynamiques du motion-design utilisés dans "Valorant", puis créer un motion-design inspiré de cet univers tout en respectant les principes du design du jeu.</p>
            <p>Méthodologie :</p>
            <ul>
              <li><strong>Recherche et analyse des éléments de motion-design de "Valorant"</strong> : Étude des transitions, effets et animations utilisés dans le jeu pour comprendre leur impact sur l'expérience visuelle et dynamique du joueur.</li>
              <br>
              <li><strong>Création d'un motion-design personnalisé</strong> : Réalisation d'un motion-design original en utilisant After Effects, inspiré de l'esthétique de "Valorant", en intégrant des éléments visuels et des transitions fluides.</li>
              <br>
              <li><strong>Test et ajustements</strong> : Ajustement du motion-design créé en fonction des retours obtenus pour s'assurer qu'il répond à l'ambiance et au style visuel recherché.</li>
            </ul>
            <p><strong>Technologies et outils utilisés :</strong> After Effects pour la création du motion-design.</p>
          </div>
      </div>

      <!-- Colonne droite -->
      <div class="right-column">
        <div class="menu-container">
          <router-link to="/" class="menu-link">Menu</router-link> <!-- Lien vers la page d'accueil -->
        </div>
        <div class="text-container">
          <div class="text-block">
            <h1>Valorant - <br> Transition-filler</h1>
            <h3>Motion-Design</h3>
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
  height: 95vh;
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
