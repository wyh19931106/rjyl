"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 2500,
    duration: 500,
    swiper_img: [],
    swiperCurrent: 0,
    // 所有图片的高度
    imgheights: [],
    // 图片宽度
    imgwidth: 750,
    // 默认
    current: 0,
    imgBoxSize: 0
  },
  computed: {},
  methods: {
    // 获取banner
    getBanner: function getBanner() {
      var that = this;
      that.request({
        url: '/api/package/sliders/list',
        type: 'GET'
      }, {
        position_code: 'self_help'
      }, function (ret) {
        that.swiper_img = ret.data.self_help;
      });
    },
    // swiper
    swiperChange: function swiperChange(e) {
      this.swiperCurrent = e.$wx.detail.current;
      this.current = e.$wx.detail.current;
    },
    imageLoad: function imageLoad(e) {
      this.imgheights = []; // 获取图片真实宽度

      var imgwidth = e.$wx.detail.width;
      var imgheight = e.$wx.detail.height; // 宽高比

      var ratio = imgwidth / imgheight; // 计算的高度值

      var viewHeight = 750 / ratio;
      imgheight = viewHeight; // 把每一张图片的高度记录到数组里

      this.imgheights.push(imgheight); // 取出图片数组中最高的一个值

      this.imgBoxSize = Math.max.apply(null, this.imgheights);
    }
  },
  created: function created() {
    this.getBanner();
  }
}, {info: {"components":{},"on":{}}, handlers: {'8-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'8-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/onlineQuestion')
      })();
    
  }},'8-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadCase')
      })();
    
  }},'8-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadSelf')
      })();
    
  }},'8-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/otherCase')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'8-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/onlineQuestion')
      })();
    
  }},'8-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadCase')
      })();
    
  }},'8-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadSelf')
      })();
    
  }},'8-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/otherCase')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'8-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/onlineQuestion')
      })();
    
  }},'8-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadCase')
      })();
    
  }},'8-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadSelf')
      })();
    
  }},'8-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/otherCase')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'8-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/onlineQuestion')
      })();
    
  }},'8-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadCase')
      })();
    
  }},'8-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadSelf')
      })();
    
  }},'8-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/otherCase')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'8-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/onlineQuestion')
      })();
    
  }},'8-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadCase')
      })();
    
  }},'8-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadSelf')
      })();
    
  }},'8-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/otherCase')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'8-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/onlineQuestion')
      })();
    
  }},'8-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadCase')
      })();
    
  }},'8-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadSelf')
      })();
    
  }},'8-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/otherCase')
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'8-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/onlineQuestion')
      })();
    
  }},'8-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadCase')
      })();
    
  }},'8-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/uploadSelf')
      })();
    
  }},'8-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/otherCase')
      })();
    
  }}}, models: {} });