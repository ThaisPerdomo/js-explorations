// Aprendendo classes

class Albuns {
    //A primeira letra da classe é, sempre, maiúscula

    cantora = "Britney Spears";
    // Isso aqui é uma propriedade que todos os objetos criados vão ter
    // Não é obrigatório ter essa propriedade mas pode-se criar quantas quiser

    constructor(titulo, ano, firstsingle){
        // O constructor é uma função que constrói o modelo das coisas
        this.titulo = titulo;
        this.ano = ano;
        this.firstsingle = firstsingle;
        // O this indica que é algo do próprio objeto a ser criado, atribuindo a uma propriedade de mesmo nome
    }

} // Isso tudo daqui é o "modelo" que vai ser seguido quando se criar um objeto

// Abaixo, tem a INSTÂNCIA do "modelo" acima, que é quando você realmente cria um objeto
let primeiro = new Albuns("BOMT", 1998, "BOMT");

let segundo = new Albuns("OIDIA", 2000, "OIDIA");

// Vamos supor que a britney tenha lançado um álbum com a madonna 

let ultimoAlbum = new Albuns("Fiz um CD com minha avó", 2023, "E uma música tb");

// Pra mudar a propriedade "fixa" cantora = britney pode-se fazer isso:

ultimoAlbum.cantora = "Britney e Madonna";

console.log(`O primeiro álbum de ${primeiro.cantora} foi o ${primeiro.titulo}, lançado em ${primeiro.ano}`);
console.log(`O álbum de ${ultimoAlbum.cantora} foi lançado em ${ultimoAlbum.ano}`)

// -----------------------------------------------------------------------------------------------------
// Outro exemplo de POO, aprendendo actions 

class Player {

    nivel = 0;
    
    constructor(nome) {
        this.nome = nome;
    } 

    subiuDeNivel(){
        this.nivel++;
    } // Isso aqui é uma função (action) que faz o player subir de nível

}

let player1 = new Player("Thais");
//Criando um objeto. 

player1.subiuDeNivel(); // Executando a ação
// Ao executar um console.log, você vai ver que o nível de Thais agora é 1 

console.log(`O nível de ${player1.nome} atual é ${player1.nivel}`);

// // --------------------------------------------------------------------------------------------------
// // Outro exemplo de POO
// // Criando uma action para definir um tipo específico de info (boolean, number etc) a ser recebida numa propriedade

class Cliente {

    divida = 0;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    contraiuDivida(novaDivida){
        if(typeof novaDivida == "number"){
            this.divida = novaDivida;
        } else {
            console.log("Dívida não foi escrita corretamente, em números")
        }
    // Essa action faz com que só se aceite que se insira NÚMEROS na dívida
    }

}

let cliente1 = new Cliente("maria");

cliente1.contraiuDivida('sim');
// // Neste caso vai dar erro, quando exibir no console log vai dar que a dívida é 0
// // Isso porque essa função só aceita números

console.log(`O cliente ${cliente1.nome} tem R$ ${cliente1.divida} de dívida`);

cliente1.contraiuDivida(500);

console.log(`Corrigido: O cliente ${cliente1.nome} tem R$ ${cliente1.divida} de dívida`);

// // ----------------------------------------------------------------------------------------------------
// // Outro exemplo de POO: Criando um getter e um setter 

class Drag {
    
    _concursosVencidos = 0
    // Se utiliza um underline na frente da propriedade
    // Quando se usa um getter e um setter pra uma propriedade em comum 
    
    constructor(nome, sobrenome){ 
        // conceitos de constructor já foram vistos anteriormente
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    } // Estabelecendo um função GET que pega as propriedades do constructor e junta num nome completo

    get totalDeVitorias(){
        return this._concursosVencidos;
    } // Estabelendo uma função GET que pega a propriedade lá em cima. 
    // É desvinculada da função set abaixo
    // Porém, pra você puxar o dado que está com underline, você precisa dela; então provavelmente terá que usar as duas juntas 

    set alteraTotalDeConcursosVencidos(novoNumeroVitorias){

        if (typeof novoNumeroVitorias == 'number'){
            this._concursosVencidos = novoNumeroVitorias;
        }

    } // Estabelecendo uma função SET que é pra MUDAR algo
    // Neste caso, é pra mudar a propriedade _concursos Vencidos 
}

let dragQueen1 = new Drag("Kitara", "Ravanche");
// Instanciando o objeto

dragQueen1.alteraTotalDeConcursosVencidos = 30;

// Alterando algo com a função set 

console.log(`A drag ${dragQueen1.nomeCompleto} ganhou ${dragQueen1.totalDeVitorias} concursos de lipsync`);

// Console log feito com dados puxados pelas funções get 

// // ----------------------------------------------------------------------------------------------------------
// // Outro exemplo de POO: Heranças

class Pessoa {

    deficiencias = 0;

    constructor(nome){
        this.nome = nome;
    }

}

class Estudante extends Pessoa {
    // Todo estudante é uma pessoa, então é possíve herdar algumas coisas da classe acima

    constructor(nome, matricula){
        super(nome);
        // Esse super pega os dados da classe que vc está extendendo (neste caso, Pessoa)
        // Neste caso, é uma função que puxa os dados do construtor da outra função 
        this.matricula = matricula;
    }

}

let cadastro1 = new Estudante("Thais", 114034038);
// Instanciando o objeto 

console.log(`${cadastro1.nome} tem ${cadastro1.deficiencias} deficiência(s)`)

// Como pode ser observado, o 'deficiencias' foi algo herdado da classe Pessoa 
// Isso se dá porque o cadastro foi feito em Estudante, ele herda tudo de Pessoa

// // ----------------------------------------------------------------------------------------------------------
// // Outro exemplo de POO: método e variáveis statics

class RecemNascido{

    static quantidadeOrelhas = 2;
    // Foi criada uma variável que é estática. 
    // Ou seja, ela só obecede a classe RecemNascido, não a objetos instanciados por RecemNascido

    idade = 0;
    // Variavel normal 

    constructor(nome){
        this.nome = nome;
    }
    //Constructor normal 

    static ExibeTotalOrelhas(){
        console.log(`O total de orelhas no corpo humano é ${this.quantidadeOrelhas}`);
    } 
    // Foi criada uma função que é estática. 
    // Ou seja, ela só obecede a classe RecemNascido, não a objetos instanciados por RecemNascido

}

let leito1 = new RecemNascido("George");

// Pra chamar as funções estáticas você não pode fazer um pessoaQueNasceu.ExibeTotalOrelhas()
// Isso porque é uma função que obedece só à classe, não aos objetos
RecemNascido.ExibeTotalOrelhas();

console.log(`O bebê ${leito1.nome} tem ${leito1.idade} anos e ${RecemNascido.quantidadeOrelhas} orelhas`)

// O mesmo vale pra variável quantidadeDeOrelhas 

// // ----------------------------------------------------------------------------------------------------------
// // Factory: Criando uma função que instancia algo de uma classe 

class Paciente {

    patologia = 'a definir';

    constructor(nome){
        this.nome = nome;
    }
}

// A função abaixo instancia objetos de acordo com a classe acima 
function novoPaciente(nome, patologia){
    let p = new Paciente(nome);
    // Forma de referenciar algo do constructor
    p.patologia = patologia;
    // Forma de referenciar uma propriedade de fora do constructor
    return p;
    // Não esquecer do return
}

let pacienteN01 = novoPaciente("Morpheu", "Herpes gatil");

console.log (`O(a) ${pacienteN01.nome} tem ${pacienteN01.patologia.toLowerCase()}`);

// // ----------------------------------------------------------------------------------------------------------
