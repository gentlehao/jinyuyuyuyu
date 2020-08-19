export default [
    {
        path: "/userCenter",
        name: "userCenter",
        component: () => import('../views/UserCenter'),
        redirect: {
            name: "userIndex"
        },
        children: [
            {
                path: "userIndex",
                name: "userIndex",
                component: () => import('../views/UserCenter/UserCenterMenu.vue'),
                meta: {
                    needLogin: true
                },
                children: [
                    {
                        path: "userInfo",
                        name: "userInfo",
                        component: () => import('../views/UserCenter/UserInfo.vue'),
                        meta: {
                            needLogin: true
                        },
                    }
                ]
            },
        ]
    },
]