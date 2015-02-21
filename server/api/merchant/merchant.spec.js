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

describe('Merchants API', function() {

  // TODO: add test that gets, changes and deletes the merchant we created
  // TODO: remove capital letters from comments when lars is not looking
  
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

/*

describe('express rest api server', function(){
  var id

  it('post object', function(done){
    superagent.post('http://localhost:3000/collections/test')
      .send({ name: 'John'
        , email: 'john@rpjs.co'
      })
      .end(function(e,res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body.length).to.eql(1)
        expect(res.body[0]._id.length).to.eql(24)
        id = res.body[0]._id
        done()
      })    
  })

  it('retrieves an object', function(done){
    superagent.get('http://localhost:3000/collections/test/'+id)
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id.length).to.eql(24)        
        expect(res.body._id).to.eql(id)        
        done()
      })
  })

  it('retrieves a collection', function(done){
    superagent.get('http://localhost:3000/collections/test')
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body.length).to.be.above(0)
        expect(res.body.map(function (item){return item._id})).to.contain(id)        
        done()
      })
  })

  it('updates an object', function(done){
    superagent.put('http://localhost:3000/collections/test/'+id)
      .send({name: 'Peter'
        , email: 'peter@yahoo.com'})
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.msg).to.eql('success')        
        done()
      })
  })
  it('checks an updated object', function(done){
    superagent.get('http://localhost:3000/collections/test/'+id)
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id.length).to.eql(24)        
        expect(res.body._id).to.eql(id)        
        expect(res.body.name).to.eql('Peter')        
        done()
      })
  })    
  
  it('removes an object', function(done){
    superagent.del('http://localhost:3000/collections/test/'+id)
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.msg).to.eql('success')    
        done()
      })
  })      
})

*/
