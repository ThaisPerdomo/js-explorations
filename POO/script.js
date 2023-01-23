class Albuns {
    //A primeira letra da classe é, sempre, maiúscula

    cantora = "Britney Spears";
    // Isso aqui é uma propriedade que todos os objetos criados vão ter
    // Não é obrigatório ter essa propriedade mas pode-se criar quantas quiser

    constructor (titulo, ano, firstsingle){
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

ultimoAlbum.cantora = "Britney feat Madonna";

