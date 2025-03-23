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
            <img src="@/assets/woodkid-mobile4.png" alt="Small Image" class="small-image" />
            <img src="@/assets/woodkid-mobile5.png" alt="Small Image" class="small-image" />
            <img src="@/assets/woodkid-mobile6.png" alt="Small Image" class="small-image" />
          </div>
          <div class="video-small">
            <video autoplay muted loop class="small-video">
              <source src="/videos/woodkid-gif.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div v-else class="text-placeholder">
            <p>Sujet : Maquette interactive présentant l'artiste Woodkid et son univers</p>
            <p>Objectif : Créer une expérience immersive et visuellement cohérente, qui reflète l'univers artistique de Woodkid, tout en offrant une navigation fluide et agréable pour l'utilisateur.</p>
            <p>Méthodologie :</p>
            <ul>
              <li><strong>Travail de recherche et définition de la direction artistique</strong> : Exploration de l'univers visuel et musical de Woodkid pour comprendre son style. Création d'un moodboard pour guider la conception visuelle du site.</li>
              <br>
              <li><strong>Création de la maquette interactive</strong> : Conception  de la maquette dans Figma, en intégrant des éléments interactifs permettant une exploration fluide de l'univers de l'artiste.</li>
              <br>
              <li><strong>Prototypage et ajustements</strong> : Création de prototypes interactifs pour l'ergonomie et les interactions utilisateur, suivi de la phase de validation et d'ajustements pour améliorer l'expérience.</li>
            </ul>
            <p><strong>Technologies et outils utilisés :</strong> Figma pour la création de la maquette et du prototype interactif.</p>
          </div>
      </div>

      <!-- Colonne droite -->
      <div class="right-column">
        <div class="menu-container">
          <router-link to="/" class="menu-link">Menu</router-link> <!-- Lien vers la page d'accueil -->
        </div>
        <div class="text-container">
          <div class="text-block">
            <h1>WOODKID - <br> Who's him ?</h1>
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
      selectedImage: { src: require('@/assets/woodkid1-ps.png') },
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
  gap: 50px;
  padding: 0px;
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
