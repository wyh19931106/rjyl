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
    //default：商品订单     service：服务订单
    from: 'cart',
    //来源： cart、product
    rows: [],
    //from 为cart 有效，
    stock_id: '',
    //规格id, from 为product 有效(有规格)
    product_id: '',
    //商品id, from 为product 有效(没规格)
    addrInf: {},
    details: {},
    msg: '' //留言

  },
  computed: {},
  methods: {
    // 获取默认地址
    getAddr: function getAddr() {
      var that = this;

      if (that.getStore('addr')) {
        that.addrInf = JSON.parse(that.getStore('addr'));
        that.addrInf.phone = that.addrInf.mobile.substr(0, 3) + '****' + that.addrInf.mobile.substr(-4);
        return false;
      }

      that.request({
        url: '/api/package/user/address',
        type: 'GET'
      }, {}, function (ret) {
        that.addrInf = ret.data;
        that.addrInf.phone = that.addrInf.mobile.substr(0, 3) + '****' + that.addrInf.mobile.substr(-4);
      });
    },
    // 获取订单详情
    getDetails: function getDetails(addrid) {
      var that = this;
      var json = {};

      if (addrid) {
        json.address_id = addrid;
      }

      if (that.from == 'cart') {
        json.rows = that.rows;
      } else if (that.from == 'product') {
        json.qty = that.qty;

        if (that.product_id) {
          json.product_id = that.product_id;
        }

        if (that.stock_id) {
          json.stock_id = that.stock_id;
        }
      }

      that.request({
        url: '/api/package/mall/' + that.from_type + '/order/preview',
        type: 'POST'
      }, json, function (ret) {
        if (ret.data.shops.length) {
          that.details = ret.data.shops[0];

          for (var i = 0; i < that.details.products.length; i++) {
            var attr_str = '';
            var it = '';

            for (it in that.details.products[i].options) {
              attr_str += it + ':' + that.details.products[i].options[it] + ' ';
            }

            that.details.products[i].attr_str = attr_str;
          }
        }
      });
    },
    //确认订单
    bindConfirm: function bindConfirm() {
      var that = this;

      if (that.from_type == 'default') {
        // 商品订单
        if (!that.addrInf.id) {
          that.toast('请选择收货地址');
          return false;
        }
      }

      var json = {};

      if (that.addrInf.id) {
        json.address_id = that.addrInf.id;
      }

      json.comment = {};
      json.comment[that.details.shop_id] = that.msg;

      if (that.from == 'cart') {
        json.rows = that.rows;
      } else if (that.from == 'product') {
        json.qty = that.qty;

        if (that.product_id) {
          json.product_id = that.product_id;
        }

        if (that.stock_id) {
          json.stock_id = that.stock_id;
        }
      }

      that.request({
        url: '/api/package/mall/' + that.from_type + '/order/checkout',
        type: 'POST'
      }, json, function (ret) {
        that.openWin('/pages/paySuccess?id=' + ret.data[0].id + '&type=' + that.from_type);
      });
    }
  },
  onLoad: function onLoad(options) {
    this.from_type = options.type;
    this.from = options.from;

    if (options.rows) {
      this.rows = JSON.parse(options.rows);
    }

    if (options.product_id) {
      this.product_id = options.product_id;
    }

    if (options.stock_id) {
      this.stock_id = options.stock_id;
    }

    if (options.qty) {
      this.qty = options.qty;
    }

    this.getDetails();
  },
  onShow: function onShow() {
    this.getAddr();
  },
  onHide: function onHide() {
    this.removeStore('addr');
  },
  onUnload: function onUnload() {
    this.removeStore('addr');
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'33-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList?from=order')
      })();
    
  }},'33-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'33-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'29': {
      type: "input",
      expr: "msg",
      handler: function set ($v) {
      var _vm=this;
        _vm.msg = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'33-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList?from=order')
      })();
    
  }},'33-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'33-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'29': {
      type: "input",
      expr: "msg",
      handler: function set ($v) {
      var _vm=this;
        _vm.msg = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'33-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList?from=order')
      })();
    
  }},'33-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'33-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'29': {
      type: "input",
      expr: "msg",
      handler: function set ($v) {
      var _vm=this;
        _vm.msg = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'33-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList?from=order')
      })();
    
  }},'33-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'33-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'29': {
      type: "input",
      expr: "msg",
      handler: function set ($v) {
      var _vm=this;
        _vm.msg = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'33-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList?from=order')
      })();
    
  }},'33-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'33-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'29': {
      type: "input",
      expr: "msg",
      handler: function set ($v) {
      var _vm=this;
        _vm.msg = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'33-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList?from=order')
      })();
    
  }},'33-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'33-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'29': {
      type: "input",
      expr: "msg",
      handler: function set ($v) {
      var _vm=this;
        _vm.msg = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'33-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList?from=order')
      })();
    
  }},'33-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'33-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'29': {
      type: "input",
      expr: "msg",
      handler: function set ($v) {
      var _vm=this;
        _vm.msg = $v;
      
    }
    }} });