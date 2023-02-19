/**
 * Exemplo 1 de importação: importando uma função de forma classica
 */
// const funcoesImportadas = require('./funcoes');

// console.log(`Olá! Você tem ${funcoesImportadas.calculaIdade(2023, 1996)} anos.`);

//OBS: tem que estar comentado para a debaixo funcionar. Só funciona com o exemplo 1 do arquivo funcoes.ts descomentado

/**
 *  Exemplo 2-a de importação: importando TUDO de um arquivo função de forma moderna ES6 
*/

// import * as Importados from './funcoes';

// console.log(`A mulher mais bonita do mundo é a ${Importados.mulherMaisBonita}`);

// console.log(`Olá! Você tem ${Importados.calculaIdade(2023, 1996)} anos.`);
// OBS: tem que estar comentado para a debaixo e a de cima funcionarem. Funciona com o exemplo 2  do arquivo funcoes.ts descomentado

/**
 *  Exemplo 2-b de importação: importando algumas coisas de um arquivo de forma moderna ES6 
*/

// import { mulherMaisBonita , calculaIdade } from './funcoes';

// console.log(`A mulher mais bonita do mundo é a ${mulherMaisBonita}`);

// console.log(`Olá! Você tem ${calculaIdade(2023, 1996)} anos.`);

// OBS: tem que estar comentado para as de cima e a de baixo funcionarem. Só Funciona com o exemplo 2 do arquivo funcoes.ts descomentado

/**
 * Exemplo 3 de importação: importando tudo de um arquivo de forma moderna ES6 usando o DEFAULT
 */

import Importados from './funcoes';

console.log(`A mulher mais bonita do mundo é a ${Importados.mulherMaisBonita}`);

console.log(`Olá! Você tem ${Importados.calculaIdade(2023, 1996)} anos.`);

// OBS: tem que estar comentado para as de cima funcionarem. Só Funciona com o exemplo 3 do arquivo funcoes.ts descomentado