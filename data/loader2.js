// Bloqueia botão direito do mouse
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

// Bloqueia teclas específicas
document.addEventListener('keydown', function(e) {
    // Convertendo tecla para minúsculo e verificando combinações
    const key = e.key.toLowerCase();

    if (
        e.key === "F12" ||                            // F12
        (e.ctrlKey && key === 'u') ||                // Ctrl+U
        (e.ctrlKey && key === 's') ||                // Ctrl+S
        (e.ctrlKey && key === 'p') ||                // Ctrl+P
        (e.ctrlKey && key === 'c') ||                // Ctrl+C
        (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j')) // Ctrl+Shift+I / J
    ) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Comando bloqueado:", key);
        return false;
    }
});
                
// Cria botão de download da ROM
const novoLi = document.createElement("li");
const linkDownload = document.createElement("a");

// Texto do botão
linkDownload.textContent = "Baixar Rom";

// Não define href para evitar exibir URL na barra de status
linkDownload.style.cursor = "pointer"; // Mantém aparência de link
linkDownload.onclick = function(e) {
    e.preventDefault();
    window.location.href = EJS_gameUrl; // Redireciona para a ROM
};

// Adiciona ao <li> e à <ul>
novoLi.appendChild(linkDownload);
const lista = document.querySelector("ul");
if (lista) {
    lista.appendChild(novoLi);
}
const loaderScript = document.createElement('script');
    loaderScript.src = 'https://www.emulatorjs.com/loader.js';
    loaderScript.onload = function () {
        console.log('Loader carregado com sucesso.');
    };
    loaderScript.onerror = function () {
        console.error('Falha ao carregar o loader.');
    };
    document.body.appendChild(loaderScript);

