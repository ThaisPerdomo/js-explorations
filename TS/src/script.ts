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
 * Exemplo 5: Criando tipagem (criar seu próprio tipo de dado): USAR PASCAL CASE
 */

// Dá pra criar seu próprio tipo de dado de forma simples, como o exemplo abaixo. Porém, não é muito útil

type NomeCompleto = string;

let nome: NomeCompleto = "Thais Perdomo";

type anoLancamento = string | number;

let BOMT: anoLancamento = 1998;

// Se torna útil quando se cria um type com mais de um dado, como no exemplo abaixo

type User = {
    nome: string,
    idade: number
};

// Agora, neste caso, pra não ter o retrabalho de escrever {nome: string, idade: number} toda hora, 
// eu posso tipar o parâmetro da função com o type User
function mensagem(usuario: User) {
    return "Olá, " + usuario.nome + ". Você tem " + usuario.idade + " anos.";
}

mensagem({nome: "João", idade: 19});

/**
 * Exemplo 6: Tipagem em interfaces: USAR PASCAL CASE
 * */

// A interface é uma forma de criar um tipo de dado, mas com mais recursos. 
//No exemplo anterior, não é possível adicionar novos parâmetros ao type User. Com a interface, é.

interface Discografia {
    nomeDoAlbum: string,
    lugarNasParadas: number;
}

interface Discografia{
    anoDeLancamento: number,
} // Aqui foi adicionado um novo parâmetro à interface Discografia	

function mensagem2(discografia: Discografia) {
    return "O álbum " + discografia.nomeDoAlbum + " foi lançado em " + discografia.anoDeLancamento + ".";
}

/**
 * Exemplo 7: Type assertions
 * */

// Type assertions é uma forma de dizer ao typescript que você sabe o que está fazendo.
// No exemplo abaixo, eu estou dizendo que o tipo do elemento é HTMLInputElement, mesmo que o typescript não saiba disso
// O value é um atributo PRÓPRIO do HTMLInputElement, então o typescript não vai dar erro. 

let nomeDOM = document.getElementById('nome') as HTMLInputElement;

console.log(nomeDOM.value);

/***
 * Exemplo 8: Types literais
 */
// Types literais são tipos de dados que só podem ter um valor específico
let mulherMaisBonita: 'thais' = 'thais'

// Parecem inúteis, mas são muito úteis como o caso abaixo

function mostraVerdades(alinhamento: 'left' | 'right' | 'center'){
    return `<div style="text-align: ${alinhamento}">Olá, ${mulherMaisBonita}</div>`
}

mostraVerdades('left');

/****
 * Exemplo 9: Types literais com union types com types criadas: 
*/

type OpcoesDiv = {
    width: number,
    height: number,
} // type criada

// Abaixo, exemplo de union type com uma que é type literal!!! 

function configuraDiv(props: OpcoesDiv | 'auto'){
}

// Nesse caso, você pode passar um objeto com as propriedades width e height, ou passar a string 'auto'
configuraDiv({width: 100, height: 100});
configuraDiv('auto');

/**
 * Exemplo 10: Corrigindo o erro de tipagem de uma função (inferência literal)
 */

function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    //...
}

type Method = 'GET' | 'POST';
let url = 'https://google.com';
let method: Method = 'GET';
fazerRequisicao(url, method); 

// Aqui o typescript DARIA erro se não fosse o type Method criado acima, 
// Isso porque ele não saberia se o método pode ser trocado pra algo além de GET ou POST

/**
 * 
 * Exemplo 11: Corrigindo o erro de tipagem de uma função (inferência literal) com objetos 
 */
// O exemplo abaixo é quase o mesmo do acima; mas utiliza um objeto para corrigir o erro de tipagem
function fazerRequisicao2(url: string, method: 'GET' | 'POST') {
    //...
}

type DetalhesRequisicao = {
    url2: string,
    method2: 'GET' | 'POST'
} //Aqui temos um type que espeficica que o método pode ser GET ou POST e que é usado no objeto abaixo

let requisicao2: DetalhesRequisicao = {
    url2: 'https://google.com',
    method2: 'GET'
}

fazerRequisicao2(requisicao2.url2, requisicao2.method2); 

/***
 * Exemplo 12: Type DE funções com retorno
 */

type MathFunction = (x: number, y: number) => number;

const soma: MathFunction = (n1, n2) => {
    return n1 + n2;
} 
// Aqui eu estou dizendo que a variável soma é do tipo MathFunction, que é uma função que recebe dois números e retorna um número.
// Esse type pode ser usado em qualquer funcao que tenha o mesmo formato
// Exemplo:

const subtracao: MathFunction = (n1, n2) => {
    return n1 - n2;
}

/**
 * Exemplo 13: Type DE funções sem retorno 
 */

// Vamos supor que temos uma função que não retorna nada

function removerElemento(el: HTMLElement): void {
    el.remove();
} 

// Porém, tem um OBS: pode se usar o retorno em casos de parar a função, como no exemplo abaixo
// Mas, tem que estar dentro de um if. Como o exemplo abaixo

function removerElemento2(el: HTMLElement): void {
    if (el.id === 'naoRemover') {
        return;
    }
    el.remove();
} 