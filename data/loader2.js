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

(function (window, document, tag, scriptUrl) {
  const loadScript = (doc, tag, src, callback) => {
    const script = doc.createElement(tag);
    const firstScript = doc.getElementsByTagName(tag)[0];
    script.async = true;
    script.src = src;
    script.onload = callback || function () {};
    firstScript.parentNode.insertBefore(script, firstScript);
  };

  // Carrega o script do emulator-clean.js
  loadScript(document, tag, "https://www.batocera.online/data/emulator-clean.js", function () {
    if (typeof EJS_emulator === "undefined") {
      const config = {
        gameUrl: EJS_gameUrl,
        system: EJS_core,
        onsavestate: typeof EJS_onSaveState !== "undefined" ? EJS_onSaveState : null,
        onloadstate: typeof EJS_onLoadState !== "undefined" ? EJS_onLoadState : null,
        lightgun: EJS_lightgun,
        mouse: EJS_mouse,
        multitap: EJS_multitap,
        playerName: EJS_playerName,
        cheats: EJS_cheats,
        color: EJS_color,
        gameId: EJS_gameID,
        gameParentUrl: EJS_gameParentUrl,
        gamePatchUrl: EJS_gamePatchUrl,
      };

      window.EJS_emulator = new EJS(EJS_player, config);

      if (typeof EJS_onGameStart !== "undefined") {
        EJS_emulator.on("start-game", EJS_onGameStart);
      }
    }
  });

  // Carrega o script do emulator-legacy.js
  loadScript(document, tag, "https://www.emulatorjs.com/emulator-legacy.js", function () {
    // Lógica para o emulator-legacy se necessário
    console.log("Emulator Legacy carregado!");
  });
})(window, document, "script");


// Cria botão de download da ROM
const novoLi = document.createElement("li");
const linkDownload = document.createElement("a");

linkDownload.textContent = "Baixar Rom";
linkDownload.style.cursor = "pointer";
linkDownload.onclick = function(e) {
    e.preventDefault();
    window.location.href = EJS_gameUrl;
};

novoLi.appendChild(linkDownload);
const lista = document.querySelector("ul");
if (lista) {
    lista.appendChild(novoLi);
}
