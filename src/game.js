const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/game', express.static(path.join(__dirname, '..', 'game')));

module.exports = router;