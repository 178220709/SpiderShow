'use strict'

export default function(router){
    router.map({
        '/':{				//首页
            name:'home',
            component:require('./views/index.vue')
        },
        /* 404路由 */
        '*': {
            component: require('./views/index.vue')
        },
        '/list':{               //首页
            name:'list',
            component:require('./views/list.vue')
        },
        '/view/:url':{               //浏览
            name:'view',
            component:require('./views/view.vue')
        },
    })
}