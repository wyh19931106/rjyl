"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    from_type: 'default',
    //default：商品     service：服务
    disabled: true,
    allSelect: false,
    //是否全选
    reset: false,
    _index: 0,
    list: [],
    count_money: 0
  },
  methods: {
    // 获取列表
    getList: function getList() {
      var that = this;
      that.request({
        url: '/api/package/mall/' + that.from_type + '/cart',
        type: 'GET'
      }, {}, function (ret) {
        if (!ret.data.shops.length) {
          return false;
        }

        for (var i = 0; i < ret.data.shops[0].products.length; i++) {
          ret.data.shops[0].products[i].select = true;
        }

        that.list = ret.data.shops[0].products;
        that.allSelect = true;
        that.count_money = ret.data.total;
      });
    },
    // 单选
    bindSelect: function bindSelect(ind) {
      var count = 0;
      this.list[ind].select = !this.list[ind].select;

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].select) {
          count += 1;
        }
      }

      if (count == this.list.length) {
        this.allSelect = true;
      } else {
        this.allSelect = false;
      }

      this.countMoney();
    },
    // 全选
    bindSelectAll: function bindSelectAll() {
      this.allSelect = !this.allSelect;

      for (var i = 0; i < this.list.length; i++) {
        this.list[i].select = this.allSelect;
      }

      this.countMoney();
    },
    // 加
    bindAdd: function bindAdd(ind) {
      this.list[ind].qty = Number(this.list[ind].qty) + 1;
      this.countMoney();
      this.bindChange(ind);
    },
    // 减
    bindSub: function bindSub(ind) {
      if (this.list[ind].qty > 1) {
        this.list[ind].qty -= 1;
        this.countMoney();
        this.bindChange(ind);
      } else {
        this.toast('最小数量为1');
      }
    },
    handleEnd: function handleEnd(e) {
      this._index = e.currentTarget.dataset.index;
    },
    handleTouch: function handleTouch(e) {
      if (e.currentTarget.dataset.index !== this._index) {
        this.reset = true;
      }
    },
    // 总价统计
    countMoney: function countMoney() {
      var that = this;
      that.count_money = 0;

      for (var i = 0; i < that.list.length; i++) {
        if (that.list[i].select) {
          that.count_money += that.list[i].qty * that.list[i].price;
        }
      }
    },
    //更新购物车数量
    bindChange: function bindChange(ind) {
      var that = this;
      that.request({
        url: '/api/package/mall/' + that.from_type + '/cart/' + that.list[ind].rowId,
        type: 'PUT'
      }, {
        qty: that.list[ind].qty
      }, function (ret) {});
    },
    // 删除
    bindDel: function bindDel(ind) {
      var that = this;
      var arr = [];
      that.showModal('删除', '您确定删除该商品吗？', function () {
        var rows = [];
        rows[0] = that.list[ind].rowId;
        that.request({
          url: '/api/package/mall/' + that.from_type + '/cart/row',
          type: 'DELETE'
        }, {
          rows: rows
        }, function (ret) {});
        arr = _toConsumableArray(that.list);
        arr.splice(ind, 1);
        that.list = JSON.parse(JSON.stringify(arr));
        that.countMoney();
      });
    },
    //下单
    toOrder: function toOrder() {
      var rows = [];

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].select) {
          rows.push(this.list[i].rowId);
        }
      }

      if (!rows.length) {
        this.toast('请至少选择1件商品');
        return false;
      }

      this.openWin('/pages/orderConfirm?from=cart&rows=' + JSON.stringify(rows) + '&type=' + this.from_type);
    }
  },
  onShow: function onShow() {
    this.getList();
  },
  created: function created() {}
}, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"9-0":["touchstart"]}}, handlers: {'9-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'9-1': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'9-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSub(key)
      })();
    
  }},'9-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindAdd(key)
      })();
    
  }},'9-4': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSelectAll($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toOrder($event)
      })();
    
  }}}, models: {'43': {
      type: "input",
      expr: "item.qty",
      handler: function set ($v, $p) {
    var _vm=this;
      function fn1(item) {
          _vm.$set(item, "qty", $v);
        }
      return fn1((_vm.list)[$p[0]]);
    
  }
    }} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"9-0":["touchstart"]}}, handlers: {'9-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'9-1': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'9-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSub(key)
      })();
    
  }},'9-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindAdd(key)
      })();
    
  }},'9-4': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSelectAll($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toOrder($event)
      })();
    
  }}}, models: {'43': {
      type: "input",
      expr: "item.qty",
      handler: function set ($v, $p) {
    var _vm=this;
      function fn1(item) {
          _vm.$set(item, "qty", $v);
        }
      return fn1((_vm.list)[$p[0]]);
    
  }
    }} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"9-0":["touchstart"]}}, handlers: {'9-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'9-1': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'9-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSub(key)
      })();
    
  }},'9-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindAdd(key)
      })();
    
  }},'9-4': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSelectAll($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toOrder($event)
      })();
    
  }}}, models: {'43': {
      type: "input",
      expr: "item.qty",
      handler: function set ($v, $p) {
    var _vm=this;
      function fn1(item) {
          _vm.$set(item, "qty", $v);
        }
      return fn1((_vm.list)[$p[0]]);
    
  }
    }} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"9-0":["touchstart"]}}, handlers: {'9-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'9-1': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'9-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSub(key)
      })();
    
  }},'9-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindAdd(key)
      })();
    
  }},'9-4': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSelectAll($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toOrder($event)
      })();
    
  }}}, models: {'43': {
      type: "input",
      expr: "item.qty",
      handler: function set ($v, $p) {
    var _vm=this;
      function fn1(item) {
          _vm.$set(item, "qty", $v);
        }
      return fn1((_vm.list)[$p[0]]);
    
  }
    }} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"9-0":["touchstart"]}}, handlers: {'9-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'9-1': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'9-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSub(key)
      })();
    
  }},'9-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindAdd(key)
      })();
    
  }},'9-4': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSelectAll($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toOrder($event)
      })();
    
  }}}, models: {'43': {
      type: "input",
      expr: "item.qty",
      handler: function set ($v, $p) {
    var _vm=this;
      function fn1(item) {
          _vm.$set(item, "qty", $v);
        }
      return fn1((_vm.list)[$p[0]]);
    
  }
    }} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"9-0":["touchstart"]}}, handlers: {'9-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'9-1': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'9-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSub(key)
      })();
    
  }},'9-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindAdd(key)
      })();
    
  }},'9-4': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSelectAll($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toOrder($event)
      })();
    
  }}}, models: {'43': {
      type: "input",
      expr: "item.qty",
      handler: function set ($v, $p) {
    var _vm=this;
      function fn1(item) {
          _vm.$set(item, "qty", $v);
        }
      return fn1((_vm.list)[$p[0]]);
    
  }
    }} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"9-0":["touchstart"]}}, handlers: {'9-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'9-1': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'9-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSub(key)
      })();
    
  }},'9-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindAdd(key)
      })();
    
  }},'9-4': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'9-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSelectAll($event)
      })();
    
  }},'9-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toOrder($event)
      })();
    
  }}}, models: {'43': {
      type: "input",
      expr: "item.qty",
      handler: function set ($v, $p) {
    var _vm=this;
      function fn1(item) {
          _vm.$set(item, "qty", $v);
        }
      return fn1((_vm.list)[$p[0]]);
    
  }
    }} });