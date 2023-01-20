// // Fazendo uma função de clique

// function clicou () {
//     console.log("clicou no botao");
// };

// let botao = document.querySelector ("#botao1");

// botao.addEventListener("click",  ()  => {
//     console.log("clicou no botao");
// });


// // Exercicio 1 

// function modificaLista1 () {
//     let lista = document.querySelector("#minhaLista1");
//     let listaParaModificar = lista.querySelector('ul');

//     let novoItemNaLista = document.createElement('li');
//     // Variável que seleciona o tipo de elemento a ser criado

//     novoItemNaLista.innerText = "Texto que vai no item adicionado";
//     // Determina o texto que vai nesse elemento

//     listaParaModificar.appendChild(novoItemNaLista);
//     // Cria o elemento de fato
// }

// // Exercicio 2

// function addBotao () {
//     let lista = document.querySelector("#minhaLista2");
//     let listaQueVaiTerAlgoAdicionadoDepoisDela = lista.querySelector('ul');

//     let novoBotao = document.createElement('button');
//     // Variável que seleciona o tipo de elemento a ser criado

//     novoBotao.innerText = "Botão criado";
//     // Determina o texto que vai nesse elemento

//     listaQueVaiTerAlgoAdicionadoDepoisDela.before(novoBotao);
//     // Cria o elemento de fato, DEPOIS da lista. 
//     // Se quisesse que fosse antes, usaria o .before
// }

// // Manipulando atributos (exercicio 3)

// function manipulandoAtributo() {

//     const senhaDOM = document.querySelector('#senha');
    
//     console.log(senhaDOM.getAttribute('placeholder'));

//     if (senhaDOM.hasAttribute('name')){
//         console.log("tem name");
//     } else {
//         console.log("nao tem name");
//     }

//     senhaDOM.setAttribute("placeholder", "placeholder alteradoo!")
// }

// // Exercicio 4: mostrar senha com set atribute 

// function mostraSenha(){
//     const senha = document.querySelector("#senhaEx4");
//     // busca o input da senha e coloca na variavel
//     const botao = document.querySelector("#botaoEx4");
//     // busca o botao e coloca na variavel

//     // aqui embaixo, ele vê se o atributo type tem o valor text
//     if (senha.getAttribute('type') === 'text'){

//         senha.setAttribute('type', 'password');
//         // se tiver, muda pra password
//         botao.value = "mostrar Senha";
//         // altera o que está escrito no botao 

//     } else {

//         senha.setAttribute('type','text');
//         // se não tiver em password, muda pra text.

//         botao.value = "ocultar senha";
//         // altera o que está escrito no botao
//     }
// }

// // Trabalhando com classes

// function alternaClasses(){
//     const botao = document.querySelector("#exercicio5 button");

//     botao.classList.replace("azul", "verde");
// }

// // Evento de teclado 1

function teclouOQue(e) {
    console.log(e.key); // retorna a tecla
    console.log("shift?" + e.shiftKey); // retorna um boolean
    console.log("ctrl?" + e.ctrlKey); // retorna um boolean
    console.log("alt?" + e.altKey); // retorna um boolean
}

const inputTeclinha = document.querySelector('#inputEx6');

inputTeclinha.addEventListener('keyup', teclouOQue)