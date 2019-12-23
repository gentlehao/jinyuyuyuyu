export default [
    {
        path: "/login",
        name: "login",
        component: () => import('../views/Login'),
        redirect: {
            name: "loginIndex"
        },
        children: [
            {
                path: "loginIndex",
                name: "loginIndex",
                component: () => import('../views/Login/Login.vue'),
            },
        ]
    },
]