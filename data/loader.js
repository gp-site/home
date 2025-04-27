// Bloqueia botão direito do mouse
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

// Bloqueia teclas específicas
document.addEventListener('keydown', function(e) {
    const key = e.key.toLowerCase();
    if (
        e.key === "F12" ||
        (e.ctrlKey && key === 'u') ||
        (e.ctrlKey && key === 's') ||
        (e.ctrlKey && key === 'p') ||
        (e.ctrlKey && key === 'c') ||
        (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j'))
    ) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Comando bloqueado:", key);
        return false;
    }
});

// Função para carregar scripts um por um
async function carregarScripts() {
    const arquivos = [
        "https://batocera.online/data/src/emulator.js",
        "https://batocera.online/data/src/nipplejs.js",
        "https://batocera.online/data/src/shaders.js",
        "https://batocera.online/data/src/storage.js",
        "https://batocera.online/data/src/gamepad.js",
        "https://batocera.online/data/src/GameManager.js",
        "https://batocera.online/data/src/socket.io.min.js",
        "https://batocera.online/data/src/compression.js"
    ];

    for (const url of arquivos) {
        await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => {
                console.log(`Carregado: ${url}`);
                resolve();
            };
            script.onerror = () => {
                console.error(`Erro ao carregar: ${url}`);
                reject();
            };
            document.head.appendChild(script);
        });
    }

    iniciarEmulador(); // Depois de tudo carregado
}

// Função para carregar CSS
function carregarCSS() {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = "https://batocera.online/data/emulator.css"; // caminho já completo!
    document.head.appendChild(css);
}

// Iniciar o emulador
function iniciarEmulador() {
    const config = {
        gameUrl: window.EJS_gameUrl,
        dataPath: window.EJS_pathtodata,
        system: window.EJS_core,
        gameName: window.EJS_gameName
    };

    window.EJS_emulator = new EmulatorJS('game', config);

    if (typeof window.EJS_ready === "function") window.EJS_emulator.on("ready", window.EJS_ready);
    if (typeof window.EJS_onGameStart === "function") window.EJS_emulator.on("start", window.EJS_onGameStart);
}

// Começar carregando tudo
carregarCSS();
carregarScripts();
</script>

<script>
// Cria botão de download da ROM
const novoLi = document.createElement("li");
const linkDownload = document.createElement("a");

linkDownload.textContent = "Baixar Rom";
linkDownload.style.cursor = "pointer";
linkDownload.onclick = function(e) {
    e.preventDefault();
    window.location.href = window.EJS_gameUrl;
};

novoLi.appendChild(linkDownload);
const lista = document.querySelector("ul");
if (lista) {
    lista.appendChild(novoLi);
}

// Ajuste para iPhone
const isIphone = /iPhone/i.test(navigator.userAgent);

if (isIphone) {
    const topDiv = document.getElementById('top');
    if (topDiv) topDiv.style.display = 'none';

    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';

    const gameDiv = document.getElementById('game');
    if (gameDiv) {
        gameDiv.style.width = '100vw';
        gameDiv.style.height = '100vh';
        gameDiv.style.position = 'fixed';
        gameDiv.style.top = '0';
        gameDiv.style.left = '0';
        gameDiv.style.zIndex = '9999';
        gameDiv.style.backgroundColor = '#000';
    }
}
