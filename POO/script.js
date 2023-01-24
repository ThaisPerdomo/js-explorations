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

// ------------------------------------------------
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

// // ------------------------------------------------
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

