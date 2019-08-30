"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    wallet: {},
    type: 1,
    data1: {
      list: [],
      page: 1,
      load: false,
      finished: false
    },
    data2: {
      list: [],
      page: 1,
      load: false,
      finished: false
    },
    data3: {
      list: [],
      page: 1,
      load: false,
      finished: false
    }
  },
  computed: {},
  methods: {
    // 获取余额
    getWallet: function getWallet() {
      var that = this;
      that.request({
        url: '/api/package/wallet',
        type: 'GET'
      }, {}, function (ret) {
        that.wallet = ret.data;
        that.setStore('pay_pwd', ret.data.pay_password);
      });
    },
    // 切换
    typeChange: function typeChange(ind) {
      this.type = ind;
    },
    // 获取历史记录
    getList: function getList(ind) {
      var that = this;
      var json = {};

      if (ind === 1) {
        json.page = that.data1.page;
      }

      if (ind === 2) {
        json.type = "+";
        json.page = that.data2.page;
      }

      if (ind === 3) {
        json.type = "-";
        json.page = that.data3.page;
      }

      that.request({
        url: '/api/package/wallet/log',
        type: "GET"
      }, json, function (ret) {
        if (ind === 1) {
          if (that.data1.page < ret.meta.pagination.total_pages) {
            that.data1.page++;
            that.data1.finished = false;
          } else {
            that.data1.finished = true;
          }

          that.data1.load = true;
          that.data1.list = that.data1.list.concat(ret.data);
        }

        if (ind === 2) {
          if (that.data2.page < ret.meta.pagination.total_pages) {
            that.data2.page++;
            that.data2.finished = false;
          } else {
            that.data2.finished = true;
          }

          that.data2.load = true;
          that.data2.list = that.data2.list.concat(ret.data);
        }

        if (ind === 3) {
          if (that.data3.page < ret.meta.pagination.total_pages) {
            that.data3.page++;
            that.data3.finished = false;
          } else {
            that.data3.finished = true;
          }

          that.data3.load = true;
          that.data3.list = that.data3.list.concat(ret.data);
        }
      });
    }
  },
  created: function created() {
    this.getList(1);
    this.getList(2);
    this.getList(3);
  },
  onShow: function onShow() {
    this.getWallet();
  },
  // 上拉加载
  onReachBottom: function onReachBottom(event) {
    var that = this;

    switch (that.type) {
      case 1:
        if (that.data1.finished) {
          return false;
        }

        if (that.data1.load) {
          that.data1.load = false;
          that.getList(1);
        }

        break;

      case 2:
        if (that.data2.finished) {
          return false;
        }

        if (that.data2.load) {
          that.data2.load = false;
          that.getList(2);
        }

        break;

      case 3:
        if (that.data3.finished) {
          return false;
        }

        if (that.data3.load) {
          that.data3.load = false;
          that.getList(3);
        }

        break;
    }
  },
  // 下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
    that.refresh(function () {
      that.data1 = {
        list: [],
        page: 1,
        load: false,
        finished: false
      };
      that.data2 = {
        list: [],
        page: 1,
        load: false,
        finished: false
      };
      that.data3 = {
        list: [],
        page: 1,
        load: false,
        finished: false
      };
      that.getList(1);
      that.getList(2);
      that.getList(3);
    });
  }
}, {info: {"components":{},"on":{}}, handlers: {'48-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/recharge')
      })();
    
  }},'48-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cash?money=' + _vm.wallet.money)
      })();
    
  }},'48-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'48-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'48-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'48-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/recharge')
      })();
    
  }},'48-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cash?money=' + _vm.wallet.money)
      })();
    
  }},'48-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'48-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'48-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'48-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/recharge')
      })();
    
  }},'48-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cash?money=' + _vm.wallet.money)
      })();
    
  }},'48-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'48-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'48-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'48-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/recharge')
      })();
    
  }},'48-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cash?money=' + _vm.wallet.money)
      })();
    
  }},'48-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'48-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'48-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'48-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/recharge')
      })();
    
  }},'48-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cash?money=' + _vm.wallet.money)
      })();
    
  }},'48-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'48-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'48-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'48-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/recharge')
      })();
    
  }},'48-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cash?money=' + _vm.wallet.money)
      })();
    
  }},'48-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'48-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'48-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'48-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/recharge')
      })();
    
  }},'48-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cash?money=' + _vm.wallet.money)
      })();
    
  }},'48-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(1)
      })();
    
  }},'48-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(2)
      })();
    
  }},'48-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.typeChange(3)
      })();
    
  }}}, models: {} });