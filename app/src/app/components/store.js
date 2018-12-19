import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [],
    inCart: [],
    preview: '',
    token: localStorage.getItem('token') || null,
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
    preview: state => state.preview,
    loggedIn(state){
      return state.token != null
    }
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    ADD_PREVIEW(state, invId) { state.preview = invId },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
    retrieveToken(state, token) {
      state.token = token
    }
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    addToPrev(context, invId) { context.commit('ADD_PREVIEW', invId); },
    retrieveToken(context, credentials){
      return new Promise((resolve, reject) => {
        axios.post('/users/authenticate', {
          email: credentials.email,
          password: credentials.password
        })
        .then(response => {
          const token = response.data.token
          localStorage.setItem('token', token)
          context.commit('retrieveToken',token)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/users/register', {
          name: data.name,
          surname: data.surname,
          email: data.email,
          birthdate: data.birthdate,
          genre: data.genre,
          password: data.password
        })
        .then(response => {
          console.log(response)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    }

  },
});
