const expect = require('chai').expect
const request = require('superagent')

describe('Testing API REST', function() {
  it('Conexión con el servidor', function(done) {
    request
    .get('http://localhost:3000/')
    .end(function(res) {
      expect(res.status).to.equal(200);
      done();
    })
  })
})