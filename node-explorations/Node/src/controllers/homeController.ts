import { Request, Response } from 'express';


export const home = (req: Request, res: Response) => {

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
}

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