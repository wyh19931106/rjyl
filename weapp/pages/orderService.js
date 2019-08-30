"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    type: 1,
    list: [1, 2, 3]
  },
  computed: {},
  methods: {
    typeChange: function typeChange(ind) {
      this.type = ind;
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'38-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'38-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'38-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'38-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'38-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'38-5': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-6': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-7': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-8': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-9': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'38-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'38-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'38-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'38-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'38-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'38-5': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-6': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-7': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-8': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-9': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'38-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'38-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'38-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'38-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'38-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'38-5': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-6': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-7': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-8': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-9': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'38-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'38-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'38-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'38-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'38-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'38-5': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-6': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-7': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-8': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-9': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'38-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'38-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'38-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'38-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'38-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'38-5': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-6': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-7': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-8': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-9': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'38-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'38-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'38-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'38-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'38-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'38-5': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-6': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-7': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-8': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-9': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'38-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'38-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'38-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'38-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'38-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'38-5': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-6': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-7': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-8': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'38-9': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} });