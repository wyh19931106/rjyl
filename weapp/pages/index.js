"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _common = _interopRequireDefault(require('../mixins/common.js'));

var _x = require('../vendor.js')(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 2500,
    duration: 500,
    swiperCurrent: 0,
    // 所有图片的高度
    imgheights: [],
    // 图片宽度
    imgwidth: 750,
    // 默认
    current: 0,
    imgBoxSize: 0,
    swiper_img: [],
    activity_list: [],
    category: [],
    listDate: {
      list: [],
      page: 1,
      load: false,
      finished: false
    }
  },
  computed: {},
  methods: {
    // 获取广告图
    getBanner: function getBanner() {
      var that = this;
      that.request({
        url: '/api/package/sliders/list',
        type: 'GET'
      }, {
        position_code: 'index_top'
      }, function (ret) {
        that.swiper_img = ret.data.index_top;
      });
    },
    // 获取分类
    getCategory: function getCategory() {
      var that = this;
      that.request({
        url: '/api/appmenu',
        type: 'GET'
      }, {}, function (ret) {
        that.category = ret.app_menuses;
      });
    },
    // 获取活动
    getActivity: function getActivity() {
      var that = this;
      that.request({
        url: '/api/activity_list',
        type: 'GET'
      }, {}, function (ret) {
        that.activity_list = ret.data;
      });
    },
    // 获取热门推荐
    getHotList: function getHotList() {
      var that = this;
      that.request({
        url: '/api/package/mall/default/products?filter[is_recommend]=1',
        type: 'GET'
      }, {
        page: that.listDate.page
      }, function (ret) {
        if (that.listDate.page < ret.meta.pagination.total_pages) {
          that.listDate.finished = false;
          that.listDate.page++;
        } else {
          that.listDate.finished = true;
        }

        that.listDate.load = true;
        that.listDate.list = that.listDate.list.concat(ret.data);
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
    this.getCategory();
    this.getActivity();
    this.getHotList();
  },
  // 上拉加载
  onReachBottom: function onReachBottom(event) {
    var that = this;

    if (that.listDate.finished) {
      return false;
    }

    if (that.listDate.load) {
      that.listDate.load = false;
      that.getHotList();
    }
  }
}, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'6-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'6-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList?default_category_id=' + item.default_category_id + '&service_category_id=' + item.service_category_id)
      })();
    
  }},'6-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList')
      })();
    
  }},'6-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityList')
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityDetails?id='+item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'6-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'6-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList?default_category_id=' + item.default_category_id + '&service_category_id=' + item.service_category_id)
      })();
    
  }},'6-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList')
      })();
    
  }},'6-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityList')
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityDetails?id='+item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'6-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'6-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList?default_category_id=' + item.default_category_id + '&service_category_id=' + item.service_category_id)
      })();
    
  }},'6-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList')
      })();
    
  }},'6-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityList')
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityDetails?id='+item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'6-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'6-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList?default_category_id=' + item.default_category_id + '&service_category_id=' + item.service_category_id)
      })();
    
  }},'6-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList')
      })();
    
  }},'6-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityList')
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityDetails?id='+item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'6-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'6-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList?default_category_id=' + item.default_category_id + '&service_category_id=' + item.service_category_id)
      })();
    
  }},'6-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList')
      })();
    
  }},'6-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityList')
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityDetails?id='+item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'6-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'6-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList?default_category_id=' + item.default_category_id + '&service_category_id=' + item.service_category_id)
      })();
    
  }},'6-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList')
      })();
    
  }},'6-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityList')
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityDetails?id='+item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'6-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'6-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList?default_category_id=' + item.default_category_id + '&service_category_id=' + item.service_category_id)
      })();
    
  }},'6-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/goodList')
      })();
    
  }},'6-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityList')
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/activityDetails?id='+item.id)
      })();
    
  }}}, models: {} });