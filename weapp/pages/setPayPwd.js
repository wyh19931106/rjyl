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
    finished: true,
    //获取验证码计时结束
    code_txt: '获取验证码',
    form: {
      mobile: '',
      imgCode: '',
      phoneCode: '',
      pwd1: '',
      pwd2: ''
    }
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

      that.getPhoneCode(that.form.imgCode, that.form.mobile, 5, function () {
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
    bindSet: function bindSet() {
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
        url: '/api/package/wallet/pay_password',
        type: 'PUT'
      }, {
        code: that.form.phoneCode,
        pay_password: that.form.pwd2
      }, function (ret) {
        that.toast('支付密码设置成功');
        that.setStore('pay_pwd', true);
        that.goBack(1500);
      });
    }
  },
  created: function created() {
    this.getImgCode();
  }
}, {info: {"components":{},"on":{}}, handlers: {'44-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'44-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'44-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'44-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd1')
      })();
    
  }},'44-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd2')
      })();
    
  }},'44-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSet($event)
      })();
    
  }}}, models: {'35': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'36': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'37': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'38': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'39': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'44-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'44-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'44-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'44-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd1')
      })();
    
  }},'44-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd2')
      })();
    
  }},'44-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSet($event)
      })();
    
  }}}, models: {'35': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'36': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'37': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'38': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'39': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'44-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'44-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'44-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'44-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd1')
      })();
    
  }},'44-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd2')
      })();
    
  }},'44-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSet($event)
      })();
    
  }}}, models: {'35': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'36': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'37': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'38': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'39': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'44-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'44-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'44-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'44-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd1')
      })();
    
  }},'44-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd2')
      })();
    
  }},'44-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSet($event)
      })();
    
  }}}, models: {'35': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'36': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'37': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'38': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'39': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'44-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'44-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'44-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'44-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd1')
      })();
    
  }},'44-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd2')
      })();
    
  }},'44-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSet($event)
      })();
    
  }}}, models: {'35': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'36': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'37': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'38': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'39': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'44-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'44-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'44-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'44-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd1')
      })();
    
  }},'44-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd2')
      })();
    
  }},'44-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSet($event)
      })();
    
  }}}, models: {'35': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'36': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'37': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'38': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'39': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'44-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'44-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'44-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'44-3': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd1')
      })();
    
  }},'44-4': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPwdCom('pwd2')
      })();
    
  }},'44-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSet($event)
      })();
    
  }}}, models: {'35': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'36': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'37': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    },'38': {
      type: "input",
      expr: "form.pwd1",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd1", $v);
      
    }
    },'39': {
      type: "input",
      expr: "form.pwd2",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "pwd2", $v);
      
    }
    }} });