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
import Pc from './components/Pc.vue';
import Ps4 from './components/Ps4.vue';
import Registro from './components/Registro.vue';
import XboxOne from './components/XboxOne.vue';
import Bucador from './components/Buscador.vue';
import ModUsuario from './components/ModUsuario.vue';


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
    name: 'Bucador',
    path: '/Productos/Bucador',
    component: Bucador
  },
  {
    name: 'ModUsuario',
    path: '/Productos/ModUsuario',
    component: ModUsuario
  }
];

const router = new VueRouter({ routes,mode: 'history'});
new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');
