import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import AddOrder from '../crud_operation/AddOrder.vue'
import OrdersList from '../crud_operation/OrdersList.vue'
import ImageUpload from '../crud_operation/ImageUpload.vue'
import Product from '../products/product.vue'
import Item from '../products/item.vue'
import Help from '../views/Help.vue'
import Home from '../pages/Home.vue';
import About from '../pages/About.vue'
import Cart from '../products/cart.vue'
import Order from '../products/order.vue'
import ProductByPrice from '../products/productByPrice.vue'
// import CompleteTransaction from '../products/completeTransaction.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Product
    },
    {
      path: '/product/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Cart
    },
    {
      path: '/product/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Order
    },
    {
      path: '/product/:id',
      name: 'item',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Item
    },
    {
      path: '/product/byPrice',
      name: 'productByPrice',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProductByPrice
    },
    // {
    //   path: '/product/completeTransaction',
    //   name: 'completeTransaction',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: CompleteTransaction
    // },
    {
      path: '/addOrders',
      name: 'addOrder',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddOrder
    },
    {
      path: '/ordersList',
      name: 'ordersList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: OrdersList
    },
    {
      path: '/help',
      name: 'help',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Help
    },
    {
      path: '/imageUpload',
      name: 'imageUpload',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ImageUpload
    }
  ],
// beforeEnter: ((to, from, next) => {
//   console.log(to.path);
//   if (['/addOrders'].includes(to.path) && localStorage.getItem('user_id'))
//     next()
})

export default router
