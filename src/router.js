import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('./views/HomePage.vue'); // Page d'accueil
const Project1 = () => import('./views/Project1.vue');  // Page spécifique pour Project1
const Project2 = () => import('./views/Project2.vue');  // Page spécifique pour Project2
const Project3 = () => import('./views/Project3.vue');  // Page spécifique pour Project3
const Project4 = () => import('./views/Project4.vue');  // Page spécifique pour Project4
const Project5 = () => import('./views/Project5.vue');  // Page spécifique pour Project5
const Project6 = () => import('./views/Project6.vue');  // Page spécifique pour Project6
const Project7 = () => import('./views/Project7.vue');  // Page spécifique pour Project7
const Project8 = () => import('./views/Project8.vue');  // Page spécifique pour Project8
const Project9 = () => import('./views/Project9.vue');  // Page spécifique pour Project9

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
