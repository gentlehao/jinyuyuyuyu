export default [
    {
        path: "/",
        name: "index",
        component: () => import('../views/Home.vue'),
    },
    {
        path: "/home",
        name: "home",
        component: () => import('../views/Home.vue'),
        children: [
            // {
            //     path: 'project',
            //     component: () => import('../views/project.vue')
            // }, 
        ]
    },
]