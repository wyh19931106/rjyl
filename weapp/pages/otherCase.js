"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    img1: '',
    path_arr: [] //上传后的地址

  },
  computed: {},
  methods: {
    // 选择图片
    bindImg: function bindImg(ind) {
      var that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(ret) {
          // tempFilePath可以作为img标签的src属性显示图片
          that['img' + ind] = ret.tempFilePaths[0];
        }
      });
    },
    // 上传文件
    uploadFile: function uploadFile(file_path) {
      var that = this;
      wx.uploadFile({
        url: that.host + '/api/base/files',
        header: {
          "Authorization": 'Bearer ' + that.getStore('token')
        },
        filePath: file_path,
        name: 'file',
        formData: {
          'type': 'image'
        },
        success: function success(ret) {
          that.path_arr[0] = JSON.parse(ret.data).data.path;
          that.afterUpload();
        }
      });
    },
    // 图片上传后设置
    afterUpload: function afterUpload() {
      var that = this;
      that.request({
        url: '/api/selfhelp_upload',
        type: 'POST'
      }, {
        type: 3,
        img1: that.path_arr[0]
      }, function (res) {
        that.toast('上传成功');
        that.hideLoad(0);
        that.goBack(1000);
      });
    },
    // 上传
    bindUpload: function bindUpload() {
      var that = this;

      if (!that.img1) {
        that.toast('请选择图片');
        return false;
      }

      that.showLoad('上传中~', true);
      that.uploadFile(that.img1);
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'35-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'35-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'35-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'35-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'35-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'35-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'35-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'35-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'35-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'35-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'35-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'35-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'35-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'35-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} });