"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _class, _class2, _descriptor;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
//                              DECORATORS
/*
¿Qué son y para que siven?
Los son funciones especiales dentro de JavaScript que te va a permitir extender las clases, 
eso incluye sus metodos, propiedades de clase, los geters, los seters y los accesos, lo que nos permite añadir
funcionalidad, cambiar funcionalidades e incluso remplazar los valores que iban a dar las funciona-
lidades de dichas clases, en conclusión podemos decir que los decoradores estan ligados a las clases;
ya que las efectan  a sus metodos, propiedades y accesos.
*/
function logger(value, context) {
  console.log(value, context);
}
var Persona = logger(_class = (_class2 = /*#__PURE__*/function () {
  function Persona() {
    _classCallCheck(this, Persona);
    _initializerDefineProperty(this, "weigth", _descriptor, this);
  }
  return _createClass(Persona, [{
    key: "getWeigth",
    value:
    //kind = field

    function getWeigth() {
      //kind = method
      return this.weigth;
    }
  }, {
    key: "peso",
    get: function get() {
      return this.weigth;
    } //kind = getter
    ,
    set: function set(value) {
      this.weigth = value;
    } //kind = setter
  }]);
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "weigth", [logger], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 75;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "getWeigth", [logger], Object.getOwnPropertyDescriptor(_class2.prototype, "getWeigth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "peso", [logger], Object.getOwnPropertyDescriptor(_class2.prototype, "peso"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "peso", [logger], Object.getOwnPropertyDescriptor(_class2.prototype, "peso"), _class2.prototype)), _class2)) || _class;
