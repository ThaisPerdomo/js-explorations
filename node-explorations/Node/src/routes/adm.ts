import { Router, Request, Response } from 'express';

const router = Router();

// Definindo rotas *estática* para a página inicial de requisicao GET


router.get('/', (req: Request, res: Response) => {
    res.send('Admininistrar a página inicial');
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Administrar a página de contato');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Administrar a página sobre');
});


export default router;