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
})({"../node_modules/reveal.js/dist/reveal.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*!
* reveal.js 4.0.2
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2020 Hakim El Hattab, https://hakim.se
*/
var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}

function i(e, t, i) {
  return e(i = {
    path: t,
    exports: {},
    require: function (e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && i.path);
    }
  }, i.exports), i.exports;
}

var n,
    a = function (e) {
  return e && e.Math == Math && e;
},
    s = a("object" == typeof globalThis && globalThis) || a("object" == typeof window && window) || a("object" == typeof self && self) || a("object" == typeof e && e) || Function("return this")(),
    r = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
},
    o = function (e) {
  try {
    return !!e();
  } catch (e) {
    return !0;
  }
},
    l = {}.toString,
    d = function (e) {
  return l.call(e).slice(8, -1);
},
    c = "".split,
    u = o(function () {
  return !Object("z").propertyIsEnumerable(0);
}) ? function (e) {
  return "String" == d(e) ? c.call(e, "") : Object(e);
} : Object,
    h = function (e) {
  if (null == e) throw TypeError("Can't call method on " + e);
  return e;
},
    g = function (e) {
  return u(h(e));
},
    v = !o(function () {
  return 7 != Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1];
}),
    p = function (e) {
  return "object" == typeof e ? null !== e : "function" == typeof e;
},
    f = s.document,
    m = p(f) && p(f.createElement),
    b = function (e) {
  return m ? f.createElement(e) : {};
},
    y = !v && !o(function () {
  return 7 != Object.defineProperty(b("div"), "a", {
    get: function () {
      return 7;
    }
  }).a;
}),
    w = function (e) {
  if (!p(e)) throw TypeError(String(e) + " is not an object");
  return e;
},
    S = function (e, t) {
  if (!p(e)) return e;
  var i, n;
  if (t && "function" == typeof (i = e.toString) && !p(n = i.call(e))) return n;
  if ("function" == typeof (i = e.valueOf) && !p(n = i.call(e))) return n;
  if (!t && "function" == typeof (i = e.toString) && !p(n = i.call(e))) return n;
  throw TypeError("Can't convert object to primitive value");
},
    E = Object.defineProperty,
    R = {
  f: v ? E : function (e, t, i) {
    if (w(e), t = S(t, !0), w(i), y) try {
      return E(e, t, i);
    } catch (e) {}
    if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
    return "value" in i && (e[t] = i.value), e;
  }
},
    A = function (e, t) {
  return {
    enumerable: !(1 & e),
    configurable: !(2 & e),
    writable: !(4 & e),
    value: t
  };
},
    k = v ? function (e, t, i) {
  return R.f(e, t, A(1, i));
} : function (e, t, i) {
  return e[t] = i, e;
},
    L = function (e, t) {
  try {
    k(s, e, t);
  } catch (i) {
    s[e] = t;
  }

  return t;
},
    x = s["__core-js_shared__"] || L("__core-js_shared__", {}),
    C = i(function (e) {
  (e.exports = function (e, t) {
    return x[e] || (x[e] = void 0 !== t ? t : {});
  })("versions", []).push({
    version: "3.6.5",
    mode: "global",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
  });
}),
    P = {}.hasOwnProperty,
    N = function (e, t) {
  return P.call(e, t);
},
    M = 0,
    I = Math.random(),
    T = function (e) {
  return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++M + I).toString(36);
},
    D = !!Object.getOwnPropertySymbols && !o(function () {
  return !String(Symbol());
}),
    O = D && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    z = C("wks"),
    H = s.Symbol,
    B = O ? H : H && H.withoutSetter || T,
    U = function (e) {
  return N(z, e) || (D && N(H, e) ? z[e] = H[e] : z[e] = B("Symbol." + e)), z[e];
},
    j = Math.ceil,
    F = Math.floor,
    q = function (e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? F : j)(e);
},
    W = Math.min,
    _ = function (e) {
  return e > 0 ? W(q(e), 9007199254740991) : 0;
},
    V = Math.max,
    K = Math.min,
    X = function (e) {
  return function (t, i, n) {
    var a,
        s = g(t),
        r = _(s.length),
        o = function (e, t) {
      var i = q(e);
      return i < 0 ? V(i + t, 0) : K(i, t);
    }(n, r);

    if (e && i != i) {
      for (; r > o;) if ((a = s[o++]) != a) return !0;
    } else for (; r > o; o++) if ((e || o in s) && s[o] === i) return e || o || 0;

    return !e && -1;
  };
},
    $ = {
  includes: X(!0),
  indexOf: X(!1)
},
    Y = {},
    G = $.indexOf,
    J = function (e, t) {
  var i,
      n = g(e),
      a = 0,
      s = [];

  for (i in n) !N(Y, i) && N(n, i) && s.push(i);

  for (; t.length > a;) N(n, i = t[a++]) && (~G(s, i) || s.push(i));

  return s;
},
    Q = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    Z = Object.keys || function (e) {
  return J(e, Q);
},
    ee = v ? Object.defineProperties : function (e, t) {
  w(e);

  for (var i, n = Z(t), a = n.length, s = 0; a > s;) R.f(e, i = n[s++], t[i]);

  return e;
},
    te = s,
    ie = function (e) {
  return "function" == typeof e ? e : void 0;
},
    ne = function (e, t) {
  return arguments.length < 2 ? ie(te[e]) || ie(s[e]) : te[e] && te[e][t] || s[e] && s[e][t];
},
    ae = ne("document", "documentElement"),
    se = C("keys"),
    re = function (e) {
  return se[e] || (se[e] = T(e));
},
    oe = re("IE_PROTO"),
    le = function () {},
    de = function (e) {
  return "<script>" + e + "<\/script>";
},
    ce = function () {
  try {
    n = document.domain && new ActiveXObject("htmlfile");
  } catch (e) {}

  var e, t;
  ce = n ? function (e) {
    e.write(de("")), e.close();
    var t = e.parentWindow.Object;
    return e = null, t;
  }(n) : ((t = b("iframe")).style.display = "none", ae.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(de("document.F=Object")), e.close(), e.F);

  for (var i = Q.length; i--;) delete ce.prototype[Q[i]];

  return ce();
};

Y[oe] = !0;

var ue = Object.create || function (e, t) {
  var i;
  return null !== e ? (le.prototype = w(e), i = new le(), le.prototype = null, i[oe] = e) : i = ce(), void 0 === t ? i : ee(i, t);
},
    he = U("unscopables"),
    ge = Array.prototype;

null == ge[he] && R.f(ge, he, {
  configurable: !0,
  value: ue(null)
});

var ve = function (e) {
  ge[he][e] = !0;
},
    pe = Function.toString;

"function" != typeof x.inspectSource && (x.inspectSource = function (e) {
  return pe.call(e);
});
var fe,
    me,
    be,
    ye = x.inspectSource,
    we = s.WeakMap,
    Se = "function" == typeof we && /native code/.test(ye(we)),
    Ee = s.WeakMap;

if (Se) {
  var Re = new Ee(),
      Ae = Re.get,
      ke = Re.has,
      Le = Re.set;
  fe = function (e, t) {
    return Le.call(Re, e, t), t;
  }, me = function (e) {
    return Ae.call(Re, e) || {};
  }, be = function (e) {
    return ke.call(Re, e);
  };
} else {
  var xe = re("state");
  Y[xe] = !0, fe = function (e, t) {
    return k(e, xe, t), t;
  }, me = function (e) {
    return N(e, xe) ? e[xe] : {};
  }, be = function (e) {
    return N(e, xe);
  };
}

