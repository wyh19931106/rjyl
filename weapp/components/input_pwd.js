"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  mixins: [_common["default"]],
  props: {
    show: {
      type: Boolean,
      "default": false
    },
    money: {
      type: Number,
      "default": 0
    },
    type: {
      type: String,
      "default": 'cash' //cash: 提现， order: 下单

    },
    cardId: {
      //cash 时银行卡id
      type: Number,
      "default": 0
    },
    orderNo: {
      //order 时订单号
      type: Number,
      "default": 0
    }
  },
  data: {
    pwd: ''
  },
  methods: {
    cancel: function cancel() {
      this.$wx.triggerEvent('inputHide', {
        show: false
      });
      this.pwd = '';
    },
    confirm: function confirm() {
      var that = this;

      if (!that.money) {
        that.toast('支付金额不能为0');
        return false;
      }

      if (!that.pwd) {
        that.toast('支付密码不能为空');
        return false;
      }

      if (that.pwd.length < 6) {
        that.toast('支付密码少于6位数');
        return false;
      }

      switch (that.type) {
        case 'cash':
          that.request({
            url: '/api/package/user/withdraw',
            type: 'POST'
          }, {
            money: that.money,
            card_id: that.cardId,
            pay_password: that.pwd
          }, function (ret) {
            that.toast('提现提交成功');
            that.goBack(1500);
          });
          break;

        case 'order':
          break;
      }
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'125-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'125-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cancel($event)
      })();
    
  }},'125-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.confirm($event)
      })();
    
  }}}, models: {'44': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'125-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'125-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cancel($event)
      })();
    
  }},'125-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.confirm($event)
      })();
    
  }}}, models: {'44': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'125-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'125-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cancel($event)
      })();
    
  }},'125-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.confirm($event)
      })();
    
  }}}, models: {'44': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'125-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'125-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cancel($event)
      })();
    
  }},'125-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.confirm($event)
      })();
    
  }}}, models: {'44': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'125-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'125-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cancel($event)
      })();
    
  }},'125-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.confirm($event)
      })();
    
  }}}, models: {'44': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'125-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'125-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cancel($event)
      })();
    
  }},'125-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.confirm($event)
      })();
    
  }}}, models: {'44': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'125-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'125-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cancel($event)
      })();
    
  }},'125-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.confirm($event)
      })();
    
  }}}, models: {'44': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} });