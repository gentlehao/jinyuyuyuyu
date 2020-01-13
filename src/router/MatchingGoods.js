export default [
    {
        path: "/matchingGoods",
        name: "matchingGoods",
        component: () => import('../views/MatchingGoods'),
        redirect: {
            name: "goodsList"
        },
        children: [
            {
                path: "goodsList",
                name: "goodsList",
                component: () => import('../views/MatchingGoods/GoodsList'),
                meta: {
                    needLogin: false
                }
            },
            {
                path: "goodsDetail",
                name: "goodsDetail",
                component: () => import('../views/MatchingGoods/GoodsDetail'),
                meta: {
                    needLogin: false
                }
            },
        ]
    },
]