var Ce,
    Pe,
    Ne,
    Me = {
  set: fe,
  get: me,
  has: be,
  enforce: function (e) {
    return be(e) ? me(e) : fe(e, {});
  },
  getterFor: function (e) {
    return function (t) {
      var i;
      if (!p(t) || (i = me(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
      return i;
    };
  }
},
    Ie = {}.propertyIsEnumerable,
    Te = Object.getOwnPropertyDescriptor,
    De = {
  f: Te && !Ie.call({
    1: 2
  }, 1) ? function (e) {
    var t = Te(this, e);
    return !!t && t.enumerable;
  } : Ie
},
    Oe = Object.getOwnPropertyDescriptor,
    ze = {
  f: v ? Oe : function (e, t) {
    if (e = g(e), t = S(t, !0), y) try {
      return Oe(e, t);
    } catch (e) {}
    if (N(e, t)) return A(!De.f.call(e, t), e[t]);
  }
},
    He = i(function (e) {
  var t = Me.get,
      i = Me.enforce,
      n = String(String).split("String");
  (e.exports = function (e, t, a, r) {
    var o = !!r && !!r.unsafe,
        l = !!r && !!r.enumerable,
        d = !!r && !!r.noTargetGet;
    "function" == typeof a && ("string" != typeof t || N(a, "name") || k(a, "name", t), i(a).source = n.join("string" == typeof t ? t : "")), e !== s ? (o ? !d && e[t] && (l = !0) : delete e[t], l ? e[t] = a : k(e, t, a)) : l ? e[t] = a : L(t, a);
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && t(this).source || ye(this);
  });
}),
    Be = Q.concat("length", "prototype"),
    Ue = {
  f: Object.getOwnPropertyNames || function (e) {
    return J(e, Be);
  }
},
    je = {
  f: Object.getOwnPropertySymbols
},
    Fe = ne("Reflect", "ownKeys") || function (e) {
  var t = Ue.f(w(e)),
      i = je.f;
  return i ? t.concat(i(e)) : t;
},
    qe = function (e, t) {
  for (var i = Fe(t), n = R.f, a = ze.f, s = 0; s < i.length; s++) {
    var r = i[s];
    N(e, r) || n(e, r, a(t, r));
  }
},
    We = /#|\.prototype\./,
    _e = function (e, t) {
  var i = Ke[Ve(e)];
  return i == $e || i != Xe && ("function" == typeof t ? o(t) : !!t);
},
    Ve = _e.normalize = function (e) {
  return String(e).replace(We, ".").toLowerCase();
},
    Ke = _e.data = {},
    Xe = _e.NATIVE = "N",
    $e = _e.POLYFILL = "P",
    Ye = _e,
    Ge = ze.f,
    Je = function (e, t) {
  var i,
      n,
      a,
      r,
      o,
      l = e.target,
      d = e.global,
      c = e.stat;
  if (i = d ? s : c ? s[l] || L(l, {}) : (s[l] || {}).prototype) for (n in t) {
    if (r = t[n], a = e.noTargetGet ? (o = Ge(i, n)) && o.value : i[n], !Ye(d ? n : l + (c ? "." : "#") + n, e.forced) && void 0 !== a) {
      if (typeof r == typeof a) continue;
      qe(r, a);
    }

    (e.sham || a && a.sham) && k(r, "sham", !0), He(i, n, r, e);
  }
},
    Qe = function (e) {
  return Object(h(e));
},
    Ze = !o(function () {
  function e() {}

  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}),
    et = re("IE_PROTO"),
    tt = Object.prototype,
    it = Ze ? Object.getPrototypeOf : function (e) {
  return e = Qe(e), N(e, et) ? e[et] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? tt : null;
},
    nt = U("iterator"),
    at = !1;

[].keys && ("next" in (Ne = [].keys()) ? (Pe = it(it(Ne))) !== Object.prototype && (Ce = Pe) : at = !0), null == Ce && (Ce = {}), N(Ce, nt) || k(Ce, nt, function () {
  return this;
});

var st = {
  IteratorPrototype: Ce,
  BUGGY_SAFARI_ITERATORS: at
},
    rt = R.f,
    ot = U("toStringTag"),
    lt = function (e, t, i) {
  e && !N(e = i ? e : e.prototype, ot) && rt(e, ot, {
    configurable: !0,
    value: t
  });
},
    dt = st.IteratorPrototype,
    ct = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var e,
      t = !1,
      i = {};

  try {
    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), t = i instanceof Array;
  } catch (e) {}

  return function (i, n) {
    return w(i), function (e) {
      if (!p(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
    }(n), t ? e.call(i, n) : i.__proto__ = n, i;
  };
}() : void 0),
    ut = st.IteratorPrototype,
    ht = st.BUGGY_SAFARI_ITERATORS,
    gt = U("iterator"),
    vt = function () {
  return this;
},
    pt = Me.set,
    ft = Me.getterFor("Array Iterator"),
    mt = function (e, t, i, n, a, s, r) {
  !function (e, t, i) {
    var n = t + " Iterator";
    e.prototype = ue(dt, {
      next: A(1, i)
    }), lt(e, n, !1);
  }(i, t, n);

  var o,
      l,
      d,
      c = function (e) {
    if (e === a && p) return p;
    if (!ht && e in g) return g[e];

    switch (e) {
      case "keys":
      case "values":
      case "entries":
        return function () {
          return new i(this, e);
        };
    }

    return function () {
      return new i(this);
    };
  },
      u = t + " Iterator",
      h = !1,
      g = e.prototype,
      v = g[gt] || g["@@iterator"] || a && g[a],
      p = !ht && v || c(a),
      f = "Array" == t && g.entries || v;

  if (f && (o = it(f.call(new e())), ut !== Object.prototype && o.next && (it(o) !== ut && (ct ? ct(o, ut) : "function" != typeof o[gt] && k(o, gt, vt)), lt(o, u, !0))), "values" == a && v && "values" !== v.name && (h = !0, p = function () {
    return v.call(this);
  }), g[gt] !== p && k(g, gt, p), a) if (l = {
    values: c("values"),
    keys: s ? p : c("keys"),
    entries: c("entries")
  }, r) for (d in l) (ht || h || !(d in g)) && He(g, d, l[d]);else Je({
    target: t,
    proto: !0,
    forced: ht || h
  }, l);
  return l;
}(Array, "Array", function (e, t) {
  pt(this, {
    type: "Array Iterator",
    target: g(e),
    index: 0,
    kind: t
  });
}, function () {
  var e = ft(this),
      t = e.target,
      i = e.kind,
      n = e.index++;
  return !t || n >= t.length ? (e.target = void 0, {
    value: void 0,
    done: !0
  }) : "keys" == i ? {
    value: n,
    done: !1
  } : "values" == i ? {
    value: t[n],
    done: !1
  } : {
    value: [n, t[n]],
    done: !1
  };
}, "values");

ve("keys"), ve("values"), ve("entries");
var bt = U("iterator"),
    yt = U("toStringTag"),
    wt = mt.values;

for (var St in r) {
  var Et = s[St],
      Rt = Et && Et.prototype;

  if (Rt) {
    if (Rt[bt] !== wt) try {
      k(Rt, bt, wt);
    } catch (e) {
      Rt[bt] = wt;
    }
    if (Rt[yt] || k(Rt, yt, St), r[St]) for (var At in mt) if (Rt[At] !== mt[At]) try {
      k(Rt, At, mt[At]);
    } catch (e) {
      Rt[At] = mt[At];
    }
  }
}

const kt = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/,
      Lt = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;

var xt = function () {
  var e = w(this),
      t = "";
  return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
};

function Ct(e, t) {
  return RegExp(e, t);
}

var Pt,
    Nt,
    Mt = {
  UNSUPPORTED_Y: o(function () {
    var e = Ct("a", "y");
    return e.lastIndex = 2, null != e.exec("abcd");
  }),
  BROKEN_CARET: o(function () {
    var e = Ct("^r", "gy");
    return e.lastIndex = 2, null != e.exec("str");
  })
},
    It = RegExp.prototype.exec,
    Tt = String.prototype.replace,
    Dt = It,
    Ot = (Pt = /a/, Nt = /b*/g, It.call(Pt, "a"), It.call(Nt, "a"), 0 !== Pt.lastIndex || 0 !== Nt.lastIndex),
    zt = Mt.UNSUPPORTED_Y || Mt.BROKEN_CARET,
    Ht = void 0 !== /()??/.exec("")[1];
(Ot || Ht || zt) && (Dt = function (e) {
  var t,
      i,
      n,
      a,
      s = this,
      r = zt && s.sticky,
      o = xt.call(s),
      l = s.source,
      d = 0,
      c = e;
  return r && (-1 === (o = o.replace("y", "")).indexOf("g") && (o += "g"), c = String(e).slice(s.lastIndex), s.lastIndex > 0 && (!s.multiline || s.multiline && "\n" !== e[s.lastIndex - 1]) && (l = "(?: " + l + ")", c = " " + c, d++), i = new RegExp("^(?:" + l + ")", o)), Ht && (i = new RegExp("^" + l + "$(?!\\s)", o)), Ot && (t = s.lastIndex), n = It.call(r ? i : s, c), r ? n ? (n.input = n.input.slice(d), n[0] = n[0].slice(d), n.index = s.lastIndex, s.lastIndex += n[0].length) : s.lastIndex = 0 : Ot && n && (s.lastIndex = s.global ? n.index + n[0].length : t), Ht && n && n.length > 1 && Tt.call(n[0], i, function () {
    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (n[a] = void 0);
  }), n;
});
var Bt = Dt;
Je({
  target: "RegExp",
  proto: !0,
  forced: /./.exec !== Bt
}, {
  exec: Bt
});

var Ut = U("species"),
    jt = !o(function () {
  var e = /./;
  return e.exec = function () {
    var e = [];
    return e.groups = {
      a: "7"
    }, e;
  }, "7" !== "".replace(e, "$<a>");
}),
    Ft = "$0" === "a".replace(/./, "$0"),
    qt = U("replace"),
    Wt = !!/./[qt] && "" === /./[qt]("a", "$0"),
    _t = !o(function () {
  var e = /(?:)/,
      t = e.exec;

  e.exec = function () {
    return t.apply(this, arguments);
  };

  var i = "ab".split(e);
  return 2 !== i.length || "a" !== i[0] || "b" !== i[1];
}),
    Vt = function (e) {
  return function (t, i) {
    var n,
        a,
        s = String(h(t)),
        r = q(i),
        o = s.length;
    return r < 0 || r >= o ? e ? "" : void 0 : (n = s.charCodeAt(r)) < 55296 || n > 56319 || r + 1 === o || (a = s.charCodeAt(r + 1)) < 56320 || a > 57343 ? e ? s.charAt(r) : n : e ? s.slice(r, r + 2) : a - 56320 + (n - 55296 << 10) + 65536;
  };
},
    Kt = {
  codeAt: Vt(!1),
  charAt: Vt(!0)
}.charAt,
    Xt = function (e, t, i) {
  return t + (i ? Kt(e, t).length : 1);
},
    $t = function (e, t) {
  var i = e.exec;

  if ("function" == typeof i) {
    var n = i.call(e, t);
    if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
    return n;
  }

  if ("RegExp" !== d(e)) throw TypeError("RegExp#exec called on incompatible receiver");
  return Bt.call(e, t);
},
    Yt = Math.max,
    Gt = Math.min,
    Jt = Math.floor,
    Qt = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    Zt = /\$([$&'`]|\d\d?)/g;

!function (e, t, i, n) {
  var a = U(e),
      s = !o(function () {
    var t = {};
    return t[a] = function () {
      return 7;
    }, 7 != ""[e](t);
  }),
      r = s && !o(function () {
    var t = !1,
        i = /a/;
    return "split" === e && ((i = {}).constructor = {}, i.constructor[Ut] = function () {
      return i;
    }, i.flags = "", i[a] = /./[a]), i.exec = function () {
      return t = !0, null;
    }, i[a](""), !t;
  });

  if (!s || !r || "replace" === e && (!jt || !Ft || Wt) || "split" === e && !_t) {
    var l = /./[a],
        d = i(a, ""[e], function (e, t, i, n, a) {
      return t.exec === Bt ? s && !a ? {
        done: !0,
        value: l.call(t, i, n)
      } : {
        done: !0,
        value: e.call(i, t, n)
      } : {
        done: !1
      };
    }, {
      REPLACE_KEEPS_$0: Ft,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Wt
    }),
        c = d[0],
        u = d[1];
    He(String.prototype, e, c), He(RegExp.prototype, a, 2 == t ? function (e, t) {
      return u.call(e, this, t);
    } : function (e) {
      return u.call(e, this);
    });
  }

  n && k(RegExp.prototype[a], "sham", !0);
}("replace", 2, function (e, t, i, n) {
  var a = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      s = n.REPLACE_KEEPS_$0,
      r = a ? "$" : "$0";
  return [function (i, n) {
    var a = h(this),
        s = null == i ? void 0 : i[e];
    return void 0 !== s ? s.call(i, a, n) : t.call(String(a), i, n);
  }, function (e, n) {
    if (!a && s || "string" == typeof n && -1 === n.indexOf(r)) {
      var l = i(t, e, this, n);
      if (l.done) return l.value;
    }

    var d = w(e),
        c = String(this),
        u = "function" == typeof n;
    u || (n = String(n));
    var h = d.global;

    if (h) {
      var g = d.unicode;
      d.lastIndex = 0;
    }

    for (var v = [];;) {
      var p = $t(d, c);
      if (null === p) break;
      if (v.push(p), !h) break;
      "" === String(p[0]) && (d.lastIndex = Xt(c, _(d.lastIndex), g));
    }

    for (var f, m = "", b = 0, y = 0; y < v.length; y++) {
      p = v[y];

      for (var S = String(p[0]), E = Yt(Gt(q(p.index), c.length), 0), R = [], A = 1; A < p.length; A++) R.push(void 0 === (f = p[A]) ? f : String(f));

      var k = p.groups;

      if (u) {
        var L = [S].concat(R, E, c);
        void 0 !== k && L.push(k);
        var x = String(n.apply(void 0, L));
      } else x = o(S, c, E, R, k, n);

      E >= b && (m += c.slice(b, E) + x, b = E + S.length);
    }

    return m + c.slice(b);
  }];

  function o(e, i, n, a, s, r) {
    var o = n + e.length,
        l = a.length,
        d = Zt;
    return void 0 !== s && (s = Qe(s), d = Qt), t.call(r, d, function (t, r) {
      var d;

      switch (r.charAt(0)) {
        case "$":
          return "$";

        case "&":
          return e;

        case "`":
          return i.slice(0, n);

        case "'":
          return i.slice(o);

        case "<":
          d = s[r.slice(1, -1)];
          break;

        default:
          var c = +r;
          if (0 === c) return t;

          if (c > l) {
            var u = Jt(c / 10);
            return 0 === u ? t : u <= l ? void 0 === a[u - 1] ? r.charAt(1) : a[u - 1] + r.charAt(1) : t;
          }

          d = a[c - 1];
      }

      return void 0 === d ? "" : d;
    });
  }
});

const ei = (e, t) => {
  for (let i in t) e[i] = t[i];

  return e;
},
      ti = (e, t) => Array.from(e.querySelectorAll(t)),
      ii = (e, t, i) => {
  i ? e.classList.add(t) : e.classList.remove(t);
},
      ni = e => {
  if ("string" == typeof e) {
    if ("null" === e) return null;
    if ("true" === e) return !0;
    if ("false" === e) return !1;
    if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
  }

  return e;
},
      ai = (e, t) => {
  e.style.transform = t;
},
      si = (e, t) => {
  let i = e.matches || e.matchesSelector || e.msMatchesSelector;
  return !(!i || !i.call(e, t));
},
      ri = (e, t) => {
  if ("function" == typeof e.closest) return e.closest(t);

  for (; e;) {
    if (si(e, t)) return e;
    e = e.parentNode;
  }

  return null;
},
      oi = (e, t, i, n = "") => {
  let a = e.querySelectorAll("." + i);

  for (let t = 0; t < a.length; t++) {
    let i = a[t];
    if (i.parentNode === e) return i;
  }

  let s = document.createElement(t);
  return s.className = i, s.innerHTML = n, e.appendChild(s), s;
},
      li = e => {
  let t = document.createElement("style");
  return t.type = "text/css", e && e.length > 0 && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t;
},
      di = () => {
  let e = {};
  location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, t => {
    e[t.split("=").shift()] = t.split("=").pop();
  });

  for (let t in e) {
    let i = e[t];
    e[t] = ni(unescape(i));
  }

  return void 0 !== e.dependencies && delete e.dependencies, e;
},
      ci = (e, t = 0) => {
  if (e) {
    let i,
        n = e.style.height;
    return e.style.height = "0px", e.parentNode.style.height = "auto", i = t - e.parentNode.offsetHeight, e.style.height = n + "px", e.parentNode.style.removeProperty("height"), i;
  }

  return t;
},
      ui = navigator.userAgent,
      hi = document.createElement("div"),
      gi = /(iphone|ipod|ipad|android)/gi.test(ui) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
      vi = /chrome/i.test(ui) && !/edge/i.test(ui),
      pi = /android/gi.test(ui),
      fi = "zoom" in hi.style && !gi && (vi || /Version\/[\d\.]+.*Safari/.test(ui));

var mi = t(i(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var i = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];

      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }

    return e;
  };

  t.default = function (e) {
    if (e) {
      var t = function (e) {
        return [].slice.call(e);
      },
          n = 0,
          a = 1,
          s = 2,
          r = 3,
          o = [],
          l = null,
          d = "requestAnimationFrame" in e ? function () {
        e.cancelAnimationFrame(l), l = e.requestAnimationFrame(function () {
          return u(o.filter(function (e) {
            return e.dirty && e.active;
          }));
        });
      } : function () {},
          c = function (e) {
        return function () {
          o.forEach(function (t) {
            return t.dirty = e;
          }), d();
        };
      },
          u = function (e) {
        e.filter(function (e) {
          return !e.styleComputed;
        }).forEach(function (e) {
          e.styleComputed = p(e);
        }), e.filter(f).forEach(m);
        var t = e.filter(v);
        t.forEach(g), t.forEach(function (e) {
          m(e), h(e);
        }), t.forEach(b);
      },
          h = function (e) {
        return e.dirty = n;
      },
          g = function (e) {
        e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap";
      },
          v = function (e) {
        return e.dirty !== s || e.dirty === s && e.element.parentNode.clientWidth !== e.availableWidth;
      },
          p = function (t) {
        var i = e.getComputedStyle(t.element, null);
        t.currentFontSize = parseInt(i.getPropertyValue("font-size"), 10), t.display = i.getPropertyValue("display"), t.whiteSpace = i.getPropertyValue("white-space");
      },
          f = function (e) {
        var t = !1;
        return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t);
      },
          m = function (e) {
        e.originalStyle || (e.originalStyle = e.element.getAttribute("style") || ""), e.element.style.cssText = e.originalStyle + ";white-space:" + e.whiteSpace + ";display:" + e.display + ";font-size:" + e.currentFontSize + "px";
      },
          b = function (e) {
        e.element.dispatchEvent(new CustomEvent("fit", {
          detail: {
            oldValue: e.previousFontSize,
            newValue: e.currentFontSize,
            scaleFactor: e.currentFontSize / e.previousFontSize
          }
        }));
      },
          y = function (e, t) {
        return function () {
          e.dirty = t, e.active && d();
        };
      },
          w = function (e) {
        return function () {
          o = o.filter(function (t) {
            return t.element !== e.element;
          }), e.observeMutations && e.observer.disconnect(), e.element.style.cssText = e.originalStyle;
        };
      },
          S = function (e) {
        return function () {
          e.active || (e.active = !0, d());
        };
      },
          E = function (e) {
        return function () {
          return e.active = !1;
        };
      },
          R = function (e) {
        e.observeMutations && (e.observer = new MutationObserver(y(e, a)), e.observer.observe(e.element, e.observeMutations));
      },
          A = {
        minSize: 16,
        maxSize: 512,
        multiLine: !0,
        observeMutations: "MutationObserver" in e && {
          subtree: !0,
          childList: !0,
          characterData: !0
        }
      },
          k = null,
          L = function () {
        e.clearTimeout(k), k = e.setTimeout(c(s), P.observeWindowDelay);
      },
          x = ["resize", "orientationchange"];

      return Object.defineProperty(P, "observeWindow", {
        set: function (t) {
          var i = (t ? "add" : "remove") + "EventListener";
          x.forEach(function (t) {
            e[i](t, L);
          });
        }
      }), P.observeWindow = !0, P.observeWindowDelay = 100, P.fitAll = c(r), P;
    }

    function C(e, t) {
      var n = i({}, A, t),
          a = e.map(function (e) {
        var t = i({}, n, {
          element: e,
          active: !0
        });
        return function (e) {
          R(e), e.newbie = !0, e.dirty = !0, o.push(e);
        }(t), {
          element: e,
          fit: y(t, r),
          unfreeze: S(t),
          freeze: E(t),
          unsubscribe: w(t)
        };
      });
      return d(), a;
    }

    function P(e) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return "string" == typeof e ? C(t(document.querySelectorAll(e)), i) : C([e], i)[0];
    }
  }("undefined" == typeof window ? null : window);
}));

