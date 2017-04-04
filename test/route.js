let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = require("chai").expect;

let server = require('../index');

chai.use(chaiHttp);

describe("route", function() {
  describe('/GET /api/attractions', () => {
      it('it should GET all the attractions', (done) => {
        chai.request(server)
            .get('/api/attractions')
            .end((err, res) => {
              expect(res.status).to.equal(200);
              expect(res.body).to.be.an('array');
              expect(res.body.length).to.equal(2);

              done();
            });
      });
  });
  describe('/GET /api/attractions/:id', () => {
      it('it should GET attractions with id 1', (done) => {
        chai.request(server)
            .get('/api/attractions/1')
            .end((err, res) => {
              expect(res.status).to.equal(200);
              expect(res.body).to.be.an('object');
              expect(res.body).to.include.keys('name');
              expect(res.body).to.deep.include({ "name": "PÓRTICO"});

              done();
            });
      });
  });
});
