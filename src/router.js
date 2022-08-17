import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../src/Components/PostsView') },
        { path: '/posts/:id', component: () => import('../src/Components/IdPost') },
    ],
})
export default router