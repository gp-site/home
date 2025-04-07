(async function () {
    const baseURL = "https://www.emulatorjs.com/";
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

    function loadScript(file) {
        return new Promise(function (resolve, reject) {
            let script = document.createElement('script');
            script.src = baseURL + file;
            script.onload = resolve;
            script.onerror = () => {
                console.error("Erro ao carregar script:", file);
                resolve(); // continua mesmo se falhar
            }
            document.head.appendChild(script);
        });
    }

    function loadStyle(file) {
        return new Promise(function (resolve, reject) {
            let css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = baseURL + file;
            css.onload = resolve;
            css.onerror = () => {
                console.error("Erro ao carregar estilo:", file);
                resolve();
            }
            document.head.appendChild(css);
        });
    }

    const useDebug = (typeof window.EJS_DEBUG_XX !== "undefined" && window.EJS_DEBUG_XX === true);

    if (useDebug) {
        for (let i = 0; i < scripts.length; i++) {
            await loadScript("src/" + scripts[i]);
        }
        await loadStyle("emulator.css");
    } else {
        await loadScript("emulator.min.js");
        await loadStyle("emulator.min.css");
    }

    const config = {
        gameUrl: window.EJS_gameUrl,
        dataPath: baseURL,
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
        shaders: Object.assign({}, window.EJS_SHADERS, window.EJS_shaders || {})
    };

    // Carregamento de idioma
    let systemLang;
    try {
        systemLang = Intl.DateTimeFormat().resolvedOptions().locale;
    } catch (e) {}

    if ((typeof window.EJS_language === "string" && window.EJS_language !== "en-US") || (systemLang && window.EJS_disableAutoLang !== false)) {
        const language = window.EJS_language || systemLang;
        try {
            console.log("Loading language", language);
            const path = baseURL + "localization/" + language + ".json";
            config.language = language;
            config.langJson = JSON.parse(await (await fetch(path)).text());
        } catch (e) {
            console.log("Missing language", language);
        }
    }

    window.EJS_emulator = new EmulatorJS(EJS_player, config);
    window.EJS_adBlocked = (url, del) => window.EJS_emulator.adBlocked(url, del);

    if (typeof window.EJS_ready === "function") {
        window.EJS_emulator.on("ready", window.EJS_ready);
    }
    if (typeof window.EJS_onGameStart === "function") {
        window.EJS_emulator.on("start", window.EJS_onGameStart);
    }
    if (typeof window.EJS_onLoadState === "function") {
        window.EJS_emulator.on("loadState", window.EJS_onLoadState);
    }
    if (typeof window.EJS_onSaveState === "function") {
        window.EJS_emulator.on("saveState", window.EJS_onSaveState);
    }
    if (typeof window.EJS_onLoadSave === "function") {
        window.EJS_emulator.on("loadSave", window.EJS_onLoadSave);
    }
    if (typeof window.EJS_onSaveSave === "function") {
        window.EJS_emulator.on("saveSave", window.EJS_onSaveSave);
    }
})();
