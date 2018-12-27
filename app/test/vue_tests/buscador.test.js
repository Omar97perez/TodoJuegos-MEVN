import { mount } from 'vue-test-utils'
import Buscador from "../../src/app/components/Buscador.vue";

describe("Buscador.vue", () => {

  const wrapper = mount(Buscador);

  it("Comprobando que se encuentra el titulo", () => {
    expect(wrapper.html()).toContain('<strong><p class="titulo-footer">Búsqueda de productos</p></strong>')
  });

  it("Comprobando que hay classe div: form-group", () => {
    expect(wrapper.html()).toContain('<div class="form-group">')
  });

  it("Comprobando que existe etiqueta select y sus respectivas opciones", () => {
    expect(wrapper.contains('select')).toBe(true)
    expect(wrapper.findAll('option').length).toEqual(5)
  });

  /*it("Comprobando que existe template videojuego y sus respectivos label", () => {
    console.log(wrapper.classes())
  });*/

});