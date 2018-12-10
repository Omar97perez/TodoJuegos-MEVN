import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import store from './components/store';
import Productos from './components/Administrador_Productos.vue';
import Carrito from './components/Carrito.vue';
import Inicio from './components/Inicio.vue';
import Login from './components/Login.vue';
import Pc from './components/PaginasInteriores/VideoJuegos/Pc.vue';
import Ps4 from './components/PaginasInteriores/VideoJuegos/Ps4.vue';
import Registro from './components/Registro.vue';
import XboxOne from './components/PaginasInteriores/VideoJuegos/XboxOne.vue';
import Buscador from './components/Buscador.vue';
import ModUsuario from './components/ModUsuario.vue';
import Filtro from './components/Filtro.vue';


const routes = [
  {
    name: 'Inicio',
    path: '/',
    component: Inicio
  },
  {
    name: 'Productos',
    path: '/Productos',
    component: Productos
  },
  {
    name: 'Carrito',
    path: '/Usuario/Carrito',
    component: Carrito
  },
  {
    name: 'Login',
    path: '/Login',
    component: Login
  },
  {
    name: 'Pc',
    path: '/Productos/Pc',
    component: Pc
  },
  {
    name: 'Ps4',
    path: '/Productos/Ps4',
    component: Ps4
  },
  {
    name: 'Registro',
    path: '/Registro',
    component: Registro
  },
  {
    name: 'XboxOne',
    path: '/Productos/XboxOne',
    component: XboxOne
  },
  {
    name: 'Buscador',
    path: '/Productos/Buscador',
    component: Buscador
  },
  {
    name: 'ModUsuario',
    path: '/Usuario/ModUsuario',
    component: ModUsuario
  },
  {
    name: 'Filtro',
    path: '/Productos/Filtro',
    component: Filtro
  }
];

const router = new VueRouter({ routes,mode: 'history'});
new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');
