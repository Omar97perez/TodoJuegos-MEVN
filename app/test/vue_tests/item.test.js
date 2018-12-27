import { mount } from 'vue-test-utils'
import item from "../../src/app/components/Item.vue"

describe("Item.vue", () => {

  const wrapper = mount(item);

  it("Comprobando responsive", () => {
    expect(wrapper.find('div').classes()).toContain('col-sm-3')
  });

  it("Comprobando que existe clase thumb-wrapper", () => {
    expect(wrapper.findAll('div').at(1).classes()).toContain('thumb-wrapper')
  });

  it("Comprobando que existe clase img-box", () => {
    expect(wrapper.findAll('div').at(2).classes()).toContain('img-box')
  });

  it("Comprobando router-link", () => {
    const component = wrapper.find('router-link').vnode.data.attrs.to.name
    var fs = require('fs');
    expect(fs.existsSync(process.cwd()+'/src/app/components/'+component+'_producto'+'.vue')).toBe(true)
  });

  it("Comprobando que se encuentra etiqueta figure", () => {
    expect(wrapper.contains('figure')).toBe(true)
  });

  it("Comprobando que se encuentra etiqueta img y que tiene sus atributos", () => {
    expect(wrapper.contains('img')).toBe(true)
    expect(wrapper.find('img').vnode.data.attrs).toEqual({"alt": undefined, "src": undefined})
    expect(wrapper.find('img').classes()).toContain('img-responsive')
    expect(wrapper.find('img').classes()).toContain('img-fluid')
    expect(wrapper.find('img').classes()).toContain('img-prev')
  });
  
  /*it("Comprobando click sobre img-box", () => {
    wrapper.find('img').trigger('click')
  });*/

  it("Comprobando que se encuentra clase thumb-content", () => {
    expect(wrapper.findAll('div').at(3).classes()).toContain('thumb-content')
  });

  it("Comprobando que existe etiqueta h4 y si tiene contenido", () => {
    expect(wrapper.contains('h4')).toBe(true)
    expect(wrapper.find('h4').vnode.context.$options.name).toContain(item.name)
  });

  it("Comprobando que existe item-price", () => {
    expect(wrapper.find('p').classes()).toContain('item-price')
  });

  it("Comprobando que existe etiqueta strike y si tiene contenido", () => {
    expect(wrapper.contains('strike')).toBe(true)
    const wrapper_2 = mount(item, {
      props:{
        price: '34'
      }
    })
    expect(wrapper_2.find('strike').vnode.context.$options.props.price.type).toEqual('34')
  });

  it("Comprobando que se encuentra clase star-rating", () => {
    expect(wrapper.findAll('div').at(4).classes()).toContain('star-rating')
  });

  it("Comprobando que se encuentra clase list-inline", () => {
    expect(wrapper.find('ul').classes()).toContain('list-inline')
  });

  it("Comprobando que existen la cantidad apropiada de etiquetas li", () => {
    expect(wrapper.findAll('li').length).toEqual(5)
  });

  it("Comprobando que existe enlace Add to Cart y sus correspondientes atributos", () => {
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes()).toEqual({"class": "btn btn-primary", "href": "#"})
  });

  /*it("Comprobando click sobre add to cart", () => {
    wrapper.find('a').trigger('click')
  });*/
  
});