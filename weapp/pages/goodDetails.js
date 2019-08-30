"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    from_type: 'default',
    //default：商品     service：服务
    type: 1,
    //1.加入购物车   2.立即购买
    details: {},
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
    show: false,
    qty: 1,
    select_form: {
      price: 0,
      market_price: 0,
      attr_str: '请选择：规格',
      stock: 0 //选择的规格

    }
  },
  methods: {
    // 获取详情
    getDetails: function getDetails(id) {
      var that = this;
      that.request({
        url: '/api/package/mall/' + that.from_type + '/products/' + id + '?include=attrs,freight,favoriters',
        type: 'GET'
      }, {}, function (ret) {
        that.details = ret.data;
        that.details.content = that.details.content.replace(/style\s*?=\s*?([‘"])[\s\S]*?\1/ig, 'style="width:100%;height:auto;display: block;margin:auto"');
        that.details.content = that.details.content.replace(/\<p/gi, '<P class="rich-p"'); //正则给p标签增加class

        for (var i = 0; i < that.details.attrs.data.length; i++) {
          that.details.attrs.data[i].selected = false;
        }

        that.select_form.price = that.details.price;
        that.select_form.market_price = that.details.market_price;
        that.select_form.stock = that.details.stock;
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
    },
    // 显示规格
    bindShow: function bindShow(ind) {
      this.show = true;
      this.type = ind;
    },
    bindDefault: function bindDefault() {
      return false;
    },
    // 关闭规格
    bindHide: function bindHide() {
      this.show = false;
    },
    // 选择规格
    bindSelect: function bindSelect(ind) {
      var that = this;
      var obj = JSON.stringify(that.details.attrs.data[ind]);
      that.select_form = JSON.parse(obj);
    },
    // 加
    bindAdd: function bindAdd() {
      if (this.qty < this.select_form.stock) {
        this.qty += 1;
      } else {
        this.toast('库存不足');
      }
    },
    // 减
    bindSub: function bindSub() {
      if (this.qty > 1) {
        this.qty -= 1;
      } else {
        wx.showToast({
          title: '最小值为1',
          icon: 'none',
          duration: 2000
        });
      }
    },
    // 添加购物车
    addCart: function addCart() {
      var that = this;
      var json = {};
      json.qty = that.qty;

      if (that.details.attrs.data.length > 0) {
        if (that.select_form.id) {
          json.stock_id = that.select_form.id;
        } else {
          that.toast('请选择规格');
          return false;
        }
      } else {
        json.product_id = that.details.id;
      }

      if (that.qty > that.select_form.stock) {
        that.toast('库存不足');
        return false;
      }

      that.request({
        url: '/api/package/mall/' + that.from_type + '/cart',
        type: 'POST'
      }, json, function (ret) {
        that.toast('添加成功');
        that.show = false;
      });
    },
    // 下单
    toOrder: function toOrder() {
      var that = this;
      var stock_id = '';
      var product_id = '';

      if (that.details.attrs.data.length > 0) {
        if (that.select_form.id) {
          stock_id = that.select_form.id;
        } else {
          that.toast('请选择规格');
          return false;
        }
      } else {
        product_id = that.details.id;
      }

      if (that.qty > that.select_form.stock) {
        that.toast('库存不足');
        return false;
      }

      if (stock_id) {
        that.openWin('/pages/orderConfirm?from=product&stock_id=' + stock_id + '&qty=' + that.qty + '&type=' + that.from_type);
      }

      if (product_id) {
        that.openWin('/pages/orderConfirm?from=product&product_id=' + product_id + '&qty=' + that.qty + '&type=' + that.from_type);
      }

      that.show = false;
    },
    bindConfirm: function bindConfirm() {
      var that = this; // if(that.from_type == 'default') {

      if (that.type == 1) {
        that.addCart();
      } else if (that.type == 2) {
        that.toOrder();
      } // }

    },
    // 收藏
    bindFav: function bindFav() {
      var that = this;

      if (that.details.favoriters) {
        that.request({
          url: '/api/user/favorites',
          type: 'DELETE'
        }, {
          object: 'SMG\\Mall\\Models\\MallProduct',
          id: that.details.id
        }, function (ret) {
          that.toast('取消收藏');
          that.details.favoriters = false;
        });
      } else {
        that.request({
          url: '/api/user/favorites',
          type: 'POST'
        }, {
          object: 'SMG\\Mall\\Models\\MallProduct',
          id: that.details.id
        }, function (ret) {
          that.toast('收藏成功');
          that.details.favoriters = true;
        });
      }
    },
    // 客服
    handleContact: function handleContact(e) {
      console.log(e.$wx.detail); // console.log(e.$wx.detail.path)
      // console.log(e.$wx.detail.query)
    }
  },
  onLoad: function onLoad(options) {
    this.from_type = options.type;
    this.getDetails(options.id);
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'22-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'22-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'22-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindFav($event)
      })();
    
  }},'22-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openTab('/pages/cart')
      })();
    
  }},'22-4': {"contact": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleContact($event)
      })();
    
  }},'22-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(1)
      })();
    
  }},'22-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(2)
      })();
    
  }},'22-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'22-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-10': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'22-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSub($event)
      })();
    
  }},'22-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindAdd($event)
      })();
    
  }},'22-13': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'26': {
      type: "input",
      expr: "qty",
      handler: function set ($v) {
      var _vm=this;
        _vm.qty = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'22-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'22-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'22-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindFav($event)
      })();
    
  }},'22-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openTab('/pages/cart')
      })();
    
  }},'22-4': {"contact": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleContact($event)
      })();
    
  }},'22-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(1)
      })();
    
  }},'22-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(2)
      })();
    
  }},'22-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'22-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-10': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'22-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSub($event)
      })();
    
  }},'22-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindAdd($event)
      })();
    
  }},'22-13': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'26': {
      type: "input",
      expr: "qty",
      handler: function set ($v) {
      var _vm=this;
        _vm.qty = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'22-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'22-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'22-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindFav($event)
      })();
    
  }},'22-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openTab('/pages/cart')
      })();
    
  }},'22-4': {"contact": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleContact($event)
      })();
    
  }},'22-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(1)
      })();
    
  }},'22-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(2)
      })();
    
  }},'22-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'22-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-10': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'22-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSub($event)
      })();
    
  }},'22-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindAdd($event)
      })();
    
  }},'22-13': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'26': {
      type: "input",
      expr: "qty",
      handler: function set ($v) {
      var _vm=this;
        _vm.qty = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'22-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'22-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'22-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindFav($event)
      })();
    
  }},'22-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openTab('/pages/cart')
      })();
    
  }},'22-4': {"contact": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleContact($event)
      })();
    
  }},'22-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(1)
      })();
    
  }},'22-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(2)
      })();
    
  }},'22-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'22-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-10': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'22-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSub($event)
      })();
    
  }},'22-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindAdd($event)
      })();
    
  }},'22-13': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'26': {
      type: "input",
      expr: "qty",
      handler: function set ($v) {
      var _vm=this;
        _vm.qty = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'22-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'22-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'22-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindFav($event)
      })();
    
  }},'22-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openTab('/pages/cart')
      })();
    
  }},'22-4': {"contact": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleContact($event)
      })();
    
  }},'22-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(1)
      })();
    
  }},'22-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(2)
      })();
    
  }},'22-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'22-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-10': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'22-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSub($event)
      })();
    
  }},'22-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindAdd($event)
      })();
    
  }},'22-13': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'26': {
      type: "input",
      expr: "qty",
      handler: function set ($v) {
      var _vm=this;
        _vm.qty = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'22-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'22-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'22-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindFav($event)
      })();
    
  }},'22-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openTab('/pages/cart')
      })();
    
  }},'22-4': {"contact": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleContact($event)
      })();
    
  }},'22-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(1)
      })();
    
  }},'22-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(2)
      })();
    
  }},'22-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'22-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-10': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'22-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSub($event)
      })();
    
  }},'22-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindAdd($event)
      })();
    
  }},'22-13': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'26': {
      type: "input",
      expr: "qty",
      handler: function set ($v) {
      var _vm=this;
        _vm.qty = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'22-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'22-1': {"load": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.imageLoad($event)
      })();
    
  }},'22-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindFav($event)
      })();
    
  }},'22-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openTab('/pages/cart')
      })();
    
  }},'22-4': {"contact": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleContact($event)
      })();
    
  }},'22-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(1)
      })();
    
  }},'22-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindShow(2)
      })();
    
  }},'22-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindDefault($event)
      })();
    
  }},'22-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindHide($event)
      })();
    
  }},'22-10': {"tap": function proxy (key) {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(key)
      })();
    
  }},'22-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSub($event)
      })();
    
  }},'22-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindAdd($event)
      })();
    
  }},'22-13': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindConfirm($event)
      })();
    
  }}}, models: {'26': {
      type: "input",
      expr: "qty",
      handler: function set ($v) {
      var _vm=this;
        _vm.qty = $v;
      
    }
    }} });