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
    //1. 问卷   2.上传
    details: {},
    img_arr: []
  },
  computed: {},
  methods: {
    // 在线问卷详情
    getQuestionDetails: function getQuestionDetails(no) {
      var that = this;
      that.request({
        url: '/api/get_scores_results',
        type: 'GET'
      }, {
        qa_no: no
      }, function (ret) {
        that.details = ret.data;
      });
    },
    // 图片上传详情
    getUploadDetails: function getUploadDetails(id) {
      var that = this;
      that.request({
        url: '/api/selfhelp_show',
        type: 'GET'
      }, {
        id: id
      }, function (ret) {
        that.details = ret.data[0];
        var arr = [];

        if (that.details.img1) {
          arr.push(that.imgPath + that.details.img1);
        }

        if (that.details.img2) {
          arr.push(that.imgPath + that.details.img2);
        }

        if (that.details.img3) {
          arr.push(that.imgPath + that.details.img3);
        }

        if (that.details.img4) {
          arr.push(that.imgPath + that.details.img4);
        }

        that.img_arr = arr;
      });
    },
    // 点击预览图片
    previewImg: function previewImg(path) {
      var that = this;
      wx.previewImage({
        current: path,
        // 当前显示图片的http链接
        urls: that.img_arr // 需要预览的图片http链接列表

      });
    }
  },
  created: function created() {},
  onLoad: function onLoad(options) {
    this.type = options.type;

    if (this.type == 1) {
      this.getQuestionDetails(options.no);
    } else {
      this.getUploadDetails(options.no);
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (path) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(path)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (path) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(path)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (path) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(path)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (path) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(path)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (path) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(path)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (path) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(path)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (path) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(path)
      })();
    
  }}}, models: {} });