const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const router = express.Router();

// Configura o multer para salvar temporariamente os arquivos enviados
const upload = multer({ dest: 'uploads/' });

// Serve os arquivos estáticos do jogo
router.use('/game', express.static(path.join(__dirname, '..', 'game')));

// Rota POST para salvar o mapa automaticamente direto pelo site
router.post('/game/save-map', upload.single('mapfile'), (req, res) => {
    try {
        const newId = req.body.id;
        const updatedDatabaseJson = req.body.database;
        const uploadedFile = req.file;

        if (!newId || !uploadedFile || !updatedDatabaseJson) {
            return res.status(400).send('Dados incompletos.');
        }

        // Caminho correto até a pasta 'game/games' e 'database.json' com base na estrutura atual
        const gamesDir = path.join(__dirname, '..', 'game', 'games');
        const exampleDir = path.join(gamesDir, 'exemplo');
        const newGameDir = path.join(gamesDir, String(newId));

        // 1. Copia a pasta 'exemplo' inteira para a nova pasta com o ID criado
        if (fs.existsSync(exampleDir)) {
            fs.cpSync(exampleDir, newGameDir, { recursive: true });
        } else {
            fs.mkdirSync(newGameDir, { recursive: true });
        }

        // 2. Move o arquivo .glb gerado para dentro da nova pasta como 'map.glb'
        const targetMapPath = path.join(newGameDir, 'map.glb');
        fs.renameSync(uploadedFile.path, targetMapPath);

        // 3. Atualiza o database.json na pasta 'game'
        const dbPath = path.join(__dirname, '..', 'game', 'database.json');
        fs.writeFileSync(dbPath, updatedDatabaseJson, 'utf8');

        console.log(`[Server] Novo mapa ID ${newId} salvo com sucesso!`);
        res.status(200).send('Salvo com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar mapa:', error);
        res.status(500).send('Erro interno ao processar o mapa.');
    }
});

module.exports = router;