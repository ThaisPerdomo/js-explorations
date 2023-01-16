function calculaPorcentagem(n1, n2){
    return (n2 / n1) * 100;
}

let n1 = 50;
let n2 = 20;
let porcentagem = calculaPorcentagem(n1, n2);
console.log(`${porcentagem}% de ${n1} é ${n2}`);