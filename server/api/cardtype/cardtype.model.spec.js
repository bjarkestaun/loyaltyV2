'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var CardType = require('./cardtype.model');

// var cardtypeInfo = {
// };

// var cardtype = new Cardtype(cardtypeInfo);

describe('CardType Model', function() {

  before(function(done) {
    // Clear cardtypes before testing
    CardType.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    CardType.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no cardtypes', function(done) {
    CardType.find({}, function(err, cardTypes) {
      cardTypes.should.have.length(0);
      done();
    });
  });

});