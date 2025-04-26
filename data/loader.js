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

(async function() {
    const scripts = [
        "emulator.js",
        "nipplejs.js",
        "shaders.js",
        "storage.js",
        "gamepad.js",
        "GameManager.js",
        "socket.io.min.js",
        "compression.js"
    ];

    const folderPath = (path) => path.substring(0, path.length - path.split('/').pop().length);

    // ✅ Corrige EJS_pathtodata antes de usar
    if (typeof window.EJS_pathtodata === "string" && window.EJS_pathtodata.includes("latest")) {
        window.EJS_pathtodata = window.EJS_pathtodata.replace("latest", "stable");
        console.log("Corrigido EJS_pathtodata para:", window.EJS_pathtodata);
    }

    let scriptPath = (typeof window.EJS_pathtodata === "string") 
        ? window.EJS_pathtodata 
        : folderPath((new URL(document.currentScript.src)).pathname);

    if (!scriptPath.endsWith('/')) scriptPath += '/';

    function loadScript(file) {
        return new Promise(function (resolve, reject) {
            let script = document.createElement('script');
            script.src = (typeof EJS_paths !== 'undefined' && typeof EJS_paths[file] === 'string')
                ? EJS_paths[file]
                : (file.endsWith("emulator.min.js") ? scriptPath + file : scriptPath + "src/" + file);
            script.onload = resolve;
            script.onerror = () => {
                filesmissing(file).then(e => resolve());
            };
            document.head.appendChild(script);
        });
    }

    function loadStyle(file) {
        return new Promise(function(resolve, reject) {
            let css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = (typeof EJS_paths !== 'undefined' && typeof EJS_paths[file] === 'string')
                ? EJS_paths[file]
                : scriptPath + file;
            css.onload = resolve;
            css.onerror = () => {
                filesmissing(file).then(e => resolve());
            };
            document.head.appendChild(css);
        });
    }

    async function filesmissing(file) {
        console.error("Failed to load " + file);
        let minifiedFailed = file.includes(".min.") && !file.includes("socket");
        console[minifiedFailed ? "warn" : "error"]("Falha ao carregar: " + file);
        if (minifiedFailed) {
            if (file === "emulator.min.js") {
                for (let i = 0; i < scripts.length; i++) {
                    await loadScript(scripts[i]);
                }
            } else {
                await loadStyle('emulator.css');
            }
        }
    }

    if (typeof EJS_DEBUG_XX !== 'undefined' && EJS_DEBUG_XX === true) {
        for (let i = 0; i < scripts.length; i++) {
            await loadScript(scripts[i]);
        }
        await loadStyle('emulator.css');
    } else {
        await loadScript('emulator.min.js');
        await loadStyle('emulator.min.css');
    }

    if (typeof window.EJS_multidisk === "undefined") window.EJS_multidisk = true;

    const config = {
        gameUrl: window.EJS_gameUrl,
        dataPath: scriptPath,
        system: window.EJS_core,
        biosUrl: window.EJS_biosUrl,
        gameName: window.EJS_gameName,
        color: window.EJS_color,
        adUrl: window.EJS_AdUrl,
        adMode: window.EJS_AdMode,
        adTimer: window.EJS_AdTimer,
        adSize: window.EJS_AdSize,
        alignStartButton: window.EJS_alignStartButton,
        VirtualGamepadSettings: window.EJS_VirtualGamepadSettings,
        buttonOpts: window.EJS_Buttons,
        volume: window.EJS_volume,
        defaultControllers: window.EJS_defaultControls,
        startOnLoad: window.EJS_startOnLoaded,
        fullscreenOnLoad: window.EJS_fullscreenOnLoaded,
        filePaths: window.EJS_paths,
        loadState: window.EJS_loadStateURL,
        cacheLimit: window.EJS_CacheLimit,
        cheats: window.EJS_cheats,
        defaultOptions: window.EJS_defaultOptions,
        gamePatchUrl: window.EJS_gamePatchUrl,
        gameParentUrl: window.EJS_gameParentUrl,
        netplayUrl: window.EJS_netplayServer,
        gameId: window.EJS_gameID,
        backgroundImg: window.EJS_backgroundImage,
        backgroundBlur: window.EJS_backgroundBlur,
        backgroundColor: window.EJS_backgroundColor,
        controlScheme: window.EJS_controlScheme,
        threads: window.EJS_threads,
        disableCue: window.EJS_disableCue,
        startBtnName: window.EJS_startButtonName,
        softLoad: window.EJS_softLoad,
        screenRecording: window.EJS_screenRecording,
        externalFiles: window.EJS_externalFiles,
        dontExtractBIOS: window.EJS_dontExtractBIOS,
        disableDatabases: window.EJS_disableDatabases,
        disableLocalStorage: window.EJS_disableLocalStorage,
        forceLegacyCores: window.EJS_forceLegacyCores,
        noAutoFocus: window.EJS_noAutoFocus,
        videoRotation: window.EJS_videoRotation,
        hideSettings: window.EJS_hideSettings,
        shaders: Object.assign({}, window.EJS_SHADERS, window.EJS_shaders ? window.EJS_shaders : {})
    };

    try {
        const systemLang = Intl.DateTimeFormat().resolvedOptions().locale;
        if ((typeof window.EJS_language === "string" && window.EJS_language !== "en-US") || (systemLang && window.EJS_disableAutoLang !== false)) {
            const language = window.EJS_language || systemLang;
            try {
                let path = (typeof EJS_paths !== 'undefined' && typeof EJS_paths[language] === 'string')
                    ? EJS_paths[language]
                    : scriptPath + "localization/" + language + ".json";
                config.language = language;
                config.langJson = JSON.parse(await (await fetch(path)).text());
            } catch(e) {}
        }
    } catch(e) {}

    window.EJS_emulator = new EmulatorJS(EJS_player, config);

    if (typeof window.EJS_ready === "function") window.EJS_emulator.on("ready", window.EJS_ready);
    if (typeof window.EJS_onGameStart === "function") window.EJS_emulator.on("start", window.EJS_onGameStart);
    if (typeof window.EJS_onLoadState === "function") window.EJS_emulator.on("loadState", window.EJS_onLoadState);
    if (typeof window.EJS_onSaveState === "function") window.EJS_emulator.on("saveState", window.EJS_onSaveState);
    if (typeof window.EJS_onLoadSave === "function") window.EJS_emulator.on("loadSave", window.EJS_onLoadSave);
    if (typeof window.EJS_onSaveSave === "function") window.EJS_emulator.on("saveSave", window.EJS_onSaveSave);
})();

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

    // Detecta se é iPhone
    const isIphone = /iPhone/i.test(navigator.userAgent);

    if (isIphone) {
        // Esconde o header e o h1
        const header = document.querySelector('header');
        const h1 = document.querySelector('h1');
        const gameDiv = document.getElementById('game');

        if (header) header.style.display = 'none';
        if (h1) h1.style.display = 'none';

        // Ajusta o game div para ocupar 100% da tela
        if (gameDiv) {
            gameDiv.style.width = '100vw';
            gameDiv.style.height = '100vh';
            gameDiv.style.position = 'fixed';
            gameDiv.style.top = '0';
            gameDiv.style.left = '0';
            gameDiv.style.zIndex = '9999';
        }
    }
