import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/CtfHome.vue';
import Problems from './views/CtfProblems.vue';
import Scoreboard from './views/CtfScoreboard.vue';
// import Challenge from './views/CtfChallenge.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/problems', component: Problems },
  { path: '/scoreboard', component: Scoreboard }
  // { path: '/challenge/:id', component: Challenge }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
