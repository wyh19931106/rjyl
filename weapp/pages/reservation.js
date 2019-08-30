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
    swiper_img: ['../images/img_banner_default.png', '../images/img_banner_default.png'],
    swiperCurrent: 0,
    // 所有图片的高度
    imgheights: [],
    // 图片宽度
    imgwidth: 750,
    // 默认
    current: 0,
    imgBoxSize: 0,
    html: '<div style="text-align:center;">《静夜思》· 李白<br />床前明月光，<br />疑是地上霜。 <br />举头望明月， <br />低头思故乡。<br /><img src="http://www.xiexingcun.com/Poetry/6/images/53e.jpg" alt="" /><br /><img src="http://www.xiexingcun.com/Poetry/6/images/53.jpg" alt="" /><br /><br /><img src="http://www.xiexingcun.com/Poetry/6/images/53b.jpg" alt="" /><br /></div>'
  },
  computed: {},
  methods: {
    swiperChange: function swiperChange(e) {
      this.swiperCurrent = e.$wx.detail.current;
      this.current = e.$wx.detail.current;
    },
    imageLoad: function imageLoad(e) {
      console.log(e);
      this.imgheights = []; // 获取图片真实宽度

      var imgwidth = e.$wx.detail.width;
      var imgheight = e.$wx.detail.height; // 宽高比

      var ratio = imgwidth / imgheight; // 计算的高度值

      var viewHeight = 750 / ratio;
      imgheight = viewHeight; // 把每一张图片的高度记录到数组里

      this.imgheights.push(imgheight); // 取出图片数组中最高的一个值

      this.imgBoxSize = Math.max.apply(null, this.imgheights);
    },
    getToken: function getToken() {
      var that = this;
      wx.request({
        url: 'http://47.101.39.91:8000/api-token-auth/',
        method: 'POST',
        data: {
          username: 'APPUSER',
          password: 'qezc1234'
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          that.getView(res.data.token);
        },
        fail: function fail(res) {
          console.log('请求失败：' + res);
        },
        complete: function complete(res) {
          console.log('请求完成：' + res);
        }
      });
    },
    getView: function getView(token) {
      var that = this;
      wx.request({
        url: 'http://47.101.39.91:8000/api/register/register/',
        method: 'GET',
        header: {
          'Authorization': 'Bearer' + token
        },
        success: function success(res) {
          console.log(res.data); // that.html = res.data;
        },
        fail: function fail(res) {
          console.log('请求失败：' + res);
        },
        complete: function complete(res) {
          console.log('请求完成：' + res);
        }
      });
    }
  },
  created: function created() {
    this.getToken();
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} });