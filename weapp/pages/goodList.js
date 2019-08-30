"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _common = _interopRequireDefault(require('../mixins/common.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_common["default"]],
  data: {
    url: '',
    from_type: 'default',
    //default：商品     service：服务
    type: 1,
    keyword: '',
    select_show: false,
    default_category_id: 0,
    service_category_id: 0,
    sort: 'none',
    //价格排序 asc desc none
    list: [],
    page: 1,
    load: false,
    finished: false
  },
  computed: {},
  methods: {
    // 获取列表
    getList: function getList(json) {
      var that = this;
      that.request({
        url: that.url,
        type: 'GET'
      }, json, function (ret) {
        if (that.page < ret.meta.pagination.total_pages) {
          that.finished = false;
          that.page++;
        } else {
          that.finished = true;
        }

        that.load = true;
        that.list = that.list.concat(ret.data);
      });
    },
    // 选择
    bindSelect: function bindSelect(ind) {
      var that = this;

      if (ind == 1) {
        that.select_show = !that.select_show;
      } // 销量排序


      if (ind == 2 && that.type != 2) {
        that.dataInit();
        that.getList({
          page: this.page,
          sort: '-sales_count'
        });
      }

      that.type = ind;

      if (that.type == 3) {
        that.dataInit();

        if (that.sort == 'none') {
          that.sort = 'desc';
          that.getList({
            page: this.page,
            sort: '-price'
          });
        } else if (that.sort == 'desc') {
          that.sort = 'asc';
          that.getList({
            page: this.page,
            sort: 'price'
          });
        } else {
          that.sort = 'desc';
          that.getList({
            page: this.page,
            sort: '-price'
          });
        }
      } else {
        that.sort = 'none';
      }
    },
    selectHide: function selectHide() {
      this.select_show = false;
    },
    // 切换类型
    changeType: function changeType(str) {
      this.select_show = false; // if( str == this.from_type) {
      //     return false;
      // }

      this.from_type = str;
      this.dataInit();

      if (this.keyword.trim()) {
        if (this.from_type == 'default') {
          if (!this.default_category_id && !this.service_category_id) {
            // 全部
            this.url = '/api/package/mall/' + this.from_type + '/products?filter[scopeSearch]=' + this.keyword.trim();
          } else {
            this.url = '/api/package/mall/' + this.from_type + '/products?filter[category_id]=' + this.default_category_id + '&filter[scopeSearch]=' + this.keyword.trim();
          }
        }

        if (this.from_type == 'service') {
          if (!this.default_category_id && !this.service_category_id) {
            // 全部
            this.url = '/api/package/mall/' + this.from_type + '/products?filter[scopeSearch]=' + this.keyword.trim();
          } else {
            this.url = '/api/package/mall/' + this.from_type + '/products?filter[category_id]=' + this.service_category_id + '&filter[scopeSearch]=' + this.keyword.trim();
          }
        }
      } else {
        if (this.from_type == 'default') {
          if (!this.default_category_id && !this.service_category_id) {
            // 全部
            this.url = '/api/package/mall/' + this.from_type + '/products';
          } else {
            this.url = '/api/package/mall/' + this.from_type + '/products?filter[category_id]=' + this.default_category_id;
          }
        }

        if (this.from_type == 'service') {
          if (!this.default_category_id && !this.service_category_id) {
            // 全部
            this.url = '/api/package/mall/' + this.from_type + '/products';
          } else {
            this.url = '/api/package/mall/' + this.from_type + '/products?filter[category_id]=' + this.service_category_id;
          }
        }
      }

      this.getList({
        page: this.page
      });
    },
    // 搜索
    bindSearch: function bindSearch() {
      var that = this;

      if (!that.keyword.trim()) {
        that.toast('请输入搜索关键词');
        return false;
      }

      that.dataInit();

      if (this.from_type == 'default') {
        if (!this.default_category_id && !this.service_category_id) {
          // 全部
          this.url = '/api/package/mall/' + this.from_type + '/products?filter[scopeSearch]=' + this.keyword.trim();
        } else {
          this.url = '/api/package/mall/' + this.from_type + '/products?filter[category_id]=' + this.default_category_id + '&filter[scopeSearch]=' + this.keyword.trim();
        }
      }

      if (this.from_type == 'service') {
        if (!this.default_category_id && !this.service_category_id) {
          // 全部
          this.url = '/api/package/mall/' + this.from_type + '/products?filter[scopeSearch]=' + this.keyword.trim();
        } else {
          this.url = '/api/package/mall/' + this.from_type + '/products?filter[category_id]=' + this.service_category_id + '&filter[scopeSearch]=' + this.keyword.trim();
        }
      }

      this.getList({
        page: this.page
      });
    },
    //数据初始化
    dataInit: function dataInit() {
      this.list = [];
      this.page = 1;
      this.load = false;
      this.finished = false;
    }
  },
  onLoad: function onLoad(options) {
    this.default_category_id = options.default_category_id || 0;
    this.service_category_id = options.service_category_id || 0;

    if (!options.default_category_id && !options.service_category_id) {
      // 全部
      this.url = '/api/package/mall/' + this.from_type + '/products';
    }

    if (options.default_category_id) {
      // 有商品分类id
      this.url = '/api/package/mall/' + this.from_type + '/products?filter[category_id]=' + options.default_category_id;
    }

    if (!options.default_category_id && options.service_category_id) {
      this.from_type = 'service';
      this.url = '/api/package/mall/' + this.from_type + '/products?filter[category_id]=' + options.service_category_id;
    }

    this.getList({
      page: this.page
    });
  },
  created: function created() {}
}, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'21-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.selectHide($event)
      })();
    
  }},'21-1': {"confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSearch($event)
      })();
    
  }},'21-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(1)
      })();
    
  }},'21-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('default')
      })();
    
  }},'21-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('service')
      })();
    
  }},'21-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(2)
      })();
    
  }},'21-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(3)
      })();
    
  }}}, models: {'42': {
      type: "input",
      expr: "keyword",
      handler: function set ($v) {
      var _vm=this;
        _vm.keyword = $v;
      
    }
    }} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'21-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.selectHide($event)
      })();
    
  }},'21-1': {"confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSearch($event)
      })();
    
  }},'21-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(1)
      })();
    
  }},'21-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('default')
      })();
    
  }},'21-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('service')
      })();
    
  }},'21-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(2)
      })();
    
  }},'21-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(3)
      })();
    
  }}}, models: {'42': {
      type: "input",
      expr: "keyword",
      handler: function set ($v) {
      var _vm=this;
        _vm.keyword = $v;
      
    }
    }} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'21-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.selectHide($event)
      })();
    
  }},'21-1': {"confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSearch($event)
      })();
    
  }},'21-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(1)
      })();
    
  }},'21-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('default')
      })();
    
  }},'21-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('service')
      })();
    
  }},'21-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(2)
      })();
    
  }},'21-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(3)
      })();
    
  }}}, models: {'42': {
      type: "input",
      expr: "keyword",
      handler: function set ($v) {
      var _vm=this;
        _vm.keyword = $v;
      
    }
    }} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'21-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.selectHide($event)
      })();
    
  }},'21-1': {"confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSearch($event)
      })();
    
  }},'21-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(1)
      })();
    
  }},'21-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('default')
      })();
    
  }},'21-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('service')
      })();
    
  }},'21-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(2)
      })();
    
  }},'21-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(3)
      })();
    
  }}}, models: {'42': {
      type: "input",
      expr: "keyword",
      handler: function set ($v) {
      var _vm=this;
        _vm.keyword = $v;
      
    }
    }} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'21-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.selectHide($event)
      })();
    
  }},'21-1': {"confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSearch($event)
      })();
    
  }},'21-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(1)
      })();
    
  }},'21-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('default')
      })();
    
  }},'21-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('service')
      })();
    
  }},'21-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(2)
      })();
    
  }},'21-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(3)
      })();
    
  }}}, models: {'42': {
      type: "input",
      expr: "keyword",
      handler: function set ($v) {
      var _vm=this;
        _vm.keyword = $v;
      
    }
    }} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'21-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.selectHide($event)
      })();
    
  }},'21-1': {"confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSearch($event)
      })();
    
  }},'21-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(1)
      })();
    
  }},'21-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('default')
      })();
    
  }},'21-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('service')
      })();
    
  }},'21-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(2)
      })();
    
  }},'21-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(3)
      })();
    
  }}}, models: {'42': {
      type: "input",
      expr: "keyword",
      handler: function set ($v) {
      var _vm=this;
        _vm.keyword = $v;
      
    }
    }} }, {info: {"components":{"porductBox":{"path":"..\\components\\product_list"}},"on":{}}, handlers: {'21-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.selectHide($event)
      })();
    
  }},'21-1': {"confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSearch($event)
      })();
    
  }},'21-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(1)
      })();
    
  }},'21-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('default')
      })();
    
  }},'21-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.changeType('service')
      })();
    
  }},'21-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(2)
      })();
    
  }},'21-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.bindSelect(3)
      })();
    
  }}}, models: {'42': {
      type: "input",
      expr: "keyword",
      handler: function set ($v) {
      var _vm=this;
        _vm.keyword = $v;
      
    }
    }} });