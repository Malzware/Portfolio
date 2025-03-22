<template>
  <div class="gsap-text">
    <p ref="text">Voici un texte animé avec GSAP!</p>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'GSAPText',
  mounted() {
    gsap.from(this.$refs.text, { opacity: 0, x: -100, duration: 2 });
  }
}
</script>

<style scoped>
.gsap-text {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 50px;
}
</style>
