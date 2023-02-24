// Importanto o express para o nosso projeto
import express, {Request, Response} from 'express';

// Importando as rotas
import rotasPrincipais from './routes/index';
import rotasAdm from './routes/adm';

// Criando a variável server (servidor) para armazenar o express  
const server = express();

// Chamando as rotas no servidor
server.use('/', rotasPrincipais);
server.use('/adm', rotasAdm);

// Criando a página não encontrada
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
});

server.listen(80); 
// Para criarmos um servidor, devemos utilizar a propriedade listen para ficar "escutando" uma porta, como a 3000.  A padrão para sites html é 80 nao 3000