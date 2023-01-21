function fibonacci() {
  var termos = document.querySelector("#numero").value;
  var resultado = document.querySelector("#resultado");
  if (termos <= 0) {
    resultado.innerHTML = "Número de termos inválidos!";
  } else {
    var num1 = 1,
      num2 = 0,
      num3 = 0,
      numx = 0;
    var array = [];
    for (let i = 0; i < termos; i++) {
      array.push(num3);
      num3 = num1 + num2;
      numx = num2 / num1;
      num1 = num2;
      num2 = num3;
    }
    resultado.innerHTML = array;
  }
}