class bi {
  constructor(e) {
    this.Reveal = e, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this);
  }

  shouldPreload(e) {
    let t = this.Reveal.getConfig().preloadIframes;
    return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t;
  }

  load(e, t = {}) {
    e.style.display = this.Reveal.getConfig().display, ti(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(e => {
      ("IFRAME" !== e.tagName || this.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"));
    }), ti(e, "video, audio").forEach(e => {
      let t = 0;
      ti(e, "source[data-src]").forEach(e => {
        e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1;
      }), gi && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""), t > 0 && e.load();
    });
    let i = e.slideBackgroundElement;

    if (i) {
      i.style.display = "block";
      let n = e.slideBackgroundContentElement,
          a = e.getAttribute("data-background-iframe");

      if (!1 === i.hasAttribute("data-loaded")) {
        i.setAttribute("data-loaded", "true");
        let s = e.getAttribute("data-background-image"),
            r = e.getAttribute("data-background-video"),
            o = e.hasAttribute("data-background-video-loop"),
            l = e.hasAttribute("data-background-video-muted");
        if (s) n.style.backgroundImage = "url(" + encodeURI(s) + ")";else if (r && !this.Reveal.isSpeakerNotes()) {
          let e = document.createElement("video");
          o && e.setAttribute("loop", ""), l && (e.muted = !0), gi && (e.muted = !0, e.setAttribute("playsinline", "")), r.split(",").forEach(t => {
            e.innerHTML += '<source src="' + t + '">';
          }), n.appendChild(e);
        } else if (a && !0 !== t.excludeIframes) {
          let e = document.createElement("iframe");
          e.setAttribute("allowfullscreen", ""), e.setAttribute("mozallowfullscreen", ""), e.setAttribute("webkitallowfullscreen", ""), e.setAttribute("allow", "autoplay"), e.setAttribute("data-src", a), e.style.width = "100%", e.style.height = "100%", e.style.maxHeight = "100%", e.style.maxWidth = "100%", n.appendChild(e);
        }
      }

      let s = n.querySelector("iframe[data-src]");
      s && this.shouldPreload(i) && !/autoplay=(1|true|yes)/gi.test(a) && s.getAttribute("src") !== a && s.setAttribute("src", a);
    }

    Array.from(e.querySelectorAll(".r-fit-text:not([data-fitted])")).forEach(e => {
      e.dataset.fitted = "", mi(e, {
        minSize: 24,
        maxSize: .8 * this.Reveal.getConfig().height,
        observeMutations: !1,
        observeWindow: !1
      });
    });
  }

  unload(e) {
    e.style.display = "none";
    let t = this.Reveal.getSlideBackground(e);
    t && (t.style.display = "none", ti(t, "iframe[src]").forEach(e => {
      e.removeAttribute("src");
    })), ti(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(e => {
      e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
    }), ti(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach(e => {
      e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
    });
  }

  formatEmbeddedContent() {
    let e = (e, t, i) => {
      ti(this.Reveal.getSlidesElement(), "iframe[" + e + '*="' + t + '"]').forEach(t => {
        let n = t.getAttribute(e);
        n && -1 === n.indexOf(i) && t.setAttribute(e, n + (/\?/.test(n) ? "&" : "?") + i);
      });
    };

    e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1");
  }

  startEmbeddedContent(e) {
    e && !this.Reveal.isSpeakerNotes() && (ti(e, 'img[src$=".gif"]').forEach(e => {
      e.setAttribute("src", e.getAttribute("src"));
    }), ti(e, "video, audio").forEach(e => {
      if (ri(e, ".fragment") && !ri(e, ".fragment.visible")) return;
      let t = this.Reveal.getConfig().autoPlayMedia;
      if ("boolean" != typeof t && (t = e.hasAttribute("data-autoplay") || !!ri(e, ".slide-background")), t && "function" == typeof e.play) if (e.readyState > 1) this.startEmbeddedMedia({
        target: e
      });else if (gi) {
        let t = e.play();
        t && "function" == typeof t.catch && !1 === e.controls && t.catch(() => {
          e.controls = !0, e.addEventListener("play", () => {
            e.controls = !1;
          });
        });
      } else e.removeEventListener("loadeddata", this.startEmbeddedMedia), e.addEventListener("loadeddata", this.startEmbeddedMedia);
    }), ti(e, "iframe[src]").forEach(e => {
      ri(e, ".fragment") && !ri(e, ".fragment.visible") || this.startEmbeddedIframe({
        target: e
      });
    }), ti(e, "iframe[data-src]").forEach(e => {
      ri(e, ".fragment") && !ri(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", this.startEmbeddedIframe), e.addEventListener("load", this.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")));
    }));
  }

  startEmbeddedMedia(e) {
    let t = !!ri(e.target, "html"),
        i = !!ri(e.target, ".present");
    t && i && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
  }

  startEmbeddedIframe(e) {
    let t = e.target;

    if (t && t.contentWindow) {
      let i = !!ri(e.target, "html"),
          n = !!ri(e.target, ".present");

      if (i && n) {
        let e = this.Reveal.getConfig().autoPlayMedia;
        "boolean" != typeof e && (e = t.hasAttribute("data-autoplay") || !!ri(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*");
      }
    }
  }

  stopEmbeddedContent(e, t = {}) {
    t = ei({
      unloadIframes: !0
    }, t), e && e.parentNode && (ti(e, "video, audio").forEach(e => {
      e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause());
    }), ti(e, "iframe").forEach(e => {
      e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", this.startEmbeddedIframe);
    }), ti(e, 'iframe[src*="youtube.com/embed/"]').forEach(e => {
      !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    }), ti(e, 'iframe[src*="player.vimeo.com/"]').forEach(e => {
      !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*");
    }), !0 === t.unloadIframes && ti(e, "iframe[data-src]").forEach(e => {
      e.setAttribute("src", "about:blank"), e.removeAttribute("src");
    }));
  }

}

class yi {
  constructor(e) {
    this.Reveal = e;
  }

  render() {
    this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
  }

  configure(e, t) {
    let i = "none";
    e.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (i = "block"), this.element.style.display = i;
  }

  update() {
    this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
  }

  getSlideNumber(e = this.Reveal.getCurrentSlide()) {
    let t,
        i = this.Reveal.getConfig(),
        n = "h.v";
    if ("function" == typeof i.slideNumber) t = i.slideNumber(e);else {
      "string" == typeof i.slideNumber && (n = i.slideNumber), /c/.test(n) || 1 !== this.Reveal.getHorizontalSlides().length || (n = "c");
      let a = e && "uncounted" === e.dataset.visibility ? 0 : 1;

      switch (t = [], n) {
        case "c":
          t.push(this.Reveal.getSlidePastCount(e) + a);
          break;

        case "c/t":
          t.push(this.Reveal.getSlidePastCount(e) + a, "/", this.Reveal.getTotalSlides());
          break;

        default:
          let i = this.Reveal.getIndices(e);
          t.push(i.h + a);
          let s = "h/v" === n ? "/" : ".";
          this.Reveal.isVerticalSlide(e) && t.push(s, i.v + 1);
      }
    }
    let a = "#" + this.Reveal.location.getHash(e);
    return this.formatNumber(t[0], t[1], t[2], a);
  }

  formatNumber(e, t, i, n = "#" + this.Reveal.location.getHash()) {
    return "number" != typeof i || isNaN(i) ? '<a href="'.concat(n, '">\n\t\t\t\t\t<span class="slide-number-a">').concat(e, "</span>\n\t\t\t\t\t</a>") : '<a href="'.concat(n, '">\n\t\t\t\t\t<span class="slide-number-a">').concat(e, '</span>\n\t\t\t\t\t<span class="slide-number-delimiter">').concat(t, '</span>\n\t\t\t\t\t<span class="slide-number-b">').concat(i, "</span>\n\t\t\t\t\t</a>");
  }

}

const wi = e => {
  let t = e.match(/^#([0-9a-f]{3})$/i);
  if (t && t[1]) return t = t[1], {
    r: 17 * parseInt(t.charAt(0), 16),
    g: 17 * parseInt(t.charAt(1), 16),
    b: 17 * parseInt(t.charAt(2), 16)
  };
  let i = e.match(/^#([0-9a-f]{6})$/i);
  if (i && i[1]) return i = i[1], {
    r: parseInt(i.substr(0, 2), 16),
    g: parseInt(i.substr(2, 2), 16),
    b: parseInt(i.substr(4, 2), 16)
  };
  let n = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (n) return {
    r: parseInt(n[1], 10),
    g: parseInt(n[2], 10),
    b: parseInt(n[3], 10)
  };
  let a = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
  return a ? {
    r: parseInt(a[1], 10),
    g: parseInt(a[2], 10),
    b: parseInt(a[3], 10),
    a: parseFloat(a[4])
  } : null;
};

class Si {
  constructor(e) {
    this.Reveal = e;
  }

  render() {
    this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
  }

  create() {
    this.Reveal.isPrintingPDF();
    this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach(e => {
      let t = this.createBackground(e, this.element);
      ti(e, "section").forEach(e => {
        this.createBackground(e, t), t.classList.add("stack");
      });
    }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(() => {
      this.Reveal.getRevealElement().classList.add("has-parallax-background");
    }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
  }

  createBackground(e, t) {
    let i = document.createElement("div");
    i.className = "slide-background " + e.className.replace(/present|past|future/, "");
    let n = document.createElement("div");
    return n.className = "slide-background-content", i.appendChild(n), t.appendChild(i), e.slideBackgroundElement = i, e.slideBackgroundContentElement = n, this.sync(e), i;
  }

  sync(e) {
    let t = e.slideBackgroundElement,
        i = e.slideBackgroundContentElement;
    e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", i.style.backgroundSize = "", i.style.backgroundRepeat = "", i.style.backgroundPosition = "", i.style.backgroundImage = "", i.style.opacity = "", i.innerHTML = "";
    let n = {
      background: e.getAttribute("data-background"),
      backgroundSize: e.getAttribute("data-background-size"),
      backgroundImage: e.getAttribute("data-background-image"),
      backgroundVideo: e.getAttribute("data-background-video"),
      backgroundIframe: e.getAttribute("data-background-iframe"),
      backgroundColor: e.getAttribute("data-background-color"),
      backgroundRepeat: e.getAttribute("data-background-repeat"),
      backgroundPosition: e.getAttribute("data-background-position"),
      backgroundTransition: e.getAttribute("data-background-transition"),
      backgroundOpacity: e.getAttribute("data-background-opacity")
    };
    n.background && (/^(http|file|\/\/)/gi.test(n.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(n.background) ? e.setAttribute("data-background-image", n.background) : t.style.background = n.background), (n.background || n.backgroundColor || n.backgroundImage || n.backgroundVideo || n.backgroundIframe) && t.setAttribute("data-background-hash", n.background + n.backgroundSize + n.backgroundImage + n.backgroundVideo + n.backgroundIframe + n.backgroundColor + n.backgroundRepeat + n.backgroundPosition + n.backgroundTransition + n.backgroundOpacity), n.backgroundSize && t.setAttribute("data-background-size", n.backgroundSize), n.backgroundColor && (t.style.backgroundColor = n.backgroundColor), n.backgroundTransition && t.setAttribute("data-background-transition", n.backgroundTransition), e.hasAttribute("data-preload") && t.setAttribute("data-preload", ""), n.backgroundSize && (i.style.backgroundSize = n.backgroundSize), n.backgroundRepeat && (i.style.backgroundRepeat = n.backgroundRepeat), n.backgroundPosition && (i.style.backgroundPosition = n.backgroundPosition), n.backgroundOpacity && (i.style.opacity = n.backgroundOpacity);
    let a = n.backgroundColor;

    if (!a) {
      let e = window.getComputedStyle(t);
      e && e.backgroundColor && (a = e.backgroundColor);
    }

    if (a) {
      let t = wi(a);
      t && 0 !== t.a && ("string" == typeof (s = a) && (s = wi(s)), (s ? (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 : null) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background"));
    }

    var s;
  }

  update(e = !1) {
    let t = this.Reveal.getCurrentSlide(),
        i = this.Reveal.getIndices(),
        n = null,
        a = this.Reveal.getConfig().rtl ? "future" : "past",
        s = this.Reveal.getConfig().rtl ? "past" : "future";

    if (Array.from(this.element.childNodes).forEach((t, r) => {
      t.classList.remove("past", "present", "future"), r < i.h ? t.classList.add(a) : r > i.h ? t.classList.add(s) : (t.classList.add("present"), n = t), (e || r === i.h) && ti(t, ".slide-background").forEach((e, t) => {
        e.classList.remove("past", "present", "future"), t < i.v ? e.classList.add("past") : t > i.v ? e.classList.add("future") : (e.classList.add("present"), r === i.h && (n = e));
      });
    }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
      unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)
    }), n) {
      this.Reveal.slideContent.startEmbeddedContent(n);
      let e = n.querySelector(".slide-background-content");

      if (e) {
        let t = e.style.backgroundImage || "";
        /\.gif/i.test(t) && (e.style.backgroundImage = "", window.getComputedStyle(e).opacity, e.style.backgroundImage = t);
      }

      let t = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null,
          i = n.getAttribute("data-background-hash");
      i && i === t && n !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = n;
    }

    t && ["has-light-background", "has-dark-background"].forEach(e => {
      t.classList.contains(e) ? this.Reveal.getRevealElement().classList.add(e) : this.Reveal.getRevealElement().classList.remove(e);
    }, this), setTimeout(() => {
      this.element.classList.remove("no-transition");
    }, 1);
  }

  updateParallax() {
    let e = this.Reveal.getIndices();

    if (this.Reveal.getConfig().parallaxBackgroundImage) {
      let t,
          i,
          n = this.Reveal.getHorizontalSlides(),
          a = this.Reveal.getVerticalSlides(),
          s = this.element.style.backgroundSize.split(" ");
      1 === s.length ? t = i = parseInt(s[0], 10) : (t = parseInt(s[0], 10), i = parseInt(s[1], 10));
      let r,
          o,
          l = this.element.offsetWidth,
          d = n.length;
      r = "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : d > 1 ? (t - l) / (d - 1) : 0, o = r * e.h * -1;
      let c,
          u,
          h = this.element.offsetHeight,
          g = a.length;
      c = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (i - h) / (g - 1), u = g > 0 ? c * e.v : 0, this.element.style.backgroundPosition = o + "px " + -u + "px";
    }
  }

}

let Ei = 0;

class Ri {
  constructor(e) {
    this.Reveal = e;
  }

  run(e, t) {
    if (this.reset(), e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate")) {
      this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || li();
      let i = this.getAutoAnimateOptions(t);
      e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending";
      let n = this.Reveal.getSlides();
      i.slideDirection = n.indexOf(t) > n.indexOf(e) ? "forward" : "backward";
      let a = this.getAutoAnimatableElements(e, t).map(e => this.autoAnimateElements(e.from, e.to, e.options || {}, i, Ei++));

      if ("false" !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
        let e = .8 * i.duration,
            n = .2 * i.duration;
        this.getUnmatchedAutoAnimateElements(t).forEach(e => {
          let t = this.getAutoAnimateOptions(e, i),
              n = "unmatched";
          t.duration === i.duration && t.delay === i.delay || (n = "unmatched-" + Ei++, a.push('[data-auto-animate="running"] [data-auto-animate-target="'.concat(n, '"] { transition: opacity ').concat(t.duration, "s ease ").concat(t.delay, "s; }"))), e.dataset.autoAnimateTarget = n;
        }, this), a.push('[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity '.concat(e, "s ease ").concat(n, "s; }"));
      }

      this.autoAnimateStyleSheet.innerHTML = a.join(""), requestAnimationFrame(() => {
        this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running");
      }), this.Reveal.dispatchEvent({
        type: "autoanimate",
        data: {
          fromSlide: e,
          toSlide: t,
          sheet: this.autoAnimateStyleSheet
        }
      });
    }
  }

  reset() {
    ti(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach(e => {
      e.dataset.autoAnimate = "";
    }), ti(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach(e => {
      delete e.dataset.autoAnimateTarget;
    }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
  }

  autoAnimateElements(e, t, i, n, a) {
    e.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = a;
    let s = this.getAutoAnimateOptions(t, n);
    void 0 !== i.delay && (s.delay = i.delay), void 0 !== i.duration && (s.duration = i.duration), void 0 !== i.easing && (s.easing = i.easing);
    let r = this.getAutoAnimatableProperties("from", e, i),
        o = this.getAutoAnimatableProperties("to", t, i);

    if (t.classList.contains("fragment") && (delete o.styles.opacity, e.classList.contains("fragment"))) {
      (e.className.match(Lt) || [""])[0] === (t.className.match(Lt) || [""])[0] && "forward" === n.slideDirection && t.classList.add("visible", "disabled");
    }

    if (!1 !== i.translate || !1 !== i.scale) {
      let e = this.Reveal.getScale(),
          t = {
        x: (r.x - o.x) / e,
        y: (r.y - o.y) / e,
        scaleX: r.width / o.width,
        scaleY: r.height / o.height
      };
      t.x = Math.round(1e3 * t.x) / 1e3, t.y = Math.round(1e3 * t.y) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3;
      let n = !1 !== i.translate && (0 !== t.x || 0 !== t.y),
          a = !1 !== i.scale && (0 !== t.scaleX || 0 !== t.scaleY);

      if (n || a) {
        let e = [];
        n && e.push("translate(".concat(t.x, "px, ").concat(t.y, "px)")), a && e.push("scale(".concat(t.scaleX, ", ").concat(t.scaleY, ")")), r.styles.transform = e.join(" "), r.styles["transform-origin"] = "top left", o.styles.transform = "none";
      }
    }

    for (let e in o.styles) {
      const t = o.styles[e],
            i = r.styles[e];
      t === i ? delete o.styles[e] : (!0 === t.explicitValue && (o.styles[e] = t.value), !0 === i.explicitValue && (r.styles[e] = i.value));
    }

    let l = "",
        d = Object.keys(o.styles);

    if (d.length > 0) {
      r.styles.transition = "none", o.styles.transition = "all ".concat(s.duration, "s ").concat(s.easing, " ").concat(s.delay, "s"), o.styles["transition-property"] = d.join(", "), o.styles["will-change"] = d.join(", "), l = '[data-auto-animate-target="' + a + '"] {' + Object.keys(r.styles).map(e => e + ": " + r.styles[e] + " !important;").join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + a + '"] {' + Object.keys(o.styles).map(e => e + ": " + o.styles[e] + " !important;").join("") + "}";
    }

    return l;
  }

  getAutoAnimateOptions(e, t) {
    let i = {
      easing: this.Reveal.getConfig().autoAnimateEasing,
      duration: this.Reveal.getConfig().autoAnimateDuration,
      delay: 0
    };

    if (i = ei(i, t), e.parentNode) {
      let t = ri(e.parentNode, "[data-auto-animate-target]");
      t && (i = this.getAutoAnimateOptions(t, i));
    }

    return e.dataset.autoAnimateEasing && (i.easing = e.dataset.autoAnimateEasing), e.dataset.autoAnimateDuration && (i.duration = parseFloat(e.dataset.autoAnimateDuration)), e.dataset.autoAnimateDelay && (i.delay = parseFloat(e.dataset.autoAnimateDelay)), i;
  }

  getAutoAnimatableProperties(e, t, i) {
    let n = this.Reveal.getConfig(),
        a = {
      styles: []
    };

    if (!1 !== i.translate || !1 !== i.scale) {
      let e;
      if ("function" == typeof i.measure) e = i.measure(t);else if (n.center) e = t.getBoundingClientRect();else {
        let i = this.Reveal.getScale();
        e = {
          x: t.offsetLeft * i,
          y: t.offsetTop * i,
          width: t.offsetWidth * i,
          height: t.offsetHeight * i
        };
      }
      a.x = e.x, a.y = e.y, a.width = e.width, a.height = e.height;
    }

    const s = getComputedStyle(t);
    return (i.styles || n.autoAnimateStyles).forEach(t => {
      let i;
      "string" == typeof t && (t = {
        property: t
      }), i = void 0 !== t.from && "from" === e ? {
        value: t.from,
        explicitValue: !0
      } : void 0 !== t.to && "to" === e ? {
        value: t.to,
        explicitValue: !0
      } : s[t.property], "" !== i && (a.styles[t.property] = i);
    }), a;
  }

  getAutoAnimatableElements(e, t) {
    let i = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t),
        n = [];
    return i.filter((e, t) => {
      if (-1 === n.indexOf(e.to)) return n.push(e.to), !0;
    });
  }

  getAutoAnimatePairs(e, t) {
    let i = [];
    const n = "h1, h2, h3, h4, h5, h6, p, li";
    return this.findAutoAnimateMatches(i, e, t, "[data-id]", e => e.nodeName + ":::" + e.getAttribute("data-id")), this.findAutoAnimateMatches(i, e, t, n, e => e.nodeName + ":::" + e.innerText), this.findAutoAnimateMatches(i, e, t, "img, video, iframe", e => e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"))), this.findAutoAnimateMatches(i, e, t, "pre", e => e.nodeName + ":::" + e.innerText), i.forEach(e => {
      si(e.from, n) ? e.options = {
        scale: !1
      } : si(e.from, "pre") && (e.options = {
        scale: !1,
        styles: ["width", "height"]
      }, this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-code", e => e.textContent, {
        scale: !1,
        styles: [],
        measure: this.getLocalBoundingBox.bind(this)
      }), this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-line[data-line-number]", e => e.getAttribute("data-line-number"), {
        scale: !1,
        styles: ["width"],
        measure: this.getLocalBoundingBox.bind(this)
      }));
    }, this), i;
  }

  getLocalBoundingBox(e) {
    const t = this.Reveal.getScale();
    return {
      x: Math.round(e.offsetLeft * t * 100) / 100,
      y: Math.round(e.offsetTop * t * 100) / 100,
      width: Math.round(e.offsetWidth * t * 100) / 100,
      height: Math.round(e.offsetHeight * t * 100) / 100
    };
  }

  findAutoAnimateMatches(e, t, i, n, a, s) {
    let r = {},
        o = {};
    [].slice.call(t.querySelectorAll(n)).forEach((e, t) => {
      const i = a(e);
      "string" == typeof i && i.length && (r[i] = r[i] || [], r[i].push(e));
    }), [].slice.call(i.querySelectorAll(n)).forEach((t, i) => {
      const n = a(t);
      let l;

      if (o[n] = o[n] || [], o[n].push(t), r[n]) {
        const e = o[n].length - 1,
              t = r[n].length - 1;
        r[n][e] ? (l = r[n][e], r[n][e] = null) : r[n][t] && (l = r[n][t], r[n][t] = null);
      }

      l && e.push({
        from: l,
        to: t,
        options: s
      });
    });
  }

  getUnmatchedAutoAnimateElements(e) {
    return [].slice.call(e.children).reduce((e, t) => {
      const i = t.querySelector("[data-auto-animate-target]");
      return t.hasAttribute("data-auto-animate-target") || i || e.push(t), t.querySelector("[data-auto-animate-target]") && (e = e.concat(this.getUnmatchedAutoAnimateElements(t))), e;
    }, []);
  }

}

class Ai {
  constructor(e) {
    this.Reveal = e;
  }

  configure(e, t) {
    !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable();
  }

  disable() {
    ti(this.Reveal.getSlidesElement(), ".fragment").forEach(e => {
      e.classList.add("visible"), e.classList.remove("current-fragment");
    });
  }

  enable() {
    ti(this.Reveal.getSlidesElement(), ".fragment").forEach(e => {
      e.classList.remove("visible"), e.classList.remove("current-fragment");
    });
  }

  availableRoutes() {
    let e = this.Reveal.getCurrentSlide();

    if (e && this.Reveal.getConfig().fragments) {
      let t = e.querySelectorAll(".fragment:not(.disabled)"),
          i = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
      return {
        prev: t.length - i.length > 0,
        next: !!i.length
      };
    }

    return {
      prev: !1,
      next: !1
    };
  }

  sort(e, t = !1) {
    e = Array.from(e);
    let i = [],
        n = [],
        a = [];
    e.forEach(e => {
      if (e.hasAttribute("data-fragment-index")) {
        let t = parseInt(e.getAttribute("data-fragment-index"), 10);
        i[t] || (i[t] = []), i[t].push(e);
      } else n.push([e]);
    }), i = i.concat(n);
    let s = 0;
    return i.forEach(e => {
      e.forEach(e => {
        a.push(e), e.setAttribute("data-fragment-index", s);
      }), s++;
    }), !0 === t ? i : a;
  }

  sortAll() {
    this.Reveal.getHorizontalSlides().forEach(e => {
      let t = ti(e, "section");
      t.forEach((e, t) => {
        this.sort(e.querySelectorAll(".fragment"));
      }, this), 0 === t.length && this.sort(e.querySelectorAll(".fragment"));
    });
  }

  update(e, t) {
    let i = {
      shown: [],
      hidden: []
    },
        n = this.Reveal.getCurrentSlide();

    if (n && this.Reveal.getConfig().fragments && (t = t || this.sort(n.querySelectorAll(".fragment"))).length) {
      let a = 0;

      if ("number" != typeof e) {
        let t = this.sort(n.querySelectorAll(".fragment.visible")).pop();
        t && (e = parseInt(t.getAttribute("data-fragment-index") || 0, 10));
      }

      Array.from(t).forEach((t, n) => {
        if (t.hasAttribute("data-fragment-index") && (n = parseInt(t.getAttribute("data-fragment-index"), 10)), a = Math.max(a, n), n <= e) {
          let a = t.classList.contains("visible");
          t.classList.add("visible"), t.classList.remove("current-fragment"), n === e && (this.Reveal.announceStatus(this.Reveal.getStatusText(t)), t.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t)), a || (i.shown.push(t), this.Reveal.dispatchEvent({
            target: t,
            type: "visible",
            bubbles: !1
          }));
        } else {
          let e = t.classList.contains("visible");
          t.classList.remove("visible"), t.classList.remove("current-fragment"), e && (i.hidden.push(t), this.Reveal.dispatchEvent({
            target: t,
            type: "hidden",
            bubbles: !1
          }));
        }
      }), e = "number" == typeof e ? e : -1, e = Math.max(Math.min(e, a), -1), n.setAttribute("data-fragment", e);
    }

    return i;
  }

  sync(e = this.Reveal.getCurrentSlide()) {
    return this.sort(e.querySelectorAll(".fragment"));
  }

  goto(e, t = 0) {
    let i = this.Reveal.getCurrentSlide();

    if (i && this.Reveal.getConfig().fragments) {
      let n = this.sort(i.querySelectorAll(".fragment:not(.disabled)"));

      if (n.length) {
        if ("number" != typeof e) {
          let t = this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();
          e = t ? parseInt(t.getAttribute("data-fragment-index") || 0, 10) : -1;
        }

        e += t;
        let a = this.update(e, n);
        return a.hidden.length && this.Reveal.dispatchEvent({
          type: "fragmenthidden",
          data: {
            fragment: a.hidden[0],
            fragments: a.hidden
          }
        }), a.shown.length && this.Reveal.dispatchEvent({
          type: "fragmentshown",
          data: {
            fragment: a.shown[0],
            fragments: a.shown
          }
        }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!a.shown.length && !a.hidden.length);
      }
    }

    return !1;
  }

  next() {
    return this.goto(null, 1);
  }

  prev() {
    return this.goto(null, -1);
  }

}

class ki {
  constructor(e) {
    this.Reveal = e, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this);
  }

  activate() {
    if (this.Reveal.getConfig().overview && !this.isActive()) {
      this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), ti(this.Reveal.getRevealElement(), ".slides section").forEach(e => {
        e.classList.contains("stack") || e.addEventListener("click", this.onSlideClicked, !0);
      });
      const e = 70,
            t = this.Reveal.getComputedSlideSize();
      this.overviewSlideWidth = t.width + e, this.overviewSlideHeight = t.height + e, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
      const i = this.Reveal.getIndices();
      this.Reveal.dispatchEvent({
        type: "overviewshown",
        data: {
          indexh: i.h,
          indexv: i.v,
          currentSlide: this.Reveal.getCurrentSlide()
        }
      });
    }
  }

  layout() {
    this.Reveal.getHorizontalSlides().forEach((e, t) => {
      e.setAttribute("data-index-h", t), ai(e, "translate3d(" + t * this.overviewSlideWidth + "px, 0, 0)"), e.classList.contains("stack") && ti(e, "section").forEach((e, i) => {
        e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", i), ai(e, "translate3d(0, " + i * this.overviewSlideHeight + "px, 0)");
      });
    }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e, t) => {
      ai(e, "translate3d(" + t * this.overviewSlideWidth + "px, 0, 0)"), ti(e, ".slide-background").forEach((e, t) => {
        ai(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
      });
    });
  }

  update() {
    const e = Math.min(window.innerWidth, window.innerHeight),
          t = Math.max(e / 5, 150) / e,
          i = this.Reveal.getIndices();
    this.Reveal.transformSlides({
      overview: ["scale(" + t + ")", "translateX(" + -i.h * this.overviewSlideWidth + "px)", "translateY(" + -i.v * this.overviewSlideHeight + "px)"].join(" ")
    });
  }

  deactivate() {
    if (this.Reveal.getConfig().overview) {
      this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(() => {
        this.Reveal.getRevealElement().classList.remove("overview-deactivating");
      }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), ti(this.Reveal.getRevealElement(), ".slides section").forEach(e => {
        ai(e, ""), e.removeEventListener("click", this.onSlideClicked, !0);
      }), ti(this.Reveal.getBackgroundsElement(), ".slide-background").forEach(e => {
        ai(e, "");
      }), this.Reveal.transformSlides({
        overview: ""
      });
      const e = this.Reveal.getIndices();
      this.Reveal.slide(e.h, e.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
        type: "overviewhidden",
        data: {
          indexh: e.h,
          indexv: e.v,
          currentSlide: this.Reveal.getCurrentSlide()
        }
      });
    }
  }

  toggle(e) {
    "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
  }

  isActive() {
    return this.active;
  }

  onSlideClicked(e) {
    if (this.isActive()) {
      e.preventDefault();
      let t = e.target;

      for (; t && !t.nodeName.match(/section/gi);) t = t.parentNode;

      if (t && !t.classList.contains("disabled") && (this.deactivate(), t.nodeName.match(/section/gi))) {
        let e = parseInt(t.getAttribute("data-index-h"), 10),
            i = parseInt(t.getAttribute("data-index-v"), 10);
        this.Reveal.slide(e, i);
      }
    }
  }

}

