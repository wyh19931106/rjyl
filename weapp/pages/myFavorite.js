"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    reset: false,
    _index: 0,
    list: [],
    page: 1,
    load: false,
    finished: false
  },
  methods: {
    // 获取列表
    getList: function getList() {
      var that = this;
      that.request({
        url: '/api/user/favorites?object=SMG\\Mall\\Models\\MallProduct',
        type: 'GET'
      }, {}, function (ret) {
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
    handleEnd: function handleEnd(e) {
      this._index = e.currentTarget.dataset.index;
    },
    handleTouch: function handleTouch(e) {
      if (e.currentTarget.dataset.index !== this._index) {
        this.reset = true;
      }
    },
    // 删除
    bindDel: function bindDel(ind) {
      var that = this;
      var arr = [];
      that.showModal('删除', '您确定删除该商品吗？', function () {
        that.request({
          url: '/api/user/favorites',
          type: 'DELETE'
        }, {
          object: 'SMG\\Mall\\Models\\MallProduct',
          id: that.list[ind].id
        }, function (ret) {});
        arr = _toConsumableArray(that.list);
        arr.splice(ind, 1);
        that.list = JSON.parse(JSON.stringify(arr));
      });
    }
  },
  onShow: function onShow() {},
  created: function created() {
    this.getList();
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
}, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"30-0":["touchstart"]}}, handlers: {'30-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'30-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodDetails?id='+ item.id + '&type=' + item.type)
      })();
    
  }},'30-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }}}, models: {} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"30-0":["touchstart"]}}, handlers: {'30-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'30-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodDetails?id='+ item.id + '&type=' + item.type)
      })();
    
  }},'30-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }}}, models: {} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"30-0":["touchstart"]}}, handlers: {'30-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'30-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodDetails?id='+ item.id + '&type=' + item.type)
      })();
    
  }},'30-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }}}, models: {} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"30-0":["touchstart"]}}, handlers: {'30-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'30-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodDetails?id='+ item.id + '&type=' + item.type)
      })();
    
  }},'30-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }}}, models: {} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"30-0":["touchstart"]}}, handlers: {'30-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'30-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodDetails?id='+ item.id + '&type=' + item.type)
      })();
    
  }},'30-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }}}, models: {} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"30-0":["touchstart"]}}, handlers: {'30-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'30-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodDetails?id='+ item.id + '&type=' + item.type)
      })();
    
  }},'30-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }}}, models: {} }, {info: {"components":{"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"30-0":["touchstart"]}}, handlers: {'30-0': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTouch($event)
      })();
    
  }},'30-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodDetails?id='+ item.id + '&type=' + item.type)
      })();
    
  }},'30-2': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindDel(key)
      })();
    
  }}}, models: {} });