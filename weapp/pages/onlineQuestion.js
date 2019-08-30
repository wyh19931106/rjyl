"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    details: {},
    result: []
  },
  computed: {},
  methods: {
    // 获取数据
    getDetails: function getDetails() {
      var that = this;
      that.request({
        url: '/api/get_questionnaires',
        type: 'GET'
      }, {}, function (ret) {
        for (var i = 0; i < ret.data.question.length; i++) {
          that.result[i] = [];

          for (var j = 0; j < ret.data.question[i].question_options.length; j++) {
            ret.data.question[i].question_options[j].select = false;
          }
        }

        that.details = ret.data;
      });
    },
    // 选择答案
    bindSelect: function bindSelect(key, ind) {
      this.result[key] = [];

      if (this.details.question[key].q_type == 1) {
        // 单选
        for (var i = 0; i < this.details.question[key].question_options.length; i++) {
          if (ind == i) {
            this.details.question[key].question_options[i].select = true;
            this.result[key][0] = this.details.question[key].question_options[i].id;
          } else {
            this.details.question[key].question_options[i].select = false;
          }
        }
      }

      if (this.details.question[key].q_type == 2) {
        // 多选
        this.details.question[key].question_options[ind].select = !this.details.question[key].question_options[ind].select;

        for (var i = 0; i < this.details.question[key].question_options.length; i++) {
          if (this.details.question[key].question_options[i].select) {
            this.result[key].push(this.details.question[key].question_options[i].id);
          }
        }
      }
    },
    // 提交
    bindSubmit: function bindSubmit() {
      var that = this;

      for (var i = 0; i < that.result.length; i++) {
        if (that.result[i].length < 1) {
          that.toast('第' + (i + 1) + '题未完成答题');
          return false;
        }
      }

      var ret = [];

      for (var _i = 0; _i < that.result.length; _i++) {
        for (var j = 0; j < that.result[_i].length; j++) {
          ret.push(that.result[_i][j]);
        }
      }

      ret = JSON.stringify(ret);
      that.request({
        url: '/api/submit_questionnaires',
        type: 'POST'
      }, {
        qn_id: that.details.questionnaires[0].id,
        qo: ret
      }, function (ret) {
        that.toast('提交成功');
        setTimeout(function () {
          that.goBack();
        }, 2000);
      });
    }
  },
  created: function created() {
    this.getDetails();
  }
}, {info: {"components":{},"on":{}}, handlers: {'34-0': {"tap": function proxy (key, ind) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key,ind)
      })();
    
  }},'34-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'34-0': {"tap": function proxy (key, ind) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key,ind)
      })();
    
  }},'34-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'34-0': {"tap": function proxy (key, ind) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key,ind)
      })();
    
  }},'34-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'34-0': {"tap": function proxy (key, ind) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key,ind)
      })();
    
  }},'34-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'34-0': {"tap": function proxy (key, ind) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key,ind)
      })();
    
  }},'34-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'34-0': {"tap": function proxy (key, ind) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key,ind)
      })();
    
  }},'34-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'34-0': {"tap": function proxy (key, ind) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key,ind)
      })();
    
  }},'34-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSubmit($event)
      })();
    
  }}}, models: {} });