const router = require('express').Router();
const GameController = require('../controllers/Game.controller');

router.post('/check', GameController.checkAnswers);

module.exports = router; 