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
import Videojuegos_Switch from './components/PaginasInteriores/VideoJuegos/Switch.vue';
import Accesorios_Pc from './components/PaginasInteriores/Accesorios/Pc.vue';
import Accesorios_Ps4 from './components/PaginasInteriores/Accesorios/Ps4.vue';
import Accesorios_XboxOne from './components/PaginasInteriores/Accesorios/XboxOne.vue';
import Accesorios_Switch from './components/PaginasInteriores/Accesorios/Switch.vue';
import Consolas from './components/PaginasInteriores/Consola/Consolas.vue';
import Merchandising from './components/PaginasInteriores/Merchandising/Merchandising.vue';
import Electronica from './components/PaginasInteriores/Electronica/Electronica.vue';


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
  {
    name: 'Videojuegos_Switch',
    path: '/Productos/Switch',
    component: Videojuegos_Switch
  },
  {
    name: 'Accesorios_Pc',
    path: '/Accesorios/Pc',
    component: Accesorios_Pc
  },
  {
    name: 'Accesorios_Ps4',
    path: '/Accesorios/Ps4',
    component: Accesorios_Ps4
  },
  {
    name: 'Accesorios_XboxOne',
    path: '/Accesorios/XboxOne',
    component: Accesorios_XboxOne
  },
  {
    name: 'Accesorios_Switch',
    path: '/Accesorios/Switch',
    component: Accesorios_Switch
  },
  {
    name: 'Consolas',
    path: '/Consolas',
    component: Consolas
  },
  {
    name: 'Merchandising',
    path: '/Merchandising',
    component: Merchandising
  },
  {
    name: 'Electronica',
    path: '/Electronica',
    component: Electronica
  },
];

const router = new VueRouter({ routes});
new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');
