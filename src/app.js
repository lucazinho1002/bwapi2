const express = require('express');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

// Importa as rotas
const gameRoutes = require('./game');
const loginRoutes = require('./login');
const webuiRoutes = require('./webui');
const adminRoutes = require('./admin');

// Aplica as rotas no app
app.use(gameRoutes);
app.use(loginRoutes);
app.use(webuiRoutes); 
app.use(adminRoutes);

// Inicia o servidor em 0.0.0.0:8080
app.listen(PORT, HOST, () => {
    console.log(`API iniciada em http://${HOST}:${PORT}`);
});