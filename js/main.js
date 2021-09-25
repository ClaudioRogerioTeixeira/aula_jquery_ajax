$("#botao").text("Consultar");

function consultaCep() {
  $(".barraProgress").show();
  var cep = document.getElementById("cep").value;
  var url = "https://viacep.com.br/ws/" + cep + "/json/";
  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      console.log(response);
      //jquery
      $("#tituloCep").html("CEP - " + response.cep);
      $("#logradouro").html(response.logradouro);
      $("#bairro").html(response.bairro);
      $("#localidade").html(response.localidade);
      $("#uf").html(response.uf);
      $("#ibge").html("Código Município: " + response.ibge);
      $(".cep").show();
      $(".barraProgress").hide();
      //javascript
      //document.getElementById("logradouro").innerHTML = response.logradouro;
      //document.getElementById("bairro").innerHTML = response.bairro;
    }
  })
}

$(function () {
  $(".cep").hide();
  $(".barraProgress").hide();  
})