import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
    // Vue.use(BootstrapVue);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: index
    }]
})
