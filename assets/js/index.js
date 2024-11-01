document.addEventListener("DOMContentLoaded", function () {
  var inputPesquisa = document.getElementById("pesquisa");
  var botaoPesquisa = document.getElementById("botaoPesquisa");

  // Adiciona um ouvinte de evento para o clique no botão
  botaoPesquisa.addEventListener("click", function () {
    realizarPesquisa();
  });

  // Adiciona um ouvinte de evento para a tecla "Enter" no campo de pesquisa
  inputPesquisa.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      realizarPesquisa();
    }
  });

  // Encaminha o usuario para a pagina de pesquisa, passando os termos de pesquisa. 
  // Trabalho de filtrar a pesquisa está em pesquisa.js
  function realizarPesquisa() {
    // Obtém os termos de pesquisa do campo de entrada
    var termosPesquisa = inputPesquisa.value.toLowerCase();

    location.href = "/pesquisa.html?pesquisa=" + termosPesquisa;
  }
});