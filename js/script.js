function send() {
  var nome = $("#name").val();
  var idade = $("#age").val();
  var email = $("#email").val();
  var telefone = $("#phone").val();
  var endereco = $("#address").val();
  var cep = $("#cep").val();

  jsonObject = {
    Nome: "",
    Idade: "",
    Email: "",
    Telefone: "",
    Endereco: "",
    Cep: "",
  };

  jsonObject.Nome = nome;
  jsonObject.Idade = idade;
  jsonObject.Email = email;
  jsonObject.Telefone = telefone;
  jsonObject.Endereco = endereco;
  jsonObject.Cep = cep;

  var str = JSON.stringify(jsonObject);

  document.getElementById("tbListar").innerHTML = str;
}
