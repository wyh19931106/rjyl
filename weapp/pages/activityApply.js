"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    id: '',
    isDisabled: true,
    show: false,
    multiIndex: [0, 0],
    multiArray: [],
    date: '2016-09-01',
    form: {
      name: '',
      mobile: '',
      department: '',
      time: ''
    }
  },
  computed: {},
  methods: {
    // 获取时间
    getTime: function getTime(id) {
      var that = this;
      that.request({
        url: '/api/get_activity_interval_time',
        type: 'GET'
      }, {
        id: id
      }, function (ret) {
        var start_time = ret.data.set_activity.start_time;
        var end_time = ret.data.set_activity.end_time;
        var interval_time = ret.data.set_activity.interval_time;
        var time = [['00'], ['00']];

        for (var i = start_time; i < end_time + 1; i++) {
          time[0].push(i);
        }

        for (var i = 1; i * interval_time < 60; i++) {
          time[1].push(i * interval_time);
        }

        that.multiArray = time;
        that.form.time = that.multiArray[0][that.multiIndex[0]] + ':' + that.multiArray[1][that.multiIndex[1]];
      });
    },
    bindHide: function bindHide() {
      this.show = false;
    },
    bindDefault: function bindDefault() {
      return false;
    },
    bindMultiPickerChange: function bindMultiPickerChange(e) {
      if (e.$wx.detail.value[0] == 1) {
        if (e.$wx.detail.value[1] == 1 || e.$wx.detail.value[1] == 2) {
          wx.showToast({
            title: '该时间段报名已满，请另选时间！',
            icon: 'none',
            duration: 2000
          });
          return false;
        }
      } // console.log('picker发送选择改变，携带值为', e.$wx.detail.value);


      this.multiIndex = e.$wx.detail.value;
      this.form.time = this.multiArray[0][this.multiIndex[0]] + ':' + this.multiArray[1][this.multiIndex[1]];
    },
    bindMultiPickerColumnChange: function bindMultiPickerColumnChange(e) {// console.log(e);
      // console.log('修改的列为', e.$wx.detail.column, '，值为', e.$wx.detail.value);
    },
    bindDateChange: function bindDateChange(e) {
      console.log('picker发送选择改变，携带值为', e.$wx.detail.value);
    },
    // 提交
    bindSubmit: function bindSubmit() {
      var that = this;

      if (!that.form.name.trim()) {
        that.toast('姓名不能为空！');
        return false;
      }

      if (!that.form.mobile) {
        that.toast('手机号不能为空！');
        return false;
      }

      if (!that.isPhone(that.form.mobile)) {
        that.toast('手机号格式错误');
        return false;
      }

      if (that.form.time == '00:00') {
        that.toast('请选择预约时间');
        return false;
      }

      that.request({
        url: '/api/submit_activity_register',
        type: 'POST'
      }, {
        pa_id: that.id,
        reg_time: that.form.time,
        name: that.form.name,
        phone: that.form.mobile,
        department: that.form.department
      }, function (ret) {
        console.log(ret);
        that.show = true;
        setTimeout(function () {
          that.show = false;
        }, 2500);
      });
    }
  },
  created: function created() {},
  onLoad: function onLoad(options) {
    this.id = options.id;
    this.getTime(options.id);
  }
}, {info: {"components":{},"on":{}}, handlers: {'14-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'14-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerChange($event)
      })();
    
  }, "columnchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerColumnChange($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'14-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }}}, models: {'14': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'15': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'16': {
      type: "input",
      expr: "form.department",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "department", $v);
      
    }
    },'17': {
      type: "input",
      expr: "form.time",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "time", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'14-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'14-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerChange($event)
      })();
    
  }, "columnchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerColumnChange($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'14-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }}}, models: {'14': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'15': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'16': {
      type: "input",
      expr: "form.department",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "department", $v);
      
    }
    },'17': {
      type: "input",
      expr: "form.time",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "time", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'14-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'14-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerChange($event)
      })();
    
  }, "columnchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerColumnChange($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'14-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }}}, models: {'14': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'15': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'16': {
      type: "input",
      expr: "form.department",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "department", $v);
      
    }
    },'17': {
      type: "input",
      expr: "form.time",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "time", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'14-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'14-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerChange($event)
      })();
    
  }, "columnchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerColumnChange($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'14-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }}}, models: {'14': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'15': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'16': {
      type: "input",
      expr: "form.department",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "department", $v);
      
    }
    },'17': {
      type: "input",
      expr: "form.time",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "time", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'14-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'14-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerChange($event)
      })();
    
  }, "columnchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerColumnChange($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'14-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }}}, models: {'14': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'15': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'16': {
      type: "input",
      expr: "form.department",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "department", $v);
      
    }
    },'17': {
      type: "input",
      expr: "form.time",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "time", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'14-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'14-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerChange($event)
      })();
    
  }, "columnchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerColumnChange($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'14-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }}}, models: {'14': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'15': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'16': {
      type: "input",
      expr: "form.department",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "department", $v);
      
    }
    },'17': {
      type: "input",
      expr: "form.time",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "time", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'14-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'14-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerChange($event)
      })();
    
  }, "columnchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindMultiPickerColumnChange($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'14-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }}}, models: {'14': {
      type: "input",
      expr: "form.name",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "name", $v);
      
    }
    },'15': {
      type: "input",
      expr: "form.mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "mobile", $v);
      
    }
    },'16': {
      type: "input",
      expr: "form.department",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "department", $v);
      
    }
    },'17': {
      type: "input",
      expr: "form.time",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.form, "time", $v);
      
    }
    }} });