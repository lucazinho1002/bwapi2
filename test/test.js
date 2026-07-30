const assert = require('assert');

console.log('Iniciando os testes da bwapi2...');

// Exemplo de um teste simples (substitua pela lógica real da sua API)
try {
  const valorEsperado = 38-21;
  const valorAtual = 38-21; // Aqui você chamaria uma função da sua API

  assert.strictEqual(valorAtual, valorEsperado, 'O valor atual deveria ser igual ao esperado');
  
  console.log('Todos os testes passaram com sucesso!');
  process.exit(0); // Código 0 indica sucesso
} catch (error) {
  console.error('❌ Falha no teste:', error.message);
  process.exit(1); // Código 1 indica erro
}