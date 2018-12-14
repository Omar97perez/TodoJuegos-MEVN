const chai          = require("chai");
const assert        = chai.assert;
const request       = require("supertest")("../../src/authentication/backend/users/users-controller");
const user_model    = require("../../src/authentication/backend/users/user-model");

describe("Pruebas sobre users-controller.js", function(){
    describe("Pruebas sobre get", function(){
        it("comprobando correcto funcionamiento de /", function(){
            request.get("/").expect(200);
        });
        it("comprobando correcto funcionamiento de /:id", function(){
            request.get("/:id").expect(200);
        });
        it("comprobando correcto funcionamiento de /current", function(){
            request.get("/current").expect(200);
        });
    });
    describe("Pruebas sobre post", function(){
        it("comprobando correcto funcionamiento de /authenticate", function(){
            request.post("/authenticate").expect(200);
        });
        it("comprobando correcto funcionamiento de /register", function(){
            request.get("/register").expect(200);
        });
    });
    describe("Prueba sobre put", function(){
        it("comprobando correcto funcionamiento de /:id", function(){
            request.put("/:id").expect(200);
        });
    });
    describe("Prueba sobre delete", function(){
        it("comprobando correcto funcionamiento de /:id", function(){
            request.delete("/:id").expect(200);
        });
    });
});

describe("Pruebas sobre user-model.js", function(){
    it("comprobando existe objeto userSchema", function(){
        assert.typeOf(user_model.schema.obj, "object");
    });
    // it("comprobando que campo hash es de tipo String", function(){
    //     assert.equal(user_model.schema.paths.hash.instance, "String");
    // });
    it("comprobando que campo name es de tipo String", function(){
        assert.equal(user_model.schema.paths.name.instance, "String");
    });
    it("comprobando que campo surname es de tipo String", function(){
        assert.equal(user_model.schema.paths.surname.instance, "String");
    });
    it("comprobando que campo email es de tipo String", function(){
        assert.equal(user_model.schema.paths.email.instance, "String");
    });
    it("comprobando que campo birthdate es de tipo Date", function(){
        assert.equal(user_model.schema.paths.birthdate.instance, "Date");
    });
    it("comprobando que campo genre es de tipo String", function(){
        assert.equal(user_model.schema.paths.genre.instance, "String");
    });
    it("comprobando que campo createdDate es de tipo Date", function(){
        assert.equal(user_model.schema.paths.createdDate.instance, "Date");
    });
});
