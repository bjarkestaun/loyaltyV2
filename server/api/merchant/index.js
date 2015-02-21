'use strict';

var express = require('express');
var merchantController = require('./merchant.controller');
var cardtypeController = require('../cardtype/cardtype.controller');
var cardController = require('../card/card.controller');

var router = express.Router();

router.get('/', merchantController.index);
router.get('/:id', merchantController.show);
router.get('/:id/cardtypes', cardtypeController.index);
router.get('/:id/cardtypes/:cardtypeId', cardtypeController.show);
router.get('/:id/cards', cardController.index);
router.get('/:id/cards/:cardId', cardController.show);
router.post('/', merchantController.create);
router.put('/:id', merchantController.update);
router.patch('/:id', merchantController.update);
router.delete('/:id', merchantController.destroy);

module.exports = router;