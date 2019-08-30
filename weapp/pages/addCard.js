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
      name: '',
      bank_no: '',
      bank_name: '',
      mobile: '',
      imgCode: '',
      phoneCode: '',
      isDefault: 1
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

      that.getPhoneCode(that.form.imgCode, that.form.mobile, 4, function () {
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
    // 设置默认
    setDefault: function setDefault() {
      if (this.form.isDefault == 1) {
        this.form.isDefault = 0;
      } else {
        this.form.isDefault = 1;
      }
    },
    // 添加
    bindConfirm: function bindConfirm() {
      var that = this;

      if (!that.form.name) {
        that.toast('持卡人姓名不能为空');
        return fale;
      }

      if (!that.form.bank_no) {
        that.toast('银行卡号不能为空');
        return fale;
      }

      if (!that.form.bank_name) {
        that.toast('支行信息不能为空');
        return fale;
      }

      if (!that.form.mobile.trim()) {
        that.toast('手机号不能为空');
        return false;
      }

      if (!that.isPhone(that.form.mobile.trim())) {
        that.toast('手机号格式错误');
        return false;
      }

      if (!that.form.phoneCode) {
        that.toast('短信验证码不能为空');
        return fale;
      }

      that.request({
        url: '/api/package/user/card',
        type: 'POST'
      }, {
        name: that.form.name,
        number: that.form.bank_no,
        branch: that.form.bank_name,
        phone: that.form.mobile,
        code: that.form.phoneCode,
        is_default: that.form.isDefault
      }, function (ret) {
        console.log(ret);
        that.toast('银行卡添加成功!');
        that.goBack(1500);
      });
    }
  },
  created: function created() {
    this.getImgCode();
  }
}, {info: {"components":{},"on":{}}, handlers: {'13-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('bank_no')
      })();
    
  }},'13-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'13-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'13-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'13-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'8': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'9': {
      type: "input",
      expr: "form.bank_no",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_no", $v);
      
    }
    },'10': {
      type: "input",
      expr: "form.bank_name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_name", $v);
      
    }
    },'11': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'12': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'13': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'13-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('bank_no')
      })();
    
  }},'13-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'13-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'13-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'13-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'8': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'9': {
      type: "input",
      expr: "form.bank_no",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_no", $v);
      
    }
    },'10': {
      type: "input",
      expr: "form.bank_name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_name", $v);
      
    }
    },'11': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'12': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'13': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'13-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('bank_no')
      })();
    
  }},'13-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'13-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'13-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'13-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'8': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'9': {
      type: "input",
      expr: "form.bank_no",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_no", $v);
      
    }
    },'10': {
      type: "input",
      expr: "form.bank_name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_name", $v);
      
    }
    },'11': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'12': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'13': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'13-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('bank_no')
      })();
    
  }},'13-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'13-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'13-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'13-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'8': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'9': {
      type: "input",
      expr: "form.bank_no",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_no", $v);
      
    }
    },'10': {
      type: "input",
      expr: "form.bank_name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_name", $v);
      
    }
    },'11': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'12': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'13': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'13-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('bank_no')
      })();
    
  }},'13-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'13-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'13-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'13-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'8': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'9': {
      type: "input",
      expr: "form.bank_no",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_no", $v);
      
    }
    },'10': {
      type: "input",
      expr: "form.bank_name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_name", $v);
      
    }
    },'11': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'12': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'13': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'13-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('bank_no')
      })();
    
  }},'13-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'13-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'13-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'13-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'8': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'9': {
      type: "input",
      expr: "form.bank_no",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_no", $v);
      
    }
    },'10': {
      type: "input",
      expr: "form.bank_name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_name", $v);
      
    }
    },'11': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'12': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'13': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'13-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('bank_no')
      })();
    
  }},'13-1': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'13-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'13-4': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'13-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'8': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'9': {
      type: "input",
      expr: "form.bank_no",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_no", $v);
      
    }
    },'10': {
      type: "input",
      expr: "form.bank_name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "bank_name", $v);
      
    }
    },'11': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'12': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'13': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} });