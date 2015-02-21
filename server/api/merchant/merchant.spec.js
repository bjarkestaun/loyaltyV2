'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Merchant = require('./merchant.model');

var merchantInfo = {
  status: 1,
  lastUpdated: Date.now(),
  name: 'test merchant',
  description: 'test description',
  email: 'test@test.com',
  address: {
    street: 'test road 1',
    zipCode: '11111',
    city: 'test city',
    state: 'test state',
    country: 'test country'
  },
  formattedAddress: 'formatted test address',
//  loc: [21, 12],
  phone: '+4511223344',
  url: 'http://www.test.com',
  vatNumber: '12345678'
};

var merchant_id = '';

var merchant = new Merchant(merchantInfo);

describe('GET /api/merchants', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/merchants')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

});

describe('POST /api/merchants', function() {

  it('should create new merchant object', function(done) {
    request(app)
      .post('/api/merchants')
      .send(merchant)
      .end(function(err, res) {
        if (err) return done(err);
        res.should.have.status(201);
        merchant_id = res.body._id;
        done();
      });
  });

});

describe('DELETE /api/merchants/:merchant_id', function() {

  it('should delete the merchant we just created', function(done) {
    request(app)
      .delete('/api/merchants/' + merchant_id)
      .expect(204)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
  
});
