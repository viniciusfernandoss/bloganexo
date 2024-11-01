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
