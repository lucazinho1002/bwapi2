const express = require('express');
const router = express.Router();

// Lista de administradores diretamente no código
const adminsList = [
    "Lucazinho1002"
];

// Rota que retorna a lista de admins em formato texto (um por linha)
router.get('/v1/login/admins.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(adminsList.join('\n'));
});

module.exports = router;