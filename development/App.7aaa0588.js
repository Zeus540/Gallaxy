// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/assets/images/snow.png":[function(require,module,exports) {
module.exports = "/snow.056a5644.png";
},{}],"../src/assets/images/earth.png":[function(require,module,exports) {
module.exports = "/earth.36937241.png";
},{}],"../src/components/Nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _snow = _interopRequireDefault(require("../assets/images/snow.png"));

var _earth = _interopRequireDefault(require("../assets/images/earth.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav() {
  var template = "\n  \n  <div class=\"Nav \" id=\"Nav\">\n\n    <h1>\n        hello\n    </h1>\n\n    <h1>\n        LETS EXPLORE\n    </h1>\n\n    <h1>\n        hello\n    </h1>\n  </div>\n  ";
  return template;
};

var _default = Nav;
exports.default = _default;
},{"../assets/images/snow.png":"../src/assets/images/snow.png","../assets/images/earth.png":"../src/assets/images/earth.png"}],"../src/components/Section1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _snow = _interopRequireDefault(require("../assets/images/snow.png"));

var _earth = _interopRequireDefault(require("../assets/images/earth.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section1 = function Section1() {
  var template = "\n  \n  <div class=\"Section1 \" id=\"Sec\">\n  <h1 >CHOOSE A PLANET</h1>\n  <div class=\"Flex\">\n  <img src=".concat(_snow.default, " alt=\"\" class=\"SunS\"/>\n  <img src=").concat(_earth.default, " alt=\"\" class=\"SunS\"/>\n  <img src=").concat(_snow.default, " alt=\"\" class=\"SunS\"/>\n  <img src=").concat(_snow.default, " alt=\"\" class=\"SunS\"/>\n  <img src=").concat(_snow.default, " alt=\"\" class=\"SunS\"/>\n  <img src=").concat(_snow.default, " alt=\"\" class=\"SunS\"/>\n  <img src=").concat(_snow.default, " alt=\"\" class=\"SunS\"/>\n  <img src=").concat(_snow.default, " alt=\"\" class=\"SunS\"/>\n  </div>\n\n  <div id=\"planetName\">\n  \n  </div>\n\n  <div class=\"FlexContent\">\n\n \n  <div class=\"MainTextHolder1\" id=\"MainTextHolder1\">\n  \n\n\n  </div>\n\n  <div class=\"MainImgHolder\" id=\"MainImgHolder\" >\n\n  </div>\n\n  <div class=\"MainTextHolder2\" id=\"MainTextHolder2\">\n  \n\n\n  </div>\n\n  </div>\n  </div>\n  ");
  return template;
};

var _default = Section1;
exports.default = _default;
},{"../assets/images/snow.png":"../src/assets/images/snow.png","../assets/images/earth.png":"../src/assets/images/earth.png"}],"../src/assets/images/midright.png":[function(require,module,exports) {
module.exports = "/midright.6bf9c79f.png";
},{}],"../src/assets/images/foregroundleft.png":[function(require,module,exports) {
module.exports = "/foregroundleft.dc0b0fc8.png";
},{}],"../src/assets/images/bg.png":[function(require,module,exports) {
module.exports = "/bg.7838869d.png";
},{}],"../src/assets/images/moon.png":[function(require,module,exports) {
module.exports = "/moon.1fbe7d34.png";
},{}],"../src/assets/images/stars2.png":[function(require,module,exports) {
module.exports = "/stars2.d7f0db42.png";
},{}],"../src/components/Section2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _snow = _interopRequireDefault(require("../assets/images/snow.png"));

var _midright = _interopRequireDefault(require("../assets/images/midright.png"));

var _foregroundleft = _interopRequireDefault(require("../assets/images/foregroundleft.png"));

var _bg = _interopRequireDefault(require("../assets/images/bg.png"));

var _moon = _interopRequireDefault(require("../assets/images/moon.png"));

var _stars = _interopRequireDefault(require("../assets/images/stars2.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section2 = function Section2() {
  var template = "\n    \n\n      <div class=\"Section2\">\n     \n      <div id=\"scene\">\n\n      <div data-depth=\"0.1\" class=\"bg\">\n        <img src=".concat(_bg.default, " alt=\"\" />\n      </div>\n\n      <div data-depth=\"0.2\" class=\"bg\">\n        <img src=").concat(_stars.default, " alt=\"\" />\n      </div>\n  \n      <div data-depth=\"0.5\" class=\"earth\">\n        <img src=").concat(_snow.default, " alt=\"\" class=\"Sun\"/>\n      </div>\n\n    \n      <div data-depth=\"0.15\" class=\"fore\">\n        <img src=").concat(_midright.default, " alt=\"\"  class=\"Foreground\"/>\n      </div>\n\n      <div  class=\"moon\">\n        <img src=").concat(_moon.default, " alt=\"\" class=\"moonrover\"/>\n      </div>\n\n      <div data-depth=\"0.2\" class=\"fore1\">\n        <img src=").concat(_foregroundleft.default, " alt=\"\"  class=\"Foreground1\"/>\n      </div>\n\n    \n\n      </div>\n      <div class=\"HeadingCenter\" >\n        <h1>SPACE</h1>\n      </div>\n  \n      </div>\n  \n\n   \n    ");
  return template;
};

var _default = Section2;
exports.default = _default;
},{"../assets/images/snow.png":"../src/assets/images/snow.png","../assets/images/midright.png":"../src/assets/images/midright.png","../assets/images/foregroundleft.png":"../src/assets/images/foregroundleft.png","../assets/images/bg.png":"../src/assets/images/bg.png","../assets/images/moon.png":"../src/assets/images/moon.png","../assets/images/stars2.png":"../src/assets/images/stars2.png"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/scss/app.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/App.js":[function(require,module,exports) {
"use strict";

var _Nav = _interopRequireDefault(require("./components/Nav"));

var _Section = _interopRequireDefault(require("./components/Section1"));

var _Section2 = _interopRequireDefault(require("./components/Section2"));

require("./scss/app.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  document.getElementById("root").innerHTML = "\n  ".concat((0, _Nav.default)(), "\n  ").concat((0, _Section2.default)(), "\n  ").concat((0, _Section.default)(), "\n  ");
};

App();
},{"./components/Nav":"../src/components/Nav.js","./components/Section1":"../src/components/Section1.js","./components/Section2":"../src/components/Section2.js","./scss/app.scss":"../src/scss/app.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40429" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/App.js"], null)
//# sourceMappingURL=/App.7aaa0588.js.map