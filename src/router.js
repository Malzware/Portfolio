import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';  // Page d'accueil
import Project1 from './views/Project1.vue';  // Page spécifique pour Project1
import Project2 from './views/Project2.vue';  // Page spécifique pour Project2
import Project3 from './views/Project3.vue';  // Page spécifique pour Project3
import Project4 from './views/Project4.vue';  // Page spécifique pour Project4
import Project5 from './views/Project5.vue';  // Page spécifique pour Project4
import Project6 from './views/Project6.vue';  // Page spécifique pour Project4
import Project7 from './views/Project7.vue';  // Page spécifique pour Project4
import Project8 from './views/Project8.vue';  // Page spécifique pour Project4
import Project9 from './views/Project9.vue';  // Page spécifique pour Project4

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/project1',
    name: 'project1',
    component: Project1,
  },
  {
    path: '/project2',
    name: 'project2',
    component: Project2,
  },
  {
    path: '/project3',
    name: 'project3',
    component: Project3,
  },
  {
    path: '/project4',
    name: 'project4',
    component: Project4,
  },
  {
    path: '/project5',
    name: 'project5',
    component: Project5,
  },
  {
    path: '/project6',
    name: 'project6',
    component: Project6,
  },
  {
    path: '/project7',
    name: 'project7',
    component: Project7,
  },
  {
    path: '/project8',
    name: 'project8',
    component: Project8,
  },
  {
    path: '/project9',
    name: 'project9',
    component: Project9,
  },
  // Ajoute des routes supplémentaires si tu as plus de projets
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
