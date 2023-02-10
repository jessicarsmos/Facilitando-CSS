import readline from 'readline';
import chalk from 'chalk';

const rlView = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Vetor que irá acumular as propriedades
let propriedadesCSS = [];

console.log('Digite as propriedades CSS (ou "SAIR" para encerrar):');

rlView.on('line', (input) => {
  if (input.toLocaleLowerCase() === 'sair') {
    rlView.close();
    return;
  }

  propriedadesCSS.push(input);
});

rlView.on('close', () => {
  propriedadesCSS.sort();

  console.log('Propriedades CSS ordenadas de A-Z:');
  propriedadesCSS.forEach((property) => console.log(chalk.green(property)));
});
