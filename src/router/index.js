import Vue from 'vue'
import Router from 'vue-router'
import Hmoe from '@/components/Home'
import SaleIssue from '@/components/im/saleIssue'
import PurWarehs from '@/components/im/purWarehs'
import Inventory from '@/components/im/inventory'
import Profile from '@/pages/user/profile'
import Reg from '@/pages/user/reg'
import Login from '@/pages/user/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hmoe',
      component: Hmoe
    },
    {
      path: '/saleIssue',
      name: 'SaleIssue',
      component: SaleIssue
    },
    {
      path: '/purWarehs',
      name: 'PurWarehs',
      component: PurWarehs
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
