import { mount } from 'vue-test-utils'
import Login from "../../src/app/components/Login.vue";

describe("Login.vue", () => {

  const wrapper = mount(Login);

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

  it("Comprobando que hay etiqueta de formulario", () => {
    expect(wrapper.contains('form')).toBe(true)
  });

  it("Comprobando la introducción de email y que no tenga errores", () => {
    wrapper.setData({ email: 'test@test.com' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de contraseña y que no tenga errores", () => {
    wrapper.setData({ password: '1234567' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando router-link", () => {
    const component = wrapper.find('router-link').vnode.data.attrs.to.name
    var fs = require('fs');
    expect(fs.existsSync(process.cwd()+'/src/app/components/'+component+'.vue')).toBe(true)
  });

  it("Comprobando que al loguearse no existan errores", () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

});