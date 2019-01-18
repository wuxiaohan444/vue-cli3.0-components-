import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';
import list from '@/pages/list';

Vue.use(Router);

export default new Router({
    // mode : 'history',
    base :  '/dist/',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },{
            path: '/list',
            name: 'list',
            component: list
        }

    ]
})
