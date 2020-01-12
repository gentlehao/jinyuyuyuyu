export default [
    {
        path: "/",
        name: "index",
        component: () => import('../views/Home.vue'),
        meta: {
            needLogin: false
        }
    },
    {
        path: "/home",
        name: "home",
        component: () => import('../views/Home.vue'),
        meta: {
            needLogin: false
        },
        children: [
            // {
            //     path: 'project',
            //     component: () => import('../views/project.vue')
            // }, 
        ]
    },
]