class Li {
  constructor(e) {
    this.Reveal = e, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this);
  }

  configure(e, t) {
    "linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts.P = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Home  ,  Shift &#8592;"] = "First slide", this.shortcuts["End  ,  Shift &#8594;"] = "Last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts["ESC, O"] = "Slide overview";
  }

  bind() {
    document.addEventListener("keydown", this.onDocumentKeyDown, !1), document.addEventListener("keypress", this.onDocumentKeyPress, !1);
  }

  unbind() {
    document.removeEventListener("keydown", this.onDocumentKeyDown, !1), document.removeEventListener("keypress", this.onDocumentKeyPress, !1);
  }

  addKeyBinding(e, t) {
    "object" == typeof e && e.keyCode ? this.bindings[e.keyCode] = {
      callback: t,
      key: e.key,
      description: e.description
    } : this.bindings[e] = {
      callback: t,
      key: null,
      description: null
    };
  }

  removeKeyBinding(e) {
    delete this.bindings[e];
  }

  triggerKey(e) {
    this.onDocumentKeyDown({
      keyCode: e
    });
  }

  registerKeyboardShortcut(e, t) {
    this.shortcuts[e] = t;
  }

  getShortcuts() {
    return this.shortcuts;
  }

  getBindings() {
    return this.bindings;
  }

  onDocumentKeyPress(e) {
    e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp();
  }

  onDocumentKeyDown(e) {
    let t = this.Reveal.getConfig();
    if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0;
    if ("focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
    let i = e.keyCode,
        n = !this.Reveal.isAutoSliding();
    this.Reveal.onUserInput(e);
    let a = document.activeElement && !0 === document.activeElement.isContentEditable,
        s = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
        r = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className),
        o = e.shiftKey && 32 === e.keyCode,
        l = e.shiftKey && 37 === i,
        d = e.shiftKey && 39 === i,
        c = !o && !l && !d && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
    if (a || s || r || c) return;
    let u,
        h = [66, 86, 190, 191];
    if ("object" == typeof t.keyboard) for (u in t.keyboard) "togglePause" === t.keyboard[u] && h.push(parseInt(u, 10));
    if (this.Reveal.isPaused() && -1 === h.indexOf(i)) return !1;
    let g = "linear" === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(),
        v = !1;
    if ("object" == typeof t.keyboard) for (u in t.keyboard) if (parseInt(u, 10) === i) {
      let i = t.keyboard[u];
      "function" == typeof i ? i.apply(null, [e]) : "string" == typeof i && "function" == typeof this.Reveal[i] && this.Reveal[i].call(), v = !0;
    }
    if (!1 === v) for (u in this.bindings) if (parseInt(u, 10) === i) {
      let t = this.bindings[u].callback;
      "function" == typeof t ? t.apply(null, [e]) : "string" == typeof t && "function" == typeof this.Reveal[t] && this.Reveal[t].call(), v = !0;
    }
    !1 === v && (v = !0, 80 === i || 33 === i ? this.Reveal.prev() : 78 === i || 34 === i ? this.Reveal.next() : 72 === i || 37 === i ? l ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.left() : 76 === i || 39 === i ? d ? this.Reveal.slide(Number.MAX_VALUE) : !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.right() : 75 === i || 38 === i ? !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.up() : 74 === i || 40 === i ? !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.down() : 36 === i ? this.Reveal.slide(0) : 35 === i ? this.Reveal.slide(Number.MAX_VALUE) : 32 === i ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev() : this.Reveal.next()) : 58 === i || 59 === i || 66 === i || 86 === i || 190 === i || 191 === i ? this.Reveal.togglePause() : 70 === i ? (e => {
      let t = (e = e || document.documentElement).requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
      t && t.apply(e);
    })(t.embedded ? this.Reveal.getViewportElement() : document.documentElement) : 65 === i ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(n) : v = !1), v ? e.preventDefault && e.preventDefault() : 27 !== i && 79 !== i || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide();
  }

}

