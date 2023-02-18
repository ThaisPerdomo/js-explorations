var numero1 = document.getElementById('numero1') as HTMLInputElement;
var numero2 = document.getElementById('numero2') as HTMLInputElement;
var botao = document.getElementById('somar') as HTMLButtonElement; 
var resultado = document.getElementById('resultado') as HTMLSpanElement;

function calcula(n1 : number , n2 : number) {
    return n1 + n2;
}
botao.addEventListener("click", function () {
    resultado.innerHTML = calcula(+numero1.value, +numero2.value).toString();
});


let aleatoriedades: any = ['João', 'barco'];

aleatoriedades.push(19);

let nomes = ['João', 'Maria', 'José'];

nomes.forEach(function (nome) {
    if (typeof nome === 'string'){
        console.log(nome.toUpperCase());
    } else{
        console.log(nome);
    }
});

