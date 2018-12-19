import { mount } from 'vue-test-utils'
import Buscador from "../../src/app/components/Buscador.vue";

describe("Buscador.vue", () => {

  const wrapper = mount(Buscador);

  it("Comprobando que se encuentra el titulo H1", () => {
    expect(wrapper.html()).toContain('<h1 class="text-center">Búsqueda</h1>')
  });

  it("Comprobando etiqueta responsive de titulo", () => {
    expect(wrapper.html()).toContain('<div class="col-md-12">')
  });

});