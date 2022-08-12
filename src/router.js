import { createRouter, createWebHashHistory } from 'vue-router';
import VueInfo from "./components/VueInfo.vue";
import VueContact from "./components/VueContact.vue";
import VueMain from "./components/VueMain.vue";
import VueUsed from "./components/VueUsed.vue";


const routes = [
  { path: '/VueInfo', component: VueInfo },
  { path: '/VueContact', component: VueContact },
  { path: '/VueMain', component: VueMain },
  { path: '/VueUsed', component: VueUsed },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;