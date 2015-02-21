'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LocationSchema = new Schema({
  name: String,
  email: String,
  address: {
    street: String,
    zipCode: String,
    city: String,
    state: String,
    country: String
  },
  formattedAddress: String,
//  loc: { type: 'Point', coordinates: [ Number ], index: '2dsphere' },
//  loc: { type: [Number], index: '2dsphere'},
  phone: {type: String, required: true},
  createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
});

var MerchantSchema = new Schema({
  created: {type: Date, default: Date.now()},
  status: Number, // 0: inactive, 1: active
  lastUpdated: Date,
  name: {type: String, required: true},
  description: String,
  email: {type: String, required: true},
  address: {
    street: String,
    zipCode: String,
    city: String,
    state: String,
    country: String
  },
  locations: [LocationSchema],
  formattedAddress: String,
//  loc: { type: 'Point', coordinates: [ Number ], index: '2dsphere' },
//  loc: { type: [Number], index: '2dsphere'},
  phone: {type: String, required: true},
  url: String,
  vatNumber: {type: String, required: true, unique: true},
  createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
});

// Validate vatNumber is not taken

/*
MerchantSchema
  .path('vatNumber')
  .validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({vatNumber: value}, function(err, merchant) {
      if(err) throw err;
      if(merchant) {
        if(self.id === merchant.id) return respond(true);
        return respond(false);
      }
      respond(true);
    });
}, 'The specified VAT number is already in use.');
*/
module.exports = mongoose.model('Merchant', MerchantSchema);