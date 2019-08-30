"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    from_type: 'default',
    type: 1,
    data1: {
      list: [],
      page: 1,
      load: false,
      finished: false
    },
    data2: {
      list: [],
      page: 1,
      load: false,
      finished: false
    },
    data3: {
      list: [],
      page: 1,
      load: false,
      finished: false
    },
    data4: {
      list: [],
      page: 1,
      load: false,
      finished: false
    },
    data5: {
      list: [],
      page: 1,
      load: false,
      finished: false
    }
  },
  computed: {},
  methods: {
    // tab切换
    typeChange: function typeChange(ind) {
      this.type = ind;
    },
    // 获取详情
    getList: function getList(type) {
      var that = this;
      var type_str = '';

      switch (type) {
        case 1:
          type_str = ''; //全部

          break;

        case 2:
          type_str = 'created'; //待付款

          break;

        case 3:
          type_str = 'paid'; //待发货

          break;

        case 4:
          type_str = 'shipping'; //已发货

          break;

        case 5:
          type_str = 'shipped'; //已收货（完成）

          break;
      }
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'36-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'36-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'36-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'36-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'36-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'36-15': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-16': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-17': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-18': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-19': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'36-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'36-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'36-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'36-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'36-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'36-15': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-16': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-17': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-18': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-19': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'36-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'36-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'36-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'36-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'36-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'36-15': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-16': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-17': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-18': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-19': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'36-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'36-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'36-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'36-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'36-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'36-15': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-16': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-17': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-18': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-19': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'36-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'36-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'36-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'36-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'36-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'36-15': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-16': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-17': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-18': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-19': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'36-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'36-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'36-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }},'36-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(4)
      })();
    
  }},'36-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(5)
      })();
    
  }},'36-15': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-16': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-17': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-18': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }},'36-19': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderDetails?id='+ key)
      })();
    
  }}}, models: {} });