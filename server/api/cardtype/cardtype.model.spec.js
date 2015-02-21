'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Cardtype = require('./cardtype.model');

// var cardtypeInfo = {
// };

// var cardtype = new Cardtype(cardtypeInfo);

describe('Cardtype Model', function() {

  before(function(done) {
    // Clear cardtypes before testing
    Cardtype.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Cardtype.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no cardtypes', function(done) {
    Cardtype.find({}, function(err, cardtypes) {
      cardtypes.should.have.length(0);
      done();
    });
  });

});