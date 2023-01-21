var lado1 = document.querySelector("#lado1");
var lado2 = document.querySelector("#lado2");
var lado3 = document.querySelector("#lado3");
var resultado = document.querySelector("#resultado");

function tipo() {
  if (
    parseFloat(lado1.value) >
      parseFloat(lado2.value) + parseFloat(lado3.value) ||
    parseFloat(lado2.value) >
      parseFloat(lado1.value) + parseFloat(lado3.value) ||
    parseFloat(lado3.value) > parseFloat(lado1.value) + parseFloat(lado2.value)
  ) {
    resultado.innerHTML = "Não se pode formar um triângulo";
  } else {
    if (
      parseFloat(lado1.value) == parseFloat(lado2.value) &&
      parseFloat(lado1.value) == parseFloat(lado3.value)
    ) {
      resultado.innerHTML = "Triângulo Equilátero";
    } else if (
      parseFloat(lado1.value) == parseFloat(lado2.value) ||
      parseFloat(lado1.value) == parseFloat(lado3.value) ||
      parseFloat(lado2.value) == parseFloat(lado3.value)
    ) {
      resultado.innerHTML = "Triângulo Isórceles";
    } else {
      resultado.innerHTML = "Triângulo Escaleno";
    }
  }
}
