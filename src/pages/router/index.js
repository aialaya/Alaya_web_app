import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/home.vue')
        },
        {
            path: '/annotation',
            component: () => import('@/pages/annotation.vue')
        },
        {
            path: '/platform',
            component: () => import('@/pages/platform.vue')
        },
        {
            path: '/labeling',
            component: () => import('@/pages/labeling.vue')
        },
        {
            path: '/media',
            component: () => import('@/pages/media/media.vue')
        },
        {
            path: '/video',
            component: () => import('@/pages/media/video.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router;