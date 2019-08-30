"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    user: {},
    nickShow: false,
    name: '',
    area: ''
  },
  computed: {},
  methods: {
    // 获取用户信息
    getUser: function getUser() {
      var that = this;
      that.request({
        url: '/api/base/user',
        type: 'GET'
      }, {}, function (ret) {
        that.user = ret.data;
      });
    },
    //获取默认地址
    getAddrDefault: function getAddrDefault() {
      var that = this;
      that.request({
        url: '/api/package/user/address',
        type: 'GET'
      }, {}, function (ret) {
        that.area = ret.data.area;
      });
    },
    // 上传头像
    avatarShow: function avatarShow() {
      var that = this;
      wx.showActionSheet({
        itemList: ['从相册选择'],
        success: function success(res) {
          if (res.tapIndex == 0) {
            wx.chooseImage({
              count: 1,
              sizeType: ['original', 'compressed'],
              sourceType: ['album', 'camera'],
              success: function success(ret) {
                // tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = ret.tempFilePaths;
                that.showLoad('上传中~');
                wx.uploadFile({
                  url: that.host + '/api/base/files',
                  header: {
                    "Authorization": 'Bearer ' + that.getStore('token')
                  },
                  filePath: tempFilePaths[0],
                  name: 'file',
                  formData: {
                    'type': 'avatar'
                  },
                  success: function success(json) {
                    that.user.avatar = JSON.parse(json.data).data.path;
                    that.hideLoad(0);
                    that.request({
                      url: '/api/base/user',
                      type: 'PUT'
                    }, {
                      file_id: JSON.parse(json.data).data.id
                    }, function (data) {});
                  }
                });
              }
            });
          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    // 性别
    sexShow: function sexShow() {
      var that = this;
      wx.showActionSheet({
        itemList: ['保密', '男', '女'],
        success: function success(res) {
          that.user.sex = res.tapIndex;
          that.request({
            url: '/api/base/user',
            type: 'PUT'
          }, {
            sex: res.tapIndex
          }, function (ret) {});
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    // 设置昵称
    bindNickShow: function bindNickShow() {
      this.nickShow = true;
    },
    bindNickHide: function bindNickHide() {
      this.nickShow = false;
    },
    bindDefault: function bindDefault() {
      return false;
    },
    setNick: function setNick() {
      var that = this;

      if (!that.name.trim()) {
        that.toast('昵称不能设置为空！');
        return false;
      }

      that.request({
        url: '/api/base/user',
        type: 'PUT'
      }, {
        name: that.name
      }, function (ret) {
        that.user.name = that.name;
        that.bindNickHide();
      });
    }
  },
  created: function created() {},
  onShow: function onShow() {
    this.getUser();
    this.getAddrDefault();
  }
}, {info: {"components":{},"on":{}}, handlers: {'47-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.avatarShow($event)
      })();
    
  }},'47-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickShow($event)
      })();
    
  }},'47-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.sexShow($event)
      })();
    
  }},'47-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'47-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList')
      })();
    
  }},'47-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'47-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/setPayPwd')
      })();
    
  }},'47-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/changePhone')
      })();
    
  }},'47-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginOut($event)
      })();
    
  }},'47-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'47-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setNick($event)
      })();
    
  }}}, models: {'40': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'47-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.avatarShow($event)
      })();
    
  }},'47-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickShow($event)
      })();
    
  }},'47-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.sexShow($event)
      })();
    
  }},'47-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'47-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList')
      })();
    
  }},'47-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'47-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/setPayPwd')
      })();
    
  }},'47-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/changePhone')
      })();
    
  }},'47-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginOut($event)
      })();
    
  }},'47-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'47-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setNick($event)
      })();
    
  }}}, models: {'40': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'47-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.avatarShow($event)
      })();
    
  }},'47-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickShow($event)
      })();
    
  }},'47-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.sexShow($event)
      })();
    
  }},'47-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'47-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList')
      })();
    
  }},'47-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'47-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/setPayPwd')
      })();
    
  }},'47-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/changePhone')
      })();
    
  }},'47-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginOut($event)
      })();
    
  }},'47-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'47-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setNick($event)
      })();
    
  }}}, models: {'40': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'47-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.avatarShow($event)
      })();
    
  }},'47-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickShow($event)
      })();
    
  }},'47-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.sexShow($event)
      })();
    
  }},'47-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'47-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList')
      })();
    
  }},'47-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'47-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/setPayPwd')
      })();
    
  }},'47-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/changePhone')
      })();
    
  }},'47-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginOut($event)
      })();
    
  }},'47-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'47-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setNick($event)
      })();
    
  }}}, models: {'40': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'47-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.avatarShow($event)
      })();
    
  }},'47-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickShow($event)
      })();
    
  }},'47-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.sexShow($event)
      })();
    
  }},'47-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'47-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList')
      })();
    
  }},'47-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'47-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/setPayPwd')
      })();
    
  }},'47-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/changePhone')
      })();
    
  }},'47-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginOut($event)
      })();
    
  }},'47-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'47-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setNick($event)
      })();
    
  }}}, models: {'40': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'47-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.avatarShow($event)
      })();
    
  }},'47-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickShow($event)
      })();
    
  }},'47-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.sexShow($event)
      })();
    
  }},'47-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'47-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList')
      })();
    
  }},'47-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'47-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/setPayPwd')
      })();
    
  }},'47-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/changePhone')
      })();
    
  }},'47-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginOut($event)
      })();
    
  }},'47-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'47-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setNick($event)
      })();
    
  }}}, models: {'40': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'47-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.avatarShow($event)
      })();
    
  }},'47-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickShow($event)
      })();
    
  }},'47-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.sexShow($event)
      })();
    
  }},'47-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/addrList')
      })();
    
  }},'47-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/cardList')
      })();
    
  }},'47-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/forget')
      })();
    
  }},'47-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/setPayPwd')
      })();
    
  }},'47-7': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openWin('/pages/changePhone')
      })();
    
  }},'47-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.loginOut($event)
      })();
    
  }},'47-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'47-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindNickHide($event)
      })();
    
  }},'47-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.setNick($event)
      })();
    
  }}}, models: {'40': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    }} });