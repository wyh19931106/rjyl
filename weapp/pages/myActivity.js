"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    page: 1,
    list: [],
    load: false,
    finished: false
  },
  computed: {},
  methods: {
    getList: function getList() {
      var that = this;
      that.request({
        url: '/api/my_activity_list',
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
        var data = ret.data;

        for (var i = 0; i < data.length; i++) {
          data[i].isLate = that.judgeTime(data[i].promotion_activity.pa_date);
        }

        that.list = that.list.concat(data);
      });
    }
  },
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
}, {info: {"components":{},"on":{}}, handlers: {'26-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivityDetails?id=' + item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'26-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivityDetails?id=' + item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'26-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivityDetails?id=' + item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'26-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivityDetails?id=' + item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'26-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivityDetails?id=' + item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'26-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivityDetails?id=' + item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'26-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/myActivityDetails?id=' + item.id)
      })();
    
  }}}, models: {} });