class xi {
  constructor(e) {
    this.Reveal = e, this.writeURLTimeout = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
  }

  bind() {
    window.addEventListener("hashchange", this.onWindowHashChange, !1);
  }

  unbind() {
    window.removeEventListener("hashchange", this.onWindowHashChange, !1);
  }

  readURL() {
    let e = this.Reveal.getConfig(),
        t = this.Reveal.getIndices(),
        i = this.Reveal.getCurrentSlide(),
        n = window.location.hash,
        a = n.slice(2).split("/"),
        s = n.replace(/#\/?/gi, "");

    if (!/^[0-9]*$/.test(a[0]) && s.length) {
      let e, n;
      /\/[-\d]+$/g.test(s) && (n = parseInt(s.split("/").pop(), 10), n = isNaN(n) ? void 0 : n, s = s.split("/").shift());

      try {
        e = document.getElementById(decodeURIComponent(s));
      } catch (e) {}

      let a = !!i && i.getAttribute("id") === s;

      if (e) {
        if (!a || void 0 !== n) {
          let t = this.Reveal.getIndices(e);
          this.Reveal.slide(t.h, t.v, n);
        }
      } else this.Reveal.slide(t.h || 0, t.v || 0);
    } else {
      let i,
          n = e.hashOneBasedIndex ? 1 : 0,
          s = parseInt(a[0], 10) - n || 0,
          r = parseInt(a[1], 10) - n || 0;
      e.fragmentInURL && (i = parseInt(a[2], 10), isNaN(i) && (i = void 0)), s === t.h && r === t.v && void 0 === i || this.Reveal.slide(s, r, i);
    }
  }

  writeURL(e) {
    let t = this.Reveal.getConfig(),
        i = this.Reveal.getCurrentSlide();
    if (clearTimeout(this.writeURLTimeout), "number" == typeof e) this.writeURLTimeout = setTimeout(this.writeURL, e);else if (i) {
      let e = this.getHash();
      t.history ? window.location.hash = e : t.hash && ("/" === e ? window.history.replaceState(null, null, window.location.pathname + window.location.search) : window.history.replaceState(null, null, "#" + e));
    }
  }

  getHash(e) {
    let t = "/",
        i = e || this.Reveal.getCurrentSlide(),
        n = i ? i.getAttribute("id") : null;
    n && (n = encodeURIComponent(n));
    let a = this.Reveal.getIndices(e);
    if (this.Reveal.getConfig().fragmentInURL || (a.f = void 0), "string" == typeof n && n.length) t = "/" + n, a.f >= 0 && (t += "/" + a.f);else {
      let e = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
      (a.h > 0 || a.v > 0 || a.f >= 0) && (t += a.h + e), (a.v > 0 || a.f >= 0) && (t += "/" + (a.v + e)), a.f >= 0 && (t += "/" + a.f);
    }
    return t;
  }

  onWindowHashChange(e) {
    this.readURL();
  }

}

class Ci {
  constructor(e) {
    this.Reveal = e, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this);
  }

  render() {
    const e = this.Reveal.getConfig().rtl,
          t = this.Reveal.getRevealElement();
    this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = '<button class="navigate-left" aria-label="'.concat(e ? "next slide" : "previous slide", '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="').concat(e ? "previous slide" : "next slide", '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'), this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = ti(t, ".navigate-left"), this.controlsRight = ti(t, ".navigate-right"), this.controlsUp = ti(t, ".navigate-up"), this.controlsDown = ti(t, ".navigate-down"), this.controlsPrev = ti(t, ".navigate-prev"), this.controlsNext = ti(t, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
  }

  configure(e, t) {
    this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows);
  }

  bind() {
    let e = ["touchstart", "click"];
    pi && (e = ["touchstart"]), e.forEach(e => {
      this.controlsLeft.forEach(t => t.addEventListener(e, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach(t => t.addEventListener(e, this.onNavigateRightClicked, !1)), this.controlsUp.forEach(t => t.addEventListener(e, this.onNavigateUpClicked, !1)), this.controlsDown.forEach(t => t.addEventListener(e, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach(t => t.addEventListener(e, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach(t => t.addEventListener(e, this.onNavigateNextClicked, !1));
    });
  }

  unbind() {
    ["touchstart", "click"].forEach(e => {
      this.controlsLeft.forEach(t => t.removeEventListener(e, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach(t => t.removeEventListener(e, this.onNavigateRightClicked, !1)), this.controlsUp.forEach(t => t.removeEventListener(e, this.onNavigateUpClicked, !1)), this.controlsDown.forEach(t => t.removeEventListener(e, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach(t => t.removeEventListener(e, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach(t => t.removeEventListener(e, this.onNavigateNextClicked, !1));
    });
  }

  update() {
    let e = this.Reveal.availableRoutes();
    [...this.controlsLeft, ...this.controlsRight, ...this.controlsUp, ...this.controlsDown, ...this.controlsPrev, ...this.controlsNext].forEach(e => {
      e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled");
    }), e.left && this.controlsLeft.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), e.right && this.controlsRight.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), e.up && this.controlsUp.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), e.down && this.controlsDown.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), (e.left || e.up) && this.controlsPrev.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), (e.right || e.down) && this.controlsNext.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    });
    let t = this.Reveal.getCurrentSlide();

    if (t) {
      let e = this.Reveal.fragments.availableRoutes();
      e.prev && this.controlsPrev.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }), e.next && this.controlsNext.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }), this.Reveal.isVerticalSlide(t) ? (e.prev && this.controlsUp.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }), e.next && this.controlsDown.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      })) : (e.prev && this.controlsLeft.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }), e.next && this.controlsRight.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }));
    }

    if (this.Reveal.getConfig().controlsTutorial) {
      let t = this.Reveal.getIndices();
      !this.Reveal.hasNavigatedVertically() && e.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === t.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === t.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
    }
  }

  onNavigateLeftClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left();
  }

  onNavigateRightClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right();
  }

  onNavigateUpClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
  }

  onNavigateDownClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
  }

  onNavigatePrevClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
  }

  onNavigateNextClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
  }

}

class Pi {
  constructor(e) {
    this.Reveal = e, this.onProgressClicked = this.onProgressClicked.bind(this);
  }

  render() {
    this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
  }

  configure(e, t) {
    this.element.style.display = e.progress ? "block" : "none";
  }

  bind() {
    this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1);
  }

  unbind() {
    this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1);
  }

  update() {
    if (this.Reveal.getConfig().progress && this.bar) {
      let e = this.Reveal.getProgress();
      this.Reveal.getTotalSlides() < 2 && (e = 0), this.bar.style.transform = "scaleX(" + e + ")";
    }
  }

  getMaxWidth() {
    return this.Reveal.getRevealElement().offsetWidth;
  }

  onProgressClicked(e) {
    this.Reveal.onUserInput(e), e.preventDefault();
    let t = this.Reveal.getHorizontalSlides().length,
        i = Math.floor(e.clientX / this.getMaxWidth() * t);
    this.Reveal.getConfig().rtl && (i = t - i), this.Reveal.slide(i);
  }

}

