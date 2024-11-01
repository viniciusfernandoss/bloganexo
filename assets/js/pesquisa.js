var query = location.search.slice(1);
var partes = query.split("&");
var data = {};
partes.forEach(function (parte) {
  var chaveValor = parte.split("=");
  var chave = chaveValor[0];
  var valor = chaveValor[1];
  data[chave] = valor;
});

const termosPesquisa = data.pesquisa.toLowerCase();

const pesquisaDiv = document.getElementById("resultadoPesquisa");
const artigosRenderizados = document.createElement("section", "artigos-renderizados")
pesquisaDiv.appendChild(artigosRenderizados)

if (data.pesquisa == "") {
  pesquisaDiv.innerHTML = `
        <div class="p-resultado">
            <p>Nenhum parâmetro de pesquisa passado</p>
        </div>
    `;
} else {
  pesquisaDiv.innerHTML = `
    <div class="p-resultado">
        <p>Resultados para: <strong>${data.pesquisa}</strong></p>
    </div>
`;
}

// Aqui você pode carregar e analisar o arquivo artigos.json e comparar os termos de pesquisa com os objetivos armazenados
fetch("/assets/js/artigos.json")
.then((response) => response.json())
.then((data) => {
  // filtrar os artigos com base nos termos de pesquisa
  var artigosFiltrados = data.artigos.filter((artigo) => {
    return (
      artigo.titulo.toLowerCase().includes(termosPesquisa) ||
      artigo.descricao.toLowerCase().includes(termosPesquisa) ||
      artigo.categoria.toLowerCase().includes(termosPesquisa)
    );
  });

  if (artigosFiltrados == 0) {
    pesquisaDiv.innerHTML += `
      <div class="p-resultado">
        <p><strong>Nenhum artigo para ${data.pesquisa} encontrado</strong></p>
      </div>
    `;
  } else {
    artigosFiltrados.forEach((artigo) => {
      pesquisaDiv.innerHTML += `
          <article>
            <div class="col-lg-4 card rounded-3 elevacao div-artigo artigo-resultado">
              <div class="card-body card-artigo">
                <img
                  src="${artigo.imagem}">
                <p class="category">${artigo.categoria}</p>
  
              </div>
  
              <div class="p-4">
                <h4 class=" ">${artigo.titulo}</h4>
                <p class="py-2">${artigo.descricao}</p>
                <a
                  href="/artigos/${artigo.url}"
                  class="text-decoration-none">Ver mais</a>
              </div>
            </div>
          </article>
      `;
    });
  }
});