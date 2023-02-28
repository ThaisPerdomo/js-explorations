import {Request, Response} from 'express';

export const noticias = (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`A noticia é ${slug}`);
};

export const voos = (req: Request, res: Response) => {
    let origem: string = req.params.origem;
    let destino: string = req.params.destino;
    res.send(`O voo é de ${origem.toUpperCase()} para ${destino.toUpperCase()}`);
};


