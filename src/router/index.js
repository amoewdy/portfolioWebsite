import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import BootstrapVue from 'bootstrap-vue'
import zipclean from '@/components/zipclean'
import sandword from '@/components/sandword'

Vue.use(Router)
    // Vue.use(BootstrapVue);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: index
        },
        {
            path: '/zipclean',
            name: 'Zipclean',
            component: zipclean
        },
        {
            path: '/sandword',
            name: 'SandWord',
            component: sandword
        }
    ]
})