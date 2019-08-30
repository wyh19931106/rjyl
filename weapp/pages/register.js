"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    imgCodeUrl: '',
    //图形验证码
    captcha_key: '',
    //获取手机验证码的key
    form: {
      mobile: '',
      imgCode: '',
      phoneCode: '',
      pwd1: '',
      pwd2: ''
    },
    finished: true,
    //获取验证码计时结束
    code_txt: '获取验证码'
  },
  computed: {},
  methods: {
    // 获取手机验证码
    getMsgCode: function getMsgCode() {
      var that = this;
      var time = 60;

      if (!that.finished) {
        return false;
      }

      if (!that.form.mobile.trim()) {
        that.toast('手机号不能为空');
        return false;
      }

      if (!that.isPhone(that.form.mobile.trim())) {
        that.toast('手机号格式错误');
        return false;
      }

      if (!that.form.imgCode.trim()) {
        that.toast('图形码不能为空');
        return false;
      }

      that.getPhoneCode(that.form.imgCode, that.form.mobile, 1, function () {
        var timer = setInterval(function () {
          if (time > 1) {
            time--;
            that.code_txt = '重新获取(' + time + 's)';
            that.finished = false;
          } else {
            clearInterval(timer);
            that.code_txt = '获取验证码';
            that.finished = true;
          }
        }, 1000);
      });
    },
    // 输入手机号
    inputPhone: function inputPhone() {
      var that = this;
      that.form.mobile = that.form.mobile.replace(/[^\d]/g, '');
    },
    // 输入密码
    inputPwd: function inputPwd(obj) {
      var that = this;
      that.form[obj] = that.form[obj].replace(/\s+/g, '');
    },
    bindRegister: function bindRegister() {
      var that = this;

      if (!that.form.phoneCode) {
        that.toast('手机验证码不能为空');
        return false;
      }

      if (that.form.pwd1.length < 6 || that.form.pwd2.length < 6) {
        that.toast('密码长度不能小于6');
        return false;
      }

      if (that.form.pwd2 != that.form.pwd1) {
        that.toast('两次密码不一样，请重新设置');
        return false;
      }

      that.request({
        url: '/api/base/users',
        type: 'POST'
      }, {
        phone: that.form.mobile,
        code: that.form.phoneCode,
        password: that.form.pwd2
      }, function (ret) {
        that.toast('注册成功');
        setTimeout(function () {
          that.openWinDel('/pages/login');
        }, 1500);
      });
    }
  },
  created: function created() {
    this.getImgCode();
  }
}, {info: {"components":{},"on":{}}, handlers: {'42-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputPhone($event)
      })();
    
  }},'42-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'42-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'42-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd1')
      })();
    
  }},'42-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd2')
      })();
    
  }},'42-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindRegister($event)
      })();
    
  }},'42-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/login')
      })();
    
  }}}, models: {'30': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'31': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'32': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'33': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'34': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'42-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputPhone($event)
      })();
    
  }},'42-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'42-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'42-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd1')
      })();
    
  }},'42-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd2')
      })();
    
  }},'42-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindRegister($event)
      })();
    
  }},'42-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/login')
      })();
    
  }}}, models: {'30': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'31': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'32': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'33': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'34': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'42-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputPhone($event)
      })();
    
  }},'42-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'42-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'42-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd1')
      })();
    
  }},'42-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd2')
      })();
    
  }},'42-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindRegister($event)
      })();
    
  }},'42-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/login')
      })();
    
  }}}, models: {'30': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'31': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'32': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'33': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'34': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'42-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputPhone($event)
      })();
    
  }},'42-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'42-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'42-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd1')
      })();
    
  }},'42-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd2')
      })();
    
  }},'42-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindRegister($event)
      })();
    
  }},'42-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/login')
      })();
    
  }}}, models: {'30': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'31': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'32': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'33': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'34': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'42-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputPhone($event)
      })();
    
  }},'42-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'42-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'42-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd1')
      })();
    
  }},'42-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd2')
      })();
    
  }},'42-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindRegister($event)
      })();
    
  }},'42-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/login')
      })();
    
  }}}, models: {'30': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'31': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'32': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'33': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'34': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'42-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputPhone($event)
      })();
    
  }},'42-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'42-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'42-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd1')
      })();
    
  }},'42-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd2')
      })();
    
  }},'42-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindRegister($event)
      })();
    
  }},'42-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/login')
      })();
    
  }}}, models: {'30': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'31': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'32': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'33': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'34': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'42-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputPhone($event)
      })();
    
  }},'42-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'42-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'42-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd1')
      })();
    
  }},'42-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwd('pwd2')
      })();
    
  }},'42-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindRegister($event)
      })();
    
  }},'42-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/login')
      })();
    
  }}}, models: {'30': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'31': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'32': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'33': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'34': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} });