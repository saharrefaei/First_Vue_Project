import {
  createRouter,
  createWebHistory
} from 'vue-router';

import HomePage from '@/components/Home/Home.vue';
import UserPage from '@/components/Users/MainUser.vue';
import PostPage from '@/components/Posts/MainPost.vue';
const routes = [{
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/UserPage",
    name: "UserPage",
    component: UserPage,
  },
 
  {
    path: "/PostPage",
    name: "PostPage",
    component: PostPage,

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;