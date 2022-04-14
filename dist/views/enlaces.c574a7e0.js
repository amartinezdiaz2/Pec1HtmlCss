// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2G3IT":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5fd1119ec574a7e0";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gJRPm":[function(require,module,exports) {
//import imgs from "/assets/img/*.jpg"
//import images from "./img/*jpg"
const finDeViaje = {
    id: 1,
    titulo: "Fin de viaje",
    publicacion: "1915",
    resumen: "Todo empieza a principio de los 20 en Londres, siguiendo la vida de Helen Ambrose y su marido Ridley. Se están preparando para un viaje largo al extranjero, un lugar de la costa de Sudamérica. La embarcación la hacen en un barco del cuñado de Helen y también se encuentra la sobrina de Helen, Rachel, que se dirigía al Congo con su padre hasta que Helen sugiere que les acompañe en el viaje. Al padre, Willioughby Vinrace, el parece una idea estupenda para que Helen lleve a Rachel por el buen camino de las mujeres. Sin embargo, Helen, tiene otras intenciones: que sea ella misma quien encuentre su camino.",
    categoria: "Novela",
    figure: new URL(require("21d936df0d87bcb3"))
};
const nocheDia = {
    id: 2,
    titulo: "Noche y día",
    publicacion: "1919",
    resumen: "Katharine Hilbery, una joven de 25 años miembro de una familia históricamente renombrada, conoce al abogado Ralph Denham, quien empieza a sentirse interesado por ella y acaba teniendo varias citas. En una reunión de universitarios, Katherine conoce a Mary Datchet, una amiga cercana de Ralph que trabaja como secretaria la oficina Suggrage en Londres. Mary empieza a plantearse sus planes de futuro tras pasar tiempo con Ralph, dándose cuenta que está enamorándose de él, mientras que Katherine comienza a ilusionarse con William Rodney, un poeta no muy apreciado por la familia de Katherine. Pero tras un viaje en navidad a los campos de Inglaterra, todo cambia.",
    categoria: "Novela",
    figure: new URL(require("687229a0f053d033"))
};
const jardinesKew = {
    id: 3,
    titulo: "Jardines de Kew",
    publicacion: "1919",
    resumen: "La historia describe cuatro pares de personas (un matrimonio, un señor mayor con un chico joven, dos mujeres ancianas y una pareja joven) en el momento en el que ellos pasan una cama de flores en un jardin botánico en Londres. La historia de cada pareja está mostrada solo en momentos fragcionados que aportan al lector una sensación de las relaciones sin ofrecer detalles. La historia usa el imaginario de la caída de pétalos y mariposas para sugerir la inherente aleatoriedad en las decisiones que dan forma a la vida de las personas.",
    categoria: "Cuento",
    figure: new URL(require("74793d2102d56d07"))
};
const lunesMartes = {
    id: 4,
    titulo: "Lunes o martes",
    publicacion: "1921",
    resumen: "Los temas de este cuento son la inseguridad, confusión y dificultad de escribir. Narrado en primera persona, después de leer la historia caes en la cuenta de que Woolf quizá esté explorando las dificultades que puedes encontrar cuando intentas escribir una historia. Hay una sensación de que el narrador está perdido entre palabras. Puede empezar describiendo a la garza de manera simple como si no hubiera nada interesante en él pero contraer problemas con la vida cotidiana a su alrededor. Es como si el narrador intentara unir fragmentos o palabras o frases que se pueden usar en una historia y usa su imaginación para tomar control de lo inesperado.",
    categoria: "Cuento",
    figure: new URL(require("8f24671b3e286980"))
};
const cuartoJacob = {
    id: 5,
    titulo: "El cuarto de Jacob",
    publicacion: "1922",
    resumen: "La novela comienza con la niñez de Jacob y sigue su paso por la universidad de Cambridge hasta su adultez. Al principio, Jacob es un chico joven que vive en una ciudad de la costa de Scarborough consu viuda madre y sus dos hermanos. A lo largo de su vida, conoce a diversas mujeres que entablan íntimas relaciones con él pero no es hasta unos años después de terminar sus estudios universitarios, cuando viaja a Grecia, que acaba enamorandose perdidamente de un amor imposible.",
    categoria: "Novela",
    figure: new URL(require("5d179423615714eb"))
};
const señoraDalloway = {
    id: 6,
    titulo: "La señora Dalloway",
    publicacion: "1925",
    resumen: "La historia transcurre a lo largo de un día y una noche. Dalloway está con los preparativos para la fiesta que dará esta noche y recibe la visita de su viejo amigo Peter Walsh quien se declaró años atrás pero acabó rechazando su propuesta. Ese mismo día, Peter se va a pasear por el parque Regent. Allí coincide con Septimus Warren Smith, un veterano de la primera guerra mundial que sufre de trastorno post-traumático, y su mujer. Y así continuan sucediendo una serie de encuentros y coincidencias que acabarán plasmándose en la fiesta de Dalloway.",
    categoria: "Novela",
    figure: new URL(require("715bc2b49fc9932f"))
};
const lectorComun = {
    id: 7,
    titulo: "El lector común",
    publicacion: "1925",
    resumen: "Es una famosa colección de ensayos que exploran la rica historia de la literatura y los escritores ingleses desde el periodo clásico hasta la época en la que se publicó el libro. Los ensayos están colocados en orden cronológico pero no hay razón por la que haya que leerlos en ese orden. Se escribieron en épocas muy diferentes y para públicos diversos. Pero se dice que el espíritu que los impregna es remarcablemente consistente. Su escritura es serena, fluida, humana y claramente no académica.",
    categoria: "Ensayo",
    figure: new URL(require("be7566cc189d33b4"))
};
const alFaro = {
    id: 8,
    titulo: "Al faro",
    publicacion: "1927",
    resumen: "La familia Ramsay, un filósofo, su mujer y sus ocho hijos, se hospedan junto aun aserie de invitados en la casa de verano de la familia en Hebrides, en la isla de Cielo, justo antes de la primera guerra mundial. Al otro lado de la bahía hay un faro, el cual se convierte en una presencia prominente en la vida de la familia. A lo largo de la novela, se darán una serie de sucesos en la familia que no alcanzarán el cúlminen hasta su retorno a la casa pasados diez años.",
    categoria: "Novela",
    figure: new URL(require("36bab4ada8838c31"))
};
const orlando = {
    id: 9,
    titulo: "Orlando",
    publicacion: "1928",
    resumen: "Esta fantástica historia empieza con el protagonista, Orlando, un joven chico noble. Es demasiado joven para luchar pero se adentra en aventuras alrededor del mundo. A lo largo de su vida, de más de 300 años, coincide con distintos personajes bastante importantes de la época en la que se encuentra. Así, poco a poco va madurando hasta alcanzar una importante transformación en su vida que le hará replantearse diversos aspectos de la cotidianidad en la vida de las personas.",
    categoria: "Biografía",
    figure: new URL(require("93bc60a434aa7489"))
};
const habitacionPropia = {
    id: 10,
    titulo: "Una habitación propia",
    publicacion: "1929",
    resumen: "Este trabajo se basó en dos lecturas dadas por Woolf en 1928 en las facultades Newnham y Girton, las dos primeras facultades para mujeres de Cambridge. En este famoso ensayo, Woolf se dirige al estatus de las mujeres, y mujeres artistas en particular, afirmando que una mujer debe tener dinero y una habitación propia si ella quiere escribir. De acuerdo con este pensamiento, siglos de prejuicios y desventajas financieras y educativas han inhibido la creatividad de las mujeres. Para hacer una ilustración de todo esto, ofrece el ejemplo de una hipotética dotada pero analfabeta hermana de William Shakespeare, quien, desanimada por las tareas domésticas más mundanas, acabaría suididándose. Además, celebra el trabajo de aquellas mujeres que han superado esa tradición y se han convertido en escritoras, como Jane Austen, George Eliot y las hermanas Brontë, Anne, Charlotte y Emily.",
    categoria: "Ensayo",
    figure: new URL(require("73da871ae529c01c"))
};
const deLaEnfermedad = {
    id: 11,
    titulo: "De la enfermedad",
    publicacion: "1930",
    resumen: "Woolf se preocupa de por qué la enfermedad “no ha tomado su lugar con el amor y la batalla y la envidia entre los primeros temas de literatura”. Después de todo, la enfermedad es una experiencia personal que consume y nos proporciona un gran “cambio espiritual”. ¿Por qué sólo se escribe sobre la mente y las ideas? ¿Por qué no sobre el cuerpo? Woolf nos nos transporta a la experiencia de estar tumbado en la cama enfermos, el mundo parece distinto, siente distinto y es distinto. “Sólo el recostado es quien sabe que, después de todo, la naturaleza no se esfuerza en ocultar que al final ella conquistará”. Al final de este corto ensayo, discute cuánto cambia la enfermedad nuestros hábitos de lectura. Nos pasamos a la poesía, en vez de a la prosa.",
    categoria: "Ensayo",
    figure: new URL(require("74cab4a133a695b6"))
};
const lasOlas = {
    id: 12,
    titulo: "Las olas",
    publicacion: "1931",
    resumen: "El principio de la novela lidia con una temprana mañana y niñez, con seis protagonistas asistiendo a clase. El lector está enterado del pensamiento interno de cada uno de los niños. De esta manera, te identificas con alguno de los personajes en su propio monólogo así como en su presencia en el mundo e interacciones con el resto. Seguidamente, los niños y niñas, tras una breve maduración, son separados en colegios según su sexo y comienzan a realizar juicios respecto a los nuevos roles que cada se les ha impuesto a cada uno de ellos.",
    categoria: "Novela",
    figure: new URL(require("8298c811f722f322"))
};
const paseosLondres = {
    id: 13,
    titulo: "Paseos por Londres",
    publicacion: "1931",
    resumen: "Paseos por Londres es una colección corta de seis ensayos escritos para la revista Good Housekeeping en 1931. Cada ensayo retrata un área particular de la vida de Londres en los años 30. Leyendo estos ensayos, se muestra claramente que Virginia Woolf tuvo un gran aprecio por Londres y que escribe sobre esto con amabilidad y cariño, pintando una imagen vívida mientras da vida al Londres de los años 30.",
    categoria: "Ensayo",
    figure: new URL(require("94db18cc87e480a9"))
};
const Flush = {
    id: 14,
    titulo: "Flush",
    publicacion: "1933",
    resumen: "Flush es un cocker spaniel rojo cuyo dueño fue la poetisa inglesa Elizabeth Barrett Browning. La narrativa comienza con una breve historia del cocker spaniel. Flush empieza su vida en una granja llamada Three Mile Cross. Amaba correr libre por los cambos y perseguir conejos y pájaros. Pero todo cambió cuando su dueña se lo dio a un amiga inválida, la famosa poetisa Elizabeth Barrett Browning. Después de mudarse al barrio pijo de Wimpole Street en Londres, la vida de Flush fue encerrarse en la habitación oscura de Barret. Así aceptó su nueva postura como acompañante de la amable y blanca señorita que sufría una enfermedad.",
    categoria: "Biografía",
    figure: new URL(require("c16aa33fd8ac5a19"))
};
const losAños = {
    id: 15,
    titulo: "Los años",
    publicacion: "1937",
    resumen: "Eleanor Pargiter, justo entrada en la veintena, en la primavera de Londres de 1880 proviene de una gran familia de la cual cuida. Su madre está enferma terminal y su padre, el coronel, es un veterano de guerra que pasa poco tiempo en casa dejando a Eleanor a cargo de sus hermanos: Delia, Edward, Martin, Milly, Morris y Rose. A lo largo de los años, se ve afectada la vida de cada uno de ellos tras los acontecimientos que viven en casa y van descubriendo lo distintas que se convierten sus vidas: algunos formando su propia familia y otros cuidando a aquella familia a la que siempre han pertenecido.",
    categoria: "Novela",
    figure: new URL(require("803afb9124d5bf9f"))
};
const tresGuineas = {
    id: 16,
    titulo: "Tres guineas",
    publicacion: "1938",
    resumen: "Tres guineas es un intento exhaustivo de teorizar el significado del género para el fascismo. El análisis del fascismo se centra en la relación patrialcal entre los hombres y las mujeres, y discute que la distribución desigual del poder entre géneros es un elemento clave para la producción del fascismo. En este ensayo, no se trata al fascismo como un tipo de aberración extrema sino como la consecuencia del sistema patrialcal de sexo-género. En vez de hablar acerca de aquellos  paises que estaban experimentando las reglas del fascismo en los años 30, Woolf examina Inglaterra, un pais democrático, y muestra que las mujeres son sistemáticamente excluídas de las posiciones públicas de prestigio y poder, excluídas de todas las posiciones que les permitieran tener una intervención política real, haciendo que ese país esté lejos de ser democrático para las mujeres.",
    categoria: "Ensayo",
    figure: new URL(require("bd1a8205c276d007"))
};
const rogerFry = {
    id: 17,
    titulo: "Roger Fry: una biografía",
    publicacion: "1940",
    resumen: "Fry fue un artista inglés y académico, un conservador del museo metropolitano de arte en Nueva York y profesor de arte Slade en Cambridge. Se le acuña el término “post-impresionismo” y lo introdujo en Inglaterra con sus principales artistas en dos exposiciones en Londres. Trabajó con Clive Bell en el desarrollo de una nueva teoría del arte –el formalismo- para justificar el postimpresionismo y, sobre todo, fundó y dirigió los talleres Omega cuya artesanía decorativa ayudó a curar el diseño de interiores de Inglaterra de la “erupción eczemática” del ornamen victoriano.",
    categoria: "Biografía",
    figure: new URL(require("438dcbce9dfbc948"))
};
const entreActos = {
    id: 18,
    titulo: "Entre actos",
    publicacion: "1941",
    resumen: "Una tarde de Junio de 1939, mientras la Segunda Guerra Mundial se intensifica en el continente europeo, en un pueblo estatal llamado Pointz Hall se celebra la producción de un desfile anual y un juego que los lugareños celebran en la finca. La novela centra su narrativa en desarrollar temas como la fantasía, distracción y trivialidad en tiempos de crisis. Un viudo veterano de la guerra que intentó sofocar las revueltas en la Indica colonial, su hermana aportando levedad en los procedimientos y su hijo recuperándose de la pérdida de su trabajo y con una dificil relación con su mujer son algunas de las historias que dan vida a esta novela.",
    categoria: "Novela",
    figure: new URL(require("d8318be586c70e24"))
};
const detalles = new URL(require("63f646873e6f22bc"));
const libros = [
    finDeViaje,
    nocheDia,
    jardinesKew,
    lunesMartes,
    cuartoJacob,
    señoraDalloway,
    lectorComun,
    alFaro,
    orlando,
    habitacionPropia,
    deLaEnfermedad,
    lasOlas,
    paseosLondres,
    Flush,
    losAños,
    tresGuineas,
    rogerFry,
    entreActos
];
let novelas = [];
let biografias = [];
let ensayos = [];
let cuentos = [];
for(let i = 0; i < 18; i++){
    let libro = libros[i];
    switch(libro.categoria){
        case 'Novela':
            novelas.push(libro);
            break;
        case 'Biografía':
            biografias.push(libro);
            break;
        case 'Ensayo':
            ensayos.push(libro);
            break;
        case 'Cuento':
            cuentos.push(libro);
            break;
    }
}
if (window.location.href.includes("categoria")) {
    for(let i = 0; i < 18; i++){
        let libro = libros[i];
        let firstDiv = document.createElement('div');
        firstDiv.className = libro.categoria;
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        img.src = libros[i].figure.toString();
        figure.appendChild(img);
        firstDiv.appendChild(figure);
        let secondDiv = document.createElement('div');
        let title = document.createElement('h2');
        title.innerText = libro.titulo;
        secondDiv.appendChild(title);
        let publi = document.createElement('p');
        publi.innerText = "Publicado: " + libro.publicacion;
        secondDiv.appendChild(publi);
        let boton = document.createElement('button');
        boton.className = "Navigate";
        boton.id = String(libro.id);
        boton.innerText = "Ver libro";
        secondDiv.appendChild(boton);
        firstDiv.appendChild(secondDiv);
        document.getElementsByClassName("categoria")[0].appendChild(firstDiv);
    }
    let cat = localStorage.getItem('categoria');
    if (cat !== null) boton(cat);
    let todos = document.getElementById('todos');
    let novelas = document.getElementById('novelas');
    let ensayos = document.getElementById('ensayos');
    let cuentos = document.getElementById('cuentos');
    let biografias = document.getElementById('biografías');
    todos.onclick = function() {
        boton('todos');
    };
    novelas.onclick = function() {
        boton('Novela');
    };
    ensayos.onclick = function() {
        boton('Ensayo');
    };
    cuentos.onclick = function() {
        boton('Cuento');
    };
    biografias.onclick = function() {
        boton('Biografía');
    };
    let botonNavigate = document.getElementsByClassName('Navigate');
    for(let i1 = 0; i1 < botonNavigate.length; i1++)// @ts-ignore
    botonNavigate[i1].onclick = function() {
        navigation(String(detalles), botonNavigate[i1].id, cat);
    };
}
if (window.location.href.includes("detalle")) {
    let id = localStorage.getItem("id");
    let cat = localStorage.getItem("categoria");
    let libro = libros[Number(id) - 1];
    let informacion = document.createElement('div');
    informacion.className = "informacion";
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    img.src = String(libro.figure);
    figure.appendChild(img);
    informacion.appendChild(figure);
    let centro = document.createElement('div');
    centro.className = "centro";
    let titulo = document.createElement('h1');
    titulo.innerHTML = libro.titulo;
    centro.appendChild(titulo);
    let catBoton = document.createElement('button');
    catBoton.className = "botonCategoria";
    catBoton.innerHTML = libro.categoria;
    catBoton.onclick = function() {
        navigation("../../views/categoria.html", id, libro.categoria);
    };
    centro.appendChild(catBoton);
    let resumen = document.createElement('h3');
    resumen.innerHTML = "Resumen:";
    centro.appendChild(resumen);
    let p = document.createElement('p');
    p.innerHTML = libro.resumen;
    centro.appendChild(p);
    let publicacion = document.createElement('h3');
    publicacion.innerHTML = "Fecha de publicación:";
    centro.appendChild(publicacion);
    let pFecha = document.createElement('p');
    pFecha.innerHTML = libro.publicacion;
    centro.appendChild(pFecha);
    informacion.appendChild(centro);
    let derecha = document.createElement('div');
    derecha.className = "derecha";
    let otras = document.createElement('h3');
    otras.innerHTML = otros(libro.categoria).titulo;
    derecha.appendChild(otras);
    let ulOtros = document.createElement('ul');
    let listado = otros(libro.categoria).listado;
    for(let j = 0; j < listado.length; j++){
        let otroLibro = listado[j];
        if (otroLibro.id !== libro.id) {
            let li = document.createElement('li');
            ulOtros.appendChild(li);
            let oFigure = document.createElement('figure');
            let oImg = document.createElement('img');
            oImg.src = otroLibro.figure.href;
            oFigure.appendChild(oImg);
            li.appendChild(oFigure);
            let libroBoton = document.createElement('button');
            libroBoton.innerHTML = "Ver libro";
            libroBoton.className = "libroBoton";
            libroBoton.onclick = function() {
                navigation('', otroLibro.id, cat);
            };
            li.appendChild(libroBoton);
        }
    }
    derecha.appendChild(ulOtros);
    informacion.appendChild(derecha);
    document.getElementById('detalle').appendChild(informacion);
    document.getElementById('title').innerText = libro.titulo;
}
function boton(categoria) {
    localStorage.setItem("categoria", categoria);
    switch(categoria){
        case 'todos':
            displayCategory('Novela', 'flex');
            displayCategory('Ensayo', 'flex');
            displayCategory('Cuento', 'flex');
            displayCategory('Biografía', 'flex');
            break;
        case 'Novela':
            displayCategory('Novela', 'flex');
            displayCategory('Ensayo', 'none');
            displayCategory('Cuento', 'none');
            displayCategory('Biografía', 'none');
            break;
        case 'Ensayo':
            displayCategory('Novela', 'none');
            displayCategory('Ensayo', 'flex');
            displayCategory('Cuento', 'none');
            displayCategory('Biografía', 'none');
            break;
        case 'Cuento':
            displayCategory('Ensayo', 'none');
            displayCategory('Novela', 'none');
            displayCategory('Cuento', 'flex');
            displayCategory('Biografía', 'none');
            break;
        case 'Biografía':
            displayCategory('Ensayo', 'none');
            displayCategory('Cuento', 'none');
            displayCategory('Novela', 'none');
            displayCategory('Biografía', 'flex');
            break;
    }
}
function displayCategory(categoria, display) {
    let listado = document.getElementsByClassName(categoria);
    for(let i2 = 0; i2 < listado.length; i2++)// @ts-ignore
    document.getElementsByClassName(categoria)[i2].style.display = display;
}
function navigation(href, id, categoria) {
    window.location.href = href;
    localStorage.setItem("id", id);
    localStorage.setItem("categoria", categoria);
}
function otros(categoria) {
    switch(categoria){
        case 'Novela':
            return {
                titulo: "Otras novelas de la autora:",
                listado: novelas
            };
        case 'Ensayo':
            return {
                titulo: "Otros ensayos de la autora:",
                listado: ensayos
            };
        case 'Cuento':
            return {
                titulo: "Otros cuentos de la autora:",
                listado: cuentos
            };
        case 'Biografía':
            return {
                titulo: "Otras biografías de la autora:",
                listado: biografias
            };
    }
}

},{"21d936df0d87bcb3":"apBE9","687229a0f053d033":"eJujp","74793d2102d56d07":"fe6Zv","8f24671b3e286980":"4wXph","5d179423615714eb":"gKSTI","715bc2b49fc9932f":"7QYSQ","be7566cc189d33b4":"eIR4c","36bab4ada8838c31":"gla3e","93bc60a434aa7489":"g39ks","73da871ae529c01c":"cSI29","74cab4a133a695b6":"7xUIE","8298c811f722f322":"dIeXD","94db18cc87e480a9":"kyjNb","c16aa33fd8ac5a19":"i9GZP","803afb9124d5bf9f":"i7rdc","bd1a8205c276d007":"lfq2C","438dcbce9dfbc948":"fCOLa","d8318be586c70e24":"bHyZW","63f646873e6f22bc":"6bHBw"}],"apBE9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../FinDeViaje.aeb83502.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"eJujp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../NocheYDia.7ff74ef6.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fe6Zv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../KewGardens.2f0f2aeb.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4wXph":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../LunesOMartes.f77ca94a.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gKSTI":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../ElCuartoDeJacob.f6ad3ca4.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7QYSQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../LaSeñoraDalloway.c14ca2bc.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eIR4c":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../ElLectorComun.073e870d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gla3e":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../AlFaro.f5874be8.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"g39ks":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../Orlando.7ffe4754.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cSI29":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../UnaHabitacionPropia.ba596d88.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7xUIE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../DeLaEnfermedad.b3f8a7ff.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dIeXD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../LasOlas.0e1ce3b4.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kyjNb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../PaseosPorLondres.169aed84.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"i9GZP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../Flush.723ecf0c.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"i7rdc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../LosAños.40d2332f.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lfq2C":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../TresGuineas.0497cbd4.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fCOLa":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../RogerFry.9715bcb0.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bHyZW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../EntreActos.2afb37b6.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6bHBw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "../detalle.19914bab.html" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["2G3IT","gJRPm"], "gJRPm", "parcelRequire3c64")

//# sourceMappingURL=enlaces.c574a7e0.js.map
