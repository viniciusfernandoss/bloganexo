fetch("/assets/js/artigos.json").then((response) => {
  response.json().then((dados) => {
    const artigo = dados.artigos.find(
      (artigo) =>
        artigo.url === window.location.pathname.replace("/artigos/", "")
    );

    document.querySelector(".artigos-info").innerHTML = `
      <p>Artigos / <a href="/assets/artigos/${artigo.categoria.toLowerCase()}.html">${
      artigo.categoria
    }</a> - <i class="bi bi-calendar"> ${artigo.data}</i></p>
    `;
    window.document.title = `${artigo.titulo} | Blog Anexo Gestão Contábil`;
  });
});

const curtirButton = document.getElementById("curtirButton");
const compartilharButton = document.getElementById("compartilharButton");
const compartilharOptions = document.getElementById("compartilharOptions");
const urlDisplay = document.getElementById("urlDisplay");
const copiarButton = document.getElementById("copiarButton");
const whatsappButton = document.getElementById("whatsappButton");

let curtida = localStorage.getItem("curtida") === "true";

const atualizarEstadoCurtida = () => {
  if (curtida) {
    // Se já foi curtido, voltar ao estado normal
    curtirButton.style.backgroundColor = "";
    curtirButton.style.color = "";
    curtirButton.innerHTML = "Curtir <i class='bi bi-hand-thumbs-up'/>";
  } else {
    // Se não foi curtido, marcar como curtido
    curtirButton.style.backgroundColor = "red";
    curtirButton.style.color = "white";
    curtirButton.innerHTML = "Curtido <i class='bi bi-hand-thumbs-up-fill'/>";
  }
  localStorage.setItem("curtida", curtida.toString());
};

const toggleCurtirButton = () => {
  curtida = !curtida;
  atualizarEstadoCurtida();
};

const compartilharWhatsapp = () => {
  const whatText = `Veja esse artigo interessante: \n\n${window.location.href}`;
  whatsappButton.setAttribute(
    "href",
    `https://api.whatsapp.com/send?text=${encodeURIComponent(whatText)}`
  );
  whatsappButton.setAttribute("target", "_blank");
};

/*
window.onload = () => {
  // Obtém a referência ao elemento existente
  var container = document.getElementById("renderizar");

  container.innerHTML = `
  <div>
    <button id="curtirButton">Curtir <i class="bi bi-hand-thumbs-up"></i></button>
    <button id="compartilharButton">Compartilhar</button>
    <div class="compartilharOptions" id="compartilharOptions">
      <p>Compartilhar esta página:</p>
      <div class="urlContainer">
        <span id="urlDisplay"></span>
        <button id="copiarButton">Copiar <i class="bi bi-copy"></i></button>
      </div>qq
      <a class="whatsappbtn" id="whatsappButton">WhatsApp <i class="bi bi-whatsapp"></i></a>         
    </div>
  </div>
`;

  console.log("Elemento renderizado!");
};

*/

const toggleCompartilharOptions = () => {
  compartilharOptions.style.display =
    compartilharOptions.style.display === "block" ? "none" : "block";
};

const copiarUrlParaAreaDeTransferencia = () => {
  const urlText = urlDisplay.innerText;
  navigator.clipboard
    .writeText(urlText)
    .then(() => {
      alert("URL copiada para a área de transferência!");
    })
    .catch((error) => {
      console.error("Erro ao copiar: ", error);
    });
};

curtirButton.addEventListener("click", toggleCurtirButton);
compartilharButton.addEventListener("click", () => {
  compartilharWhatsapp();
});
copiarButton.addEventListener("click", copiarUrlParaAreaDeTransferencia);

document.addEventListener("DOMContentLoaded", () => {
  atualizarEstadoCurtida();
  urlDisplay.innerText = window.location.href;
});
