"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
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
    },
    data4: {
      list: [],
      page: 1,
      load: false,
      finished: false
    }
  },
  computed: {},
  methods: {
    // 切换
    typeChange: function typeChange(e) {
      this.type = e.currentTarget.dataset.type;
    },
    // 获取在线问卷数据
    getQuestionList: function getQuestionList() {
      var that = this;
      that.request({
        url: '/api/get_scores_list',
        type: 'GET'
      }, {
        page: that.data1.page
      }, function (ret) {
        if (that.data1.page < ret.meta.pagination.total_pages) {
          that.data1.finished = false;
          that.data1.page++;
        } else {
          that.data1.finished = true;
        }

        that.data1.load = true;
        that.data1.list = that.data1.list.concat(ret.data);
        that.hideLoad(0);
      });
    },
    // 获取图片上传的数据
    getUploadList: function getUploadList(ind) {
      var that = this;
      that.request({
        url: '/api/selfhelp_list',
        type: 'GET'
      }, {
        page: that['data' + (ind + 1)].page,
        type: ind
      }, function (ret) {
        if (that['data' + (ind + 1)].page < ret.meta.pagination.total_pages) {
          that['data' + (ind + 1)].finished = false;
          that['data' + (ind + 1)].page++;
        } else {
          that['data' + (ind + 1)].finished = true;
        }

        that['data' + (ind + 1)].load = true;
        that['data' + (ind + 1)].list = that['data' + (ind + 1)].list.concat(ret.data);
        that.hideLoad(300);
      });
    }
  },
  created: function created() {
    this.showLoad();
    this.getQuestionList();
    this.getUploadList(1);
    this.getUploadList(2);
    this.getUploadList(3);
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
          that.getQuestionList();
        }

        break;

      case 2:
        if (that.data2.finished) {
          return false;
        }

        if (that.data2.load) {
          that.data2.load = false;
          getUploadList(1);
        }

        break;

      case 3:
        if (that.data3.finished) {
          return false;
        }

        if (that.data3.load) {
          that.data3.load = false;
          getUploadList(2);
        }

        break;

      case 4:
        if (that.data4.finished) {
          return false;
        }

        if (that.data4.load) {
          that.data4.load = false;
          getUploadList(3);
        }

        break;
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'41-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.qa_no+'&type=1')
      })();
    
  }},'41-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-7': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'41-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.qa_no+'&type=1')
      })();
    
  }},'41-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-7': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'41-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.qa_no+'&type=1')
      })();
    
  }},'41-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-7': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'41-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.qa_no+'&type=1')
      })();
    
  }},'41-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-7': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'41-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.qa_no+'&type=1')
      })();
    
  }},'41-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-7': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'41-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.qa_no+'&type=1')
      })();
    
  }},'41-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-7': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'41-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.typeChange($event)
      })();
    
  }},'41-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.qa_no+'&type=1')
      })();
    
  }},'41-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }},'41-7': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/resultDetails?no='+ item.id+'&type=2')
      })();
    
  }}}, models: {} });