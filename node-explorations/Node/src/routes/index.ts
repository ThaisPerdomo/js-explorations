import { Router, Request, Response } from 'express';
import * as homeController from '../controllers/homeController';
import * as sidePagesController from '../controllers/sidePagesController';
import * as dinamicasControllers from '../controllers/dinamicasControllers';

const router = Router();

// Definindo rotas *estática* para a página inicial de requisicao GET


router.get('/', homeController.home);

router.get('/contato', sidePagesController.contato);

router.get('/login', sidePagesController.login);

router.post('/login-realizado', sidePagesController.loginRealizado);

// Definindo rotas *dinâmicas* para a página inicial de requisicao GET

router.get('/noticia/:slug', dinamicasControllers.noticias);


router.get('/voo/:origem-:destino', dinamicasControllers.voos);

export default router;