import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'/goods',
    children:[
      {
        path:'/goods',
        name:'goods',
        component:() => import ('../views/Goods.vue') 
      },
      {
        path:'/goods_detail/:id',
        name:'goods_detail',
        component:() => import ('../views/GoodsDetail.vue'),
        props: true
      },
      {
        path:'/order_pay/:id',
        name:'order_pay',
        component:() => import ('../views/OrderPay.vue'),
        props: true
      },
      {
        path:'/order_pay_good/:id',
        name:'order_pay_good',
        component:() => import ('../views/OrderPayGood.vue'),
        props: true
      },
      {
        path:'/order_list',
        name:'order_list',
        component:() => import ('../views/OrderList.vue'),
        props: true
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
