import Vue from 'vue'
import Router from 'vue-router'
import Hmoe from '@/components/Home'
import SaleIssue from '@/components/im/saleIssue'
import PurWarehs from '@/components/im/purWarehs'
import Inventory from '@/components/im/inventory'

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
    }
  ]
})
