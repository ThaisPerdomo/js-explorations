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

