import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
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
import Logout from './components/Logout.vue';
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
import Preview from './components/Preview_producto.vue';


const routes = [
  {
    name: 'Inicio',
    path: '/',
    component: Inicio,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Productos',
    path: '/Productos',
    component: Productos,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Carrito',
    path: '/Usuario/Carrito',
    component: Carrito,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Login',
    path: '/Login',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Logout',
    path: '/Logout',
    component: Logout,
  },
  {
    name: 'Registro',
    path: '/Registro',
    component: Registro,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Buscador',
    path: '/Productos/Buscador',
    component: Buscador,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'ModUsuario',
    path: '/Usuario/ModUsuario',
    component: ModUsuario,
  },
  {
    name: 'Filtro',
    path: '/Productos/Filtro',
    component: Filtro,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Videojuegos_Pc',
    path: '/Productos/Pc',
    component: Videojuegos_Pc,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Videojuegos_Ps4',
    path: '/Productos/Ps4',
    component: Videojuegos_Ps4,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Videojuegos_XboxOne',
    path: '/Productos/XboxOne',
    component: Videojuegos_XboxOne,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Videojuegos_Switch',
    path: '/Productos/Switch',
    component: Videojuegos_Switch,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Accesorios_Pc',
    path: '/Accesorios/Pc',
    component: Accesorios_Pc,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Accesorios_Ps4',
    path: '/Accesorios/Ps4',
    component: Accesorios_Ps4,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Accesorios_XboxOne',
    path: '/Accesorios/XboxOne',
    component: Accesorios_XboxOne,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Accesorios_Switch',
    path: '/Accesorios/Switch',
    component: Accesorios_Switch,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Consolas',
    path: '/Consolas',
    component: Consolas,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Merchandising',
    path: '/Merchandising',
    component: Merchandising,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Electronica',
    path: '/Electronica',
    component: Electronica,
    meta: {
      isPublic: true
    }
  },
  {
    name: 'Preview',
    path: 'Porducto',
    component: Preview
  },
];

const router = new VueRouter({ routes});

router.beforeResolve((to, from, next) => {
  if (!to.matched.some(record => record.meta.isPublic) && localStorage.getItem("token") == null) {
      // next();
      next('/Login');
  } else {
   // console.log("adsfadsf")
    next();
  }
})
new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');
