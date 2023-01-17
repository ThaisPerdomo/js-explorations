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

let quartoAlbum = {
    titulo: "In The Zone", //propriedade
    melhorMusica: 'showdown', // propriedade
    lugarNasParadas: 1, 

    pastAlbuns: {       // fazendo um objeto dentro do objeto
        primeiro: 'baby one more time',  
        segundo: 'oops i did it again',
        terceiro: 'britney'
    },

    singles : ["toxic", "MATM","Everytime"],

};
  
console.log(`O ${quartoAlbum.title} foi lançado em ${quartoAlbum.released}`); //forma de buscar algo no objeto

quartoAlbum.melhorMusica = "early morning";
personagem.lugarNasParadas += 4;

console.log(`Lugar nas paradas atual: ${quartoAlbum.lugarNasParadas}`);
