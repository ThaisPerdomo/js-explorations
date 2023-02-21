import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// A funcao get tem dois parâmetros e diz respeito a requisicao que vc esta fazendo (neste caso é get; mas tem outra funcao chamada post):
// O primeiro especifica a rota do site (aqui, de exemplo, é /, pq é a pagina inicial), o segundo é uma função
// Essa função pega, também, dois parâmetros req e res (podendo ser qualquer nome na vdd); que foram tipados como request e response (pegados lá do import)

server.listen(3000); 
// Para criarmos um servidor, devemos utilizar a propriedade listen para ficar "escutando" uma porta, como a 3000.  A padrão para sites html é 80 nao 3000