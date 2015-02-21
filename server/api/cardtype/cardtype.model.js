'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventTypeSchema = new Schema({
  eventType: {type: String, required: true},
  eventPoints: {type: Number, required: true}
});

var CardTypeSchema = new Schema({
  created: {type: Date, default: Date.now()},
  status: Number, // 0: inactive, 1: active
  lastUpdated: Date,
  name: {type: String, required: true},
  description: String,
  createdByUser_id: {type: Schema.Types.ObjectId, ref: 'User'},
  merchant_id: {type: Schema.Types.ObjectId, ref: 'Merchant'},
  maxPoints: Number,
  duration: Number,
  eventTypes: [eventTypeSchema]
});

module.exports = mongoose.model('Cardtype', CardtypeSchema);