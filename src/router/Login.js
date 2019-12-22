export default [
    {
        path: "/login",
        name: "login",
        component: () => import('../views/Login/index.vue'),
        children: [
            {
                path: "/",
                name: "loginIndex",
                component: () => import('../views/Login/Login.vue'),
                meta: {
                    keepAlive: true
                },
            },
        ]
    },
]