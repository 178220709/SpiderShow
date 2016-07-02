'use strict'

export default function (router) {
    router.map({
        '/': { //首页
            name: 'home',
            component: require('./views/home.vue')
        },
        '/product': {
            name: 'product',
            component: require('./views/product.vue')
        },
        /* 404路由 */
        //'*': {
        //    component: require('./views/index.vue')
        //},
        '/message': {
            name: 'message',
            component: require('./views/message.vue')
        },
        '/request': {
            name: 'request',
            component: require('./views/request.vue')
        },
        '/nodetail': {
            name: 'nodetail',
            component: require('./views/nodetail.vue')
        },
        '/search': {
            name: 'search',
            component: require('./views/iframes/search.vue')
        },
        '/queryRequest': {
            name: 'queryRequest',
            component: require('./views/queryRequest.vue')
        },
        '/exception': {
            name: 'exception',
            component: require('./views/exception.vue')
        },
        '/alert': {
            name: 'alert',
            component: require('./views/alert.vue')
        },
        '/view/:url': {
            name: 'view',
            component: require('./views/view.vue')
        },
        '/job': {
            name: 'job',
            component: require('./views/job.vue')
        },
        '/dashboard': {
            name: 'dashboard',
            component: require('./views/dashboard.vue')
        },
        '/charts': {
            component: {
                template: ' <content><router-view ></router-view></content> '
            },
            subRoutes: {
                // '/': {
                //     component: require('./views/charts/c_pro.vue')
                // },
                '/pro': {
                    component: require('./views/charts/c_pro.vue')
                },
                '/trace': {
                    component: require('./views/charts/c_trace.vue')
                },
                '/stock': {
                    component: require('./views/charts/c_stock.vue')
                },
            },
        }
    })
}
