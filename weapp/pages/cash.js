"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    money: '',
    card: {},
    cash_money: '',
    pay_pwd: false,
    show: false //支付密码框

  },
  computed: {},
  methods: {
    // 获取默认银行卡
    getCard: function getCard() {
      var that = this;

      if (that.getStore('card')) {
        that.card = JSON.parse(that.getStore('card'));
        that.card.name_hide = that.card.name.substr(0, 1) + '**';
        that.card.bank_no = that.card.number.substr(-4);
        return false;
      }

      that.request({
        url: '/api/package/user/card/default',
        type: 'GET'
      }, {}, function (ret) {
        that.card = ret.data;
        that.card.name_hide = that.card.name.substr(0, 1) + '**';
        that.card.bank_no = that.card.number.substr(-4);
        that.setStore('card', JSON.stringify(that.card));
      });
    },
    // 提现
    bindCash: function bindCash() {
      var that = this;

      if (!that.cash_money) {
        that.toast('提现金额不能为空');
        return false;
      }

      if (Number(that.cash_money) < 10) {
        that.toast('提现金额最少10元');
        return false;
      }

      if (Number(that.cash_money) > Number(that.money)) {
        that.toast('提现金额不能大于可提现金额');
        return false;
      }

      if (!that.getStore('pay_pwd')) {
        that.toast('请先设置支付密码!');
        that.openWin('/pages/setPayPwd');
        return false;
      }

      that.cash_money = Number(that.cash_money);
      that.show = true;
    },
    inputHide: function inputHide() {
      this.show = false;
    }
  },
  created: function created() {},
  onShow: function onShow() {
    this.getCard();
  },
  onHide: function onHide() {
    this.removeStore('card');
  },
  onUnload: function onUnload() {
    this.removeStore('card');
  },
  onLoad: function onLoad(options) {
    console.log(this);
    this.money = options.money || 1000;
    this.pay_pwd = options.pay_pwd;
  }
}, {info: {"components":{"inputPwd":{"path":"..\\components\\input_pwd"}},"on":{"18-3":["inputHide"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList?from=cash')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindCash($event)
      })();
    
  }},'18-3': {"inputHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputHide($event)
      })();
    
  }}}, models: {'41': {
      type: "input",
      expr: "cash_money",
      handler: function set ($v) {
      var _vm=this;
        _vm.cash_money = $v;
      
    }
    }} }, {info: {"components":{"inputPwd":{"path":"..\\components\\input_pwd"}},"on":{"18-3":["inputHide"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList?from=cash')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindCash($event)
      })();
    
  }},'18-3': {"inputHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputHide($event)
      })();
    
  }}}, models: {'41': {
      type: "input",
      expr: "cash_money",
      handler: function set ($v) {
      var _vm=this;
        _vm.cash_money = $v;
      
    }
    }} }, {info: {"components":{"inputPwd":{"path":"..\\components\\input_pwd"}},"on":{"18-3":["inputHide"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList?from=cash')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindCash($event)
      })();
    
  }},'18-3': {"inputHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputHide($event)
      })();
    
  }}}, models: {'41': {
      type: "input",
      expr: "cash_money",
      handler: function set ($v) {
      var _vm=this;
        _vm.cash_money = $v;
      
    }
    }} }, {info: {"components":{"inputPwd":{"path":"..\\components\\input_pwd"}},"on":{"18-3":["inputHide"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList?from=cash')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindCash($event)
      })();
    
  }},'18-3': {"inputHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputHide($event)
      })();
    
  }}}, models: {'41': {
      type: "input",
      expr: "cash_money",
      handler: function set ($v) {
      var _vm=this;
        _vm.cash_money = $v;
      
    }
    }} }, {info: {"components":{"inputPwd":{"path":"..\\components\\input_pwd"}},"on":{"18-3":["inputHide"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList?from=cash')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindCash($event)
      })();
    
  }},'18-3': {"inputHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputHide($event)
      })();
    
  }}}, models: {'41': {
      type: "input",
      expr: "cash_money",
      handler: function set ($v) {
      var _vm=this;
        _vm.cash_money = $v;
      
    }
    }} }, {info: {"components":{"inputPwd":{"path":"..\\components\\input_pwd"}},"on":{"18-3":["inputHide"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList?from=cash')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindCash($event)
      })();
    
  }},'18-3': {"inputHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputHide($event)
      })();
    
  }}}, models: {'41': {
      type: "input",
      expr: "cash_money",
      handler: function set ($v) {
      var _vm=this;
        _vm.cash_money = $v;
      
    }
    }} }, {info: {"components":{"inputPwd":{"path":"..\\components\\input_pwd"}},"on":{"18-3":["inputHide"]}}, handlers: {'18-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList?from=cash')
      })();
    
  }},'18-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }},'18-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindCash($event)
      })();
    
  }},'18-3': {"inputHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputHide($event)
      })();
    
  }}}, models: {'41': {
      type: "input",
      expr: "cash_money",
      handler: function set ($v) {
      var _vm=this;
        _vm.cash_money = $v;
      
    }
    }} });