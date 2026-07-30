const express = require('express');
const path = require('path');
const router = express.Router();

// Volta uma pasta (sai de 'src') e entra na pasta 'webui'
router.use('/webui', express.static(path.join(__dirname, '..', 'webui')));

module.exports = router;