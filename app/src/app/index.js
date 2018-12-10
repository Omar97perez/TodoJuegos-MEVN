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
import Registro from './components/Registro.vue';
import Buscador from './components/Buscador.vue';
import ModUsuario from './components/ModUsuario.vue';
import Filtro from './components/Filtro.vue';
import Videojuegos_Pc from './components/PaginasInteriores/VideoJuegos/Pc.vue';
import Videojuegos_Ps4 from './components/PaginasInteriores/VideoJuegos/Ps4.vue';
import Videojuegos_XboxOne from './components/PaginasInteriores/VideoJuegos/XboxOne.vue';


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
    name: 'Registro',
    path: '/Registro',
    component: Registro
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
  },
  {
    name: 'Videojuegos_Pc',
    path: '/Productos/Pc',
    component: Videojuegos_Pc
  },
  {
    name: 'Videojuegos_Ps4',
    path: '/Productos/Ps4',
    component: Videojuegos_Ps4
  },
  {
    name: 'Videojuegos_XboxOne',
    path: '/Productos/XboxOne',
    component: Videojuegos_XboxOne
  },
];

const router = new VueRouter({ routes,mode: 'history'});
new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');
