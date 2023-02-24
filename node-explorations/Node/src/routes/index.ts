import { Router, Request, Response } from 'express';

const router = Router();

// Definindo rotas *estática* para a página inicial de requisicao GET


router.get('/', (req: Request, res: Response) => {
    res.send('Página inicial');
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Página de contato');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página sobre');
});

// Definindo rotas *dinâmicas* para a página inicial de requisicao GET

router.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`A noticia é ${slug}`);
});

router.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let origem: string = req.params.origem;
    let destino: string = req.params.destino;
    res.send(`O voo é de ${origem.toUpperCase()} para ${destino.toUpperCase()}`);
});

export default router;