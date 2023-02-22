import express, { Request, Response } from 'express';

const server = express();

// Definindo uma rota *estática* para a página inicial de requisicao GET
server.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// A funcao get tem dois parâmetros e diz respeito a requisicao que vc esta fazendo (neste caso é get; mas tem outra funcao chamada post):
// O primeiro especifica a rota do site (aqui, de exemplo, é /, pq é a pagina inicial), o segundo é uma função
// > Essa função pega, também, dois parâmetros req e res (podendo ser qualquer nome na vdd); que foram tipados como request e response (pegados lá do import)
// > Essa funcao também pode ser feita fora da função get, como o exemplo abaixo usando arrowfunction

// const homePage = (req: Request, res: Response) => {
//     res.send('Hello World');
// }

// server.get('/', homePage); //Manter comentado pra de cima funcionar

// O req é o que o usuario esta requisitando (e nele contém o ip do usuário etc) e o res é a resposta que o servidor vai dar;

// Definindo uma rota *dinâmica* para a página inicial de requisicao GET
server.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`A noticia é ${slug}`);
});
// Pra criar uma rota dinâmica, como no exemplo abaixo que definimos uma rota dinâmica chamada /:slug que fica dentro de uma estática chamada /noticia; dentro da função get 
// Aqui, pegamos a variavel slug (que neste caso foi tipada como string) pra saber o que é esse :slug que falamos na rota dinâmica e dizemos que é os parâmetros da requisicao de slug (req.params.slug). A resposta enviada ao usuário (res.send) vai ser essa template string que vem com a slug. 

// Definindo outra rota *dinâmica* para a página inicial de requisicao GET

server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let origem: string = req.params.origem;
    let destino: string = req.params.destino;
    res.send(`O voo é de ${origem.toUpperCase()} para ${destino.toUpperCase()}`);
});

// OBS: Isso pode ser feito de forma mais simples, como no exemplo abaixo, mas é só pra mostrar que é possível fazer dessa forma também: 
// server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
//     let { origem, destino } = req.params;
//     res.send(`O voo é de ${origem} para ${destino}`);
// }); // Manter comentado pra de cima funcionar

server.listen(80); 
// Para criarmos um servidor, devemos utilizar a propriedade listen para ficar "escutando" uma porta, como a 3000.  A padrão para sites html é 80 nao 3000