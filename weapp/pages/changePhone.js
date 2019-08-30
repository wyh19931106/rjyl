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
      phoneCode: ''
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

      that.getPhoneCode(that.form.imgCode, that.form.mobile, 3, function () {
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
    // 修改
    bindChange: function bindChange() {
      var that = this;

      if (!that.form.mobile.trim()) {
        that.toast('手机号不能为空');
        return false;
      }

      if (!that.isPhone(that.form.mobile.trim())) {
        that.toast('手机号格式错误');
        return false;
      }

      if (!that.form.phoneCode) {
        that.toast('手机验证码不能为空');
        return false;
      }

      that.request({
        url: '/api/base/user',
        type: 'PUT'
      }, {
        phone: that.form.mobile,
        code: that.form.phoneCode
      }, function (ret) {
        that.toast('修改成功');
        that.goBack(1500);
      });
    }
  },
  created: function created() {
    this.getImgCode();
  }
}, {info: {"components":{},"on":{}}, handlers: {'19-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'19-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'19-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'19-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindChange($event)
      })();
    
  }}}, models: {'18': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'19': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'20': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'19-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'19-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'19-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'19-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindChange($event)
      })();
    
  }}}, models: {'18': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'19': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'20': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'19-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'19-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'19-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'19-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindChange($event)
      })();
    
  }}}, models: {'18': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'19': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'20': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'19-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'19-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'19-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'19-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindChange($event)
      })();
    
  }}}, models: {'18': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'19': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'20': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'19-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'19-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'19-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'19-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindChange($event)
      })();
    
  }}}, models: {'18': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'19': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'20': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'19-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'19-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'19-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'19-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindChange($event)
      })();
    
  }}}, models: {'18': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'19': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'20': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'19-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'19-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getImgCode($event)
      })();
    
  }},'19-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getMsgCode($event)
      })();
    
  }},'19-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindChange($event)
      })();
    
  }}}, models: {'18': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'19': {
      type: "input",
      expr: "form.imgCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "imgCode", $v);
      
    }
    },'20': {
      type: "input",
      expr: "form.phoneCode",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "phoneCode", $v);
      
    }
    }} });