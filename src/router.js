import { createRouter, createWebHistory } from 'vue-router';

// Import dynamique avec webpackPreload
const HomePage = () => import(/* webpackPreload: true */ './views/HomePage.vue');
const Project1 = () => import(/* webpackPreload: true */ './views/Project1.vue');
const Project2 = () => import(/* webpackPreload: true */ './views/Project2.vue');
const Project3 = () => import(/* webpackPreload: true */ './views/Project3.vue');
const Project4 = () => import(/* webpackPreload: true */ './views/Project4.vue');
const Project5 = () => import(/* webpackPreload: true */ './views/Project5.vue');
const Project6 = () => import(/* webpackPreload: true */ './views/Project6.vue');
const Project7 = () => import(/* webpackPreload: true */ './views/Project7.vue');
const Project8 = () => import(/* webpackPreload: true */ './views/Project8.vue');
const Project9 = () => import(/* webpackPreload: true */ './views/Project9.vue');

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