class Ni {
  constructor(e) {
    this.Reveal = e, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
  }

  configure(e, t) {
    e.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1)), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1));
  }

  showCursor() {
    this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "");
  }

  hideCursor() {
    !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none");
  }

  onDocumentCursorActive(e) {
    this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
  }

  onDocumentMouseScroll(e) {
    if (Date.now() - this.lastMouseWheelStep > 1e3) {
      this.lastMouseWheelStep = Date.now();
      let t = e.detail || -e.wheelDelta;
      t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
    }
  }

}

const Mi = (e, t) => {
  const i = document.createElement("script");
  i.type = "text/javascript", i.async = !1, i.defer = !1, i.src = e, "function" == typeof t && (i.onload = i.onreadystatechange = e => {
    ("load" === e.type || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = i.onerror = null, t());
  }, i.onerror = e => {
    i.onload = i.onreadystatechange = i.onerror = null, t(new Error("Failed loading script: " + i.src + "\n" + e));
  });
  const n = document.querySelector("head");
  n.insertBefore(i, n.lastChild);
};

class Ii {
  constructor(e) {
    this.Reveal = e, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
  }

  load(e, t) {
    return this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise(e => {
      let i = [],
          n = 0;

      if (t.forEach(e => {
        e.condition && !e.condition() || (e.async ? this.asyncDependencies.push(e) : i.push(e));
      }), i.length) {
        n = i.length;

        const t = t => {
          t && "function" == typeof t.callback && t.callback(), 0 == --n && this.initPlugins().then(e);
        };

        i.forEach(e => {
          "string" == typeof e.id ? (this.registerPlugin(e), t(e)) : "string" == typeof e.src ? Mi(e.src, () => t(e)) : (console.warn("Unrecognized plugin format", e), t());
        });
      } else this.initPlugins().then(e);
    });
  }

  initPlugins() {
    return new Promise(e => {
      let t = Object.values(this.registeredPlugins),
          i = t.length;
      if (0 === i) this.loadAsync().then(e);else {
        let n,
            a = () => {
          0 == --i ? this.loadAsync().then(e) : n();
        },
            s = 0;

        n = () => {
          let e = t[s++];

          if ("function" == typeof e.init) {
            let t = e.init(this.Reveal);
            t && "function" == typeof t.then ? t.then(a) : a();
          } else a();
        }, n();
      }
    });
  }

  loadAsync() {
    return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach(e => {
      Mi(e.src, e.callback);
    }), Promise.resolve();
  }

  registerPlugin(e) {
    2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
    let t = e.id;
    "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered');
  }

  hasPlugin(e) {
    return !!this.registeredPlugins[e];
  }

  getPlugin(e) {
    return this.registeredPlugins[e];
  }

  getRegisteredPlugins() {
    return this.registeredPlugins;
  }

}

class Ti {
  constructor(e) {
    this.Reveal = e;
  }

  setupPDF() {
    let e = this.Reveal.getConfig(),
        t = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
        i = Math.floor(t.width * (1 + e.margin)),
        n = Math.floor(t.height * (1 + e.margin)),
        a = t.width,
        s = t.height;
    li("@page{size:" + i + "px " + n + "px; margin: 0px;}"), li(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + a + "px; max-height:" + s + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = i + "px", document.body.style.height = n + "px", this.Reveal.layoutSlideContents(a, s);
    let r = e.slideNumber && /all|print/i.test(e.showSlideNumber);
    ti(this.Reveal.getRevealElement(), ".slides section").forEach(function (e) {
      e.setAttribute("data-slide-number", this.Reveal.slideNumber.getSlideNumber(e));
    }, this), ti(this.Reveal.getRevealElement(), ".slides section").forEach(function (t) {
      if (!1 === t.classList.contains("stack")) {
        let o = (i - a) / 2,
            l = (n - s) / 2,
            d = t.scrollHeight,
            c = Math.max(Math.ceil(d / n), 1);
        c = Math.min(c, e.pdfMaxPagesPerSlide), (1 === c && e.center || t.classList.contains("center")) && (l = Math.max((n - d) / 2, 0));
        let u = document.createElement("div");

        if (u.className = "pdf-page", u.style.height = (n + e.pdfPageHeightOffset) * c + "px", t.parentNode.insertBefore(u, t), u.appendChild(t), t.style.left = o + "px", t.style.top = l + "px", t.style.width = a + "px", t.slideBackgroundElement && u.insertBefore(t.slideBackgroundElement, t), e.showNotes) {
          let n = this.Reveal.getSlideNotes(t);

          if (n) {
            let t = 8,
                a = "string" == typeof e.showNotes ? e.showNotes : "inline",
                s = document.createElement("div");
            s.classList.add("speaker-notes"), s.classList.add("speaker-notes-pdf"), s.setAttribute("data-layout", a), s.innerHTML = n, "separate-page" === a ? u.parentNode.insertBefore(s, u.nextSibling) : (s.style.left = t + "px", s.style.bottom = t + "px", s.style.width = i - 2 * t + "px", u.appendChild(s));
          }
        }

        if (r) {
          let e = document.createElement("div");
          e.classList.add("slide-number"), e.classList.add("slide-number-pdf"), e.innerHTML = t.getAttribute("data-slide-number"), u.appendChild(e);
        }

        if (e.pdfSeparateFragments) {
          let e,
              t,
              i = this.Reveal.fragments.sort(u.querySelectorAll(".fragment"), !0);
          i.forEach(function (i) {
            e && e.forEach(function (e) {
              e.classList.remove("current-fragment");
            }), i.forEach(function (e) {
              e.classList.add("visible", "current-fragment");
            }, this);
            let n = u.cloneNode(!0);
            u.parentNode.insertBefore(n, (t || u).nextSibling), e = i, t = n;
          }, this), i.forEach(function (e) {
            e.forEach(function (e) {
              e.classList.remove("visible", "current-fragment");
            });
          });
        } else ti(u, ".fragment:not(.fade-out)").forEach(function (e) {
          e.classList.add("visible");
        });
      }
    }, this), this.Reveal.dispatchEvent({
      type: "pdf-ready"
    });
  }

  isPrintingPDF() {
    return /print-pdf/gi.test(window.location.search);
  }

}

class Di {
  constructor(e) {
    this.Reveal = e, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  bind() {
    let e = this.Reveal.getRevealElement();
    "onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1));
  }

  unbind() {
    let e = this.Reveal.getRevealElement();
    e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1);
  }

  isSwipePrevented(e) {
    for (; e && "function" == typeof e.hasAttribute;) {
      if (e.hasAttribute("data-prevent-swipe")) return !0;
      e = e.parentNode;
    }

    return !1;
  }

  onTouchStart(e) {
    if (this.isSwipePrevented(e.target)) return !0;
    this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length;
  }

  onTouchMove(e) {
    if (this.isSwipePrevented(e.target)) return !0;
    let t = this.Reveal.getConfig();
    if (this.touchCaptured) pi && e.preventDefault();else {
      this.Reveal.onUserInput(e);
      let i = e.touches[0].clientX,
          n = e.touches[0].clientY;

      if (1 === e.touches.length && 2 !== this.touchStartCount) {
        let a = this.Reveal.availableRoutes({
          includeFragments: !0
        }),
            s = i - this.touchStartX,
            r = n - this.touchStartY;
        s > 40 && Math.abs(s) > Math.abs(r) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : s < -40 && Math.abs(s) > Math.abs(r) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : r > 40 && a.up ? (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : r < -40 && a.down && (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault();
      }
    }
  }

  onTouchEnd(e) {
    this.touchCaptured = !1;
  }

  onPointerDown(e) {
    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
      clientX: e.clientX,
      clientY: e.clientY
    }], this.onTouchStart(e));
  }

  onPointerMove(e) {
    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
      clientX: e.clientX,
      clientY: e.clientY
    }], this.onTouchMove(e));
  }

  onPointerUp(e) {
    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
      clientX: e.clientX,
      clientY: e.clientY
    }], this.onTouchEnd(e));
  }

}

class Oi {
  constructor(e) {
    this.Reveal = e, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
  }

  configure(e, t) {
    e.embedded ? this.blur() : (this.focus(), this.unbind());
  }

  bind() {
    this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1);
  }

  unbind() {
    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1);
  }

  focus() {
    "focus" !== this.state && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = "focus";
  }

  blur() {
    "blur" !== this.state && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = "blur";
  }

  isFocused() {
    return "focus" === this.state;
  }

  onRevealPointerDown(e) {
    this.focus();
  }

  onDocumentPointerDown(e) {
    let t = ri(e.target, ".reveal");
    t && t === this.Reveal.getRevealElement() || this.blur();
  }

}

class zi {
  constructor(e) {
    this.Reveal = e;
  }

  render() {
    this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
  }

  configure(e, t) {
    e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline");
  }

  update() {
    this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
  }

  updateVisibility() {
    this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
  }

  hasNotes() {
    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
  }

  isSpeakerNotesWindow() {
    return !!window.location.search.match(/receiver/gi);
  }

  getSlideNotes(e = this.Reveal.getCurrentSlide()) {
    if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
    let t = e.querySelector("aside.notes");
    return t ? t.innerHTML : null;
  }

}

class Hi {
  constructor(e, t) {
    this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
  }

  setPlaying(e) {
    const t = this.playing;
    this.playing = e, !t && this.playing ? this.animate() : this.render();
  }

  animate() {
    const e = this.progress;
    this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
  }

  render() {
    let e = this.playing ? this.progress : 0,
        t = this.diameter2 - this.thickness,
        i = this.diameter2,
        n = this.diameter2,
        a = 28;
    this.progressOffset += .1 * (1 - this.progressOffset);
    const s = -Math.PI / 2 + e * (2 * Math.PI),
          r = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i, n, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i, n, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i, n, t, r, s, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i - 14, n - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, a), this.context.fillRect(18, 0, 10, a)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, a), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
  }

  on(e, t) {
    this.canvas.addEventListener(e, t, !1);
  }

  off(e, t) {
    this.canvas.removeEventListener(e, t, !1);
  }

  destroy() {
    this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas);
  }

}

var Bi = {
  width: 960,
  height: 700,
  margin: .04,
  minScale: .2,
  maxScale: 2,
  controls: !0,
  controlsTutorial: !0,
  controlsLayout: "bottom-right",
  controlsBackArrows: "faded",
  progress: !0,
  slideNumber: !1,
  showSlideNumber: "all",
  hashOneBasedIndex: !1,
  hash: !1,
  respondToHashChanges: !0,
  history: !1,
  keyboard: !0,
  keyboardCondition: null,
  disableLayout: !1,
  overview: !0,
  center: !0,
  touch: !0,
  loop: !1,
  rtl: !1,
  navigationMode: "default",
  shuffle: !1,
  fragments: !0,
  fragmentInURL: !0,
  embedded: !1,
  help: !0,
  pause: !0,
  showNotes: !1,
  showHiddenSlides: !1,
  autoPlayMedia: null,
  preloadIframes: null,
  autoAnimate: !0,
  autoAnimateMatcher: null,
  autoAnimateEasing: "ease",
  autoAnimateDuration: 1,
  autoAnimateUnmatched: !0,
  autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"],
  autoSlide: 0,
  autoSlideStoppable: !0,
  autoSlideMethod: null,
  defaultTiming: null,
  mouseWheel: !1,
  previewLinks: !1,
  postMessage: !0,
  postMessageEvents: !1,
  focusBodyOnPageVisibilityChange: !0,
  transition: "slide",
  transitionSpeed: "default",
  backgroundTransition: "fade",
  parallaxBackgroundImage: "",
  parallaxBackgroundSize: "",
  parallaxBackgroundRepeat: "",
  parallaxBackgroundPosition: "",
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
  pdfSeparateFragments: !0,
  pdfPageHeightOffset: -1,
  viewDistance: 3,
  mobileViewDistance: 2,
  display: "block",
  hideInactiveCursor: !0,
  hideCursorTime: 5e3,
  dependencies: [],
  plugins: []
};

