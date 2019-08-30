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
    img2: '',
    img3: '',
    img4: '',
    path_arr: [] //上传后的地址列表

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
    uploadFile: function uploadFile(file_path, ind) {
      var that = this;
      var all = true;
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
          that.path_arr[ind] = JSON.parse(ret.data).data.path;

          for (var i = 0; i < 4; i++) {
            if (!that.path_arr[i]) {
              all = false;
              return false;
            }
          }

          if (all) {
            that.afterUpload();
          }
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
        type: 1,
        img1: that.path_arr[0],
        img2: that.path_arr[1],
        img3: that.path_arr[2],
        img4: that.path_arr[3]
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
        that.toast('请选择正面全身照');
        return false;
      }

      if (!that.img2 || !that.img2) {
        that.toast('请选择侧面全身照');
        return false;
      }

      if (!that.img4) {
        that.toast('请选择背面全身照');
        return false;
      }

      that.showLoad('上传中~', true);

      for (var i = 0; i < 4; i++) {
        that.uploadFile(that['img' + (i + 1)], i);
      }
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'45-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'45-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(2)
      })();
    
  }},'45-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(3)
      })();
    
  }},'45-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(4)
      })();
    
  }},'45-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'45-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'45-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(2)
      })();
    
  }},'45-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(3)
      })();
    
  }},'45-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(4)
      })();
    
  }},'45-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'45-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'45-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(2)
      })();
    
  }},'45-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(3)
      })();
    
  }},'45-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(4)
      })();
    
  }},'45-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'45-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'45-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(2)
      })();
    
  }},'45-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(3)
      })();
    
  }},'45-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(4)
      })();
    
  }},'45-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'45-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'45-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(2)
      })();
    
  }},'45-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(3)
      })();
    
  }},'45-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(4)
      })();
    
  }},'45-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'45-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'45-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(2)
      })();
    
  }},'45-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(3)
      })();
    
  }},'45-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(4)
      })();
    
  }},'45-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'45-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(1)
      })();
    
  }},'45-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(2)
      })();
    
  }},'45-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(3)
      })();
    
  }},'45-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindImg(4)
      })();
    
  }},'45-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindUpload($event)
      })();
    
  }}}, models: {} });