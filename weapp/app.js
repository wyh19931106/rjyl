"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _eventHub = _interopRequireDefault(require('common/eventHub.js'));

var _x = _interopRequireDefault(require('vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

_core["default"].app({
  hooks: {
    // App 级别 hook，对整个 App 生效
    // 同时存在 Page hook 和 App hook 时，优先执行 Page hook，返回值再交由 App hook 处
    'before-setData': function beforeSetData(dirty) {// console.log('setData dirty: ', dirty);
      // return dirty;
    }
  },
  globalData: {
    userInfo: null
  },
  onLaunch: function onLaunch() {// this.testAsync();
    // eventHub.$on('app-launch', (...args) => {
    //   console.log('app-launch event emitted, the params are:');
    //   console.log(args);
    // });
  },
  methods: {// sleep (s) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('promise resolved')
    //     }, s * 1000)
    //   })
    // },
    // async testAsync () {
    //   let d = await this.sleep(3);
    //   console.log(d);
    // }
  },
  onUnload: function onUnload() {
    wx.clearStorage();
  }
}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1});