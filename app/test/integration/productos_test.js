const chai          = require("chai");
const assert        = chai.assert;
const productos_js  = require("../../src/models/Productos.js");

describe("Pruebas sobre Productos.js", function(){
    it("comprobando existe objeto Productos", function(){
        assert.typeOf(productos_js.schema.obj, "object");
    });
    it("comprobando que campo id es de tipo Number", function(){
        assert.equal(productos_js.schema.paths.id.instance, "Number");
    });
    it("comprobando que campo titulo es de tipo String", function(){
        assert.equal(productos_js.schema.paths.titulo.instance, "String");
    });
    it("comprobando que campo foto es de tipo String", function(){
        assert.equal(productos_js.schema.paths.foto.instance, "String");
    });
    it("comprobando que campo descripcion es de tipo String", function(){
        assert.equal(productos_js.schema.paths.descripcion.instance, "String");
    });
    it("comprobando que campo tipo es de tipo String", function(){
        assert.equal(productos_js.schema.paths.tipo.instance, "String");
    });
    it("comprobando que campo plataforma es de tipo String", function(){
        assert.equal(productos_js.schema.paths.plataforma.instance, "String");
    });
    it("comprobando que campo categoria es de tipo String", function(){
        assert.equal(productos_js.schema.paths.categoria.instance, "String");
    });
    it("comprobando que campo precio es de tipo Number", function(){
        assert.equal(productos_js.schema.paths.precio.instance, "Number");
    });
    it("comprobando que campo oferta es de tipo Number", function(){
        assert.equal(productos_js.schema.paths.oferta.instance, "Number");
    });
});