"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    provinces: [],
    citys: [],
    countys: [],
    value: [0, 0, 0],
    name: '',
    mobile: '',
    city: '请选择',
    addr: '',
    area_id: 0,
    isDefault: true,
    show: false
  },
  computed: {},
  methods: {
    // 获取省数据
    getProvinces: function getProvinces() {
      var that = this;
      that.request({
        url: '/api/package/areas',
        type: 'GET'
      }, {}, function (ret) {
        that.provinces = ret.data;
        that.getCitys(ret.data[0].id);
      });
    },
    // 获取市数据
    getCitys: function getCitys(id) {
      var that = this;
      that.request({
        url: '/api/package/areas',
        type: 'GET'
      }, {
        parent_id: id
      }, function (ret) {
        that.citys = ret.data;
        that.getCountys(ret.data[0].id);
      });
    },
    // 获取县数据
    getCountys: function getCountys(id) {
      var that = this;
      that.request({
        url: '/api/package/areas',
        type: 'GET'
      }, {
        parent_id: id
      }, function (ret) {
        that.countys = ret.data;
      });
    },
    bindScoller: function bindScoller(e) {
      var that = this;
      var val = e.$wx.detail.value; //判断滑动的是第几个column

      if (that.value[0] != val[0]) {
        val[1] = 0;
        val[2] = 0;
        that.getCitys(that.provinces[val[0]].id);
      } else {
        if (that.value[1] != val[1]) {
          val[2] = 0;
          that.getCountys(that.citys[val[1]].id);
        }
      }

      that.value = val;
    },
    // 城市选择
    bindShow: function bindShow() {
      this.show = true;
    },
    bindHide: function bindHide() {
      this.show = false;
    },
    bindConfirm: function bindConfirm() {
      var that = this;
      that.city = that.provinces[that.value[0]].name + that.citys[that.value[1]].name + that.countys[that.value[2]].name;
      that.area_id = that.countys[that.value[2]].id;
      that.bindHide();
    },
    // 设置默认
    setDefault: function setDefault() {
      this.isDefault = !this.isDefault;

      if (this.isDefault) {
        this.isDefault = 1;
      } else {
        this.isDefault = 0;
      }
    },
    // 提交
    bindSubmit: function bindSubmit() {
      var that = this;

      if (!that.name.trim()) {
        that.toast('收货人不能为空');
        return false;
      }

      if (!that.mobile) {
        that.toast('手机号不能为空');
        return false;
      }

      if (!that.isPhone(that.mobile)) {
        that.toast('手机号格式错误');
        return false;
      }

      if (!that.area_id) {
        that.toast('收货地址不能为空');
        return false;
      }

      if (!that.addr.trim()) {
        that.toast('详细地址不能为空');
        return false;
      }

      that.request({
        url: '/api/package/user/addresses',
        type: 'POST'
      }, {
        name: that.name,
        mobile: that.mobile,
        area_id: that.area_id,
        detail: that.addr,
        is_default: that.isDefault
      }, function (ret) {
        that.toast('地址添加成功');
        setTimeout(function () {
          that.goBack();
        }, 1500);
      });
    }
  },
  created: function created() {
    this.getProvinces();
  }
}, {info: {"components":{},"on":{}}, handlers: {'12-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindShow($event)
      })();
    
  }},'12-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'12-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'12-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'12-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }},'12-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindScoller($event)
      })();
    
  }}}, models: {'4': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    },'5': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'6': {
      type: "input",
      expr: "city",
      handler: function set ($v) {
      var _vm=this;
        _vm.city = $v;
      
    }
    },'7': {
      type: "input",
      expr: "addr",
      handler: function set ($v) {
      var _vm=this;
        _vm.addr = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'12-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindShow($event)
      })();
    
  }},'12-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'12-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'12-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'12-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }},'12-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindScoller($event)
      })();
    
  }}}, models: {'4': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    },'5': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'6': {
      type: "input",
      expr: "city",
      handler: function set ($v) {
      var _vm=this;
        _vm.city = $v;
      
    }
    },'7': {
      type: "input",
      expr: "addr",
      handler: function set ($v) {
      var _vm=this;
        _vm.addr = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'12-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindShow($event)
      })();
    
  }},'12-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'12-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'12-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'12-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }},'12-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindScoller($event)
      })();
    
  }}}, models: {'4': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    },'5': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'6': {
      type: "input",
      expr: "city",
      handler: function set ($v) {
      var _vm=this;
        _vm.city = $v;
      
    }
    },'7': {
      type: "input",
      expr: "addr",
      handler: function set ($v) {
      var _vm=this;
        _vm.addr = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'12-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindShow($event)
      })();
    
  }},'12-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'12-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'12-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'12-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }},'12-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindScoller($event)
      })();
    
  }}}, models: {'4': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    },'5': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'6': {
      type: "input",
      expr: "city",
      handler: function set ($v) {
      var _vm=this;
        _vm.city = $v;
      
    }
    },'7': {
      type: "input",
      expr: "addr",
      handler: function set ($v) {
      var _vm=this;
        _vm.addr = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'12-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindShow($event)
      })();
    
  }},'12-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'12-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'12-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'12-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }},'12-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindScoller($event)
      })();
    
  }}}, models: {'4': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    },'5': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'6': {
      type: "input",
      expr: "city",
      handler: function set ($v) {
      var _vm=this;
        _vm.city = $v;
      
    }
    },'7': {
      type: "input",
      expr: "addr",
      handler: function set ($v) {
      var _vm=this;
        _vm.addr = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'12-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindShow($event)
      })();
    
  }},'12-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'12-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'12-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'12-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }},'12-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindScoller($event)
      })();
    
  }}}, models: {'4': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    },'5': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'6': {
      type: "input",
      expr: "city",
      handler: function set ($v) {
      var _vm=this;
        _vm.city = $v;
      
    }
    },'7': {
      type: "input",
      expr: "addr",
      handler: function set ($v) {
      var _vm=this;
        _vm.addr = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'12-0': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.inputPhoneCom('mobile')
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindShow($event)
      })();
    
  }},'12-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setDefault($event)
      })();
    
  }},'12-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }},'12-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'12-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }},'12-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindScoller($event)
      })();
    
  }}}, models: {'4': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    },'5': {
      type: "input",
      expr: "mobile",
      handler: function set ($v) {
      var _vm=this;
        _vm.mobile = $v;
      
    }
    },'6': {
      type: "input",
      expr: "city",
      handler: function set ($v) {
      var _vm=this;
        _vm.city = $v;
      
    }
    },'7': {
      type: "input",
      expr: "addr",
      handler: function set ($v) {
      var _vm=this;
        _vm.addr = $v;
      
    }
    }} });