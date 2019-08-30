"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    from: '',
    //来源， order
    list: []
  },
  computed: {},
  methods: {
    // 获取列表
    getList: function getList() {
      var that = this;
      that.request({
        url: '/api/package/user/addresses',
        type: 'GET'
      }, {}, function (ret) {
        that.list = ret.data;
      });
    },
    // 设置默认
    setDefault: function setDefault(ind) {
      var that = this;

      for (var i = 0; i < that.list.length; i++) {
        if (ind == i) {
          that.list[i].is_default = true;
        } else {
          that.list[i].is_default = false;
        }
      }

      that.request({
        url: '/api/package/user/addresses/' + that.list[ind].id,
        type: 'PUT'
      }, {
        is_default: true
      }, function (ret) {});
    },
    // 删除
    bindDel: function bindDel(ind) {
      var that = this;
      var id = that.list[ind].id;
      that.showModal('删除地址', '您确认删除该地址吗？', function () {
        that.request({
          url: '/api/package/user/addresses/' + id,
          type: 'DELETE'
        }, {}, function (ret) {
          that.getList();
        });
      });
    },
    // 下单选择收货地址
    bindSelect: function bindSelect(ind) {
      if (this.from == 'order') {
        var addr = this.list[ind];
        addr.phone = addr.mobile.substr(0, 3) + '****' + addr.mobile.substr(-4);
        this.setStore('addr', JSON.stringify(addr));
        this.goBack();
      } else {
        return false;
      }
    }
  },
  onLoad: function onLoad(options) {
    if (options.from) {
      this.from = options.from;
    }
  },
  created: function created() {},
  onShow: function onShow() {
    this.getList();
  }
}, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'11-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrEdit?id=' + item.id)
      })();
    
  }},'11-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'11-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.setDefault(key)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addAddr')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'11-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrEdit?id=' + item.id)
      })();
    
  }},'11-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'11-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.setDefault(key)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addAddr')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'11-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrEdit?id=' + item.id)
      })();
    
  }},'11-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'11-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.setDefault(key)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addAddr')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'11-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrEdit?id=' + item.id)
      })();
    
  }},'11-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'11-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.setDefault(key)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addAddr')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'11-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrEdit?id=' + item.id)
      })();
    
  }},'11-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'11-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.setDefault(key)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addAddr')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'11-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrEdit?id=' + item.id)
      })();
    
  }},'11-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'11-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.setDefault(key)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addAddr')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'11-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrEdit?id=' + item.id)
      })();
    
  }},'11-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }},'11-3': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.setDefault(key)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addAddr')
      })();
    
  }}}, models: {} });