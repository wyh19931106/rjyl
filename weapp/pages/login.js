"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    mobile: '',
    pwd: ''
  },
  computed: {},
  methods: {
    bindLogin: function bindLogin() {
      var that = this;

      if (!that.mobile) {
        that.toast('手机号不能为空');
        return false;
      }

      if (!that.isPhone(that.mobile)) {
        that.toast('手机号格式错误');
        return false;
      }

      if (!that.pwd) {
        that.toast('密码不能为空');
        return false;
      }

      if (that.pwd.length < 6) {
        that.toast('密码不能小于6位');
        return false;
      }

      that.request({
        url: '/api/base/authorizations',
        type: 'POST'
      }, {
        phone: that.mobile,
        password: that.pwd
      }, function (ret) {
        that.toast('登陆成功');
        console.log(ret);
        that.setStore('token', ret.data.access_token);
        setTimeout(function () {
          that.openTab('/pages/index');
        }, 1500);
      });
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'23-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'23-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'23-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindLogin($event)
      })();
    
  }},'23-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'23-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/register')
      })();
    
  }}}, models: {'27': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'28': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'23-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'23-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'23-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindLogin($event)
      })();
    
  }},'23-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'23-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/register')
      })();
    
  }}}, models: {'27': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'28': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'23-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'23-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'23-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindLogin($event)
      })();
    
  }},'23-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'23-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/register')
      })();
    
  }}}, models: {'27': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'28': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'23-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'23-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'23-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindLogin($event)
      })();
    
  }},'23-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'23-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/register')
      })();
    
  }}}, models: {'27': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'28': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'23-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'23-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'23-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindLogin($event)
      })();
    
  }},'23-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'23-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/register')
      })();
    
  }}}, models: {'27': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'28': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'23-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'23-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'23-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindLogin($event)
      })();
    
  }},'23-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'23-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/register')
      })();
    
  }}}, models: {'27': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'28': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'23-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'23-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd')
      })();
    
  }},'23-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindLogin($event)
      })();
    
  }},'23-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'23-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/register')
      })();
    
  }}}, models: {'27': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'28': {
      type: "input",
      expr: "pwd",
      handler: function set ($v) {
      var _vm=this;
        _vm.pwd = $v;
      
    }
    }} });