import { mount } from 'vue-test-utils'
import Registro from "../../src/app/components/Registro.vue";

describe("Registro.vue", () => {

  const wrapper = mount(Registro);

  it("Comprobando que se encuentra el titulo", () => {
    expect(wrapper.html()).toContain('<strong><p class="titulo-footer">Registro</p></strong>')
  });

  it("Comprobando que se encuentra campo nombre de formulario", () => {
    expect(wrapper.html()).toContain('id="name"')
  });

  it("Comprobando que se encuentra campo apellidos de formulario", () => {
    expect(wrapper.html()).toContain('id="surname"')
  });

  it("Comprobando que se encuentra campo fecha de nacimiento de formulario", () => {
    expect(wrapper.html()).toContain('id="birthdate"')
  });

  it("Comprobando que se encuentra campo email de formulario", () => {
    expect(wrapper.html()).toContain('id="email"')
  });

  it("Comprobando que se encuentra campo contraseña de formulario", () => {
    expect(wrapper.html()).toContain('id="password"')
  });

  it("Comprobando que se encuentra opción masculino de genero de formulario", () => {
    expect(wrapper.html()).toContain('id="genero" value="masculino"')
  });

  it("Comprobando que se encuentra opción femenino de genero de formulario", () => {
    expect(wrapper.html()).toContain('id="genero" value="femenino"')
  });

  it("Comprobando que se encuentra opción otro de genero de formulario", () => {
    expect(wrapper.html()).toContain('id="genero" value="otro"')
  });

  it("Comprobando que se encuentra botón de registrarse", () => {
    expect(wrapper.contains('button')).toBe(true)
  });

  it("Comprobando que hay etiqueta de formulario", () => {
    expect(wrapper.contains('form')).toBe(true)
  });

  it("Comprobando la introducción de nombre y que no tenga errores", () => {
    wrapper.setData({ name: 'test' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de apellidos y que no tenga errores", () => {
    wrapper.setData({ surname: 'test_1 test_2' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de email y que no tenga errores", () => {
    wrapper.setData({ email: 'test@test.com' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de contraseña y que no tenga errores", () => {
    wrapper.setData({ password: '1234567' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de fecha de nacimiento y que no tenga errores", () => {
    wrapper.setData({ birthdate: new Date("1997-03-25") })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando la introducción de genero de nacimiento y que no tenga errores", () => {
    wrapper.setData({ genre: 'otro' })
    expect(wrapper.find('.error').exists()).toBe(false)
  });

  it("Comprobando que al registrarse no existan errores", () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

});