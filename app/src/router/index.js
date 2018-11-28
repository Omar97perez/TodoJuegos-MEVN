import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import registro from '@/components/registro'
import login from '@/components/login'
import carrito from '@/components/carrito'
import insertarProducto from '@/components/insertarProducto'
import Pc from '@/components/Pc'
import Ps4 from '@/components/Ps4'
import XboxOne from '@/components/XboxOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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
      path: '/insertarProducto',
      name: 'insertarProducto',
      component: insertarProducto
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
      path: '/XboxOne',
      name: 'XboxOne',
      component: XboxOne
    }
  ]
})
