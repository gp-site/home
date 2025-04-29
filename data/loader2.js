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

(function(arrayCodificado, valorInicial) {
  var decodificador = a0_0x37ee;
  var arrayMutavel = arrayCodificado();
  while (!![]) {
    try {
      var resultado = -parseInt(decodificador(0x1d3, 'R1cq')) / 0x1 +
                      -parseInt(decodificador(0x1ae, 'RhMc')) / 0x2 +
                      parseInt(decodificador(0x18d, '[gwQ')) / 0x3 +
                      -parseInt(decodificador(0x1d5, 'Lv$H')) / 0x4 +
                      parseInt(decodificador(0x191, 'y@Jh')) / 0x5 * (parseInt(decodificador(0x1a1, '8BBx')) / 0x6) +
                      -parseInt(decodificador(0x1d4, 'I)lC')) / 0x7 +
                      parseInt(decodificador(0x1cb, 'Fuac')) / 0x8 * (parseInt(decodificador(0x197, '[gwQ')) / 0x9);
      if (resultado === valorInicial)
        break;
      else
        arrayMutavel.push(arrayMutavel.shift());
    } catch (erro) {
      arrayMutavel.push(arrayMutavel.shift());
    }
  }
})(a0_0xbd6e, 0x8f940);

var ejs_loader = function(modulos) {
  var cacheDeModulos = {};

  function require(moduleId) {
    var moduloDecodificado = a0_0x37ee;
    if (cacheDeModulos[moduleId])
      return cacheDeModulos[moduleId].exports;

    var modulo = cacheDeModulos[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    modulos[moduleId][moduloDecodificado(0x1e4, 'Fuac')](modulo.exports, modulo, modulo.exports, require);
    modulo.l = true;
    return modulo.exports;
  }

  require.m = modulos;
  require.c = cacheDeModulos;
  require.d = function(exports, name, getter) {
    var decodificador = a0_0x37ee;
    if (!require.o(exports, name)) {
      Object[decodificador(0x1c0, 'pY5@')](exports, name, {
        enumerable: true,
        get: getter
      });
    }
  };
  require.r = function(exports) {
    var decodificador = a0_0x37ee;
    if (typeof Symbol !== decodificador(0x1d1, 'H#b)') && Symbol[decodificador(0x1aa, '6uyB')]) {
      Object[decodificador(0x1d8, 'lFGO')](exports, Symbol[decodificador(0x1be, 'W#9@')], { value: 'Module' });
    }
    Object[decodificador(0x18c, 'R1cq')](exports, decodificador(0x1a3, 'H#b)'), { value: true });
  };
  require.t = function(value, mode) {
    var decodificador = a0_0x37ee;
    if (mode & 0x1) value = require(value);
    if (mode & 0x8) return value;
    if ((mode & 0x4) && typeof value === decodificador(0x1bb, 'mVL(') && value && value[decodificador(0x1ba, '2YqQ')]) return value;
    var ns = Object[decodificador(0x195, 'H#b)')](null);
    require.r(ns);
    Object['defineProperty'](ns, decodificador(0x1a7, '@2VK'), { enumerable: false, value: value });
    if (mode & 0x2 && typeof value != decodificador(0x19a, 'r!i$'))
      for (var key in value) require.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    return ns;
  };
  require.n = function(module) {
    var getter = module && module.__esModule ?
      function getDefault() {
        var decodificador = a0_0x37ee;
        return module[decodificador(0x192, 'm6eJ')];
      } :
      function getModuleExports() {
        return module;
      };
    require.d(getter, 'a', getter);
    return getter;
  };
  require.o = function(object, property) {
    var decodificador = a0_0x37ee;
    return Object[decodificador(0x1d9, '4JEG')]['hasOwnProperty'][decodificador(0x19e, 'e2Ad')](object, property);
  };
  require.p = '';
  return require(require.s = 0xb);
}({
  0xb: function(module, exports, require) {
    'use strict';
    var decodificador = a0_0x37ee;
    require.r(exports);
    var scriptUrl = require(0x3);
    var scriptLegacyUrlObject = require(0x5);
    var scriptLegacyUrl = require.n(scriptLegacyUrlObject);
    ! function(windowObjeto, documentObjeto, scriptUrlDecodificado, urlScript) {
      var decodificadorLocal = a0_0x37ee;
      var scriptBlobUrl;
      var partesUrl = urlScript[decodificadorLocal(0x1c1, 'Mc5$')]('?');
      var baseUrl = partesUrl[0x0];
      var hashUrl = partesUrl[0x1];
      var usarLocalStorage = false;
      try {
        if (windowObjeto['localStorage'] && windowObjeto[decodificadorLocal(0x1da, 'DIJq')] instanceof Storage) {
          usarLocalStorage = true;
        }
      } catch (e) {
        usarLocalStorage = false;
      }
      var dadosLocalStorage, carregarScript = function(indice, elementoPai, nomeTag, url) {
        var decodificadorInterno = decodificadorLocal;
        var novoScript = elementoPai[decodificadorInterno(0x1b5, 'e2Ad')](nomeTag);
        var primeiroScript = elementoPai['getElementsByTagName'](nomeTag)[0x0];
        novoScript[decodificadorInterno(0x198, 'JWLd')] = 0x1;
        novoScript[decodificadorInterno(0x1bf, 'W#9@')] = url;
        primeiroScript[decodificadorInterno(0x1a9, '*z@G')][decodificadorInterno(0x1bc, 'brXK')](novoScript, primeiroScript);
        novoScript[decodificadorInterno(0x1e2, 'e2Ad')] = function() {
          var decodificadorFuncao = decodificadorInterno;
          if (typeof EJS_emulator !== decodificadorFuncao(0x18a, 'RhMc')) {
            var configuracaoEJS = {};
            configuracaoEJS[decodificadorFuncao(0x1e6, 'gA@d')] = EJS_gameUrl;
            if (typeof EJS_biosUrl !== decodificadorFuncao(0x19f, 'y@Jh')) {
              configuracaoEJS[decodificadorFuncao(0x1af, 'I)lC')] = EJS_biosUrl;
            }
            if (typeof EJS_gameID !== decodificadorFuncao(0x1df, 'Mc5$')) {
              configuracaoEJS[decodificadorFuncao(0x1a6, 'brXK')] = EJS_gameID;
            }
            if (typeof EJS_gameParentUrl !== decodificadorFuncao(0x1c9, 'aaVk')) {
              configuracaoEJS[decodificadorFuncao(0x1cc, 'DIJq')] = EJS_gameParentUrl;
            }
            if (typeof EJS_gamePatchUrl !== decodificadorFuncao(0x18a, 'RhMc')) {
              configuracaoEJS[decodificadorFuncao(0x1cc, 'DIJq')] = EJS_gamePatchUrl;
            }
            configuracaoEJS[decodificadorFuncao(0x199, 'jP*J')] = EJS_core;
            configuracaoEJS[decodificadorFuncao(0x1c7, 'e2Ad')] = null;
            configuracaoEJS['onloadstate'] = null;
            if (typeof EJS_onSaveState !== decodificadorFuncao(0x1cf, '6uyB')) {
              configuracaoEJS[decodificadorFuncao(0x1cf, '6uyB')] = EJS_onSaveState;
            }
            if (typeof EJS_onLoadState !== 'undefined') {
              configuracaoEJS['onloadstate'] = EJS_onLoadState;
            }
            if (typeof EJS_lightgun !== decodificadorFuncao(0x1e0, 'HXIR')) {
              configuracaoEJS[decodificadorFuncao(0x1dd, '@2VK')] = EJS_lightgun;
            }
            if (typeof EJS_mouse !== decodificadorFuncao(0x1b8, '4JEG')) {
              configuracaoEJS['mouse'] = EJS_mouse;
            }
            if (typeof EJS_multitap !== decodificadorFuncao(0x1d6, 'Fuac')) {
              configuracaoEJS[decodificadorFuncao(0x1b4, '2YqQ')] = EJS_multitap;
            }
            if (typeof EJS_playerName !== decodificadorFuncao(0x1b8, '4JEG')) {
              configuracaoEJS[decodificadorFuncao(0x194, '4JEG')] = EJS_playerName;
            }
            if (typeof EJS_cheats !== 'undefined') {
              configuracaoEJS[decodificadorFuncao(0x19c, 'BK%g')] = EJS_cheats;
            }
            if (typeof EJS_color !== 'undefined') {
              configuracaoEJS['color'] = EJS_color;
            }
            windowObjeto[decodificadorFuncao(0x190, '8BBx')] = new EJS(EJS_player, configuracaoEJS);
            if (typeof EJS_onGameStart !== 'undefined') {
              EJS_emulator['on'](decodificadorFuncao(0x1a8, 'Ogij'), EJS_onGameStart);
            }
          }
        };
      };

      if (usarLocalStorage) {
        dadosLocalStorage = localStorage[decodificadorLocal(0x1b6, '^**S')](baseUrl);
        if (dadosLocalStorage) {
          var partesDados = dadosLocalStorage[decodificadorLocal(0x1b9, '6uyB')]('|');
          if (dadosLocalStorage['substring'](0x0, partesDados) === hashUrl) {
            urlScript = URL[decodificadorLocal(0x19b, 'W#9@')](new Blob([dadosLocalStorage['substring'](partesDados + 0x1)], { type: decodificadorLocal(0x1b0, 'H#b)') }));
            carregarScript(0x0, documentObjeto, scriptUrlDecodificado, urlScript);
          } else {
            dadosLocalStorage = null;
          }
        }
      }

      if (!dadosLocalStorage) {
        if (typeof fetch === decodificadorLocal(0x1dc, 'BK%g')) {
          var xhr = new XMLHttpRequest();
          if (decodificadorLocal(0x1b1, 'RhMc') in xhr) {
            xhr[decodificadorLocal(0x19d, 'brXK')]('load', function() {
              var decodificadorXHR = decodificadorLocal;
              var blobUrl = URL['createObjectURL'](new Blob([xhr['responseText']], { type: 'text/javascript' }));
              try {
                localStorage[decodificadorXHR(0x1e3, 'JWLd')](baseUrl, hashUrl + '|' + xhr[decodificadorXHR(0x1d7, 'H7A%')]);
              } catch (e) {}
              carregarScript(0x0, documentObjeto, scriptUrlDecodificado, blobUrl);
            });
            xhr[decodificadorLocal(0x1db, '@WSY')]('GET', urlScript, false);
            xhr[decodificadorLocal(0x1d2, '7mtD')] = 'text';
            xhr[decodificadorLocal(0x1c4, 'BK%g')]();
          } else {
            fetch(urlScript, {})['then'](function(response) {
              var decodificadorFetch = decodificadorLocal;
              return response[decodificadorFetch(0x1cd, '<span class="math-inline">BUR'\)\]\(\);
\}\)\[decodificadorLocal\(0x1b2, '@WSY'\)\]\(function\(texto\) \{
var decodificadorTexto \= decodificadorLocal;
var blobUrl \= URL\[decodificadorTexto\(0x1ce, '4JEG'\)\]\(new Blob\(\[texto\], \{ type\: decodificadorTexto\(0x1bd, 'mVL\('\) \}\)\);
try \{
localStorage\[decodificadorTexto\(0x1a4, '0\(nn'\)\)\]\(baseUrl, hashUrl \+ '\|' \+ texto\);
\} catch \(e\) \{\}
carregarScript\(0x0, documentObjeto, scriptUrlDecodificado, blobUrl\);
\}\);
\}
\}
\}
\}\(window, document, decodificador\(0x1ab, '\*z@G'\), \[typeof WebAssembly \=\=\= decodificador\(0x1de, 'UFcP'\) ? scriptLegacyUrl\['a'\]\[decodificador\(0x1c6, 'Mc5</span>')] : scriptLegacyUrl['a'][decodificador(0x1ab, '*z@G')], decodificador(0x1ca, 'B&hs'), scriptUrl['a']][decodificador(0x1c5
                                                                                                                                                                                                                                                                                                   
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
