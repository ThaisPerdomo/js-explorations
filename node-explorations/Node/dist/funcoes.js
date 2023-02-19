"use strict";
/**
 * Exemplo: exportando uma funcao de forma classica
 */
Object.defineProperty(exports, "__esModule", { value: true });
// function calculaIdade (anoAtual: number, anoNascimento: number): number {
//     return anoAtual - anoNascimento;
// }
// module.exports.calculaIdade = calculaIdade;
// OBS: tem que estar comentado para a de baixo funcionar 
/***
 * Exemplo 2: exportando funcao ou variável e forma moderna ES6
*/
// export const mulherMaisBonita = 'Thais';
// export function calculaIdade (anoAtual: number, anoNascimento: number): number {
//     return anoAtual - anoNascimento;
// };
/***
 * Exemplo 3: exportando funcao ou variável e forma moderna ES6  usando default
*/
// O default faz uma importação única, ou seja, você não pode importar mais outra coisa além do que está no default
const mulherMaisBonita = 'Thais';
function calculaIdade(anoAtual, anoNascimento) {
    return anoAtual - anoNascimento;
}
;
exports.default = {
    mulherMaisBonita: mulherMaisBonita,
    calculaIdade: calculaIdade
}; // OBS: isso pode ser simplificado assim: export default{ mulherMaisBonita, calculaIdade };
