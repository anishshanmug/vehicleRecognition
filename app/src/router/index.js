import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title:"Vehicle Recognition"
    }
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

document.title="Vehicle Recognition";
// video 11:51


export default router
