const express = require('express');
const router = express.Router();

router.get('/v1/login/names.txt', (req, res) => {
    const conteudo = 'Lucazinho1002';
    res.type('text/plain').send(conteudo);
});

module.exports = router;