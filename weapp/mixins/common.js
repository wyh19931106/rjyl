"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    host: 'http://ruiji.885505.com',
    //api域名
    imgPath: 'http://ruiji.885505.com/uploads/',
    //图片地址前缀
    imgCodeUrl: '',
    //图形验证码
    captcha_key: '' //获取手机验证码的key

  },
  methods: {
    // ajax

    /*
        args: {
            type  请求类型 POST GET
            url   请求地址
        }
    */
    request: function request(args) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var err = arguments.length > 3 ? arguments[3] : undefined;
      var header = {};
      var that = this;

      if (that.getStore('token')) {
        header.Authorization = 'Bearer ' + that.getStore('token');
      }

      wx.request({
        url: that.host + args.url,
        method: args.type || 'GET',
        data: data,
        header: header,
        success: function success(res) {
          console.log(res);

          if (res.statusCode == 200 || res.statusCode == 201 || res.statusCode == 204) {
            fn(res.data);
          } else if (res.statusCode == 401) {
            that.removeStore('token'); //需求跳到登陆页

            that.openWin('/pages/login');
          } else if (res.statusCode == 422) {
            var err422 = res.data.errors;
            Object.keys(err422).forEach(function (key) {
              err422[key].forEach(function (msg) {
                that.toast(msg);
              });
            });
          } else {
            that.toast(res.data.message);
          }
        },
        fail: function fail(err) {
          that.hideLoad(0);
          console.log(args.url + '请求失败');
          that.toast('请求失败');
        },
        complete: function complete(res) {
          console.log(args.url + '请求完成');
        }
      });
    },
    // 设置
    setStore: function setStore(key, val) {
      if (!key) {
        return false;
      }

      wx.setStorage({
        key: key,
        data: val
      });
    },
    // 获取
    getStore: function getStore(key) {
      if (!key) {
        return false;
      }

      return wx.getStorageSync(key);
    },
    // 移除
    removeStore: function removeStore(key) {
      if (!key) {
        return false;
      }

      wx.removeStorage({
        key: key,
        success: function success(res) {
          console.log(res);
        }
      });
    },
    // 清除
    clearStore: function clearStore(fn) {
      wx.clearStorage({
        success: function success() {
          if (fn) {
            fn();
          }
        }
      });
    },
    // 普通跳转页面
    openWin: function openWin(url) {
      var isLogin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var addEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var send = arguments.length > 3 ? arguments[3] : undefined;

      if (isLogin && !this.getStore('token')) {
        this.openWin('/pages/login');
        return false;
      }

      wx.navigateTo({
        url: url,
        events: addEvent,
        success: function success(res) {
          if (send) {
            send(res);
          }
        } // events: {
        //     为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        //     acceptDataFromOpenedPage: function(data) {
        //       console.log(data)
        //     },
        //     someEvent: function(data) {
        //       console.log(data)
        //     }
        // },
        // success: function(res) {
        //     通过eventChannel向被打开页面传送数据
        //     res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        // }

      });
    },
    // 跳转tab
    openTab: function openTab(url) {
      wx.switchTab({
        url: url
      });
    },
    // 关闭当前页面，跳转页面
    openWinDel: function openWinDel(url) {
      wx.redirectTo({
        url: url
      });
    },
    // 返回上一页
    goBack: function goBack(time) {
      if (time) {
        setTimeout(function () {
          wx.navigateBack({
            delta: 1
          });
        }, time);
      } else {
        wx.navigateBack({
          delta: 1
        });
      }
    },
    // 获取图形验证码
    getImgCode: function getImgCode() {
      var that = this;
      this.request({
        url: '/api/captcha'
      }, {}, function (ret) {
        that.imgCodeUrl = ret.data.img;
        that.captcha_key = ret.data.key;
      });
    },
    // 获取手机验证码
    getPhoneCode: function getPhoneCode(captcha_code, phone, type, fn) {
      var that = this;
      this.request({
        url: '/api/base/sms',
        type: 'POST'
      }, {
        captcha_key: that.captcha_key,
        captcha_code: captcha_code,
        phone: phone,
        type: type
      }, function (ret) {
        console.log(ret);

        if (fn) {
          fn();
        }
      });
    },
    // 判断手机号
    isPhone: function isPhone(num) {
      var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      return reg.test(num.trim());
    },
    // toast
    toast: function toast(str, time) {
      wx.showToast({
        title: str,
        icon: 'none',
        duration: time || 2000
      });
    },
    // showModal
    showModal: function showModal(tit, msg, fn, err) {
      wx.showModal({
        title: tit || '提示',
        content: msg,
        success: function success(res) {
          if (res.confirm) {
            if (fn) {
              fn();
            }
          } else if (res.cancel) {
            if (err) {
              err();
            }
          }
        }
      });
    },
    // loading ,mark 蒙层
    showLoad: function showLoad(msg, mark) {
      wx.showLoading({
        mask: mark || false,
        title: msg || '加载中'
      });
    },
    hideLoad: function hideLoad() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
      setTimeout(function () {
        wx.hideLoading();
      }, time);
    },
    // 下拉刷新
    refresh: function refresh(fn) {
      wx.showNavigationBarLoading(); //在标题栏中显示加载

      if (fn) {
        fn();
      }

      setTimeout(function () {
        wx.hideNavigationBarLoading(); //完成停止加载

        wx.stopPullDownRefresh(); //停止下拉刷新
      }, 1500);
    },
    // 输入手机号(数字)
    inputPhoneCom: function inputPhoneCom(obj) {
      var that = this;

      if (that.form) {
        that.form[obj] = that.form[obj].replace(/[^\d]/g, '');
      } else {
        that[obj] = that[obj].replace(/[^\d]/g, '');
      }
    },
    // 输入密码（不能输入空格）
    inputPwdCom: function inputPwdCom(obj) {
      var that = this;

      if (that.form) {
        that.form[obj] = that.form[obj].replace(/\s+/g, '');
      } else {
        that[obj] = that[obj].replace(/\s+/g, '');
      }
    },
    // 判断是否过期（当前时间）
    judgeTime: function judgeTime(time) {
      var strtime = time.replace("/-/g", "/"); //时间转换
      //时间

      var date1 = new Date(strtime); //现在时间

      var date2 = new Date(); //判断时间是否过期

      return date1 < date2 ? true : false;
    },
    // 退出登录
    loginOut: function loginOut() {
      var that = this;
      that.removeStore('token');
      that.goBack();
      that.request({
        url: '/api/base/authorizations/current',
        type: 'DELETE'
      }, {}, function (ret) {
        console.log(ret);
      });
    }
  },
  created: function created() {// console.log('created in mixin');
  }
};
exports["default"] = _default;