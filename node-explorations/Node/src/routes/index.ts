import { Router, Request, Response } from 'express';

const router = Router();

// Definindo rotas *estática* para a página inicial de requisicao GET


router.get('/', (req: Request, res: Response) => {

    let menorDeIdade: boolean = false;

    let age: number = 25

    
    if(age < 18){
        menorDeIdade = true;
    }

    res.render('home',{
        age,
        menorDeIdade,
        frases: [
            'Se a vida te der limões, faça uma limonada',
            'Pau que nasce torto, nunca se endireita',
        ],
        top3: [
            {title: 'Future Nostalgia', artist: 'Dua Lipa'},
            {title: 'Planet Her', artist: 'Doja Cat'},
            {title: 'Positions', artist: 'Ariana Grande'},
        ]
    });
});

router.get('/contato', (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    res.render('contato',{nome});
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('sobre');
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