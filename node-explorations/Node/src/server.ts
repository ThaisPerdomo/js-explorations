// Importanto o express para o nosso projeto
import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';

// Importando as rotas
import rotasPrincipais from './routes/index';
import rotasAdm from './routes/adm';

// Importando e configurando o dotenv para configurar as variáveis de ambiente
import dotenv from 'dotenv';

dotenv.config();

// Criando a variável server (servidor) para armazenar o express  
const server = express();

// Configurando o mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Criando uma rota para pasta public, utilizando o path.join para juntar o diretório do arquivo com a pasta public
server.use(express.static(path.join(__dirname, '../public')));

// Deixando nosso servidor preparado para receber dados do formulário de forma POST
server.use(express.urlencoded({extended: true}));

// Chamando as rotas no servidor
server.use('/', rotasPrincipais);
server.use('/adm', rotasAdm);

// Criando a página não encontrada
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
});

server.listen(process.env.PORT); 
// Para criarmos um servidor, devemos utilizar a propriedade listen para ficar "escutando" uma porta, como a 3000. 