"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    user: {}
  },
  computed: {},
  methods: {
    getUser: function getUser() {
      var that = this;
      that.request({
        url: '/api/base/user',
        type: 'GET'
      }, {}, function (ret) {
        that.user = ret.data;
      });
    }
  },
  created: function created() {},
  onShow: function onShow() {
    this.getUser();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    wx.showNavigationBarLoading(); //在标题栏中显示加载

    this.getUser();
    setTimeout(function () {
      wx.hideNavigationBarLoading(); //完成停止加载

      wx.stopPullDownRefresh(); //停止下拉刷新
    }, 1500);
  }
}, {info: {"components":{},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/userInfor',true)
      })();
    
  }},'5-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/newsCate',true)
      })();
    
  }},'5-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=1',true)
      })();
    
  }},'5-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=2',true)
      })();
    
  }},'5-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=3',true)
      })();
    
  }},'5-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=4',true)
      })();
    
  }},'5-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=5',true)
      })();
    
  }},'5-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=2',true)
      })();
    
  }},'5-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=3',true)
      })();
    
  }},'5-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/wallet',true)
      })();
    
  }},'5-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivity',true)
      })();
    
  }},'5-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myReservation',true)
      })();
    
  }},'5-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultList',true)
      })();
    
  }},'5-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myRecommend',true)
      })();
    
  }},'5-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myCode',true)
      })();
    
  }},'5-17': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myFavorite',true)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/userInfor',true)
      })();
    
  }},'5-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/newsCate',true)
      })();
    
  }},'5-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=1',true)
      })();
    
  }},'5-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=2',true)
      })();
    
  }},'5-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=3',true)
      })();
    
  }},'5-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=4',true)
      })();
    
  }},'5-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=5',true)
      })();
    
  }},'5-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=2',true)
      })();
    
  }},'5-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=3',true)
      })();
    
  }},'5-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/wallet',true)
      })();
    
  }},'5-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivity',true)
      })();
    
  }},'5-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myReservation',true)
      })();
    
  }},'5-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultList',true)
      })();
    
  }},'5-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myRecommend',true)
      })();
    
  }},'5-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myCode',true)
      })();
    
  }},'5-17': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myFavorite',true)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/userInfor',true)
      })();
    
  }},'5-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/newsCate',true)
      })();
    
  }},'5-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=1',true)
      })();
    
  }},'5-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=2',true)
      })();
    
  }},'5-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=3',true)
      })();
    
  }},'5-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=4',true)
      })();
    
  }},'5-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=5',true)
      })();
    
  }},'5-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=2',true)
      })();
    
  }},'5-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=3',true)
      })();
    
  }},'5-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/wallet',true)
      })();
    
  }},'5-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivity',true)
      })();
    
  }},'5-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myReservation',true)
      })();
    
  }},'5-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultList',true)
      })();
    
  }},'5-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myRecommend',true)
      })();
    
  }},'5-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myCode',true)
      })();
    
  }},'5-17': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myFavorite',true)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/userInfor',true)
      })();
    
  }},'5-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/newsCate',true)
      })();
    
  }},'5-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=1',true)
      })();
    
  }},'5-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=2',true)
      })();
    
  }},'5-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=3',true)
      })();
    
  }},'5-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=4',true)
      })();
    
  }},'5-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=5',true)
      })();
    
  }},'5-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=2',true)
      })();
    
  }},'5-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=3',true)
      })();
    
  }},'5-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/wallet',true)
      })();
    
  }},'5-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivity',true)
      })();
    
  }},'5-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myReservation',true)
      })();
    
  }},'5-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultList',true)
      })();
    
  }},'5-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myRecommend',true)
      })();
    
  }},'5-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myCode',true)
      })();
    
  }},'5-17': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myFavorite',true)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/userInfor',true)
      })();
    
  }},'5-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/newsCate',true)
      })();
    
  }},'5-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=1',true)
      })();
    
  }},'5-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=2',true)
      })();
    
  }},'5-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=3',true)
      })();
    
  }},'5-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=4',true)
      })();
    
  }},'5-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=5',true)
      })();
    
  }},'5-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=2',true)
      })();
    
  }},'5-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=3',true)
      })();
    
  }},'5-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/wallet',true)
      })();
    
  }},'5-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivity',true)
      })();
    
  }},'5-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myReservation',true)
      })();
    
  }},'5-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultList',true)
      })();
    
  }},'5-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myRecommend',true)
      })();
    
  }},'5-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myCode',true)
      })();
    
  }},'5-17': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myFavorite',true)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/userInfor',true)
      })();
    
  }},'5-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/newsCate',true)
      })();
    
  }},'5-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=1',true)
      })();
    
  }},'5-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=2',true)
      })();
    
  }},'5-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=3',true)
      })();
    
  }},'5-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=4',true)
      })();
    
  }},'5-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=5',true)
      })();
    
  }},'5-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=2',true)
      })();
    
  }},'5-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=3',true)
      })();
    
  }},'5-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/wallet',true)
      })();
    
  }},'5-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivity',true)
      })();
    
  }},'5-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myReservation',true)
      })();
    
  }},'5-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultList',true)
      })();
    
  }},'5-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myRecommend',true)
      })();
    
  }},'5-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myCode',true)
      })();
    
  }},'5-17': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myFavorite',true)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/userInfor',true)
      })();
    
  }},'5-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/newsCate',true)
      })();
    
  }},'5-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=1',true)
      })();
    
  }},'5-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=2',true)
      })();
    
  }},'5-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=3',true)
      })();
    
  }},'5-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=4',true)
      })();
    
  }},'5-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderProduct?type=5',true)
      })();
    
  }},'5-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=1',true)
      })();
    
  }},'5-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=2',true)
      })();
    
  }},'5-10': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/orderService?type=3',true)
      })();
    
  }},'5-11': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/wallet',true)
      })();
    
  }},'5-12': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivity',true)
      })();
    
  }},'5-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myReservation',true)
      })();
    
  }},'5-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultList',true)
      })();
    
  }},'5-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myRecommend',true)
      })();
    
  }},'5-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myCode',true)
      })();
    
  }},'5-17': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myFavorite',true)
      })();
    
  }}}, models: {} });