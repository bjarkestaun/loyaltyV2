'use strict';

var _ = require('lodash');
var CardType = require('./cardtype.model');

// Get list of cardtypes
exports.index = function(req, res) {
  CardType.find(function (err, cardtypes) {
    if(err) { return handleError(res, err); }
    return res.json(200, cardtypes);
  });
};

// Get a single cardtype
exports.show = function(req, res) {
  CardType.findById(req.params.id, function (err, cardtype) {
    if(err) { return handleError(res, err); }
    if(!cardtype) { return res.send(404); }
    return res.json(cardtype);
  });
};

// Creates a new cardtype in the DB.
exports.create = function(req, res) {
  CardType.create(req.body, function(err, cardtype) {
    if(err) { return handleError(res, err); }
    return res.json(201, cardtype);
  });
};

// Updates an existing cardtype in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  CardType.findById(req.params.id, function (err, cardtype) {
    if (err) { return handleError(res, err); }
    if(!cardtype) { return res.send(404); }
    var updated = _.merge(cardtype, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cardtype);
    });
  });
};

// Deletes a cardtype from the DB.
exports.destroy = function(req, res) {
  CardType.findById(req.params.id, function (err, cardtype) {
    if(err) { return handleError(res, err); }
    if(!cardtype) { return res.send(404); }
    cardtype.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}