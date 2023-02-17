var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('somar');
var resultado = document.getElementById('resultado');
function calcula(n1, n2) {
    return n1 + n2;
}
botao.addEventListener("click", function () {
    resultado.innerHTML = calcula(+numero1.value, +numero2.value).toString();
});
