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
  function loadScript(doc, tag, src, callback) {
    const script = doc.createElement(tag);
    const firstScript = doc.getElementsByTagName(tag)[0];
    script.async = true;
    script.src = src;
    script.onload = callback || function () {};
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  loadScript(document, tag, scriptUrl, function () {
    if (typeof EJS_emulator === "undefined") {
      const config = {
        gameUrl: typeof EJS_gameUrl !== "undefined" ? EJS_gameUrl : "",
        system: typeof EJS_core !== "undefined" ? EJS_core : "",
        onsavestate: typeof EJS_onSaveState !== "undefined" ? EJS_onSaveState : null,
        onloadstate: typeof EJS_onLoadState !== "undefined" ? EJS_onLoadState : null,
        lightgun: typeof EJS_lightgun !== "undefined" ? EJS_lightgun : undefined,
        mouse: typeof EJS_mouse !== "undefined" ? EJS_mouse : undefined,
        multitap: typeof EJS_multitap !== "undefined" ? EJS_multitap : undefined,
        playerName: typeof EJS_playerName !== "undefined" ? EJS_playerName : undefined,
        cheats: typeof EJS_cheats !== "undefined" ? EJS_cheats : undefined,
        color: typeof EJS_color !== "undefined" ? EJS_color : undefined,
        gameId: typeof EJS_gameID !== "undefined" ? EJS_gameID : undefined,
        gameParentUrl: typeof EJS_gameParentUrl !== "undefined" ? EJS_gameParentUrl : undefined,
        gamePatchUrl: typeof EJS_gamePatchUrl !== "undefined" ? EJS_gamePatchUrl : undefined,
      };

      window.EJS_emulator = new EJS(EJS_player, config);

      if (typeof EJS_onGameStart !== "undefined") {
        EJS_emulator.on("start-game", EJS_onGameStart);
      }
    }
  });
})(window, document, "script", "emulator-clean.js");

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
