const chai          = require("chai");
const assert        = chai.assert;
const producto_js  = require("../../src/routes/Producto");

describe("Pruebas sobre Producto.js", function(){
    it("comprobando que existe método get sobre /", function(){
        assert.equal(producto_js.stack[0].route.path, "/");
        assert.equal(producto_js.stack[0].route.methods.get, true);
    });
    it("comprobando que existe método post sobre /", function(){
        assert.equal(producto_js.stack[2].route.path, "/");
        assert.equal(producto_js.stack[2].route.methods.post, true);
    });
    it("comprobando que existe método get sobre /:id", function(){
        assert.equal(producto_js.stack[1].route.path, "/:id");
        assert.equal(producto_js.stack[1].route.methods.get, true);
    });
    it("comprobando que existe método put sobre /:id", function(){
        assert.equal(producto_js.stack[3].route.path, "/:id");
        assert.equal(producto_js.stack[3].route.methods.put, true);
    });
    it("comprobando que existe método delete sobre /:id", function(){
        assert.equal(producto_js.stack[4].route.path, "/:id");
        assert.equal(producto_js.stack[4].route.methods.delete, true);
    });
});