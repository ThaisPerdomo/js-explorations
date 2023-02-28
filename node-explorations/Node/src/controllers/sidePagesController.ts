import { Request, Response } from 'express';

export const contato = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    res.render('contato',{nome});
}   

export const login = (req: Request, res: Response) => {
    res.render('login');
}

export const loginRealizado = (req: Request, res: Response) => {
    
    let mostrarDados: boolean = false;

    let usuario: string = req.body.usuario as string;
    let senha: string = req.body.senha as string;
    
    if(req.body.usuario && req.body.senha){
        mostrarDados = true;
    }
    
    res.render('login',{usuario, senha, mostrarDados});
}