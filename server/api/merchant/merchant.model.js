'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MerchantSchema = new Schema({
  created: {type: Date, default: Date.now()},
  status: Number, // 0: inactive, 1: active
  lastUpdated: Date,
  name: {type: String, required: true},
  description: String,
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
  // location: { type: [Number], index: '2dsphere'},
  phone: String,
  url: String,
  vatNumber: String,
  createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Merchant', MerchantSchema);