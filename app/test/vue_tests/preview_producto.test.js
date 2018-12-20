import { mount } from 'vue-test-utils'
import Preview_producto from "../../src/app/components/Preview_producto.vue";

describe("Preview_producto.vue", () => {

  const wrapper = mount(Preview_producto);

  it("Comprobando que se encuentra titulo del producto", () => {
    expect(wrapper.html()).toContain('<h1>{{prev.titulo}}</h1>')
  });

  it("Comprobando que se encuentra precio del producto", () => {
    expect(wrapper.html()).toContain('<h2>{{prev.precio}}€</h2>')
  });

  it("Comprobando que se encuentra descripción del producto", () => {
    expect(wrapper.html()).toContain('<p>{{prev.descripcion}}</p>')
  });

  it("Comprobando que se encuentra botón de añadir al carro", () => {
    expect(wrapper.contains('button')).toBe(true)
  });

  it("Comprobando que hay etiqueta de ShoppingCart", () => {
    expect(wrapper.contains('ShoppingCart')).toBe(true)
  });

  it("Comprobando que al añadir al carro no existan errores", () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.find('.error').exists()).toBe(false)
  });

});