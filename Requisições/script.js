/***************************
 * Função de método get complexa
 * Função abaixo pega um link json pelo fetch que simula 100 posts, puxa uma resposta (em json) que é exibida seu status e transformada em array de objetos com a função json()
 * Depois de transformada em array de objetos: 
 * Como exemplo, foi exibido o título do primeiro post
 * O catch exibe um erro, que não aparece porque o código tá certo. Mas, poderia exibir. O parâmetro do catch faz com que o erro possa aparecer no console log
 * O finally sempre executa ao final, aqui foi feito só pra exemplificar seu uso. 
 * MUITO IMPORTANTE: o fetch é assíncrono e o primeiro then também. Então aquele console log que fica no final da function clicou() aparece antes de qualquer outro feito antes dele
 */

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((respostaPura) => {
            console.log(`Status (em código): ${respostaPura.status}`);
            return respostaPura.json();
        })
        .then((respostaEmFormaDeObjeto) => {
            console.log(`O título do primeiro post é ${respostaEmFormaDeObjeto[0].title}`)
        })
        .catch((error) => {
            alert("Tente novamente mais tarde");
            console.log(error);
        })
        .finally(()=> {
            console.log("Isso vai executar independente da requisicao ter dado certo ou errado")
        })
    
    console.log("Essa mensagem vai aparecer antes da anterior porque a anterior é assíncrona")
}

/**************************
 * Função de método put complexa
 * Também puxa o arquivo json pelo fetch etc etc, quase igual a acima. 
 * A diferença é que ela, por ser PUT, simula que você vai INSERIR algo nesse json
 * Por isso o método dela precisa estar especificado dentro do fetch, junto com as informações de requisições (headers e body)
 * No headers, vc especifica o tipo de conteúdo que você tá mandando com o content-type
 * E você faz isso colocando application/json
 * No corpo da sua requisição, vc cria um json (que se parece um objeto mas não é)
 * Então vc precisa de uma função que traduz um objeto pra um jason chamada JSON.stringify()
 * E dentro dessa função você manda seu objeto; que neste exemplo é baseado em posts. 
 * O resto com os then etc é igual ao outro
 */
function inseriu(){
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ // Isso aqui é tudo que vai pra API 
                title: 'titulo de exemplo',
                body: 'corpo de exemplo',
                userId: 2
            })
        })//OBS isso tudo aqui ta dentro do fetch
    .then((response) => {return response.json();})
    .then((json) => {console.log(json)}); // Exibindo o que foi pra API pra mostrar que foi mesmo 
}

document.querySelector("#botaoGet").addEventListener('click', clicou);
document.querySelector('#botaoPut').addEventListener('click', inseriu);

/*** ::::::::::: USO RECOMENDADO:::::::::::: USO RECOMENDADO::::::::::: 
 * A versão simplificada é uma que FORÇA uma sincronidade do assincrono
 * Por fazer o código sincrono só ser executado quando o assincrono der a resposta
 * Pra isso, se usa async na função (se fosse uma arrow ficaria let funcao = async() => {}) 
 * E await nas partes assincronas que retornam promisses
 * Não se usa mais o then!!! 
 */

async function clicouSimplificado() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // Aqui ele faz a requisição, e quando fizer vai ficar armazenada na variável response
    let json = await response.json();
    // Aqui ele transforma o json em array de objetos com a funcao json() e armazena ele na variavel json
    console.log(`O título do primeiro post é ${json[0].title}`)
    // Agora vc pode fazer o que quiser com esse array. Como exemplo, exibidos o título   
}

async function inseriuSimplificado(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ // Isso aqui é tudo que vai pra API 
                title: 'titulo de exemplo',
                body: 'corpo de exemplo',
                userId: 2
            })
        })//OBS isso tudo aqui ta dentro do fetch
    let json = await response.json();

    console.log(json);

}

document.querySelector("#botaoGetSimplificado").addEventListener('click', clicouSimplificado);
document.querySelector('#botaoPutSimplificado').addEventListener('click', inseriuSimplificado);