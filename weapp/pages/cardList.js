"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    list: [],
    page: 1,
    load: false,
    finished: false,
    from: ''
  },
  computed: {},
  methods: {
    // 获取银行卡数据
    getList: function getList() {
      var that = this;
      that.request({
        url: '/api/package/user/card',
        type: 'GET'
      }, {
        page: that.page
      }, function (ret) {
        if (that.page < ret.meta.pagination.total_pages) {
          that.finished = false;
          that.page++;
        } else {
          that.finished = true;
        }

        that.load = true;
        that.list = that.list.concat(ret.data);
      });
    },
    // 编辑
    bindEdit: function bindEdit(ind) {
      var that = this;

      if (that.from) {
        that.setStore('card', JSON.stringify(that.list[ind]));
        that.goBack();
        return false;
      }

      wx.showActionSheet({
        itemList: ['删除', '设为默认'],
        success: function success(res) {
          if (res.tapIndex == 0) {
            // 删除
            that.bindDel(ind); // that.list.splice(ind,1);
          }

          if (res.tapIndex == 1) {
            // 设为默认
            that.setDefault(ind);
          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    // 设为默认
    setDefault: function setDefault(ind) {
      var that = this;

      for (var i = 0; i < that.list.length; i++) {
        if (ind == i) {
          that.list[i].is_default = 1;
        } else {
          that.list[i].is_default = 0;
        }
      }

      that.request({
        url: '/api/package/user/card/' + that.list[ind].id,
        type: 'PUT'
      }, {
        is_default: 1
      }, function (ret) {
        console.log(ret);
      });
    },
    // 删除
    bindDel: function bindDel(ind) {
      var that = this;
      that.request({
        url: '/api/package/user/card/' + that.list[ind].id,
        type: 'DELETE'
      }, {}, function (ret) {
        that.list = [];
        that.page = 1;
        that.load = false;
        that.finished = false;
        that.getList();
      });
    }
  },
  created: function created() {},
  onShow: function onShow() {
    this.list = [];
    this.page = 1;
    this.load = false;
    this.finished = false;
    this.getList();
  },
  onLoad: function onLoad(options) {
    if (options.from) {
      this.from = options.from;
    }
  },
  // 上拉加载
  onReachBottom: function onReachBottom(event) {
    var that = this;

    if (that.finished) {
      return false;
    }

    if (that.load) {
      that.load = false;
      that.getList();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'17-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindEdit(key)
      })();
    
  }},'17-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindEdit(key)
      })();
    
  }},'17-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindEdit(key)
      })();
    
  }},'17-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindEdit(key)
      })();
    
  }},'17-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindEdit(key)
      })();
    
  }},'17-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindEdit(key)
      })();
    
  }},'17-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'17-0': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindEdit(key)
      })();
    
  }},'17-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addCard')
      })();
    
  }}}, models: {} });