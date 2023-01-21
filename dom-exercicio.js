const inputinho = document.querySelector("#inputPrincipal");
// Pega o input 

function escreveuOQue(e){

    //Aqui é uma função que eu jogo no event.Listener 
    // que basicamente só funciona quando o usuário terminar de dar enter

    if (e.key === "Enter"){
        const lista = document.querySelector("#listaDeCompras");
        //Isso aqui é uma variável que pega a UL de ID listaDeCompras 

        const novoItem = document.createElement('li');
        //Isso é uma variável que cria um elemento li 

        novoItem.innerText = inputinho.value;
        //O texto que vai dentro desse elemento criado 
        //é o texto que ficou dentro do input no momento do enter
    
        lista.appendChild(novoItem);
        // Acessa a variável da UL e acrescenta (append) um elemento filho (child) li 
        // Lembrando que esse li foi criado lá em cima através da variável novoItem
        
        inputinho.value = "";
        // Esvazia o input para o usuário

        inputinho.focus();
        // Foca o input pro usuário não ter que clicar de novo etc. 
    }
}

inputinho.addEventListener("keyup", escreveuOQue);
// Cria um event listenet que pega o momento que o usuário larga a tecla
// E executa a função escreveuOQue

// Tá pronto o sorvetinho!