import { mount } from 'vue-test-utils'
import Buscador from "../../src/app/components/Login.vue";

describe("Login.vue", () => {

  const wrapper = mount(Buscador);

  it("Comprobando que se encuentra el titulo", () => {
    expect(wrapper.html()).toContain('<strong><p class="titulo-footer">Inicio Sesion</p></strong>')
  });

  it("Comprobando que se encuentra campo email de formulario", () => {
    expect(wrapper.html()).toContain('<input type="email"')
  });

  it("Comprobando que se encuentra campo password de formulario", () => {
    expect(wrapper.html()).toContain('<input type="password"')
  });

  it("Comprobando que se encuentra opción de registro", () => {
    expect(wrapper.html()).toContain('<p>Si no tienes cuenta aún, puedes')
  });

  it("Comprobando que se encuentra botón de enviar", () => {
    expect(wrapper.contains('button')).toBe(true)
  });

});