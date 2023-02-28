import { Router, Request, Response } from 'express';
import * as homeController from '../controllers/homeController';
import * as dinamicasControllers from '../controllers/dinamicasControllers';

const router = Router();

// Definindo rotas *estática* para a página inicial de requisicao GET


router.get('/', homeController.home);

router.get('/contato', homeController.contato);

router.get('/login', homeController.login);

router.post('/login-realizado', homeController.loginRealizado);

// Definindo rotas *dinâmicas* para a página inicial de requisicao GET

router.get('/noticia/:slug', dinamicasControllers.noticias);


router.get('/voo/:origem-:destino', dinamicasControllers.voos);

export default router;