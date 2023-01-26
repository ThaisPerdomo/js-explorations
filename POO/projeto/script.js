// A classe abaixo vai desenvolver o formulário em si

class Formulario {

    conteudoDoFormulario = []
    // Esse é um array que simboliza o que vai estar dentro da tag form
    // Ou seja, tudo que for criado, os inputs etc, vão ser enfiados aqui

    method = "GET";
    // Esse é o method padrão

    // O construtor abaixo vai criar o formulario, buscando a div que ele vai ser feito, definindo o método e a ação dele
    constructor(nomeDoContainer, method, action){
        this.nomeDoContainer = document.querySelector(nomeDoContainer);
        // Vai buscar no HTML o nome do container (definido no HTML) e vai trazer o container pra cá
        this.method = method;
        this.action = action;
    }

    adicionarAlgoAoFormulario(itemASerAdicionado){
        this.conteudoDoFormulario.push(itemASerAdicionado);
    } // ESsa função vai ser responsável por colocar itens no formulário

    colocarTudoNaPagina(){
        let elementoFormASerCriado = document.createElement('form');
        // Isso cria um <form> de fato
        elementoFormASerCriado.setAttribute('method', this.method);
        // Isso define o atributo method pra ser o mesmo escolhido aqui
        elementoFormASerCriado.setAttribute('action', this.action);
        // O mesmo pro action.
        this.nomeDoContainer.appendChild(elementoFormASerCriado);
        // Joga esse form pra dentro do container

        for(let i in this.conteudoDoFormulario){
            this.conteudoDoFormulario[i].colocarTudoNaPagina(elementoFormASerCriado);
            // Aqui eu realmente não entendi tanto. Mas acho que ele executa essa funcao pra cada item do array
        }

    }

}

// A classse abaixo é pra criar os inputs que vão no formulário. 

class Input {

    // Aqui fora vão alguns atributos em comum aos inputs
    // O type 
    _inputTypePadrao = 'text';
    
    required = false;
    

    // O construtor leva em conta as coisas mínimas necessárias pra um input
    constructor(name,label){
        this.name = name;
        this.label = label;
    }

    get type(){
        return this._inputTypePadrao;
        // Estabelendo uma função GET que pega a propriedade lá em cima.
        // Agora pra invocar o type, não precisa colocar o nome da propriedade lá em cima
        // E sim o nome dessa função 
    }

    set alteraType(typeEscolhido){
        if(['text', 'password', 'email', 'submit'].includes(typeEscolhido)){
            this._inputTypePadrao = typeEscolhido;
            // Esse if faz com que só altere o type se for algum dos itens desse array
            // Por isso o includes, porque o typeEscolhido precisa ser um desses itens
        } else {
            throw new Error(`Input ${typeEscolhido} type não existe`);
            // Define um erro e uma mensagem. 
        }

    }

    colocarTudoNaPagina(elementoFormASerCriado){
        let elementosInput = document.createElement('input');
        // Isso cria um input de fato na tela
        elementosInput.type = this.type;
        elementosInput.name = this.name;
        elementosInput.placeholder = this.label;
        elementosInput.required = this.required;
        elementoFormASerCriado.appendChild(elementosInput);
    }

}

// Criando uma classe pra um botão, que tem as mesmas características da classe Input
// Com a diferença que o type dos botões é um submit e que eles não precisam de name. 
class Button extends Input {

    constructor(label) {
        // O construtor daqui só vai pedir um label
        // Por isso o super, que invoca o construtor da classe pai, tem aspas vazias na parte do name
        super("",label);
        this.alteraType = "submit";
        // Puxa a função setter pra alterar o type pra submit
    }

    colocarTudoNaPagina(elementoFormASerCriado){
        let botao = document.createElement('input');
        botao.type = this.type;
        botao.value = this.label;
        elementoFormASerCriado.appendChild(botao);
    }
}

// Implementação

// Criando o formulário em si
let formCriadoEmJS = new Formulario("areaFormulario", 'POST', 'https://site.com.br')



// Fazendo um input de email com classe Input
let email = new Input("email", "Digite seu email:");
// Alterando o input type pra email e deixando o required true. 
email.alteraType = "email";
email.required = true;
formCriadoEmJS.adicionarAlgoAoFormulario(email);

// Fazendo um input de senha com classe Input
let senha = new Input("senha","Digite sua senha:");
senha.alteraType = "password";
senha.required = true;
formCriadoEmJS.adicionarAlgoAoFormulario(senha);

// Fazendo um botão com classe Button 
let botao = new Button("Enviar");
formCriadoEmJS.adicionarAlgoAoFormulario(botao);

console.log(formCriadoEmJS.conteudoDoFormulario);
// Esse console log verifica se todos os itens foram colocados no array do formulário

formCriadoEmJS.colocarTudoNaPagina();


/// Não deu certo mas depois eu vejo onde eu errei. 