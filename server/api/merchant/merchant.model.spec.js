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

var merchant = new Merchant(merchantInfo);

describe('Merchant Model', function() {

  before(function(done) {
    // Clear merchants before testing
    Merchant.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Merchant.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no merchants', function(done) {
    Merchant.find({}, function(err, merchants) {
      merchants.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate merchant', function(done) {
    merchant.save(function() {
      var merchantDup = new Merchant(merchantInfo);
      merchantDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving a merchant with no name', function(done) {
    merchant.name = '';
    merchant.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving a merchant with no email', function(done) {
    merchant.email = '';
    merchant.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving a merchant with no phone', function(done) {
    merchant.phone = '';
    merchant.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving a merchant with no vatNumber', function(done) {
    merchant.vatNumber = '';
    merchant.save(function(err) {
      should.exist(err);
      done();
    });
  });

});