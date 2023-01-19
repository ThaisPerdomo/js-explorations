// // Exercício de cálculo de porcentagem

// function calculaPorcentagem(n1, n2){
//     return (n2 / n1) * 100;
// };

// let n1 = 50;
// let n2 = 20;
// let porcentagem = calculaPorcentagem(n1, n2);
// console.log(`${porcentagem}% de ${n1} é ${n2}`);

// --------------------------------------------------------
// Exercício de cálculo de preço por metro quadrado

// function calculaPrecoImovel(metragem, quartos){

//     let m2 = 3000;
//     let multiplicador = 1;

//     if (quartos == 2){
//         multiplicador = 1.2;
//     } else if (quartos == 3){
//         multiplicador = 1.5;
//     } else if (quartos > 3){
//         console.log("A corretora só aceita 3 quartos");
//     };

//     return (m2 * multiplicador) * metragem;

// }

// let metragem = 123;
// let quartos = 1;
// let precoImovel = calculaPrecoImovel(metragem, quartos);

// console.log(`A casa custa R$ ${precoImovel}`);

// --------------------------------------------------------
// Exercício de validacao usuário x senha

// function validaUser(usuario, senha){

//     if (usuario == 'pedro' && senha == 123){
//         return true; 
//     }
//     else{
//         return false;
//     }

// }


// let usuario = 'pedro';
// let senha = 1234;

// let validacao = validaUser(usuario, senha);
// if (validacao){
//     console.log("acesso concedido");
// } else {
//     console.log("acesso negado")
// }

// --------------------------------------------------------
// Exercício de funcao dentro de funcao

// function somaQuadrados (a, b) {
//     const raizQuadrada = x => x * x;
//     return raizQuadrada(a) + raizQuadrada(b);
// }

// // console.log(somaQuadrados (3,3));

// let colors = ['blue', 'red','green'];
// console.log(colors[1]); // resultado: red

// let lista = ['item', colors];

// console.log(lista[2]);
// // NÃO FUNCIONA, porque não existe item 2
// console.log(lista[1]); // resultado: ['blue', 'red', 'green']
// console.log(lista[1][0]); // resultado: blue


// let ingredientes =  [
//     "agua",
//     "farinha",
//     "ovo",
// ];

// ingredientes.push("leite");

// //agora leite faz parte do array como sétimo (6º na ordem array) item 

// // Aprendendo objetos:

// // let quartoAlbum = {
// //     titulo: "In The Zone", //propriedade
// //     melhorMusica: 'showdown', // propriedade
// //     lugarNasParadas: 1, 

// //     pastAlbuns: {       // fazendo um objeto dentro do objeto
// //         primeiro: 'baby one more time',  
// //         segundo: 'oops i did it again',
// //         terceiro: 'britney'
// //     },

// //     singles : ["toxic", "MATM","Everytime"],

// };
  
// console.log(`O 1º single de ${quartoAlbum.titulo} foi ${quartoAlbum.singles[0]}`); //forma de buscar algo no objeto

// quartoAlbum.melhorMusica = "early morning";
// quartoAlbum.lugarNasParadas += 4;

// console.log(`Lugar nas paradas atual: ${quartoAlbum.lugarNasParadas}`);

// quartoAlbum.singles.push('Outrageous');

// console.log(quartoAlbum.singles);

// // Outro exercicio de objetos:

// let personagem = {
//     nome: "thais",
//     idade: 27,
//     formacao: [
//         {fundamental: 'Maia vinagre', ano: 2006},
//         {ensinoMedio: 'Argumento', ano: 2013},
//         {graduacao: 'UFF', ano: 2023},
//     ]
// }

// console.log(`${personagem.nome} terminou sua faculdade em ${personagem.formacao[2].ano}`);

// let eu = {
//     nome: "thais",
//     sobrenome: "perdomo",
//     nomeCompleto: function() {
//         return this.nome + " " + this.sobrenome;
//         // poderia ser escrito assim tb: 
//         // return `${this.nome} ${this.sobrenome}`;
//     }
// } 

// console.log(eu.nomeCompleto());

// // Testando repeticoes com array
// let fruits = ["apple", "orange", "grape"];

// for (let fruit of fruits){
//     console.log(fruit);
// };

// // exercicio de repeticao
// let contagem = 0;

// while (contagem <= 100) {
//     console.log(contagem);
//     contagem ++;
// }

// // // testando stringzacao de arrays
// let fruits = ["apple", "orange", "grape"];

// stringFruits = fruits.join("! ");
// console.log(stringFruits);

// // testando ordenacao de arrays
// let fruits = ["orange", "apple", "grape"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);

// // Treinando ordenação baseada em propriedade de objeto do array
// let cars = [
//     { brand: "fiat", year: 2017},
//     { brand: "ferrari", year: 2008},
//     { brand: "BMW", year: 2018},
// ];

// cars.sort((a,b) => {
//     if (a.year > b.year) {
//         return 1;
//     } else if (a.year < b.year){
//         return -1;
//     } else {
//         return 0;
//     }
// });

// // outra forma de escrever isso: 

// cars.sort((a,b) => {
//     return a.year - b.year;
// });

// // outra forma de escrever isso ainda mais simplificada:
// cars.sort((a,b) => a.year - b.year);

// console.log(cars);

// // treinando iteracao de array: includes

// let fruits = ["orange", "apple", "grape", "uva"];

// if (fruits.includes('uva')) {
//     console.log("tem uva");
// } else {
//     console.log("não tem uva");
// }

