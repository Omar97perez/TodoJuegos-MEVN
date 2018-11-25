import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/registro',
      name: 'registro',
      component: registro
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: carrito
    },
    {
      path: '/insertar_producto',
      name: 'insertar_producto',
      component: insertar_producto
    },
    {
      path: '/Pc',
      name: 'Pc',
      component: Pc
    },
    {
      path: '/Ps4',
      name: 'Ps4',
      component: Ps4
    },
    {
      path: '/Xbox_one',
      name: 'Xbox_one',
      component: Xbox_one
    }
  ]
})