function Ui(e, t) {
  arguments.length < 2 && (t = arguments[0], e = document.querySelector(".reveal"));
  const i = {};
  let n,
      a,
      s,
      r,
      o,
      l = {},
      d = !1,
      c = {
    hasNavigatedHorizontally: !1,
    hasNavigatedVertically: !1
  },
      u = [],
      h = 1,
      g = {
    layout: "",
    overview: ""
  },
      v = {},
      p = "idle",
      f = 0,
      m = 0,
      b = -1,
      y = !1,
      w = new bi(i),
      S = new yi(i),
      E = new Ri(i),
      R = new Si(i),
      A = new Ai(i),
      k = new ki(i),
      L = new Li(i),
      x = new xi(i),
      C = new Ci(i),
      P = new Pi(i),
      N = new Ni(i),
      M = new Ii(i),
      I = new Ti(i),
      T = new Oi(i),
      D = new Di(i),
      O = new zi(i);

  function z(n) {
    return v.wrapper = e, v.slides = e.querySelector(".slides"), l = { ...Bi,
      ...l,
      ...t,
      ...n,
      ...di()
    }, H(), window.addEventListener("load", re, !1), M.load(l.plugins, l.dependencies).then(B), new Promise(e => i.on("ready", e));
  }

  function H() {
    !0 === l.embedded ? v.viewport = ri(e, ".reveal-viewport") || e : (v.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), v.viewport.classList.add("reveal-viewport");
  }

  function B() {
    d = !0, U(), j(), V(), _(), Ae(), K(), x.readURL(), R.update(!0), setTimeout(() => {
      v.slides.classList.remove("no-transition"), v.wrapper.classList.add("ready"), Q({
        type: "ready",
        data: {
          indexh: n,
          indexv: a,
          currentSlide: r
        }
      });
    }, 1), I.isPrintingPDF() && ($(), "complete" === document.readyState ? I.setupPDF() : window.addEventListener("load", () => {
      I.setupPDF();
    }));
  }

  function U() {
    l.showHiddenSlides || ti(v.wrapper, 'section[data-visibility="hidden"]').forEach(e => {
      e.parentNode.removeChild(e);
    });
  }

  function j() {
    v.slides.classList.add("no-transition"), gi ? v.wrapper.classList.add("no-hover") : v.wrapper.classList.remove("no-hover"), R.render(), S.render(), C.render(), P.render(), O.render(), v.pauseOverlay = oi(v.wrapper, "div", "pause-overlay", l.controls ? '<button class="resume-button">Resume presentation</button>' : null), v.statusElement = F(), v.wrapper.setAttribute("role", "application");
  }

  function F() {
    let e = v.wrapper.querySelector(".aria-status");
    return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), v.wrapper.appendChild(e)), e;
  }

  function q(e) {
    v.statusElement.textContent = e;
  }

  function W(e) {
    let t = "";
    if (3 === e.nodeType) t += e.textContent;else if (1 === e.nodeType) {
      let i = e.getAttribute("aria-hidden"),
          n = "none" === window.getComputedStyle(e).display;
      "true" === i || n || Array.from(e.childNodes).forEach(e => {
        t += W(e);
      });
    }
    return t = t.trim(), "" === t ? "" : t + " ";
  }

  function _() {
    setInterval(() => {
      0 === v.wrapper.scrollTop && 0 === v.wrapper.scrollLeft || (v.wrapper.scrollTop = 0, v.wrapper.scrollLeft = 0);
    }, 1e3);
  }

  function V() {
    l.postMessage && window.addEventListener("message", e => {
      let t = e.data;
      if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t), t.method && "function" == typeof i[t.method])) if (!1 === kt.test(t.method)) {
        const e = i[t.method].apply(i, t.args);
        Z("callback", {
          method: t.method,
          result: e
        });
      } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API');
    }, !1);
  }

  function K(e) {
    const t = { ...l
    };
    if ("object" == typeof e && ei(l, e), !1 === i.isReady()) return;
    const n = v.wrapper.querySelectorAll(".slides section").length;
    v.wrapper.classList.remove(t.transition), v.wrapper.classList.add(l.transition), v.wrapper.setAttribute("data-transition-speed", l.transitionSpeed), v.wrapper.setAttribute("data-background-transition", l.backgroundTransition), v.viewport.style.setProperty("--slide-width", l.width + "px"), v.viewport.style.setProperty("--slide-height", l.height + "px"), l.shuffle && ke(), ii(v.wrapper, "embedded", l.embedded), ii(v.wrapper, "rtl", l.rtl), ii(v.wrapper, "center", l.center), !1 === l.pause && fe(), l.previewLinks ? (ee(), te("[data-preview-link=false]")) : (te(), ee("[data-preview-link]:not([data-preview-link=false])")), E.reset(), o && (o.destroy(), o = null), n > 1 && l.autoSlide && l.autoSlideStoppable && (o = new Hi(v.wrapper, () => Math.min(Math.max((Date.now() - b) / f, 0), 1)), o.on("click", st), y = !1), "default" !== l.navigationMode ? v.wrapper.setAttribute("data-navigation-mode", l.navigationMode) : v.wrapper.removeAttribute("data-navigation-mode"), O.configure(l, t), T.configure(l, t), N.configure(l, t), C.configure(l, t), P.configure(l, t), L.configure(l, t), A.configure(l, t), S.configure(l, t), Ee();
  }

  function X() {
    window.addEventListener("resize", it, !1), l.touch && D.bind(), l.keyboard && L.bind(), l.progress && P.bind(), l.respondToHashChanges && x.bind(), C.bind(), T.bind(), v.slides.addEventListener("transitionend", tt, !1), v.pauseOverlay.addEventListener("click", fe, !1), l.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", nt, !1);
  }

  function $() {
    D.unbind(), T.unbind(), L.unbind(), C.unbind(), P.unbind(), x.unbind(), window.removeEventListener("resize", it, !1), v.slides.removeEventListener("transitionend", tt, !1), v.pauseOverlay.removeEventListener("click", fe, !1);
  }

  function Y(t, i, n) {
    e.addEventListener(t, i, n);
  }

  function G(t, i, n) {
    e.removeEventListener(t, i, n);
  }

  function J(e) {
    "string" == typeof e.layout && (g.layout = e.layout), "string" == typeof e.overview && (g.overview = e.overview), g.layout ? ai(v.slides, g.layout + " " + g.overview) : ai(v.slides, g.overview);
  }

  function Q({
    target: e = v.wrapper,
    type: t,
    data: i,
    bubbles: n = !0
  }) {
    let a = document.createEvent("HTMLEvents", 1, 2);
    a.initEvent(t, n, !0), ei(a, i), e.dispatchEvent(a), e === v.wrapper && Z(t);
  }

  function Z(e, t) {
    if (l.postMessageEvents && window.parent !== window.self) {
      let i = {
        namespace: "reveal",
        eventName: e,
        state: qe()
      };
      ei(i, t), window.parent.postMessage(JSON.stringify(i), "*");
    }
  }

  function ee(e = "a") {
    Array.from(v.wrapper.querySelectorAll(e)).forEach(e => {
      /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", at, !1);
    });
  }

  function te(e = "a") {
    Array.from(v.wrapper.querySelectorAll(e)).forEach(e => {
      /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", at, !1);
    });
  }

  function ie(e) {
    se(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-preview"), v.wrapper.appendChild(v.overlay), v.overlay.innerHTML = '<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="'.concat(e, '" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="').concat(e, '"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>'), v.overlay.querySelector("iframe").addEventListener("load", e => {
      v.overlay.classList.add("loaded");
    }, !1), v.overlay.querySelector(".close").addEventListener("click", e => {
      se(), e.preventDefault();
    }, !1), v.overlay.querySelector(".external").addEventListener("click", e => {
      se();
    }, !1);
  }

  function ne(e) {
    "boolean" == typeof e ? e ? ae() : se() : v.overlay ? se() : ae();
  }

  function ae() {
    if (l.help) {
      se(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-help"), v.wrapper.appendChild(v.overlay);
      let e = '<p class="title">Keyboard Shortcuts</p><br/>',
          t = L.getShortcuts(),
          i = L.getBindings();
      e += "<table><th>KEY</th><th>ACTION</th>";

      for (let i in t) e += "<tr><td>".concat(i, "</td><td>").concat(t[i], "</td></tr>");

      for (let t in i) i[t].key && i[t].description && (e += "<tr><td>".concat(i[t].key, "</td><td>").concat(i[t].description, "</td></tr>"));

      e += "</table>", v.overlay.innerHTML = '\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">'.concat(e, "</div>\n\t\t\t\t</div>\n\t\t\t"), v.overlay.querySelector(".close").addEventListener("click", e => {
        se(), e.preventDefault();
      }, !1);
    }
  }

  function se() {
    return !!v.overlay && (v.overlay.parentNode.removeChild(v.overlay), v.overlay = null, !0);
  }

  function re() {
    if (v.wrapper && !I.isPrintingPDF()) {
      if (!l.disableLayout) {
        gi && !l.embedded && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
        const e = le(),
              t = h;
        oe(l.width, l.height), v.slides.style.width = e.width + "px", v.slides.style.height = e.height + "px", h = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), h = Math.max(h, l.minScale), h = Math.min(h, l.maxScale), 1 === h ? (v.slides.style.zoom = "", v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", J({
          layout: ""
        })) : h > 1 && fi && window.devicePixelRatio < 2 ? (v.slides.style.zoom = h, v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", J({
          layout: ""
        })) : (v.slides.style.zoom = "", v.slides.style.left = "50%", v.slides.style.top = "50%", v.slides.style.bottom = "auto", v.slides.style.right = "auto", J({
          layout: "translate(-50%, -50%) scale(" + h + ")"
        }));
        const i = Array.from(v.wrapper.querySelectorAll(".slides section"));

        for (let t = 0, n = i.length; t < n; t++) {
          const n = i[t];
          "none" !== n.style.display && (l.center || n.classList.contains("center") ? n.classList.contains("stack") ? n.style.top = 0 : n.style.top = Math.max((e.height - n.scrollHeight) / 2, 0) + "px" : n.style.top = "");
        }

        t !== h && Q({
          type: "resize",
          data: {
            oldScale: t,
            scale: h,
            size: e
          }
        });
      }

      P.update(), R.updateParallax(), k.isActive() && k.update();
    }
  }

  function oe(e, t) {
    ti(v.slides, "section > .stretch, section > .r-stretch").forEach(i => {
      let n = ci(i, t);

      if (/(img|video)/gi.test(i.nodeName)) {
        const t = i.naturalWidth || i.videoWidth,
              a = i.naturalHeight || i.videoHeight,
              s = Math.min(e / t, n / a);
        i.style.width = t * s + "px", i.style.height = a * s + "px";
      } else i.style.width = e + "px", i.style.height = n + "px";
    });
  }

  function le(e, t) {
    const i = {
      width: l.width,
      height: l.height,
      presentationWidth: e || v.wrapper.offsetWidth,
      presentationHeight: t || v.wrapper.offsetHeight
    };
    return i.presentationWidth -= i.presentationWidth * l.margin, i.presentationHeight -= i.presentationHeight * l.margin, "string" == typeof i.width && /%$/.test(i.width) && (i.width = parseInt(i.width, 10) / 100 * i.presentationWidth), "string" == typeof i.height && /%$/.test(i.height) && (i.height = parseInt(i.height, 10) / 100 * i.presentationHeight), i;
  }

  function de(e, t) {
    "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0);
  }

  function ce(e) {
    if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
      const t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
      return parseInt(e.getAttribute(t) || 0, 10);
    }

    return 0;
  }

  function ue(e = r) {
    return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
  }

  function he() {
    return !(!r || !ue(r)) && !r.nextElementSibling;
  }

  function ge() {
    return 0 === n && 0 === a;
  }

  function ve() {
    return !!r && !r.nextElementSibling && (!ue(r) || !r.parentNode.nextElementSibling);
  }

  function pe() {
    if (l.pause) {
      const e = v.wrapper.classList.contains("paused");
      Ve(), v.wrapper.classList.add("paused"), !1 === e && Q({
        type: "paused"
      });
    }
  }

  function fe() {
    const e = v.wrapper.classList.contains("paused");
    v.wrapper.classList.remove("paused"), _e(), e && Q({
      type: "resumed"
    });
  }

  function me(e) {
    "boolean" == typeof e ? e ? pe() : fe() : be() ? fe() : pe();
  }

  function be() {
    return v.wrapper.classList.contains("paused");
  }

  function ye(e) {
    "boolean" == typeof e ? e ? Xe() : Ke() : y ? Xe() : Ke();
  }

  function we() {
    return !(!f || y);
  }

  function Se(e, t, i, o) {
    s = r;
    const d = v.wrapper.querySelectorAll(".slides>section");
    if (0 === d.length) return;
    void 0 !== t || k.isActive() || (t = ce(d[e])), s && s.parentNode && s.parentNode.classList.contains("stack") && de(s.parentNode, a);
    const c = u.concat();
    u.length = 0;
    let h = n || 0,
        g = a || 0;
    n = Le(".slides>section", void 0 === e ? n : e), a = Le(".slides>section.present>section", void 0 === t ? a : t);
    let f = n !== h || a !== g;
    f || (s = null);
    let m = d[n],
        b = m.querySelectorAll("section");
    r = b[a] || m;
    let y = !1;
    f && s && r && !k.isActive() && (s.hasAttribute("data-auto-animate") && r.hasAttribute("data-auto-animate") && (y = !0, v.slides.classList.add("disable-slide-transitions")), p = "running"), xe(), re(), k.isActive() && k.update(), void 0 !== i && A.goto(i), s && s !== r && (s.classList.remove("present"), s.setAttribute("aria-hidden", "true"), ge() && setTimeout(() => {
      Oe().forEach(e => {
        de(e, 0);
      });
    }, 0));

    e: for (let e = 0, t = u.length; e < t; e++) {
      for (let t = 0; t < c.length; t++) if (c[t] === u[e]) {
        c.splice(t, 1);
        continue e;
      }

      v.viewport.classList.add(u[e]), Q({
        type: u[e]
      });
    }

    for (; c.length;) v.viewport.classList.remove(c.pop());

    f && Q({
      type: "slidechanged",
      data: {
        indexh: n,
        indexv: a,
        previousSlide: s,
        currentSlide: r,
        origin: o
      }
    }), !f && s || (w.stopEmbeddedContent(s), w.startEmbeddedContent(r)), q(W(r)), P.update(), C.update(), O.update(), R.update(), R.updateParallax(), S.update(), A.update(), x.writeURL(), _e(), y && (setTimeout(() => {
      v.slides.classList.remove("disable-slide-transitions");
    }, 0), l.autoAnimate && E.run(s, r));
  }

  function Ee() {
    $(), X(), re(), f = l.autoSlide, _e(), R.create(), x.writeURL(), A.sortAll(), C.update(), P.update(), xe(), O.update(), O.updateVisibility(), R.update(!0), S.update(), w.formatEmbeddedContent(), !1 === l.autoPlayMedia ? w.stopEmbeddedContent(r, {
      unloadIframes: !1
    }) : w.startEmbeddedContent(r), k.isActive() && k.layout();
  }

  function Re(e = r) {
    R.sync(e), A.sync(e), w.load(e), R.update(), O.update();
  }

  function Ae() {
    Te().forEach(e => {
      ti(e, "section").forEach((e, t) => {
        t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"));
      });
    });
  }

  function ke(e = Te()) {
    e.forEach((t, i) => {
      let n = e[Math.floor(Math.random() * e.length)];
      n.parentNode === t.parentNode && t.parentNode.insertBefore(t, n);
      let a = t.querySelectorAll("section");
      a.length && ke(a);
    });
  }

  function Le(e, t) {
    let i = ti(v.wrapper, e),
        n = i.length,
        a = I.isPrintingPDF();

    if (n) {
      l.loop && (t %= n) < 0 && (t = n + t), t = Math.max(Math.min(t, n - 1), 0);

      for (let e = 0; e < n; e++) {
        let n = i[e],
            s = l.rtl && !ue(n);
        n.classList.remove("past"), n.classList.remove("present"), n.classList.remove("future"), n.setAttribute("hidden", ""), n.setAttribute("aria-hidden", "true"), n.querySelector("section") && n.classList.add("stack"), a ? n.classList.add("present") : e < t ? (n.classList.add(s ? "future" : "past"), l.fragments && ti(n, ".fragment").forEach(e => {
          e.classList.add("visible"), e.classList.remove("current-fragment");
        })) : e > t && (n.classList.add(s ? "past" : "future"), l.fragments && ti(n, ".fragment.visible").forEach(e => {
          e.classList.remove("visible", "current-fragment");
        }));
      }

      let e = i[t],
          s = e.classList.contains("present");
      e.classList.add("present"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden"), s || Q({
        target: e,
        type: "visible",
        bubbles: !1
      });
      let r = e.getAttribute("data-state");
      r && (u = u.concat(r.split(" ")));
    } else t = 0;

    return t;
  }

  function xe() {
    let e,
        t,
        i = Te(),
        s = i.length;

    if (s && void 0 !== n) {
      let r = k.isActive() ? 10 : l.viewDistance;
      gi && (r = k.isActive() ? 6 : l.mobileViewDistance), I.isPrintingPDF() && (r = Number.MAX_VALUE);

      for (let o = 0; o < s; o++) {
        let d = i[o],
            c = ti(d, "section"),
            u = c.length;

        if (e = Math.abs((n || 0) - o) || 0, l.loop && (e = Math.abs(((n || 0) - o) % (s - r)) || 0), e < r ? w.load(d) : w.unload(d), u) {
          let i = ce(d);

          for (let s = 0; s < u; s++) {
            let l = c[s];
            t = o === (n || 0) ? Math.abs((a || 0) - s) : Math.abs(s - i), e + t < r ? w.load(l) : w.unload(l);
          }
        }
      }

      He() ? v.wrapper.classList.add("has-vertical-slides") : v.wrapper.classList.remove("has-vertical-slides"), ze() ? v.wrapper.classList.add("has-horizontal-slides") : v.wrapper.classList.remove("has-horizontal-slides");
    }
  }

  function Ce({
    includeFragments: e = !1
  } = {}) {
    let t = v.wrapper.querySelectorAll(".slides>section"),
        i = v.wrapper.querySelectorAll(".slides>section.present>section"),
        s = {
      left: n > 0,
      right: n < t.length - 1,
      up: a > 0,
      down: a < i.length - 1
    };

    if (l.loop && (t.length > 1 && (s.left = !0, s.right = !0), i.length > 1 && (s.up = !0, s.down = !0)), t.length > 1 && "linear" === l.navigationMode && (s.right = s.right || s.down, s.left = s.left || s.up), !0 === e) {
      let e = A.availableRoutes();
      s.left = s.left || e.prev, s.up = s.up || e.prev, s.down = s.down || e.next, s.right = s.right || e.next;
    }

    if (l.rtl) {
      let e = s.left;
      s.left = s.right, s.right = e;
    }

    return s;
  }

  function Pe(e = r) {
    let t = Te(),
        i = 0;

    e: for (let n = 0; n < t.length; n++) {
      let a = t[n],
          s = a.querySelectorAll("section");

      for (let t = 0; t < s.length; t++) {
        if (s[t] === e) break e;
        "uncounted" !== s[t].dataset.visibility && i++;
      }

      if (a === e) break;
      !1 === a.classList.contains("stack") && "uncounted" !== a.dataset.visibility && i++;
    }

    return i;
  }

  function Ne() {
    let e = Ue(),
        t = Pe();

    if (r) {
      let e = r.querySelectorAll(".fragment");

      if (e.length > 0) {
        let i = .9;
        t += r.querySelectorAll(".fragment.visible").length / e.length * i;
      }
    }

    return Math.min(t / (e - 1), 1);
  }

  function Me(e) {
    let t,
        i = n,
        s = a;

    if (e) {
      let t = ue(e),
          n = t ? e.parentNode : e,
          a = Te();
      i = Math.max(a.indexOf(n), 0), s = void 0, t && (s = Math.max(ti(e.parentNode, "section").indexOf(e), 0));
    }

    if (!e && r) {
      if (r.querySelectorAll(".fragment").length > 0) {
        let e = r.querySelector(".current-fragment");
        t = e && e.hasAttribute("data-fragment-index") ? parseInt(e.getAttribute("data-fragment-index"), 10) : r.querySelectorAll(".fragment.visible").length - 1;
      }
    }

    return {
      h: i,
      v: s,
      f: t
    };
  }

  function Ie() {
    return ti(v.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])');
  }

  function Te() {
    return ti(v.wrapper, ".slides>section");
  }

  function De() {
    return ti(v.wrapper, ".slides>section>section");
  }

  function Oe() {
    return ti(v.wrapper, ".slides>section.stack");
  }

  function ze() {
    return Te().length > 1;
  }

  function He() {
    return De().length > 1;
  }

  function Be() {
    return Ie().map(e => {
      let t = {};

      for (let i = 0; i < e.attributes.length; i++) {
        let n = e.attributes[i];
        t[n.name] = n.value;
      }

      return t;
    });
  }

  function Ue() {
    return Ie().length;
  }

  function je(e, t) {
    let i = Te()[e],
        n = i && i.querySelectorAll("section");
    return n && n.length && "number" == typeof t ? n ? n[t] : void 0 : i;
  }

  function Fe(e, t) {
    let i = "number" == typeof e ? je(e, t) : e;
    if (i) return i.slideBackgroundElement;
  }

  function qe() {
    let e = Me();
    return {
      indexh: e.h,
      indexv: e.v,
      indexf: e.f,
      paused: be(),
      overview: k.isActive()
    };
  }

  function We(e) {
    if ("object" == typeof e) {
      Se(ni(e.indexh), ni(e.indexv), ni(e.indexf));
      let t = ni(e.paused),
          i = ni(e.overview);
      "boolean" == typeof t && t !== be() && me(t), "boolean" == typeof i && i !== k.isActive() && k.toggle(i);
    }
  }

  function _e() {
    if (Ve(), r && !1 !== l.autoSlide) {
      let e = r.querySelector(".current-fragment");
      e || (e = r.querySelector(".fragment"));
      let t = e ? e.getAttribute("data-autoslide") : null,
          i = r.parentNode ? r.parentNode.getAttribute("data-autoslide") : null,
          n = r.getAttribute("data-autoslide");
      t ? f = parseInt(t, 10) : n ? f = parseInt(n, 10) : i ? f = parseInt(i, 10) : (f = l.autoSlide, 0 === r.querySelectorAll(".fragment").length && ti(r, "video, audio").forEach(e => {
        e.hasAttribute("data-autoplay") && f && 1e3 * e.duration / e.playbackRate > f && (f = 1e3 * e.duration / e.playbackRate + 1e3);
      })), !f || y || be() || k.isActive() || ve() && !A.availableRoutes().next && !0 !== l.loop || (m = setTimeout(() => {
        "function" == typeof l.autoSlideMethod ? l.autoSlideMethod() : Ze(), _e();
      }, f), b = Date.now()), o && o.setPlaying(-1 !== m);
    }
  }

  function Ve() {
    clearTimeout(m), m = -1;
  }

  function Ke() {
    f && !y && (y = !0, Q({
      type: "autoslidepaused"
    }), clearTimeout(m), o && o.setPlaying(!1));
  }

  function Xe() {
    f && y && (y = !1, Q({
      type: "autoslideresumed"
    }), _e());
  }

  function $e() {
    c.hasNavigatedHorizontally = !0, l.rtl ? (k.isActive() || !1 === A.next()) && Ce().left && Se(n + 1, "grid" === l.navigationMode ? a : void 0) : (k.isActive() || !1 === A.prev()) && Ce().left && Se(n - 1, "grid" === l.navigationMode ? a : void 0);
  }

  function Ye() {
    c.hasNavigatedHorizontally = !0, l.rtl ? (k.isActive() || !1 === A.prev()) && Ce().right && Se(n - 1, "grid" === l.navigationMode ? a : void 0) : (k.isActive() || !1 === A.next()) && Ce().right && Se(n + 1, "grid" === l.navigationMode ? a : void 0);
  }

  function Ge() {
    (k.isActive() || !1 === A.prev()) && Ce().up && Se(n, a - 1);
  }

  function Je() {
    c.hasNavigatedVertically = !0, (k.isActive() || !1 === A.next()) && Ce().down && Se(n, a + 1);
  }

  function Qe() {
    if (!1 === A.prev()) if (Ce().up) Ge();else {
      let e;

      if (e = l.rtl ? ti(v.wrapper, ".slides>section.future").pop() : ti(v.wrapper, ".slides>section.past").pop(), e) {
        let t = e.querySelectorAll("section").length - 1 || void 0;
        Se(n - 1, t);
      }
    }
  }

  function Ze() {
    if (c.hasNavigatedHorizontally = !0, c.hasNavigatedVertically = !0, !1 === A.next()) {
      let e = Ce();
      e.down && e.right && l.loop && he() && (e.down = !1), e.down ? Je() : l.rtl ? $e() : Ye();
    }
  }

  function et(e) {
    l.autoSlideStoppable && Ke();
  }

  function tt(e) {
    "running" === p && /section/gi.test(e.target.nodeName) && (p = "idle", Q({
      type: "slidetransitionend",
      data: {
        indexh: n,
        indexv: a,
        previousSlide: s,
        currentSlide: r
      }
    }));
  }

  function it(e) {
    re();
  }

  function nt(e) {
    !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus());
  }

  function at(e) {
    if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
      let t = e.currentTarget.getAttribute("href");
      t && (ie(t), e.preventDefault());
    }
  }

  function st(e) {
    ve() && !1 === l.loop ? (Se(0, 0), Xe()) : y ? Xe() : Ke();
  }

  const rt = {
    VERSION: "4.1.0",
    initialize: z,
    configure: K,
    sync: Ee,
    syncSlide: Re,
    syncFragments: A.sync.bind(A),
    slide: Se,
    left: $e,
    right: Ye,
    up: Ge,
    down: Je,
    prev: Qe,
    next: Ze,
    navigateLeft: $e,
    navigateRight: Ye,
    navigateUp: Ge,
    navigateDown: Je,
    navigatePrev: Qe,
    navigateNext: Ze,
    navigateFragment: A.goto.bind(A),
    prevFragment: A.prev.bind(A),
    nextFragment: A.next.bind(A),
    on: Y,
    off: G,
    addEventListener: Y,
    removeEventListener: G,
    layout: re,
    shuffle: ke,
    availableRoutes: Ce,
    availableFragments: A.availableRoutes.bind(A),
    toggleHelp: ne,
    toggleOverview: k.toggle.bind(k),
    togglePause: me,
    toggleAutoSlide: ye,
    isFirstSlide: ge,
    isLastSlide: ve,
    isLastVerticalSlide: he,
    isVerticalSlide: ue,
    isPaused: be,
    isAutoSliding: we,
    isSpeakerNotes: O.isSpeakerNotesWindow.bind(O),
    isOverview: k.isActive.bind(k),
    isFocused: T.isFocused.bind(T),
    isPrintingPDF: I.isPrintingPDF.bind(I),
    isReady: () => d,
    loadSlide: w.load.bind(w),
    unloadSlide: w.unload.bind(w),
    addEventListeners: X,
    removeEventListeners: $,
    dispatchEvent: Q,
    getState: qe,
    setState: We,
    getProgress: Ne,
    getIndices: Me,
    getSlidesAttributes: Be,
    getSlidePastCount: Pe,
    getTotalSlides: Ue,
    getSlide: je,
    getPreviousSlide: () => s,
    getCurrentSlide: () => r,
    getSlideBackground: Fe,
    getSlideNotes: O.getSlideNotes.bind(O),
    getSlides: Ie,
    getHorizontalSlides: Te,
    getVerticalSlides: De,
    hasHorizontalSlides: ze,
    hasVerticalSlides: He,
    hasNavigatedHorizontally: () => c.hasNavigatedHorizontally,
    hasNavigatedVertically: () => c.hasNavigatedVertically,
    addKeyBinding: L.addKeyBinding.bind(L),
    removeKeyBinding: L.removeKeyBinding.bind(L),
    triggerKey: L.triggerKey.bind(L),
    registerKeyboardShortcut: L.registerKeyboardShortcut.bind(L),
    getComputedSlideSize: le,
    getScale: () => h,
    getConfig: () => l,
    getQueryHash: di,
    getRevealElement: () => e,
    getSlidesElement: () => v.slides,
    getViewportElement: () => v.viewport,
    getBackgroundsElement: () => R.element,
    registerPlugin: M.registerPlugin.bind(M),
    hasPlugin: M.hasPlugin.bind(M),
    getPlugin: M.getPlugin.bind(M),
    getPlugins: M.getRegisteredPlugins.bind(M)
  };
  return ei(i, { ...rt,
    announceStatus: q,
    getStatusText: W,
    print: I,
    focus: T,
    progress: P,
    controls: C,
    location: x,
    overview: k,
    fragments: A,
    slideContent: w,
    slideNumber: S,
    onUserInput: et,
    closeOverlay: se,
    updateSlidesVisibility: xe,
    layoutSlideContents: oe,
    transformSlides: J,
    cueAutoSlide: _e,
    cancelAutoSlide: Ve
  }), rt;
}

let ji = Ui,
    Fi = [];
ji.initialize = e => (Object.assign(ji, new Ui(document.querySelector(".reveal"), e)), Fi.map(e => e(ji)), ji.initialize()), ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach(e => {
  ji[e] = (...t) => {
    Fi.push(i => i[e].call(null, ...t));
  };
}), ji.isReady = () => !1, ji.VERSION = "4.1.0";
var _default = ji;
exports.default = _default;
},{}],"../src/js/reveal.js":[function(require,module,exports) {
"use strict";

var _reveal = _interopRequireDefault(require("reveal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deck = new _reveal.default({});
console.log("hello");
deck.initialize();
},{"reveal.js":"../node_modules/reveal.js/dist/reveal.esm.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34645" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/js/reveal.js"], null)
//# sourceMappingURL=/reveal.abecd37d.js.map