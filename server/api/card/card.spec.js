'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/merchants', function() { // fix so it actually tests card

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