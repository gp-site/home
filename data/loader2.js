// Bloqueia botão direito do mouse
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, false);

// Bloqueia teclas específicas
document.addEventListener('keydown', function (e) {
  const key = e.key.toLowerCase();
  if (e.key === "F12" || e.ctrlKey && key === 'u' || e.ctrlKey && key === 's' || e.ctrlKey && key === 'p' || e.ctrlKey && key === 'c' || e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j')) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Comando bloqueado:", key);
    return false;
  }
});
var ejs_loader = function (_0x43a89d) {
  function _0x5213cb(_0x1bb90e) {
    if (_0x51a53b[_0x1bb90e]) {
      return _0x51a53b[_0x1bb90e].exports;
    }
    var _0x818dd1 = _0x51a53b[_0x1bb90e] = {
      'i': _0x1bb90e,
      'l': false,
      'exports': {}
    };
    _0x43a89d[_0x1bb90e].call(_0x818dd1.exports, _0x818dd1, _0x818dd1.exports, _0x5213cb);
    _0x818dd1.l = true;
    return _0x818dd1.exports;
  }
  var _0x51a53b = {};
  _0x5213cb.m = _0x43a89d;
  _0x5213cb.c = _0x51a53b;
  _0x5213cb.d = function (_0x460566, _0xf2ec33, _0x4b0e78) {
    if (!_0x5213cb.o(_0x460566, _0xf2ec33)) {
      Object.defineProperty(_0x460566, _0xf2ec33, {
        'enumerable': true,
        'get': _0x4b0e78
      });
    }
  };
  _0x5213cb.r = function (_0x325236) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(_0x325236, Symbol.toStringTag, {
        'value': 'Module'
      });
    }
    Object.defineProperty(_0x325236, "__esModule", {
      'value': true
    });
  };
  _0x5213cb.t = function (_0x3fe939, _0x301b70) {
    if (0x1 & _0x301b70) {
      _0x3fe939 = _0x5213cb(_0x3fe939);
    }
    if (0x8 & _0x301b70) {
      return _0x3fe939;
    }
    if (0x4 & _0x301b70 && "object" == typeof _0x3fe939 && _0x3fe939 && _0x3fe939.__esModule) {
      return _0x3fe939;
    }
    var _0x132362 = Object.create(null);
    _0x5213cb.r(_0x132362);
    Object.defineProperty(_0x132362, "default", {
      'enumerable': true,
      'value': _0x3fe939
    });
    if (0x2 & _0x301b70 && "string" != typeof _0x3fe939) {
      for (var _0x303769 in _0x3fe939) _0x5213cb.d(_0x132362, _0x303769, function (_0x3c4216) {
        return _0x3fe939[_0x3c4216];
      }.bind(null, _0x303769));
    }
    return _0x132362;
  };
  _0x5213cb.n = function (_0x187589) {
    var _0x56f6b6 = _0x187589 && _0x187589.__esModule ? function () {
      return _0x187589["default"];
    } : function () {
      return _0x187589;
    };
    _0x5213cb.d(_0x56f6b6, 'a', _0x56f6b6);
    return _0x56f6b6;
  };
  _0x5213cb.o = function (_0x24afcc, _0xcb7344) {
    return Object.prototype.hasOwnProperty.call(_0x24afcc, _0xcb7344);
  };
  _0x5213cb.p = '';
  return _0x5213cb(_0x5213cb.s = 0xb);
}({
  0xb: function (_0x16004a, _0x4f15c8, _0x284fef) {
    'use strict';

    _0x284fef.r(_0x4f15c8);
    var _0x31c507 = _0x284fef(0x3);
    var _0x267482 = _0x284fef(0x5);
    var _0x2c21b0 = _0x284fef.n(_0x267482);
    !function (_0x2f0031, _0x25257e, _0x56aa2f, _0x151a53) {
      var _0x9eb47b;
      var _0x27f0f2 = _0x151a53.split('?');
      var _0x21790d = _0x27f0f2[0x0];
      var _0x585aaa = _0x27f0f2[0x1];
      var _0xfe81d6 = false;
      try {
        if (window.localStorage && window.localStorage instanceof Storage) {
          _0xfe81d6 = true;
        }
      } catch (_0x5e8672) {
        _0xfe81d6 = false;
      }
      var _0x1b1e6d;
      var _0xd7c5c5 = function (_0x135d4d, _0x4da44d, _0x5178e1, _0x4f5e40) {
        var _0x4bb9fe = _0x4da44d.createElement(_0x5178e1);
        var _0x37d9fd = _0x4da44d.getElementsByTagName(_0x5178e1)[0x0];
        _0x4bb9fe.async = 0x1;
        _0x4bb9fe.src = _0x4f5e40;
        _0x37d9fd.parentNode.insertBefore(_0x4bb9fe, _0x37d9fd);
        _0x4bb9fe.onload = function () {
          if ("undefined" == typeof EJS_emulator) {
            var _0x6d7ad2 = {
              "gameUrl": EJS_gameUrl
            };
            if ("undefined" != typeof EJS_biosUrl) {
              _0x6d7ad2.biosUrl = EJS_biosUrl;
            }
            if ("undefined" != typeof EJS_gameID) {
              _0x6d7ad2.gameId = EJS_gameID;
            }
            if ("undefined" != typeof EJS_gameParentUrl) {
              _0x6d7ad2.gameParentUrl = EJS_gameParentUrl;
            }
            if ("undefined" != typeof EJS_gamePatchUrl) {
              _0x6d7ad2.gamePatchUrl = EJS_gamePatchUrl;
            }
            _0x6d7ad2.system = EJS_core;
            _0x6d7ad2.onsavestate = null;
            _0x6d7ad2.onloadstate = null;
            if ("undefined" != typeof EJS_onSaveState) {
              _0x6d7ad2.onsavestate = EJS_onSaveState;
            }
            if ('undefined' != typeof EJS_onLoadState) {
              _0x6d7ad2.onloadstate = EJS_onLoadState;
            }
            if ("undefined" != typeof EJS_lightgun) {
              _0x6d7ad2.lightgun = EJS_lightgun;
            }
            if ("undefined" != typeof EJS_mouse) {
              _0x6d7ad2.mouse = EJS_mouse;
            }
            if ("undefined" != typeof EJS_multitap) {
              _0x6d7ad2.multitap = EJS_multitap;
            }
            if ("undefined" != typeof EJS_playerName) {
              _0x6d7ad2.playerName = EJS_playerName;
            }
            if ('undefined' != typeof EJS_cheats) {
              _0x6d7ad2.cheats = EJS_cheats;
            }
            if ('undefined' != typeof EJS_color) {
              _0x6d7ad2.color = EJS_color;
            }
            window.EJS_emulator = new EJS(EJS_player, _0x6d7ad2);
            if ('undefined' != typeof EJS_onGameStart) {
              EJS_emulator.on("start-game", EJS_onGameStart);
            }
          }
        };
      };
      if (_0xfe81d6) {
        if (_0x9eb47b = localStorage.getItem(_0x21790d)) {
          _0x1b1e6d = _0x9eb47b.indexOf('|');
          if (_0x9eb47b.substring(0x0, _0x1b1e6d) == _0x585aaa) {
            _0x151a53 = URL.createObjectURL(new Blob([_0x9eb47b.substring(_0x1b1e6d + 0x1)], {
              'type': "text/javascript"
            }));
            _0xd7c5c5(0x0, _0x25257e, _0x56aa2f, _0x151a53);
          } else {
            _0x9eb47b = null;
          }
        }
      }
      if (!_0x9eb47b) {
        if ("undefined" == typeof fetch) {
          var _0x293828 = new XMLHttpRequest();
          if ("withCredentials" in _0x293828) {
            _0x293828.addEventListener('load', function () {
              var _0x8dea36 = URL.createObjectURL(new Blob([_0x293828.responseText], {
                'type': 'text/javascript'
              }));
              try {
                localStorage.setItem(_0x21790d, _0x585aaa + '|' + _0x293828.responseText);
              } catch (_0x2b4a2d) {}
              _0xd7c5c5(0x0, _0x25257e, _0x56aa2f, _0x8dea36);
            });
            _0x293828.open('GET', _0x151a53, true);
            _0x293828.responseType = 'text';
            _0x293828.send();
          }
        } else {
          fetch(_0x151a53, {}).then(function (_0x56c19f) {
            return _0x56c19f.text();
          }).then(function (_0x1c8d35) {
            var _0x4d1caf = URL.createObjectURL(new Blob([_0x1c8d35], {
              'type': "text/javascript"
            }));
            try {
              localStorage.setItem(_0x21790d, _0x585aaa + '|' + _0x1c8d35);
            } catch (_0x3ffebc) {}
            _0xd7c5c5(0x0, _0x25257e, _0x56aa2f, _0x4d1caf);
          });
        }
      }
    }(window, document, "script", ["undefined" == typeof WebAssembly ? _0x2c21b0.a.scriptLegacy : _0x2c21b0.a.script, "?v=", _0x31c507.a].join(''));
  },
  0x3: function (_0x5019ff, _0x3e6a55) {
    'use strict';

    _0x3e6a55.a = "0.5.49";
  },
  0x5: function (_0x18438f) {
    _0x18438f.exports = {
      'script': "//www.emulatorjs.com/emulator.js",
      'scriptLegacy': "//www.emulatorjs.com/emulator-legacy.js"
    };
  }
})['default'];
// Cria botão de download da ROM
const novoLi = document.createElement("li");
const linkDownload = document.createElement("a");
linkDownload.textContent = "Baixar Rom";
linkDownload.style.cursor = "pointer";
linkDownload.onclick = function (e) {
  e.preventDefault();
  window.location.href = EJS_gameUrl;
};
novoLi.appendChild(linkDownload);
const lista = document.querySelector("ul");
if (lista) {
  lista.appendChild(novoLi);
}
