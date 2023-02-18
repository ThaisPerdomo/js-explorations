/*****
 * Importando coisas do HTML com typescript e fazendo uma funcao de soma
 */
// Aqui eu estou importando o arquivo HTML e dizendo que ele é do tipo HTMLDocument
// O mesmo vale para o botão com o tipo HTMLButtonElement e o resultado com o tipo HTMLDivElement

var numero1 = document.getElementById('numero1') as HTMLInputElement;
var numero2 = document.getElementById('numero2') as HTMLInputElement;
var botao = document.getElementById('somar') as HTMLButtonElement; 
var resultado = document.getElementById('resultado') as HTMLDivElement;

function calcula(n1 : number , n2 : number) {
    return n1 + n2;
}
// Aqui eu estou dizendo que quando o botão for clicado, ele vai pegar o valor dos inputs e vai chamar a função soma
// Neste caso, tive que usar o toString() para converter o resultado em string, pois o resultado é um number e o innerHTML só aceita string
// Além disso, eu tive que converter os valores dos inputs para number para fazer o cálculo, pois eles são string
botao.addEventListener("click", function () {
    resultado.innerHTML = calcula(+numero1.value, +numero2.value).toString();
});

/***
 * EXEMPLO 2: Tipagem em arrays
 */

// Neste exemplo, eu estou dizendo que o array aleatoriedades pode ter qualquer tipo de dado; por isso o push abaixo funciona
let aleatoriedades: any = ['João', 'barco'];

aleatoriedades.push(19);

/****
 * Exemplo 3: Tipagem em funções anônimas
 */
// Aqui foi feito um array sem tipagem, 
// Abaixo, uma função anônima que verifica se o tipo do dado é string e se for, ele converte para maiúsculo. 
// Se não tiver o if, o typescript vai dar erro, pois ele não sabe se o dado é string ou não e a função toUpperCase() só funciona em string
let nomes = ['João', 'Maria', 'José'];

nomes.forEach(function (nome) {
    if (typeof nome === 'string'){
        console.log(nome.toUpperCase());
    } else{
        console.log(nome);
    }
});
/**
 * Exemplo 3: Tipagem em propriedades opcionais
 * */
// O exemplo abaixo, tem uma função que recebe um objeto com duas propriedades: nome e emails
// A propriedade emails é opcional, pois tem o ? depois do nome
// Se o valor de emails for 0, ele vai retornar uma mensagem dizendo que não tem emails não lidos, sem chamar o valor de emails
// Por isso é necessário colocar uma interrogação depois do nome da propriedade, para dizer que ela pode ser opcional.

function resumo(usuario: {nome: string, emails?: number}) {

    if(usuario.emails !== 0) {
        return "Olá, " + usuario.nome + ". Você tem " + usuario.emails + " email(s) não lido(s).";
    } else {
        return "Olá, " + usuario.nome + ". Você não tem emails não lidos.";
    }
}

let user1 = {
    nome: 'João',
    emails: 19
};

resumo(user1);
/**
 * Exemplo 4: Tipagem em union types (multiplos tipos de dados)
 */
// Aqui eu estou dizendo que a função mostrarIdade pode receber um número ou uma string
// Se eu passar um número, ele vai mostrar a idade normalmente. Se eu passar uma string, ele vai concatenar com a string "A idade é "

function mostrarIdade(idade: string | number){
    console.log("A idade é " + idade);
};

mostrarIdade(19);
mostrarIdade("19");

/**
 * Exemplo 5: Tipagem em interfaces (criar seu próprio tipo de dado)
 */

