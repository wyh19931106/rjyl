"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    details: Object
  },
  computed: {},
  methods: {
    getDetails: function getDetails(id) {
      var that = this;
      that.request({
        url: '/api/activity_details',
        type: 'GET'
      }, {
        id: id
      }, function (ret) {
        that.details = ret.data;
      });
    }
  },
  created: function created() {},
  onLoad: function onLoad(options) {
    this.getDetails(options.id);
  }
}, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityApply?id=' + _vm.details.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityApply?id=' + _vm.details.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityApply?id=' + _vm.details.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityApply?id=' + _vm.details.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityApply?id=' + _vm.details.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityApply?id=' + _vm.details.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityApply?id=' + _vm.details.id)
      })();
    
  }}}, models: {} });