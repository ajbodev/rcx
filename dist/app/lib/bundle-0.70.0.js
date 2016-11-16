/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var lib, Component;
	lib = __webpack_require__(1);
	Component = __webpack_require__(25);
	window.app.component = new Component(lib);
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\index.ls.map


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var lib;
	window.app.meta = __webpack_require__(2);
	window.data = function(list){
	  if (list['data']) {
	    list = list['data'];
	  }
	  app.component.dataImportTable({
	    list: list
	  });
	};
	window.script = function(resp){
	  app.component.response.script = resp;
	};
	window.onmessage = function(msg){
	  app.component.response.form = msg.data;
	  app.component.response.form_cb(msg.data);
	};
	lib = {
	  debug: window.app.meta['app'].debug,
	  Stores: {
	    'static': __webpack_require__(3),
	    indexeddb: __webpack_require__(4),
	    localstorage: __webpack_require__(5),
	    ajax: __webpack_require__(6),
	    dom: __webpack_require__(7),
	    firebase3: __webpack_require__(8)
	  },
	  templates: {
	    layout: {
	      split: __webpack_require__(9),
	      split_vtab: __webpack_require__(10),
	      combined: __webpack_require__(11)
	    },
	    admin: {
	      tree_data: __webpack_require__(12),
	      list_data: __webpack_require__(13)
	    }
	  },
	  props: {
	    _title: 'rcx',
	    boot: __webpack_require__(14),
	    main: __webpack_require__(15),
	    admin: __webpack_require__(16),
	    util: __webpack_require__(17)
	  },
	  samples: {
	    'Template - HTML, CSS, JS': {
	      input_html: {
	        index: {
	          name: 'index',
	          ext: 'html',
	          mode: 'text/html',
	          src: __webpack_require__(18)
	        }
	      },
	      input_css: {
	        index: {
	          name: 'index',
	          ext: 'css',
	          mode: 'text/css',
	          src: __webpack_require__(19)
	        }
	      },
	      input_js: {
	        index: {
	          name: 'index',
	          ext: 'js',
	          mode: 'text/javascript',
	          src: __webpack_require__(20)
	        }
	      }
	    },
	    'Template - Jade, CSS, JS': {
	      input_html: {
	        index: {
	          name: 'index',
	          ext: 'jade',
	          mode: 'text/x-jade',
	          src: __webpack_require__(21)
	        }
	      },
	      input_css: {
	        index: {
	          name: 'index',
	          ext: 'css',
	          mode: 'text/css',
	          src: __webpack_require__(22)
	        }
	      },
	      input_js: {
	        index: {
	          name: 'index',
	          ext: 'js',
	          mode: 'text/javascript',
	          src: __webpack_require__(23)
	        }
	      }
	    },
	    'Clone': {
	      input_html: {
	        index: {
	          name: 'index',
	          ext: 'html',
	          mode: 'text/html',
	          src: '\r\n\r\n'
	        }
	      },
	      input_css: {
	        index: {
	          name: 'index',
	          ext: 'css',
	          mode: 'text/css',
	          src: '\r\n\r\n'
	        }
	      },
	      input_js: {
	        index: {
	          name: 'index',
	          ext: 'js',
	          mode: 'text/javascript',
	          src: '\r\n\r\n'
	        }
	      }
	    }
	  },
	  _require: __webpack_require__(24)
	};
	module.exports = lib;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\lib.ls.map


/***/ },
/* 2 */
/***/ function(module, exports) {

	var meta;
	meta = {
	  'app': {
	    'version': '0.70.0',
	    'version_vendor': '0.70.0',
	    'debug': true,
	    'settings': 'settings_rcx',
	    'scripts': {
	      '_root': '../',
	      'marked': 'vendors/markdown/marked/0.3.5/marked.min.js',
	      'jade': 'vendors/template/jade/1.11.0/jade.min.js',
	      'less': 'vendors/preprocessor/less/2.7.1/less.min.js',
	      'sass': 'vendors/preprocessor/sass/0.0.0-2015-03-22/sass.js',
	      'stylus': 'vendors/preprocessor/stylus/0.54.5/stylus.js',
	      'babel.js': 'vendors/transpiler/babel-standalone/6.18.2/babel.window.min.js',
	      'typescript': 'vendors/transpiler/typescript/1.8.0/typescript.min.js',
	      'coffeescript': 'vendors/transpiler/coffeescript/1.10.0/coffee-script.js',
	      'livescript': 'vendors/transpiler/livescript/1.4.0/livescript-min.js'
	    }
	  }
	};
	module.exports = meta;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\meta.ls.map


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Store;
	Store = function(o){
	  this.id = 0;
	  this.list = [];
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    var item;
	    if (!attrs.id) {
	      attrs.id = ++this.id;
	    } else {
	      attrs.id = parseInt(attrs.id);
	    }
	    this.list.push(attrs);
	    item = attrs;
	    if (cb) {
	      cb(item);
	    }
	  },
	  find: function(id, cb){
	    var item, idInt, i$, ref$, len$;
	    item = {};
	    idInt = parseInt(id);
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    if (cb) {
	      cb(item);
	    }
	    function fn$(el){
	      if (el.id === idInt) {
	        item = el;
	      }
	    }
	  },
	  findAll: function(cb){
	    if (cb) {
	      cb(this.list);
	    }
	  },
	  findByAttr: function(attr, value, cb){
	    var item, i$, ref$, len$;
	    item = {};
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    if (cb) {
	      cb(item);
	    }
	    function fn$(el){
	      if (el[attr] === value) {
	        item = el;
	      }
	    }
	  },
	  update: function(id, attrs, cb){
	    var item, idInt, i$, ref$, len$;
	    item = {};
	    idInt = parseInt(id);
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    if (cb) {
	      cb(item);
	    }
	    function fn$(i, el){
	      var key;
	      if (el.id === idInt) {
	        for (key in attrs) {
	          if (key === 'id') {
	            this.list[i][key] = parseInt(attrs[key]);
	          } else {
	            this.list[i][key] = attrs[key];
	          }
	        }
	        item = this.list[i];
	      }
	    }
	  },
	  destroy: function(id, cb){
	    var item, index, idInt, i$, ref$, len$;
	    item = {};
	    index = -1;
	    idInt = parseInt(id);
	    for (i$ = 0, len$ = (ref$ = this.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    if (index > -1) {
	      this.list.splice(index, 1);
	    }
	    id = idInt;
	    if (cb) {
	      cb(id);
	    }
	    function fn$(i, el){
	      if (el.id === idInt) {
	        index = i;
	        item = el;
	      }
	    }
	  },
	  importTable: function(table, list, cb){
	    var i$, len$, i, el;
	    this.id = 0;
	    this.list = [];
	    for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	      i = i$;
	      el = list[i$];
	      el.id = ++this.id;
	      this.list.push(el);
	    }
	    if (cb) {
	      cb();
	    }
	  },
	  _load: function(others){
	    var cb, script, e;
	    cb = function(){
	      app.component.elementRefresh();
	    };
	    try {
	      if (this.db_url && this.others.script) {
	        script = document.createElement('script');
	        script.src = this.db_url;
	        script.onload = cb;
	        document.body.appendChild(script);
	      } else if (this.db_url) {
	        $.get(this.db_url, function(list){
	          if (list['data']) {
	            list = list['data'];
	          }
	          app.component.dataImportTable({
	            list: list,
	            cb: cb
	          });
	        });
	      }
	    } catch (e$) {
	      e = e$;
	      console.log(e);
	    }
	  }
	};
	module.exports = Store;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\store\static\js\store.ls.map


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Store;
	Store = function(o){
	  window.db_dexie = new Dexie(o.db_url);
	  window.db_dexie.version(1).stores({
	    data: '++id, name'
	  });
	  this.db_url = window.db_dexie;
	  this.table = 'data';
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    console.log('A', this.db_url);
	    this.db_url[this.table].add(attrs).then(function(id){
	      var item;
	      attrs.id = id;
	      item = attrs;
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  find: function(id, cb){
	    var idInt;
	    idInt = parseInt(id);
	    this.db_url[this.table].get(idInt, function(item){
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  findByAttr: function(attr, value, cb){},
	  findAll: function(cb){
	    var items;
	    items = [];
	    this.db_url[this.table].each(function(item){
	      items.push(item);
	    }).then(function(){
	      if (cb) {
	        cb(items);
	      }
	    });
	  },
	  update: function(id, attrs, cb){
	    var idInt;
	    idInt = parseInt(id);
	    attrs.id = idInt;
	    this.db_url[this.table].update(idInt, attrs).then(function(){
	      var item;
	      attrs.id = idInt;
	      item = attrs;
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  destroy: function(id, cb){
	    var idInt;
	    idInt = parseInt(id);
	    this.db_url[this.table]['delete'](idInt).then(function(){
	      var id;
	      id = idInt;
	      if (cb) {
	        cb(id);
	      }
	    });
	  },
	  importTable: function(table, list, cb){
	    var _this;
	    _this = this;
	    this.db_url.transaction('rw', this.table, function(){
	      return _this.db_url[_this.table].clear();
	    }).then(function(){
	      var i$, ref$, len$, i, el;
	      for (i$ = 0, len$ = (ref$ = list).length; i$ < len$; ++i$) {
	        i = i$;
	        el = ref$[i$];
	        _this.db_url[_this.table].put(el);
	      }
	    }).then(function(){
	      cb();
	    });
	  },
	  groupByKey: function(key, cb){
	    var _this, group;
	    _this = this;
	    group = {};
	    this.db_url[this.table].orderBy(key).uniqueKeys().then(function(keys){
	      var i$, len$, results$ = [];
	      group[''] = {
	        count: 0
	      };
	      for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
	        results$.push((fn$.call(this, i$, keys[i$])));
	      }
	      return results$;
	      function fn$(index, key){
	        return group[key] = {
	          count: 0
	        };
	      }
	    }).then(function(){
	      return _this.db_url[_this.table].each(function(item){
	        group[item[key] || ''].count++;
	      });
	    }).then(function(){
	      cb(group);
	    });
	  },
	  autoload: function(component, checked){
	    var load;
	    load = function(){
	      console.log('Autoload', component.id);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  }
	};
	module.exports = Store;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\store\browser\indexeddb-dexie\store.ls.map


/***/ },
/* 5 */
/***/ function(module, exports) {

	var Store;
	Store = function(o){
	  this.db_url = localforage.createInstance({
	    name: o.db_url,
	    driver: localforage.LOCALSTORAGE
	  });
	  this.table = o.table || null;
	  this.id = 0;
	  this.init();
	};
	Store.prototype = {
	  constructor: Store,
	  init: function(){
	    var _this;
	    _this = this;
	    this.db_url.keys().then(function(keys){
	      _this.id = _this._id(keys);
	    });
	  },
	  create: function(attrs, cb){
	    var id;
	    id = this.id + 1;
	    attrs.id = id;
	    this.db_url.setItem(id + '', attrs).then(function(){
	      if (cb) {
	        cb(attrs);
	      }
	    });
	  },
	  find: function(id, cb){
	    this.db_url.getItem(id + '').then(function(item){
	      if (cb) {
	        cb(item);
	      }
	    });
	  },
	  findAll: function(cb){
	    var items;
	    items = [];
	    this.db_url.iterate(function(value, key, iterationNumber){
	      items.push(value);
	    }).then(function(){
	      if (cb) {
	        cb(items);
	      }
	    });
	  },
	  update: function(id, attrs, cb){
	    var _this;
	    _this = this;
	    this.find(id, function(item){
	      var i$, ref$;
	      for (i$ in ref$ = attrs) {
	        (fn$.call(this, i$, ref$[i$]));
	      }
	      _this.db_url.setItem(id + '', item).then(function(){
	        if (cb) {
	          cb(attrs);
	        }
	      });
	      function fn$(i, el){
	        item[i] = attrs[i];
	      }
	    });
	  },
	  destroy: function(id, cb){
	    this.db_url.removeItem(id + '').then(function(){
	      if (cb) {
	        cb(id);
	      }
	    });
	  },
	  importTable: function(table, list, cb){
	    var i$, len$;
	    this.id = 0;
	    for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, list[i$]));
	    }
	    function fn$(i, el){
	      this.create(el);
	    }
	  },
	  groupByKey: function(key, cb){},
	  autoload: function(component, checked){},
	  _id: function(keys){
	    var id;
	    id = Math.max.apply(null, keys);
	    if (!isFinite(id)) {
	      id = 0;
	    }
	    return id;
	  }
	};
	module.exports = Store;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\store\browser\localstorage-localforage\store.ls.map


/***/ },
/* 6 */
/***/ function(module, exports) {

	var Store;
	Store = function(o){
	  this.db_url = o.db_url;
	  this.table = o.table || null;
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    var _this;
	    _this = this;
	    $.post(this.db_url + '/create', attrs, function(item, status, xhr, dataType){
	      _this._response(item, type, cb);
	    });
	  },
	  find: function(id, cb){
	    var _this;
	    _this = this;
	    $.get(this.db_url + '/find/' + id, function(item, status, xhr, dataType){
	      _this._response(item, type, cb);
	    });
	  },
	  findAll: function(cb){
	    var _this;
	    _this = this;
	    $.get(this.db_url + '/find-all/', function(data, status, xhr, dataType){
	      _this._response(data, type, cb);
	    });
	  },
	  update: function(id, attrs, cb){
	    var _this;
	    _this = this;
	    attrs.id = id;
	    $.post(this.db_url + '/update', attrs, function(item, status, xhr, dataType){
	      _this._response(item, type, cb);
	    });
	  },
	  destroy: function(id, cb){
	    var _this;
	    _this = this;
	    return $.post(this.db_url + '/destroy', {
	      id: id
	    }, function(item, status, xhr, dataType){
	      _this._response(item, type, cb);
	    });
	  },
	  groupByKey: function(key, cb){
	    var _this;
	    _this = this;
	    this.findAll(function(data){
	      var group, i$, len$;
	      group = {};
	      for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, data[i$]));
	      }
	      for (i$ in group) {
	        (fn1$.call(this, i$, group[i$]));
	      }
	      if (cb) {
	        cb(group);
	      }
	      function fn$(i, el){
	        group[el[key]] = {
	          count: 0
	        };
	      }
	      function fn1$(index, obj){
	        var i$, ref$, len$;
	        for (i$ = 0, len$ = (ref$ = data).length; i$ < len$; ++i$) {
	          (fn$.call(this, i$, ref$[i$]));
	        }
	        function fn$(i, el){
	          if (el[key] === index) {
	            group[index].count++;
	          }
	        }
	      }
	    });
	  },
	  importTable: function(table, cb){
	    var _this;
	    _this = this;
	    table = JSON.stringify(table);
	    $.post(this.db_url + '/import-table', {
	      table: table
	    }, function(){
	      if (cb) {
	        cb();
	      }
	    });
	  },
	  importDb: function(db, cb){
	    var _this;
	    _this = this;
	    db = JSON.stringify(db);
	    $.post(this.db_url + '/import-db', {
	      db: db
	    }, function(){
	      if (cb) {
	        cb();
	      }
	    });
	  },
	  autoload: function(component, checked){
	    var _this, load;
	    _this = this;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  },
	  _response: function(data, type, cb){
	    var _this;
	    _this = this;
	    if (type === 'json') {
	      if (cb) {
	        return cb(data);
	      }
	    } else {
	      if (cb) {
	        return cb(JSON.parse(data));
	      }
	    }
	  }
	};
	module.exports = Store;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\store\server\ajax-jquery\store.ls.map


/***/ },
/* 7 */
/***/ function(module, exports) {

	var Store;
	Store = function(o){
	  this.db_url = o.db_url;
	  this.table = o.table || null;
	};
	Store.prototype = {
	  constructor: Store,
	  create: function(attrs, cb){
	    this._post(attrs, this.db_url + '/create', cb);
	  },
	  find: function(id, cb){
	    if (id) {
	      this._get(this.db_url + '/find/' + id, cb);
	    }
	  },
	  findAll: function(cb){
	    this._get(this.db_url + '/find-all', cb);
	  },
	  update: function(id, attrs, cb){
	    if (id) {
	      attrs.id = id;
	      this._post(attrs, this.db_url + '/update', cb);
	    }
	  },
	  destroy: function(id, cb){
	    if (id) {
	      return this._post({
	        id: id
	      }, this.db_url + '/destroy', cb);
	    }
	  },
	  groupByKey: function(key, cb){
	    this.findAll(function(data){
	      var group, i$, len$;
	      group = {};
	      for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, data[i$]));
	      }
	      for (i$ in group) {
	        (fn1$.call(this, i$, group[i$]));
	      }
	      if (cb) {
	        cb(group);
	      }
	      function fn$(i, el){
	        group[el[key]] = {
	          count: 0
	        };
	      }
	      function fn1$(index, obj){
	        var i$, ref$, len$;
	        for (i$ = 0, len$ = (ref$ = data).length; i$ < len$; ++i$) {
	          (fn$.call(this, i$, ref$[i$]));
	        }
	        function fn$(i, el){
	          if (el[key] === index) {
	            group[index].count++;
	          }
	        }
	      }
	    });
	  },
	  importTable: function(table, cb){
	    table = JSON.stringify(table);
	    $.post(this.db_url + '/import-table', {
	      table: table
	    }, function(){
	      if (cb) {
	        cb();
	      }
	    });
	    this._post({
	      table: table
	    }, this.db_url + '/destroy', cb);
	  },
	  importDb: function(db, cb){
	    db = JSON.stringify(db);
	    $.post(this.db_url + '/import-db', {
	      db: db
	    }, function(){
	      if (cb) {
	        cb();
	      }
	    });
	    this._post({
	      db: db
	    }, this.db_url + '/import-db', cb);
	  },
	  autoload: function(component, checked){
	    var load;
	    load = function(){
	      console.log('Autoload', component.id.main);
	      clearTimeout(component.delays.load);
	      component.loadByIdAuto();
	      component.delays.load = setTimeout(function(){
	        load();
	      }, 1000);
	    };
	    if (component.id && checked) {
	      load();
	    } else {
	      clearTimeout(component.delays.load);
	    }
	  },
	  _get: function(url, cb){
	    $.getScript(url + '?cb=script', function(){
	      cb(app.component.response.script);
	    });
	  },
	  _post: function(attrs, url, cb){
	    var form, i$;
	    app.component.response.form_cb = function(resp){
	      cb(resp);
	    };
	    form = $('<form id="_form" style="visibility: hidden;" action="' + url + '?iframe=true" method="POST" target="_form-target"></form>');
	    for (i$ in attrs) {
	      (fn$.call(this, i$, attrs[i$]));
	    }
	    $('body').append(form);
	    for (i$ in attrs) {
	      (fn1$.call(this, i$, attrs[i$]));
	    }
	    form.submit();
	    $('#_form').remove();
	    function fn$(i, el){
	      form.append('<input id="_form-' + i + '" name="' + i + '">');
	    }
	    function fn1$(i, el){
	      $('#_form-' + i).val(el + '');
	    }
	  }
	};
	module.exports = Store;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\store\server\dom-jquery\store.ls.map


/***/ },
/* 8 */
/***/ function(module, exports) {

	var Store;
	Store = function(o){
	  var e;
	  try {
	    this.make(o.others);
	    this.store = firebase.database();
	    this.table = o.table;
	    this.db_url = o.db_url;
	    this.id = 0;
	    this.list = [];
	  } catch (e$) {
	    e = e$;
	    console.log(e);
	    throw new Error('Firebase error!');
	  }
	};
	Store.prototype = {
	  constructor: Store,
	  make: function(others){
	    firebase.initializeApp({
	      apiKey: others.apiKey,
	      authDomain: others.authDomain,
	      databaseURL: others.databaseURL,
	      storageBucket: others.storageBucket,
	      messagingSenderId: others.messagingSenderId
	    });
	  },
	  create: function(attrs, cb){
	    var _this;
	    _this = this;
	    firebase.database().ref(this.table).push(attrs).then(function(snap){
	      attrs.id = snap.key;
	      if (cb) {
	        cb(attrs);
	      }
	    })['catch'](function(e){
	      console.log(e);
	    });
	  },
	  find: function(id, cb){
	    var _this;
	    _this = this;
	    firebase.database().ref(this.table + '/' + id).once('value').then(function(snap){
	      var item;
	      item = snap.val();
	      item.id = id;
	      if (cb) {
	        cb(item);
	      }
	    })['catch'](function(e){
	      console.log(e);
	    });
	  },
	  findAll: function(cb){
	    var _this;
	    _this = this;
	    firebase.database().ref(this.table).once('value').then(function(snap){
	      var items;
	      items = $.map(snap.val(), function(value, index){
	        value.id = index;
	        return [value];
	      });
	      if (cb) {
	        cb(items);
	      }
	    })['catch'](function(e){
	      console.log(e);
	    });
	  },
	  findByAttr: function(attr, value, cb){
	    var _this;
	    _this = this;
	  },
	  update: function(id, attrs, cb){
	    var _this, _attrs, i$;
	    _this = this;
	    _attrs = {};
	    for (i$ in attrs) {
	      (fn$.call(this, i$, attrs[i$]));
	    }
	    firebase.database().ref(this.table + '/' + id).update(_attrs).then(function(snap){
	      attrs.id = id;
	      if (cb) {
	        cb(attrs);
	      }
	    })['catch'](function(e){
	      console.log(e);
	    });
	    function fn$(i, el){
	      if (i !== 'id') {
	        _attrs[i] = el;
	      }
	    }
	  },
	  destroy: function(id, cb){
	    var _this;
	    _this = this;
	    firebase.database().ref(this.table + '/' + id).remove().then(function(snap){
	      if (cb) {
	        cb(id);
	      }
	    })['catch'](function(e){
	      console.log(e);
	    });
	  },
	  importTable: function(table, list, cb){
	    var _this, o, i$, len$;
	    _this = this;
	    o = {};
	    for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, list[i$]));
	    }
	    firebase.database().ref(this.table).update(o).then(function(){
	      if (cb) {
	        cb();
	      }
	    })['catch'](function(e){
	      console.log(e);
	    });
	    function fn$(i, el){
	      var i$;
	      o[el.id] = {};
	      for (i$ in el) {
	        (fn$.call(this, i$, el[i$]));
	      }
	      function fn$(j, el_j){
	        if (j !== 'id') {
	          o[el.id][j] = el_j;
	        }
	      }
	    }
	  }
	};
	module.exports = Store;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\store\cloud\firebase-3\store.ls.map


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-codepen\"></i>&nbspRCX<small>0.70.0</small></h1><ol class=\"breadcrumb\"><li><i class=\"fa fa-database\"></i>&nbsp&nbsp<span id=\"header__data\">Static</span></li><li><i class=\"fa fa-table\"></i>&nbsp&nbsp<span id=\"header__id\"></span></li></ol></section><section class=\"content\"><div style=\"margin-bottom: 12px\" class=\"row\"><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__run__auto\" type=\"checkbox\" class=\"content__icheck\"/>&nbsp&nbspAutorun</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__save\" class=\"btn btn-default\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__save__auto\" type=\"checkbox\" class=\"content__icheck\"/>&nbsp&nbspAutosave</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__load\" class=\"btn btn-btn\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__load__auto\" type=\"checkbox\" class=\"content__icheck\"/>&nbsp&nbspAutoload</div><div id=\"content__layout__holder\" class=\"col-xs-12 col-sm-3 col-md-6\"><select id=\"content__layout__select\"></select></div></div><div id=\"content__layout\" class=\"row\"><div style=\"padding-right: 7px\" class=\"col-md-6\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__input__html\" data-toggle=\"tab\"><i class=\"fa fa-html5\"></i>&nbsp&nbsp HTML</a></li><li><a href=\"#tab__input__css\" data-toggle=\"tab\"><i class=\"fa fa-css3\"></i>&nbsp&nbsp CSS</a></li><li><a href=\"#tab__input__js\" data-toggle=\"tab\"><i class=\"fa fa-jsfiddle\"></i>&nbsp&nbsp JS</a></li></ul><div class=\"tab-content\"><div id=\"tab__input__html\" class=\"tab-pane fade in active\"><div class=\"content__input__top\"><div class=\"content__input__top__create\"><button id=\"content__input__html__file__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__input__html__file__create__modal\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></div><div class=\"content__input__top__file\"><select id=\"content__input__html__file\"></select></div><div class=\"content__input__top__ext\"><select id=\"content__input__html__ext\"></select></div><div class=\"content__input__top__destroy\"><button id=\"content__input__html__file__destroy\" type=\"button\" class=\"btn btn-btn pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__html__editor\"></textarea></div></div><br/><div class=\"content__input__bottom\"><div class=\"content__input__bottom__import-export\"><button type=\"button\" id=\"content__input__html__export\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__html__import\"/></span></div><div class=\"content__input__bottom__format\"><select id=\"content__input__html__format\"></select></div><div class=\"content__input__bottom__lint\">&nbsp&nbsp&nbsp<input type=\"checkbox\" id=\"content__input__html__lint\" class=\"content__icheck\"/>&nbsp&nbspLint</div><div class=\"content__input__bottom__mode\"><select id=\"content__input__html__mode\"></select></div></div><div class=\"row\"><div id=\"content__input__html__file__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"htmlLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__input__html__file__create__text\" class=\"col-sm-2 control-label\">File</label><div class=\"col-sm-8\"><input type=\"text\" id=\"content__input__html__file__create__text\" class=\"form-control\"/></div><div class=\"col-sm-2\"><input type=\"text\" value=\"html\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"form-group\"><label class=\"col-sm-offset-2 col-sm-10\"><button type=\"button\" id=\"content__input__html__file__create__button\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></label></div></form></div></div></div></div></div></div><div id=\"tab__input__css\" class=\"tab-pane fade in\"><div class=\"content__input__top\"><div class=\"content__input__top__create\"><button id=\"content__input__css__file__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__input__css__file__create__modal\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></div><div class=\"content__input__top__file\"><select id=\"content__input__css__file\"></select></div><div class=\"content__input__top__ext\"><select id=\"content__input__css__ext\"></select></div><div class=\"content__input__top__destroy\"><button id=\"content__input__css__file__destroy\" type=\"button\" class=\"btn btn-btn pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__css__editor\"></textarea></div></div><br/><div class=\"content__input__bottom\"><div class=\"content__input__bottom__import-export\"><button type=\"button\" id=\"content__input__css__export\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__css__import\"/></span></div><div class=\"content__input__bottom__format\"><select id=\"content__input__css__format\"></select></div><div class=\"content__input__bottom__lint\">&nbsp&nbsp&nbsp<input type=\"checkbox\" id=\"content__input__css__lint\" class=\"content__icheck\"/>&nbsp&nbspLint</div><div class=\"content__input__bottom__mode\"><select id=\"content__input__css__mode\"></select></div></div><div class=\"row\"><div id=\"content__input__css__file__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"cssLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__input__css__file__create__text\" class=\"col-sm-2 control-label\">File</label><div class=\"col-sm-8\"><input type=\"text\" id=\"content__input__css__file__create__text\" class=\"form-control\"/></div><div class=\"col-sm-2\"><input type=\"text\" value=\"css\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"form-group\"><label class=\"col-sm-offset-2 col-sm-10\"><button type=\"button\" id=\"content__input__css__file__create__button\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></label></div></form></div></div></div></div></div></div><div id=\"tab__input__js\" class=\"tab-pane fade in\"><div class=\"content__input__top\"><div class=\"content__input__top__create\"><button id=\"content__input__js__file__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__input__js__file__create__modal\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></div><div class=\"content__input__top__file\"><select id=\"content__input__js__file\"></select></div><div class=\"content__input__top__ext\"><select id=\"content__input__js__ext\"></select></div><div class=\"content__input__top__destroy\"><button id=\"content__input__js__file__destroy\" type=\"button\" class=\"btn btn-btn pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__js__editor\"></textarea></div></div><br/><div class=\"content__input__bottom\"><div class=\"content__input__bottom__import-export\"><button type=\"button\" id=\"content__input__js__export\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__js__import\"/></span></div><div class=\"content__input__bottom__format\"><select id=\"content__input__js__format\"></select></div><div class=\"content__input__bottom__lint\">&nbsp&nbsp&nbsp<input type=\"checkbox\" id=\"content__input__js__lint\" class=\"content__icheck\"/>&nbsp&nbspLint</div><div class=\"content__input__bottom__mode\"><select id=\"content__input__js__mode\"></select></div></div><div class=\"row\"><div id=\"content__input__js__file__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"jsLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__input__js__file__create__text\" class=\"col-sm-2 control-label\">File</label><div class=\"col-sm-8\"><input type=\"text\" id=\"content__input__js__file__create__text\" class=\"form-control\"/></div><div class=\"col-sm-2\"><input type=\"text\" value=\"js\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"form-group\"><label class=\"col-sm-offset-2 col-sm-10\"><button type=\"button\" id=\"content__input__js__file__create__button\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></label></div></form></div></div></div></div></div></div></div></div></div><div style=\"padding-left: 7px\" class=\"col-md-6\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__admin\" data-toggle=\"tab\"><i class=\"fa fa-database\"></i>&nbsp&nbsp Data</a></li><li><a href=\"#tab__output\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li><li><a href=\"#tab__option\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i>&nbsp&nbsp Options</a></li></ul><div class=\"tab-content\"><div id=\"tab__admin\" class=\"tab-pane fade in active\"><div class=\"content__admin__top\"><div class=\"content__admin__top__left\"><button id=\"content__admin__select__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__admin__select__create__modal\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>&nbsp&nbsp<button id=\"content__admin__select__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"content__admin__top__mid\"><select id=\"content__admin__select\"></select></div><div class=\"content__admin__top__right__aux\"><div class=\"content__admin__top__right\"><button id=\"content__admin__select__edit\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__admin__select__edit__modal\" class=\"btn btn-default\"><i class=\"fa fa-edit\"></i></button>&nbsp&nbsp<button id=\"content__admin__select__destroy\" type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button></div></div></div><div id=\"content__admin\" style=\"height: 606px;\" class=\"row table-responsive\"></div><div class=\"content__admin__bottom\"><div class=\"content__admin__bottom__import-export\"><button id=\"content__admin__export\" type=\"button\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__admin__import\" type=\"file\"/></span></div><div class=\"content__admin__bottom__format\"><select id=\"content__admin__format\"></select></div><div class=\"content__admin__bottom__space\"></div><div class=\"content__admin__bottom__view\"><select id=\"content__admin__view\"></select></div></div><div class=\"row\"><div id=\"content__admin__select__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"123Label\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__admin__select__create__text\" class=\"col-sm-2 control-label\">Data</label><div class=\"col-sm-10\"><input type=\"text\" id=\"content__admin__select__create__text\" class=\"form-control\"/></div></div><div class=\"form-group\"><label for=\"content__admin__select__create__button\" class=\"col-sm-2 control-label\">Add</label><div class=\"col-sm-10\"><button type=\"button\" id=\"content__admin__select__create__button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Template</label><div class=\"col-sm-10\"><select id=\"content__admin__sample\"></select></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Store</label><div class=\"col-sm-10\"><select id=\"content__admin__src\"></select></div></div></form></div></div></div></div></div><div class=\"row\"><div id=\"content__admin__select__edit__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"456Label\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"content__admin__top__select__edit\"><div class=\"content__admin__top__select__edit__left\"><label>Data</label></div><div class=\"content__admin__top__select__edit__mid\"><input type=\"text\" id=\"content__admin__select__edit__text\" class=\"form-control\"/></div><div class=\"content__admin__top__select__edit__right\"><button type=\"button\" id=\"content__admin__select__edit__button\" class=\"btn btn-default\"><i class=\"fa fa-save\"></i></button></div></div><div class=\"content__admin__top__select__clone\"><div class=\"content__admin__top__select__clone__left\"><label>Clone</label></div><div class=\"content__admin__top__select__clone__mid\"><button type=\"button\" id=\"content__admin__select__clone__button\" style=\"width: 42.5px;\" class=\"btn btn-success\"><i class=\"fa fa-code-fork\"></i></button></div><div class=\"content__admin__top__select__clone__right\"><input type=\"text\" id=\"content__admin__select__clone__text\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"content__admin__top__select__replace\"><div class=\"content__admin__top__select__replace__left\"><label>Replace</label></div><div class=\"content__admin__top__select__replace__mid\"><button type=\"button\" id=\"content__admin__select__replace__button\" class=\"btn btn-warning\"><i class=\"fa fa-paste\"></i></button></div><div class=\"content__admin__top__select__replace__right\"><input type=\"text\" id=\"content__admin__select__replace__text\" disabled=\"disabled\" class=\"form-control\"/></div></div></form></div></div></div></div></div></div><div id=\"tab__output\" class=\"tab-pane fade in\"><div class=\"content__output__top\"><div id=\"content__output__index__button__holder\" class=\"content__output__top__urlhash-button\"><button id=\"content__output__index__urlhash__button\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-hashtag\"></i></button></div><div id=\"content__output__index__select__holder\" class=\"content__output__top__urlhash\"><select id=\"content__output__index__urlhash\"></select></div><div class=\"content__output__top__ext\"><select id=\"content__output__index__ext\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__output__index__holder\"><iframe id=\"content__output__index__frame\"></iframe></div></div></div><br/><div class=\"content__output__bottom\"><div class=\"content__output__bottom__import-export\"><button id=\"content__output__index__export\" type=\"button\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__output__index__import\" type=\"file\"/></span></div><div class=\"content__output__bottom__result\"><select id=\"content__output__index__result\"></select></div><div class=\"content__output__bottom__lint\"></div><div class=\"content__output__bottom__mode\"><select id=\"content__output__index__mode\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"></div></div></div><div id=\"tab__option\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-12\"><button id=\"content__option__save\" type=\"button\" disabled=\"disabled\" class=\"btn btn-danger\"><i class=\"fa fa-refresh\"></i></button></div></div><div style=\"height: 649px;\" class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__option__store\" data-toggle=\"tab\">Store</a></li><li class=\"undefined\"><a href=\"#tab__option__run\" data-toggle=\"tab\">Run</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__option__store\" class=\"tab-pane fade in active\"><div style=\"height: 607px;\" class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th> </th><th style=\"min-width: 250px;\">Store</th><th style=\"min-width: 400px;\">DB / URL</th><th style=\"min-width: 200px;\">Table</th><th style=\"min-width: 400px;\">Others</th></tr><tr><td>Data</td><td><select id=\"content__option__store__data\"></select></td><td><input id=\"content__option__store__data__db_url\" value=\"\" class=\"form-control\"/></td><td><input id=\"content__option__store__data__table\" value=\"\" class=\"form-control\"/></td><td><textarea id=\"content__option__store__data__others\" value=\"\" rows=\"7\" class=\"form-control\"></textarea></td></tr></tbody></table></div></div><div id=\"tab__option__run\" class=\"tab-pane fade in\"><div style=\"height: 607px\" class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th style=\"min-width: 900px;\">Run Mode</th></tr><tr><td><input id=\"content__option__run__mode__front\" type=\"radio\" name=\"run__mode\" checked=\"checked\" value=\"front\" class=\"content__icheck\"/></td><td>Always run the front file in the HTML tab</td></tr><tr><td><input id=\"content__option__run__mode__index\" type=\"radio\" name=\"run__mode\" value=\"index\" class=\"content__icheck\"/></td><td>Always run the 'index' file in the HTML tab</td></tr></tbody></table><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th>Vendor</th><th>Extension</th><th style=\"min-width: 600px;\">URL</th></tr><tr><td><input id=\"content__option__run__md\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Marked</td><td id=\"content__option__run__md__ext\">md</td><td><input id=\"content__option__run__md__src\" value=\"../vendors/markdown/marked/0.3.5/marked.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__jade\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Jade</td><td id=\"content__option__run__jade__ext\">jade</td><td><input id=\"content__option__run__jade__src\" value=\"../vendors/template/jade/1.11.0/jade.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__less\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Less</td><td id=\"content__option__run__less__ext\">less</td><td><input id=\"content__option__run__less__src\" value=\"../vendors/preprocessor/less/2.7.1/less.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__sass\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Sass</td><td id=\"content__option__run__sass__ext\">sass</td><td><input id=\"content__option__run__sass__src\" value=\"../vendors/preprocessor/sass/0.0.0-2015-03-22/sass.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__styl\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Stylus</td><td id=\"content__option__run__styl__ext\">styl</td><td><input id=\"content__option__run__styl__src\" value=\"../vendors/preprocessor/stylus/0.54.5/stylus.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__babel\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Babel</td><td id=\"content__option__run__babel__ext\">babel.js</td><td><input id=\"content__option__run__babel__src\" value=\"../vendors/transpiler/babel-standalone/6.18.2/babel.window.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__ts\" type=\"checkbox\" class=\"content__icheck\"/></td><td>TypeScript</td><td id=\"content__option__run__ts__ext\">ts</td><td><input id=\"content__option__run__ts__src\" value=\"../vendors/transpiler/typescript/1.8.0/typescript.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__cs\" type=\"checkbox\" class=\"content__icheck\"/></td><td>CoffeeScript</td><td id=\"content__option__run__cs__ext\">cs</td><td><input id=\"content__option__run__cs__src\" value=\"../vendors/transpiler/coffeescript/1.10.0/coffee-script.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__ls\" type=\"checkbox\" class=\"content__icheck\"/></td><td>LiveScript</td><td id=\"content__option__run__ls__ext\">ls</td><td><input id=\"content__option__run__ls__src\" value=\"../vendors/transpiler/livescript/1.4.0/livescript-min.js\" class=\"form-control\"/></td></tr></tbody></table></div></div></div></div></div></div></div></div></div></div><br><br><br><br><br><br><br></section>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-codepen\"></i>&nbspRCX<small>0.70.0</small></h1><ol class=\"breadcrumb\"><li><i class=\"fa fa-database\"></i>&nbsp&nbsp<span id=\"header__data\">Static</span></li><li><i class=\"fa fa-table\"></i>&nbsp&nbsp<span id=\"header__id\"></span></li></ol></section><section class=\"content\"><div style=\"margin-bottom: 12px\" class=\"row\"><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__run__auto\" type=\"checkbox\" class=\"content__icheck\"/>&nbsp&nbspAutorun</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__save\" class=\"btn btn-default\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__save__auto\" type=\"checkbox\" class=\"content__icheck\"/>&nbsp&nbspAutosave</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__load\" class=\"btn btn-btn\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__load__auto\" type=\"checkbox\" class=\"content__icheck\"/>&nbsp&nbspAutoload</div><div id=\"content__layout__holder\" class=\"col-xs-12 col-sm-3 col-md-6\"><select id=\"content__layout__select\"></select></div></div><div id=\"content__layout\" class=\"row\"><div class=\"col-sm-12\"><div style=\"padding-left:0;padding-right:0\" class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__input\" data-toggle=\"tab\">Input</a></li><li><a href=\"#tab__others\" data-toggle=\"tab\">Output + Others</a></li></ul></div><div style=\"padding-left:0;padding-right:0\" class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__input\" class=\"tab-pane active\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__input__html\" data-toggle=\"tab\"><i class=\"fa fa-html5\"></i>&nbsp&nbsp HTML</a></li><li><a href=\"#tab__input__css\" data-toggle=\"tab\"><i class=\"fa fa-css3\"></i>&nbsp&nbsp CSS</a></li><li><a href=\"#tab__input__js\" data-toggle=\"tab\"><i class=\"fa fa-jsfiddle\"></i>&nbsp&nbsp JS</a></li></ul><div class=\"tab-content\"><div id=\"tab__input__html\" class=\"tab-pane fade in active\"><div class=\"content__input__top\"><div class=\"content__input__top__create\"><button id=\"content__input__html__file__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__input__html__file__create__modal\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></div><div class=\"content__input__top__file\"><select id=\"content__input__html__file\"></select></div><div class=\"content__input__top__ext\"><select id=\"content__input__html__ext\"></select></div><div class=\"content__input__top__destroy\"><button id=\"content__input__html__file__destroy\" type=\"button\" class=\"btn btn-btn pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__html__editor\"></textarea></div></div><br/><div class=\"content__input__bottom\"><div class=\"content__input__bottom__import-export\"><button type=\"button\" id=\"content__input__html__export\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__html__import\"/></span></div><div class=\"content__input__bottom__format\"><select id=\"content__input__html__format\"></select></div><div class=\"content__input__bottom__lint\">&nbsp&nbsp&nbsp<input type=\"checkbox\" id=\"content__input__html__lint\" class=\"content__icheck\"/>&nbsp&nbspLint</div><div class=\"content__input__bottom__mode\"><select id=\"content__input__html__mode\"></select></div></div><div class=\"row\"><div id=\"content__input__html__file__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"htmlLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__input__html__file__create__text\" class=\"col-sm-2 control-label\">File</label><div class=\"col-sm-8\"><input type=\"text\" id=\"content__input__html__file__create__text\" class=\"form-control\"/></div><div class=\"col-sm-2\"><input type=\"text\" value=\"html\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"form-group\"><label class=\"col-sm-offset-2 col-sm-10\"><button type=\"button\" id=\"content__input__html__file__create__button\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></label></div></form></div></div></div></div></div></div><div id=\"tab__input__css\" class=\"tab-pane fade in\"><div class=\"content__input__top\"><div class=\"content__input__top__create\"><button id=\"content__input__css__file__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__input__css__file__create__modal\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></div><div class=\"content__input__top__file\"><select id=\"content__input__css__file\"></select></div><div class=\"content__input__top__ext\"><select id=\"content__input__css__ext\"></select></div><div class=\"content__input__top__destroy\"><button id=\"content__input__css__file__destroy\" type=\"button\" class=\"btn btn-btn pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__css__editor\"></textarea></div></div><br/><div class=\"content__input__bottom\"><div class=\"content__input__bottom__import-export\"><button type=\"button\" id=\"content__input__css__export\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__css__import\"/></span></div><div class=\"content__input__bottom__format\"><select id=\"content__input__css__format\"></select></div><div class=\"content__input__bottom__lint\">&nbsp&nbsp&nbsp<input type=\"checkbox\" id=\"content__input__css__lint\" class=\"content__icheck\"/>&nbsp&nbspLint</div><div class=\"content__input__bottom__mode\"><select id=\"content__input__css__mode\"></select></div></div><div class=\"row\"><div id=\"content__input__css__file__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"cssLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__input__css__file__create__text\" class=\"col-sm-2 control-label\">File</label><div class=\"col-sm-8\"><input type=\"text\" id=\"content__input__css__file__create__text\" class=\"form-control\"/></div><div class=\"col-sm-2\"><input type=\"text\" value=\"css\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"form-group\"><label class=\"col-sm-offset-2 col-sm-10\"><button type=\"button\" id=\"content__input__css__file__create__button\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></label></div></form></div></div></div></div></div></div><div id=\"tab__input__js\" class=\"tab-pane fade in\"><div class=\"content__input__top\"><div class=\"content__input__top__create\"><button id=\"content__input__js__file__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__input__js__file__create__modal\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></div><div class=\"content__input__top__file\"><select id=\"content__input__js__file\"></select></div><div class=\"content__input__top__ext\"><select id=\"content__input__js__ext\"></select></div><div class=\"content__input__top__destroy\"><button id=\"content__input__js__file__destroy\" type=\"button\" class=\"btn btn-btn pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__js__editor\"></textarea></div></div><br/><div class=\"content__input__bottom\"><div class=\"content__input__bottom__import-export\"><button type=\"button\" id=\"content__input__js__export\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__js__import\"/></span></div><div class=\"content__input__bottom__format\"><select id=\"content__input__js__format\"></select></div><div class=\"content__input__bottom__lint\">&nbsp&nbsp&nbsp<input type=\"checkbox\" id=\"content__input__js__lint\" class=\"content__icheck\"/>&nbsp&nbspLint</div><div class=\"content__input__bottom__mode\"><select id=\"content__input__js__mode\"></select></div></div><div class=\"row\"><div id=\"content__input__js__file__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"jsLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__input__js__file__create__text\" class=\"col-sm-2 control-label\">File</label><div class=\"col-sm-8\"><input type=\"text\" id=\"content__input__js__file__create__text\" class=\"form-control\"/></div><div class=\"col-sm-2\"><input type=\"text\" value=\"js\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"form-group\"><label class=\"col-sm-offset-2 col-sm-10\"><button type=\"button\" id=\"content__input__js__file__create__button\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></label></div></form></div></div></div></div></div></div></div></div></div><div id=\"tab__others\" class=\"tab-pane\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__admin\" data-toggle=\"tab\"><i class=\"fa fa-database\"></i>&nbsp&nbsp Data</a></li><li><a href=\"#tab__output\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li><li><a href=\"#tab__option\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i>&nbsp&nbsp Options</a></li></ul><div class=\"tab-content\"><div id=\"tab__admin\" class=\"tab-pane fade in active\"><div class=\"content__admin__top\"><div class=\"content__admin__top__left\"><button id=\"content__admin__select__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__admin__select__create__modal\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>&nbsp&nbsp<button id=\"content__admin__select__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"content__admin__top__mid\"><select id=\"content__admin__select\"></select></div><div class=\"content__admin__top__right__aux\"><div class=\"content__admin__top__right\"><button id=\"content__admin__select__edit\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__admin__select__edit__modal\" class=\"btn btn-default\"><i class=\"fa fa-edit\"></i></button>&nbsp&nbsp<button id=\"content__admin__select__destroy\" type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button></div></div></div><div id=\"content__admin\" style=\"height: 606px;\" class=\"row table-responsive\"></div><div class=\"content__admin__bottom\"><div class=\"content__admin__bottom__import-export\"><button id=\"content__admin__export\" type=\"button\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__admin__import\" type=\"file\"/></span></div><div class=\"content__admin__bottom__format\"><select id=\"content__admin__format\"></select></div><div class=\"content__admin__bottom__space\"></div><div class=\"content__admin__bottom__view\"><select id=\"content__admin__view\"></select></div></div><div class=\"row\"><div id=\"content__admin__select__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"123Label\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__admin__select__create__text\" class=\"col-sm-2 control-label\">Data</label><div class=\"col-sm-10\"><input type=\"text\" id=\"content__admin__select__create__text\" class=\"form-control\"/></div></div><div class=\"form-group\"><label for=\"content__admin__select__create__button\" class=\"col-sm-2 control-label\">Add</label><div class=\"col-sm-10\"><button type=\"button\" id=\"content__admin__select__create__button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Template</label><div class=\"col-sm-10\"><select id=\"content__admin__sample\"></select></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Store</label><div class=\"col-sm-10\"><select id=\"content__admin__src\"></select></div></div></form></div></div></div></div></div><div class=\"row\"><div id=\"content__admin__select__edit__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"456Label\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"content__admin__top__select__edit\"><div class=\"content__admin__top__select__edit__left\"><label>Data</label></div><div class=\"content__admin__top__select__edit__mid\"><input type=\"text\" id=\"content__admin__select__edit__text\" class=\"form-control\"/></div><div class=\"content__admin__top__select__edit__right\"><button type=\"button\" id=\"content__admin__select__edit__button\" class=\"btn btn-default\"><i class=\"fa fa-save\"></i></button></div></div><div class=\"content__admin__top__select__clone\"><div class=\"content__admin__top__select__clone__left\"><label>Clone</label></div><div class=\"content__admin__top__select__clone__mid\"><button type=\"button\" id=\"content__admin__select__clone__button\" style=\"width: 42.5px;\" class=\"btn btn-success\"><i class=\"fa fa-code-fork\"></i></button></div><div class=\"content__admin__top__select__clone__right\"><input type=\"text\" id=\"content__admin__select__clone__text\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"content__admin__top__select__replace\"><div class=\"content__admin__top__select__replace__left\"><label>Replace</label></div><div class=\"content__admin__top__select__replace__mid\"><button type=\"button\" id=\"content__admin__select__replace__button\" class=\"btn btn-warning\"><i class=\"fa fa-paste\"></i></button></div><div class=\"content__admin__top__select__replace__right\"><input type=\"text\" id=\"content__admin__select__replace__text\" disabled=\"disabled\" class=\"form-control\"/></div></div></form></div></div></div></div></div></div><div id=\"tab__output\" class=\"tab-pane fade in\"><div class=\"content__output__top\"><div id=\"content__output__index__button__holder\" class=\"content__output__top__urlhash-button\"><button id=\"content__output__index__urlhash__button\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-hashtag\"></i></button></div><div id=\"content__output__index__select__holder\" class=\"content__output__top__urlhash\"><select id=\"content__output__index__urlhash\"></select></div><div class=\"content__output__top__ext\"><select id=\"content__output__index__ext\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__output__index__holder\"><iframe id=\"content__output__index__frame\"></iframe></div></div></div><br/><div class=\"content__output__bottom\"><div class=\"content__output__bottom__import-export\"><button id=\"content__output__index__export\" type=\"button\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__output__index__import\" type=\"file\"/></span></div><div class=\"content__output__bottom__result\"><select id=\"content__output__index__result\"></select></div><div class=\"content__output__bottom__lint\"></div><div class=\"content__output__bottom__mode\"><select id=\"content__output__index__mode\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"></div></div></div><div id=\"tab__option\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-12\"><button id=\"content__option__save\" type=\"button\" disabled=\"disabled\" class=\"btn btn-danger\"><i class=\"fa fa-refresh\"></i></button></div></div><div style=\"height: 649px;\" class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__option__store\" data-toggle=\"tab\">Store</a></li><li class=\"undefined\"><a href=\"#tab__option__run\" data-toggle=\"tab\">Run</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__option__store\" class=\"tab-pane fade in active\"><div style=\"height: 607px;\" class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th> </th><th style=\"min-width: 250px;\">Store</th><th style=\"min-width: 400px;\">DB / URL</th><th style=\"min-width: 200px;\">Table</th><th style=\"min-width: 400px;\">Others</th></tr><tr><td>Data</td><td><select id=\"content__option__store__data\"></select></td><td><input id=\"content__option__store__data__db_url\" value=\"\" class=\"form-control\"/></td><td><input id=\"content__option__store__data__table\" value=\"\" class=\"form-control\"/></td><td><textarea id=\"content__option__store__data__others\" value=\"\" rows=\"7\" class=\"form-control\"></textarea></td></tr></tbody></table></div></div><div id=\"tab__option__run\" class=\"tab-pane fade in\"><div style=\"height: 607px\" class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th style=\"min-width: 900px;\">Run Mode</th></tr><tr><td><input id=\"content__option__run__mode__front\" type=\"radio\" name=\"run__mode\" checked=\"checked\" value=\"front\" class=\"content__icheck\"/></td><td>Always run the front file in the HTML tab</td></tr><tr><td><input id=\"content__option__run__mode__index\" type=\"radio\" name=\"run__mode\" value=\"index\" class=\"content__icheck\"/></td><td>Always run the 'index' file in the HTML tab</td></tr></tbody></table><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th>Vendor</th><th>Extension</th><th style=\"min-width: 600px;\">URL</th></tr><tr><td><input id=\"content__option__run__md\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Marked</td><td id=\"content__option__run__md__ext\">md</td><td><input id=\"content__option__run__md__src\" value=\"../vendors/markdown/marked/0.3.5/marked.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__jade\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Jade</td><td id=\"content__option__run__jade__ext\">jade</td><td><input id=\"content__option__run__jade__src\" value=\"../vendors/template/jade/1.11.0/jade.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__less\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Less</td><td id=\"content__option__run__less__ext\">less</td><td><input id=\"content__option__run__less__src\" value=\"../vendors/preprocessor/less/2.7.1/less.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__sass\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Sass</td><td id=\"content__option__run__sass__ext\">sass</td><td><input id=\"content__option__run__sass__src\" value=\"../vendors/preprocessor/sass/0.0.0-2015-03-22/sass.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__styl\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Stylus</td><td id=\"content__option__run__styl__ext\">styl</td><td><input id=\"content__option__run__styl__src\" value=\"../vendors/preprocessor/stylus/0.54.5/stylus.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__babel\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Babel</td><td id=\"content__option__run__babel__ext\">babel.js</td><td><input id=\"content__option__run__babel__src\" value=\"../vendors/transpiler/babel-standalone/6.18.2/babel.window.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__ts\" type=\"checkbox\" class=\"content__icheck\"/></td><td>TypeScript</td><td id=\"content__option__run__ts__ext\">ts</td><td><input id=\"content__option__run__ts__src\" value=\"../vendors/transpiler/typescript/1.8.0/typescript.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__cs\" type=\"checkbox\" class=\"content__icheck\"/></td><td>CoffeeScript</td><td id=\"content__option__run__cs__ext\">cs</td><td><input id=\"content__option__run__cs__src\" value=\"../vendors/transpiler/coffeescript/1.10.0/coffee-script.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__ls\" type=\"checkbox\" class=\"content__icheck\"/></td><td>LiveScript</td><td id=\"content__option__run__ls__ext\">ls</td><td><input id=\"content__option__run__ls__src\" value=\"../vendors/transpiler/livescript/1.4.0/livescript-min.js\" class=\"form-control\"/></td></tr></tbody></table></div></div></div></div></div></div></div></div></div></div></div></div></div><br><br><br><br><br><br><br></section>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<section class=\"content-header\"><h1>&nbsp<i class=\"fa fa-codepen\"></i>&nbspRCX<small>0.70.0</small></h1><ol class=\"breadcrumb\"><li><i class=\"fa fa-database\"></i>&nbsp&nbsp<span id=\"header__data\">Static</span></li><li><i class=\"fa fa-table\"></i>&nbsp&nbsp<span id=\"header__id\"></span></li></ol></section><section class=\"content\"><div style=\"margin-bottom: 12px\" class=\"row\"><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__run\" class=\"btn btn-primary\"><i class=\"fa fa-play\"></i></button>&nbsp&nbsp<input id=\"content__run__auto\" type=\"checkbox\" class=\"content__icheck\"/>&nbsp&nbspAutorun</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__save\" class=\"btn btn-default\"><i class=\"fa fa-save\"></i></button>&nbsp&nbsp<input id=\"content__save__auto\" type=\"checkbox\" class=\"content__icheck\"/>&nbsp&nbspAutosave</div><div class=\"col-xs-4 col-sm-3 col-md-2\"><button id=\"content__load\" class=\"btn btn-btn\"><i class=\"fa fa-repeat\"></i></button>&nbsp&nbsp<input id=\"content__load__auto\" type=\"checkbox\" class=\"content__icheck\"/>&nbsp&nbspAutoload</div><div id=\"content__layout__holder\" class=\"col-xs-12 col-sm-3 col-md-6\"><select id=\"content__layout__select\"></select></div></div><div id=\"content__layout\" class=\"row\"><div class=\"col-md-12\"><div class=\"nav-tabs-custom\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#tab__input__html\" data-toggle=\"tab\"><i class=\"fa fa-html5\"></i>&nbsp&nbsp HTML</a></li><li><a href=\"#tab__input__css\" data-toggle=\"tab\"><i class=\"fa fa-css3\"></i>&nbsp&nbsp CSS</a></li><li><a href=\"#tab__input__js\" data-toggle=\"tab\"><i class=\"fa fa-jsfiddle\"></i>&nbsp&nbsp JS</a></li><li><a href=\"#tab__admin\" data-toggle=\"tab\"><i class=\"fa fa-database\"></i>&nbsp&nbsp Data</a></li><li><a href=\"#tab__output\" data-toggle=\"tab\"><i class=\"fa fa-desktop\"></i>&nbsp&nbsp Output</a></li><li><a href=\"#tab__option\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i>&nbsp&nbsp Options</a></li></ul><div class=\"tab-content\"><div id=\"tab__input__html\" class=\"tab-pane fade in active\"><div class=\"content__input__top\"><div class=\"content__input__top__create\"><button id=\"content__input__html__file__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__input__html__file__create__modal\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></div><div class=\"content__input__top__file\"><select id=\"content__input__html__file\"></select></div><div class=\"content__input__top__ext\"><select id=\"content__input__html__ext\"></select></div><div class=\"content__input__top__destroy\"><button id=\"content__input__html__file__destroy\" type=\"button\" class=\"btn btn-btn pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__html__editor\"></textarea></div></div><br/><div class=\"content__input__bottom\"><div class=\"content__input__bottom__import-export\"><button type=\"button\" id=\"content__input__html__export\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__html__import\"/></span></div><div class=\"content__input__bottom__format\"><select id=\"content__input__html__format\"></select></div><div class=\"content__input__bottom__lint\">&nbsp&nbsp&nbsp<input type=\"checkbox\" id=\"content__input__html__lint\" class=\"content__icheck\"/>&nbsp&nbspLint</div><div class=\"content__input__bottom__mode\"><select id=\"content__input__html__mode\"></select></div></div><div class=\"row\"><div id=\"content__input__html__file__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"htmlLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__input__html__file__create__text\" class=\"col-sm-2 control-label\">File</label><div class=\"col-sm-8\"><input type=\"text\" id=\"content__input__html__file__create__text\" class=\"form-control\"/></div><div class=\"col-sm-2\"><input type=\"text\" value=\"html\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"form-group\"><label class=\"col-sm-offset-2 col-sm-10\"><button type=\"button\" id=\"content__input__html__file__create__button\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></label></div></form></div></div></div></div></div></div><div id=\"tab__input__css\" class=\"tab-pane fade in\"><div class=\"content__input__top\"><div class=\"content__input__top__create\"><button id=\"content__input__css__file__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__input__css__file__create__modal\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></div><div class=\"content__input__top__file\"><select id=\"content__input__css__file\"></select></div><div class=\"content__input__top__ext\"><select id=\"content__input__css__ext\"></select></div><div class=\"content__input__top__destroy\"><button id=\"content__input__css__file__destroy\" type=\"button\" class=\"btn btn-btn pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__css__editor\"></textarea></div></div><br/><div class=\"content__input__bottom\"><div class=\"content__input__bottom__import-export\"><button type=\"button\" id=\"content__input__css__export\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__css__import\"/></span></div><div class=\"content__input__bottom__format\"><select id=\"content__input__css__format\"></select></div><div class=\"content__input__bottom__lint\">&nbsp&nbsp&nbsp<input type=\"checkbox\" id=\"content__input__css__lint\" class=\"content__icheck\"/>&nbsp&nbspLint</div><div class=\"content__input__bottom__mode\"><select id=\"content__input__css__mode\"></select></div></div><div class=\"row\"><div id=\"content__input__css__file__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"cssLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__input__css__file__create__text\" class=\"col-sm-2 control-label\">File</label><div class=\"col-sm-8\"><input type=\"text\" id=\"content__input__css__file__create__text\" class=\"form-control\"/></div><div class=\"col-sm-2\"><input type=\"text\" value=\"css\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"form-group\"><label class=\"col-sm-offset-2 col-sm-10\"><button type=\"button\" id=\"content__input__css__file__create__button\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></label></div></form></div></div></div></div></div></div><div id=\"tab__input__js\" class=\"tab-pane fade in\"><div class=\"content__input__top\"><div class=\"content__input__top__create\"><button id=\"content__input__js__file__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__input__js__file__create__modal\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></div><div class=\"content__input__top__file\"><select id=\"content__input__js__file\"></select></div><div class=\"content__input__top__ext\"><select id=\"content__input__js__ext\"></select></div><div class=\"content__input__top__destroy\"><button id=\"content__input__js__file__destroy\" type=\"button\" class=\"btn btn-btn pull-right\"><i class=\"fa fa-trash\"></i></button></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><textarea id=\"content__input__js__editor\"></textarea></div></div><br/><div class=\"content__input__bottom\"><div class=\"content__input__bottom__import-export\"><button type=\"button\" id=\"content__input__js__export\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input type=\"file\" id=\"content__input__js__import\"/></span></div><div class=\"content__input__bottom__format\"><select id=\"content__input__js__format\"></select></div><div class=\"content__input__bottom__lint\">&nbsp&nbsp&nbsp<input type=\"checkbox\" id=\"content__input__js__lint\" class=\"content__icheck\"/>&nbsp&nbspLint</div><div class=\"content__input__bottom__mode\"><select id=\"content__input__js__mode\"></select></div></div><div class=\"row\"><div id=\"content__input__js__file__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"jsLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__input__js__file__create__text\" class=\"col-sm-2 control-label\">File</label><div class=\"col-sm-8\"><input type=\"text\" id=\"content__input__js__file__create__text\" class=\"form-control\"/></div><div class=\"col-sm-2\"><input type=\"text\" value=\"js\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"form-group\"><label class=\"col-sm-offset-2 col-sm-10\"><button type=\"button\" id=\"content__input__js__file__create__button\" class=\"btn btn-default\"><i class=\"fa fa-plus\"></i></button></label></div></form></div></div></div></div></div></div><div id=\"tab__admin\" class=\"tab-pane fade in\"><div class=\"content__admin__top\"><div class=\"content__admin__top__left\"><button id=\"content__admin__select__create\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__admin__select__create__modal\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>&nbsp&nbsp<button id=\"content__admin__select__refresh\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i></button></div><div class=\"content__admin__top__mid\"><select id=\"content__admin__select\"></select></div><div class=\"content__admin__top__right__aux\"><div class=\"content__admin__top__right\"><button id=\"content__admin__select__edit\" type=\"button\" data-toggle=\"modal\" data-target=\"#content__admin__select__edit__modal\" class=\"btn btn-default\"><i class=\"fa fa-edit\"></i></button>&nbsp&nbsp<button id=\"content__admin__select__destroy\" type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button></div></div></div><div id=\"content__admin\" style=\"height: 606px;\" class=\"row table-responsive\"></div><div class=\"content__admin__bottom\"><div class=\"content__admin__bottom__import-export\"><button id=\"content__admin__export\" type=\"button\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__admin__import\" type=\"file\"/></span></div><div class=\"content__admin__bottom__format\"><select id=\"content__admin__format\"></select></div><div class=\"content__admin__bottom__space\"></div><div class=\"content__admin__bottom__view\"><select id=\"content__admin__view\"></select></div></div><div class=\"row\"><div id=\"content__admin__select__create__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"123Label\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"content__admin__select__create__text\" class=\"col-sm-2 control-label\">Data</label><div class=\"col-sm-10\"><input type=\"text\" id=\"content__admin__select__create__text\" class=\"form-control\"/></div></div><div class=\"form-group\"><label for=\"content__admin__select__create__button\" class=\"col-sm-2 control-label\">Add</label><div class=\"col-sm-10\"><button type=\"button\" id=\"content__admin__select__create__button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Template</label><div class=\"col-sm-10\"><select id=\"content__admin__sample\"></select></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Store</label><div class=\"col-sm-10\"><select id=\"content__admin__src\"></select></div></div></form></div></div></div></div></div><div class=\"row\"><div id=\"content__admin__select__edit__modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"456Label\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><form class=\"form-horizontal\"><div class=\"content__admin__top__select__edit\"><div class=\"content__admin__top__select__edit__left\"><label>Data</label></div><div class=\"content__admin__top__select__edit__mid\"><input type=\"text\" id=\"content__admin__select__edit__text\" class=\"form-control\"/></div><div class=\"content__admin__top__select__edit__right\"><button type=\"button\" id=\"content__admin__select__edit__button\" class=\"btn btn-default\"><i class=\"fa fa-save\"></i></button></div></div><div class=\"content__admin__top__select__clone\"><div class=\"content__admin__top__select__clone__left\"><label>Clone</label></div><div class=\"content__admin__top__select__clone__mid\"><button type=\"button\" id=\"content__admin__select__clone__button\" style=\"width: 42.5px;\" class=\"btn btn-success\"><i class=\"fa fa-code-fork\"></i></button></div><div class=\"content__admin__top__select__clone__right\"><input type=\"text\" id=\"content__admin__select__clone__text\" disabled=\"disabled\" class=\"form-control\"/></div></div><div class=\"content__admin__top__select__replace\"><div class=\"content__admin__top__select__replace__left\"><label>Replace</label></div><div class=\"content__admin__top__select__replace__mid\"><button type=\"button\" id=\"content__admin__select__replace__button\" class=\"btn btn-warning\"><i class=\"fa fa-paste\"></i></button></div><div class=\"content__admin__top__select__replace__right\"><input type=\"text\" id=\"content__admin__select__replace__text\" disabled=\"disabled\" class=\"form-control\"/></div></div></form></div></div></div></div></div></div><div id=\"tab__output\" class=\"tab-pane fade in\"><div class=\"content__output__top\"><div id=\"content__output__index__button__holder\" class=\"content__output__top__urlhash-button\"><button id=\"content__output__index__urlhash__button\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-hashtag\"></i></button></div><div id=\"content__output__index__select__holder\" class=\"content__output__top__urlhash\"><select id=\"content__output__index__urlhash\"></select></div><div class=\"content__output__top__ext\"><select id=\"content__output__index__ext\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><div id=\"content__output__index__holder\"><iframe id=\"content__output__index__frame\"></iframe></div></div></div><br/><div class=\"content__output__bottom\"><div class=\"content__output__bottom__import-export\"><button id=\"content__output__index__export\" type=\"button\" class=\"btn btn-btn\"><i class=\"fa fa-download\"></i></button>&nbsp&nbsp<span class=\"btn btn-default btn-file\"><i class=\"fa fa-upload\"></i><input id=\"content__output__index__import\" type=\"file\"/></span></div><div class=\"content__output__bottom__result\"><select id=\"content__output__index__result\"></select></div><div class=\"content__output__bottom__lint\"></div><div class=\"content__output__bottom__mode\"><select id=\"content__output__index__mode\"></select></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"></div></div></div><div id=\"tab__option\" class=\"tab-pane fade in\"><div style=\"padding-bottom: 5px;\" class=\"row\"><div class=\"col-md-12\"><button id=\"content__option__save\" type=\"button\" disabled=\"disabled\" class=\"btn btn-danger\"><i class=\"fa fa-refresh\"></i></button></div></div><div style=\"height: 649px;\" class=\"row\"><div class=\"col-sm-2\"><ul class=\"nav nav-tabs tabs-left\"><li class=\"active\"><a href=\"#tab__option__store\" data-toggle=\"tab\">Store</a></li><li class=\"undefined\"><a href=\"#tab__option__run\" data-toggle=\"tab\">Run</a></li></ul></div><div class=\"col-sm-10\"><div class=\"tab-content\"><div id=\"tab__option__store\" class=\"tab-pane fade in active\"><div style=\"height: 607px;\" class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th> </th><th style=\"min-width: 250px;\">Store</th><th style=\"min-width: 400px;\">DB / URL</th><th style=\"min-width: 200px;\">Table</th><th style=\"min-width: 400px;\">Others</th></tr><tr><td>Data</td><td><select id=\"content__option__store__data\"></select></td><td><input id=\"content__option__store__data__db_url\" value=\"\" class=\"form-control\"/></td><td><input id=\"content__option__store__data__table\" value=\"\" class=\"form-control\"/></td><td><textarea id=\"content__option__store__data__others\" value=\"\" rows=\"7\" class=\"form-control\"></textarea></td></tr></tbody></table></div></div><div id=\"tab__option__run\" class=\"tab-pane fade in\"><div style=\"height: 607px\" class=\"table-responsive\"><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th style=\"min-width: 900px;\">Run Mode</th></tr><tr><td><input id=\"content__option__run__mode__front\" type=\"radio\" name=\"run__mode\" checked=\"checked\" value=\"front\" class=\"content__icheck\"/></td><td>Always run the front file in the HTML tab</td></tr><tr><td><input id=\"content__option__run__mode__index\" type=\"radio\" name=\"run__mode\" value=\"index\" class=\"content__icheck\"/></td><td>Always run the 'index' file in the HTML tab</td></tr></tbody></table><table class=\"table table-bordered\"><tbody><tr><th style=\"width: 10px;\">Status</th><th>Vendor</th><th>Extension</th><th style=\"min-width: 600px;\">URL</th></tr><tr><td><input id=\"content__option__run__md\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Marked</td><td id=\"content__option__run__md__ext\">md</td><td><input id=\"content__option__run__md__src\" value=\"../vendors/markdown/marked/0.3.5/marked.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__jade\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Jade</td><td id=\"content__option__run__jade__ext\">jade</td><td><input id=\"content__option__run__jade__src\" value=\"../vendors/template/jade/1.11.0/jade.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__less\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Less</td><td id=\"content__option__run__less__ext\">less</td><td><input id=\"content__option__run__less__src\" value=\"../vendors/preprocessor/less/2.7.1/less.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__sass\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Sass</td><td id=\"content__option__run__sass__ext\">sass</td><td><input id=\"content__option__run__sass__src\" value=\"../vendors/preprocessor/sass/0.0.0-2015-03-22/sass.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__styl\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Stylus</td><td id=\"content__option__run__styl__ext\">styl</td><td><input id=\"content__option__run__styl__src\" value=\"../vendors/preprocessor/stylus/0.54.5/stylus.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__babel\" type=\"checkbox\" class=\"content__icheck\"/></td><td>Babel</td><td id=\"content__option__run__babel__ext\">babel.js</td><td><input id=\"content__option__run__babel__src\" value=\"../vendors/transpiler/babel-standalone/6.18.2/babel.window.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__ts\" type=\"checkbox\" class=\"content__icheck\"/></td><td>TypeScript</td><td id=\"content__option__run__ts__ext\">ts</td><td><input id=\"content__option__run__ts__src\" value=\"../vendors/transpiler/typescript/1.8.0/typescript.min.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__cs\" type=\"checkbox\" class=\"content__icheck\"/></td><td>CoffeeScript</td><td id=\"content__option__run__cs__ext\">cs</td><td><input id=\"content__option__run__cs__src\" value=\"../vendors/transpiler/coffeescript/1.10.0/coffee-script.js\" class=\"form-control\"/></td></tr><tr><td><input id=\"content__option__run__ls\" type=\"checkbox\" class=\"content__icheck\"/></td><td>LiveScript</td><td id=\"content__option__run__ls__ext\">ls</td><td><input id=\"content__option__run__ls__src\" value=\"../vendors/transpiler/livescript/1.4.0/livescript-min.js\" class=\"form-control\"/></td></tr></tbody></table></div></div></div></div></div></div></div></div></div></div><br><br><br><br><br><br><br></section>"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div style=\"/*padding-top: 10px;*/\" class=\"col-md-12\"><input id=\"content__tree__name\" type=\"text\" placeholder=\"Name\" style=\"width: 100%;\" class=\"form-control\"/></div><div style=\"padding-top: 10px;\" class=\"col-md-12\"><div id=\"content__tree\"></div></div>"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div style=\"padding-top: 5px;\" class=\"col-md-12\"><input id=\"content__list__id\" type=\"text\" placeholder=\"ID\" style=\"width: 100%;\" class=\"form-control\"/></div><div style=\"padding-top: 10px;\" class=\"col-md-12\"><input id=\"content__list__name\" type=\"text\" placeholder=\"Name\" style=\"width: 100%;\" class=\"form-control\"/></div><div style=\"padding-top: 10px;\" class=\"col-md-12\"><input id=\"content__list__date\" type=\"text\" placeholder=\"Date (DD/MM/YYYY)\" style=\"width: 100%;\" class=\"form-control\"/></div><div style=\"padding-top: 10px;\" class=\"col-md-12\"><div id=\"content__list_wrapper\"><table id=\"content__list\"></table></div></div>"

/***/ },
/* 14 */
/***/ function(module, exports) {

	var props;
	props = {
	  layout: {
	    id: 'content__layout__select',
	    options: [
	      {
	        value: 'Layout - Split'
	      }, {
	        value: 'Layout - Split VTab'
	      }, {
	        value: 'Layout - Combined'
	      }
	    ]
	  },
	  options: {
	    store_data: {
	      id: 'content__option__store__data',
	      config: 'store_data',
	      options: [
	        {
	          value: 'Static'
	        }, {
	          value: 'Browser (LocalStorage)'
	        }, {
	          value: 'Browser (IndexedDB)'
	        }, {
	          value: 'Server (AJAX)'
	        }, {
	          value: 'Server (DOM)'
	        }, {
	          value: 'Cloud (Firebase 3)'
	        }
	      ],
	      inputs: ['db_url', 'table', 'others']
	    },
	    run_preprocessor_md: {
	      id: 'content__option__run__md',
	      title: 'Marked'
	    },
	    run_preprocessor_jade: {
	      id: 'content__option__run__jade',
	      title: 'Jade'
	    },
	    run_preprocessor_less: {
	      id: 'content__option__run__less',
	      title: 'Less'
	    },
	    run_preprocessor_sass: {
	      id: 'content__option__run__sass',
	      title: 'Sass'
	    },
	    run_preprocessor_styl: {
	      id: 'content__option__run__styl',
	      title: 'Stylus'
	    },
	    run_transpiler_babeljs: {
	      id: 'content__option__run__babel',
	      title: 'Babel'
	    },
	    run_transpiler_ts: {
	      id: 'content__option__run__ts',
	      title: 'TypeScript'
	    },
	    run_transpiler_cs: {
	      id: 'content__option__run__cs',
	      title: 'CoffeeScript'
	    },
	    run_transpiler_ls: {
	      id: 'content__option__run__ls',
	      title: 'LiveScript'
	    }
	  }
	};
	module.exports = props;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\lib\props\boot.ls.map


/***/ },
/* 15 */
/***/ function(module, exports) {

	var props;
	props = {
	  editors: {
	    inputs: {
	      html: {
	        context: 'inputs',
	        entity: 'html',
	        id: 'content__input__html__editor',
	        type: 'text/html',
	        ext: 'html',
	        onChange: 'inputOnEditorChange'
	      },
	      css: {
	        context: 'inputs',
	        entity: 'css',
	        id: 'content__input__css__editor',
	        type: 'text/css',
	        ext: 'css',
	        onChange: 'inputOnEditorChange'
	      },
	      js: {
	        context: 'inputs',
	        entity: 'js',
	        id: 'content__input__js__editor',
	        type: 'text/javascript',
	        ext: 'js',
	        onChange: 'inputOnEditorChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__editor',
	        type: 'text/html',
	        ext: 'html'
	      }
	    }
	  },
	  files: {
	    inputs: {
	      html: {
	        context: 'inputs',
	        entity: 'html',
	        id: 'content__input__html__file',
	        options: [{
	          value: 'index'
	        }],
	        onChange: 'inputOnFileChange',
	        onCreate: 'inputOnFileCreate',
	        destroyable: 'inputDestroy',
	        creatable: 'inputOnFileCreateModal'
	      },
	      css: {
	        context: 'inputs',
	        entity: 'css',
	        id: 'content__input__css__file',
	        options: [{
	          value: 'index'
	        }],
	        onChange: 'inputOnFileChange',
	        onCreate: 'inputOnFileCreate',
	        destroyable: 'inputDestroy',
	        creatable: 'inputOnFileCreateModal'
	      },
	      js: {
	        context: 'inputs',
	        entity: 'js',
	        id: 'content__input__js__file',
	        options: [{
	          value: 'index'
	        }],
	        onChange: 'inputOnFileChange',
	        onCreate: 'inputOnFileCreate',
	        destroyable: 'inputDestroy',
	        creatable: 'inputOnFileCreateModal'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__file',
	        options: [{
	          value: 'index'
	        }]
	      }
	    }
	  },
	  exts: {
	    inputs: {
	      html: {
	        context: 'inputs',
	        entity: 'html',
	        id: 'content__input__html__ext',
	        options: [
	          {
	            value: 'html'
	          }, {
	            value: 'md'
	          }, {
	            value: 'jade'
	          }
	        ],
	        onChange: 'inputOnExtChange'
	      },
	      css: {
	        context: 'inputs',
	        entity: 'css',
	        id: 'content__input__css__ext',
	        options: [
	          {
	            value: 'css'
	          }, {
	            value: 'less'
	          }, {
	            value: 'sass'
	          }, {
	            value: 'styl'
	          }
	        ],
	        onChange: 'inputOnExtChange'
	      },
	      js: {
	        context: 'inputs',
	        entity: 'js',
	        id: 'content__input__js__ext',
	        options: [
	          {
	            value: 'js'
	          }, {
	            value: 'cs'
	          }, {
	            value: 'ls'
	          }, {
	            value: 'ts'
	          }, {
	            value: 'babel.js'
	          }
	        ],
	        onChange: 'inputOnExtChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__ext',
	        options: [
	          {
	            value: 'html'
	          }, {
	            value: 'css'
	          }, {
	            value: 'js'
	          }
	        ],
	        onChange: 'outputOnExtChange'
	      }
	    }
	  },
	  modes: {
	    inputs: {
	      html: {
	        context: 'inputs',
	        entity: 'html',
	        id: 'content__input__html__mode',
	        options: [
	          {
	            value: 'text/html'
	          }, {
	            value: 'text/x-markdown'
	          }, {
	            value: 'text/x-jade'
	          }
	        ],
	        onChange: 'inputOnModeChange'
	      },
	      css: {
	        context: 'inputs',
	        entity: 'css',
	        id: 'content__input__css__mode',
	        options: [
	          {
	            value: 'text/css'
	          }, {
	            value: 'text/x-less'
	          }, {
	            value: 'text/x-sass'
	          }, {
	            value: 'text/x-styl'
	          }
	        ],
	        onChange: 'inputOnModeChange'
	      },
	      js: {
	        context: 'inputs',
	        entity: 'js',
	        id: 'content__input__js__mode',
	        options: [
	          {
	            value: 'text/javascript'
	          }, {
	            value: 'text/x-livescript'
	          }, {
	            value: 'text/x-coffeescript'
	          }, {
	            value: 'text/typescript'
	          }
	        ],
	        onChange: 'inputOnModeChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__mode',
	        options: [
	          {
	            value: 'text/html'
	          }, {
	            value: 'text/javascript'
	          }, {
	            value: 'text/css'
	          }
	        ],
	        onChange: 'outputOnModeChange'
	      }
	    }
	  },
	  lint: {
	    inputs: {
	      html: {
	        context: 'inputs',
	        entity: 'html',
	        id: 'content__input__html__lint',
	        onChange: 'inputOnLintChange'
	      },
	      css: {
	        context: 'inputs',
	        entity: 'css',
	        id: 'content__input__css__lint',
	        onChange: 'inputOnLintChange'
	      },
	      js: {
	        context: 'inputs',
	        entity: 'js',
	        id: 'content__input__js__lint',
	        onChange: 'inputOnLintChange'
	      }
	    },
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__lint',
	        onChange: 'outputOnLintChange'
	      }
	    }
	  },
	  result: {
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__result',
	        options: [
	          {
	            value: 'frame'
	          }, {
	            value: 'editor'
	          }
	        ],
	        onChange: 'outputOnResultChange'
	      }
	    }
	  },
	  urlhash: {
	    outputs: {
	      index: {
	        context: 'outputs',
	        entity: 'index',
	        id: 'content__output__index__urlhash',
	        options: [{
	          value: '#/'
	        }],
	        onChange: 'outputOnUrlhashChange',
	        onCreate: 'outputOnUrlhashCreate'
	      }
	    }
	  }
	};
	module.exports = props;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\lib\props\main.ls.map


/***/ },
/* 16 */
/***/ function(module, exports) {

	var props;
	props = {
	  src: {
	    id: 'content__admin__src',
	    options: [
	      {
	        value: 'Static'
	      }, {
	        value: 'Browser (LocalStorage)'
	      }, {
	        value: 'Browser (IndexedDB)'
	      }, {
	        value: 'Server (AJAX)'
	      }, {
	        value: 'Server (DOM)'
	      }, {
	        value: 'Cloud (Firebase 3)'
	      }
	    ],
	    onChange: 'elementOnSrcChange',
	    option_store_id: 'content__option__store__data',
	    option_store_inputs: ['db_url', 'table', 'others']
	  },
	  select: {
	    id: 'content__admin__select',
	    onChange: 'elementOnSelectChange',
	    onCreate: 'elementOnSelectCreate',
	    destroyable: 'elementDestroy',
	    refreshable: 'elementRefresh',
	    creatable: 'elementOnSelectCreate',
	    updatable: 'elementUpdate',
	    clonable: 'elementClone',
	    replaceable: 'elementReplace',
	    options_clone: [
	      {
	        value: 'Template - HTML, CSS, JS'
	      }, {
	        value: 'Template - Jade, CSS, JS'
	      }, {
	        value: 'Clone'
	      }
	    ]
	  },
	  route: {
	    routes: {
	      '/id/:id': 'elementOnRouteById',
	      '/create': 'elementOnRouteCreate',
	      '/update/:id/?((w|.)*)': 'elementOnRouteUpdate',
	      '/destroy/:id': 'elementOnRouteDestroy',
	      '/data/:adapter': 'elementOnRouteData',
	      '/meta/?((w|.)*)': 'elementOnRouteMeta',
	      '/meta-script/?((w|.)*)': 'elementOnRouteMetaScript'
	    }
	  },
	  sample: {
	    id: 'content__admin__sample',
	    options: [
	      {
	        value: 'Template - HTML, CSS, JS'
	      }, {
	        value: 'Template - Jade, CSS, JS'
	      }, {
	        value: 'Clone'
	      }
	    ],
	    onChange: 'elementOnSampleChange'
	  },
	  view: {
	    id: 'content__admin__view',
	    options: [
	      {
	        value: 'Tree'
	      }, {
	        value: 'List'
	      }
	    ],
	    onChange: 'elementOnViewChange'
	  },
	  tree: {
	    data: {
	      id: 'content__admin__tree',
	      eventable: 'treeDataMakeEventable',
	      searchable: 'treeDataMakeSearchable'
	    }
	  },
	  list: {
	    data: {
	      id: 'content__admin__list',
	      searchable: 'listDataMakeSearchable',
	      editable: 'listDataMakeEditable',
	      checkallable: 'listDataMakeCheckallable'
	    }
	  }
	};
	module.exports = props;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\lib\props\admin.ls.map


/***/ },
/* 17 */
/***/ function(module, exports) {

	var props;
	props = {
	  formats: {
	    inputs: {
	      html: {
	        context: 'inputs',
	        entity: 'html',
	        id: 'content__input__html__format',
	        options: [
	          {
	            value: 'editor'
	          }, {
	            value: 'json'
	          }, {
	            value: 'zip'
	          }
	        ]
	      },
	      css: {
	        context: 'inputs',
	        entity: 'css',
	        id: 'content__input__css__format',
	        options: [
	          {
	            value: 'editor'
	          }, {
	            value: 'json'
	          }, {
	            value: 'zip'
	          }
	        ]
	      },
	      js: {
	        context: 'inputs',
	        entity: 'js',
	        id: 'content__input__js__format',
	        options: [
	          {
	            value: 'editor'
	          }, {
	            value: 'json'
	          }, {
	            value: 'zip'
	          }
	        ]
	      }
	    },
	    admin: {
	      index: {
	        context: 'admin',
	        entity: 'index',
	        id: 'content__admin__format',
	        options: [
	          {
	            value: 'json'
	          }, {
	            value: 'zip'
	          }
	        ],
	        onChange: 'formatOnImportDataChange'
	      }
	    }
	  }
	};
	module.exports = props;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\lib\props\util.ls.map


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <style data-include='index'></style>\r\n  </head>\r\n  <body>\r\n    <div id='app'></div>\r\n    <script data-include='index'></script>\r\n  </body>\r\n</html>"

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\r\n#app {\r\n  background: red;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n"

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\r\nalert(1);\r\n"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "doctype html\r\nhtml\r\n  head\r\n    style(data-include='index')\r\n  body\r\n    div#app\r\n    script(data-include='index')"

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\r\n#app {\r\n  background: red;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\r\nalert(1);\r\n"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\r\nvar _require = function(modules) { /* {} of {}* */\r\nvar _modules = modules || {1:[function(require,module,exports){},{}]};\r\n/* browserify-13.1.0 */ require = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})(_modules,{},[]);\r\n}\r\n_require();\r\n"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Component;
	Component = function(o){
	  this.Stores = o.Stores;
	  this.templates = o.templates;
	  this.samples = o.samples;
	  this.props = o.props;
	  this._require = o._require;
	  this.debug = o.debug;
	};
	Component.prototype = {
	  constructor: Component,
	  init: function(o){
	    var _this;
	    _this = this;
	    if (this.debug) {
	      console.log('INIT');
	    }
	    __webpack_require__(26)(Component);
	    __webpack_require__(30)(Component);
	    __webpack_require__(33)(Component);
	    __webpack_require__(40)(Component);
	    __webpack_require__(70)(Component);
	    __webpack_require__(80)(Component);
	    this.initLib();
	    this.initStore();
	    this.initBoot();
	    this.initMain();
	    this.initAdmin();
	    this.initUtil();
	  }
	};
	module.exports = Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component.ls.map


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initLib = function(){
	    var _this;
	    _this = this;
	    if (this.debug) {
	      console.log('INIT_LIB');
	    }
	    __webpack_require__(27)(Comp);
	    __webpack_require__(28)(Comp);
	    __webpack_require__(29)(Comp);
	    this.initAction();
	    this.initDate();
	    this.initProgress();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\lib.ls.map


/***/ },
/* 27 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initAction = function(){
	    var _this;
	    _this = this;
	    if (this.debug) {
	      console.log('INIT_ACTION');
	    }
	  };
	  Comp.prototype.action = function(o){
	    var _this;
	    _this = this;
	    if (this.debug) {
	      console.log(o.type);
	    }
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\lib\action.ls.map


/***/ },
/* 28 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initDate = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_DATE'
	    });
	  };
	  Comp.prototype.dateGet = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DATE_GET'
	    });
	    return moment().format(o.format);
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\lib\date.ls.map


/***/ },
/* 29 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Component){
	  Component.prototype.initProgress = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_PROGRESS'
	    });
	  };
	  Component.prototype.progressStart = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'PROGRESS_START'
	    });
	    NProgress.start();
	  };
	  Component.prototype.progressEnd = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'PROGRESS_END'
	    });
	    NProgress.done();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\lib\progress.ls.map


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initStore = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_STORE'
	    });
	    __webpack_require__(31)(Comp);
	    __webpack_require__(32)(Comp);
	    this.initSetting();
	    this.initData();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\store.ls.map


/***/ },
/* 31 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initSetting = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_SETTING'
	    });
	  };
	  Comp.prototype.settingSet = function(o){
	    var _this, settings;
	    _this = this;
	    this.action({
	      type: 'SETTING_SET'
	    });
	    settings = this.settingGet();
	    settings[o.setting] = o.props;
	    localStorage.setItem(this.setting, JSON.stringify(settings));
	  };
	  Comp.prototype.settingGet = function(o){
	    var _this, settings;
	    _this = this;
	    this.action({
	      type: 'SETTING_GET'
	    });
	    settings = localStorage.getItem(this.setting);
	    if (settings) {
	      return settings = JSON.parse(settings);
	    } else {
	      return {};
	    }
	  };
	  /*
	  # @vendors lst
	  # @params  o:{ setting:S, props:{} }
	  Comp::settingSet = (o) !-> 
	    _this = @; @action type: 'SETTING_SET'
	    cb = (settings) !->
	      settings[o.setting] = o.props
	      localStorage.setItem _this.setting, JSON.stringify settings
	    @settingGet cb: cb
	  
	  # @vendors lst
	  # @params  o:{ cb:F }
	  Comp::settingGet = (o) !-> 
	    _this = @; @action type: 'SETTING_GET'
	    settings = localStorage.getItem @setting
	    settings = JSON.parse settings if settings else {}
	    o.cb settings
	  */
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\store\setting.ls.map


/***/ },
/* 32 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initData = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_DATA'
	    });
	  };
	  Comp.prototype.dataMake = function(o){
	    var _this, adapter, params, others, e;
	    _this = this;
	    this.action({
	      type: 'DATA_MAKE'
	    });
	    adapter = o.adapter || 'static';
	    params = {
	      db_url: o.params.db_url,
	      table: o.params.table,
	      others: o.params.others
	    };
	    try {
	      others = JSON.parse(params.others);
	      params.others = others;
	    } catch (e$) {
	      e = e$;
	      console.log('Can\'t JSON parse others');
	    }
	    this.data = new this.Stores[adapter](params);
	  };
	  Comp.prototype.dataCreate = function(o){
	    var _this, attrs;
	    _this = this;
	    this.action({
	      type: 'DATA_CREATE'
	    });
	    attrs = o.attrs || {};
	    attrs.date = this.dateGet({
	      format: 'DD/MM/YYYY'
	    });
	    this.data.create(attrs, o.cb || function(){});
	  };
	  Comp.prototype.dataUpdate = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DATA_UPDATE'
	    });
	    this.data.update(o.id, o.attrs, o.cb || function(){});
	  };
	  Comp.prototype.dataFind = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DATA_FIND'
	    });
	    this.data.find(o.id, o.cb || function(){});
	  };
	  Comp.prototype.dataFindAll = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DATA_FIND_ALL'
	    });
	    this.data.findAll(o.cb || function(){});
	  };
	  Comp.prototype.dataDestroy = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DATA_DESTROY'
	    });
	    this.data.destroy(o.id, o.cb || function(){});
	  };
	  Comp.prototype.dataImportTable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DATA_IMPORT_TABLE'
	    });
	    this.data.importTable('main', o.list, o.cb || function(){});
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\store\data.ls.map


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initBoot = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_BOOT'
	    });
	    this.boot = this.props.boot;
	    __webpack_require__(34)(Comp);
	    __webpack_require__(35)(Comp);
	    __webpack_require__(36)(Comp);
	    __webpack_require__(37)(Comp);
	    __webpack_require__(38)(Comp);
	    __webpack_require__(39)(Comp);
	    this.initDefault();
	    this.initConfig();
	    this.initMeta();
	    this.initLayout();
	    this.initOptionStore();
	    this.initOptionRun();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\boot.ls.map


/***/ },
/* 34 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initDefault = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_DEFAULT'
	    });
	    this.defaultMake();
	  };
	  Comp.prototype.defaultMake = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DEFAULT_MAKE'
	    });
	    this.defaultMakeBoot();
	    this.defaultMakeStore();
	    this.defaultMakeMain();
	    this.defaultMakeAdmin();
	    this.defaultMakeUtil();
	  };
	  Comp.prototype.defaultMakeBoot = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DEFAULT_MAKE_BOOT'
	    });
	    this.boot = {};
	    this.config = {
	      layout: 'split',
	      store_data: {
	        index: 'static',
	        'static': {
	          db_url: '',
	          table: '',
	          others: '{}'
	        },
	        indexeddb: {
	          db_url: 'rcx',
	          table: 'data',
	          others: '{}'
	        },
	        localstorage: {
	          db_url: 'rcx',
	          table: 'data',
	          others: '{}'
	        },
	        dom: {
	          db_url: '',
	          table: '',
	          others: '{}'
	        },
	        ajax: {
	          db_url: '',
	          table: '',
	          others: '{}'
	        },
	        firebase3: {
	          db_url: '',
	          table: '',
	          others: '{}'
	        }
	      },
	      meta: {}
	    };
	    this.metas = {};
	    this.options = {
	      stores: {}
	    };
	  };
	  Comp.prototype.defaultMakeStore = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DEFAULT_MAKE_STORE'
	    });
	    this.store = {};
	    this.setting = 'settings_rcx';
	    this.id = null;
	    this.name = null;
	    this.child = null;
	    this.data = {};
	    this.repo = {};
	    this.response = {
	      script: null,
	      form: null,
	      form_cb: function(){}
	    };
	  };
	  Comp.prototype.defaultMakeMain = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DEFAULT_MAKE_MAIN'
	    });
	    this.main = {};
	    this.editors = {
	      inputs: {
	        html: {},
	        css: {},
	        js: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.files = {
	      inputs: {
	        html: {},
	        css: {},
	        js: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.exts = {
	      inputs: {
	        html: {},
	        css: {},
	        js: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.modes = {
	      inputs: {
	        html: {},
	        css: {},
	        js: {}
	      },
	      outputs: {
	        index: {}
	      }
	    };
	    this.input = {
	      html: 'index',
	      css: 'index',
	      js: 'index'
	    };
	    this.inputs = {
	      html: {},
	      css: {},
	      js: {}
	    };
	    this.frames = {
	      outputs: {
	        index: {}
	      }
	    };
	    this.urlhashes = {
	      outputs: {
	        index: {}
	      }
	    };
	    this.results = {
	      outputs: {
	        index: {}
	      }
	    };
	    this.output = {
	      index: 'index'
	    };
	    this.outputs = {
	      index: {
	        'index': {}
	      }
	    };
	    this.delays = {
	      run: 0,
	      save: 0,
	      load: 0
	    };
	    this.debounces = {
	      inputs: {
	        html: 0,
	        css: 0,
	        js: 0
	      }
	    };
	    this.runs = {};
	    this.scripts = {
	      'html': true,
	      'js': true,
	      'css': true,
	      'md': false,
	      'jade': false,
	      'less': false,
	      'sass': false,
	      'styl': false,
	      'ls': false,
	      'babel.js': false,
	      'ts': false,
	      'cs': false
	    };
	    this.onloads = {};
	    this.loadeds = {};
	    this.increments = {
	      html: {},
	      css: {},
	      js: {}
	    };
	  };
	  Comp.prototype.defaultMakeAdmin = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DEFAULT_MAKE_ADMIN'
	    });
	    this.admin = {};
	    this.select = {};
	    this.router = {};
	    this.src = {};
	    this.sample = {};
	    this.view = {};
	    this.tree = {};
	    this.list = {};
	    this.refresh = function(){};
	    this.selected = function(){};
	  };
	  Comp.prototype.defaultMakeUtil = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'DEFAULT_MAKE_UTIL'
	    });
	    this.util = {};
	    this.formats = {
	      inputs: {
	        html: {},
	        css: {},
	        js: {}
	      },
	      admin: {
	        index: {}
	      }
	    };
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\boot\default.ls.map


/***/ },
/* 35 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initConfig = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_CONFIG'
	    });
	    this.configLoad();
	    this.configSave();
	  };
	  Comp.prototype.configSet = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'CONFIG_SET'
	    });
	    this.config[o.config] = o.props;
	    this.configSave();
	  };
	  Comp.prototype.configGet = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'CONFIG_GET'
	    });
	    return this.config[o.config];
	  };
	  Comp.prototype.configSave = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'CONFIG_SAVE'
	    });
	    this.settingSet({
	      setting: 'config',
	      props: this.config
	    });
	  };
	  Comp.prototype.configLoad = function(o){
	    var _this, settings;
	    _this = this;
	    this.action({
	      type: 'CONFIG_LOAD'
	    });
	    settings = this.settingGet();
	    if (settings.config) {
	      this.config = settings.config;
	    }
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\boot\config.ls.map


/***/ },
/* 36 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initMeta = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_META'
	    });
	    this.metaMake();
	  };
	  Comp.prototype.metaMake = function(o){
	    var _this, data, ext, i$, ref$;
	    _this = this;
	    this.action({
	      type: 'META_MAKE'
	    });
	    data = function(o){
	      if (o.dburl) {
	        _this.config.store_data[o.prop].db_url = o.dburl;
	      }
	      if (o.table) {
	        _this.config.store_data[o.prop].table = o.table;
	      }
	      if (o.others) {
	        _this.config.store_data[o.prop].others = o.others;
	      }
	    };
	    ext = function(o){
	      if (o.url) {
	        $('#content__option__run__' + o.run + '__src').html(o.url);
	      }
	    };
	    this.metas = {
	      'meta[data-debug="data"][data-prop="index"]': function(o){
	        if (o.debug) {
	          _this.debug = o.debug === 'true';
	        }
	        console.clear();
	      },
	      'meta[data-config="data"][data-prop="index"]': function(o){
	        if (o.value) {
	          _this.config.store_data.index = o.value;
	        }
	      },
	      'meta[data-config="data"][data-prop="static"]': function(o){
	        data(o);
	      },
	      'meta[data-config="data"][data-prop="indexeddb"]': function(o){
	        data(o);
	      },
	      'meta[data-config="data"][data-prop="localstorage"]': function(o){
	        data(o);
	      },
	      'meta[data-config="data"][data-prop="ajax"]': function(o){
	        data(o);
	      },
	      'meta[data-config="data"][data-prop="dom"]': function(o){
	        data(o);
	      },
	      'meta[data-config="data"][data-prop="firebase"]': function(o){
	        data(o);
	      },
	      'meta[data-ext="md"]': function(o){
	        ext(o);
	      },
	      'meta[data-ext="jade"]': function(o){
	        ext(o);
	      },
	      'meta[data-ext="less"]': function(o){
	        ext(o);
	      },
	      'meta[data-ext="sass"]': function(o){
	        ext(o);
	      },
	      'meta[data-ext="styl"]': function(o){
	        ext(o);
	      },
	      'meta[data-ext="babel.js"]': function(o){
	        ext(o);
	      },
	      'meta[data-ext="ts"]': function(o){
	        ext(o);
	      },
	      'meta[data-ext="cs"]': function(o){
	        ext(o);
	      },
	      'meta[data-ext="ls"]': function(o){
	        ext(o);
	      }
	    };
	    for (i$ in ref$ = this.metas) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(i, el){
	      this.metaAct({
	        meta: i
	      });
	    }
	  };
	  Comp.prototype.metaAct = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'META_MAKE'
	    });
	    $(o.meta).each(function(el, i){
	      _this.metas[o.meta](this.dataset);
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\boot\meta.ls.map


/***/ },
/* 37 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initLayout = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_LAYOUT'
	    });
	    this.layoutMake();
	  };
	  Comp.prototype.layoutMake = function(o){
	    var _this, layout, template;
	    _this = this;
	    this.action({
	      type: 'LAYOUT_MAKE'
	    });
	    layout = this.config.layout;
	    template = this.templates.layout[layout];
	    $('#app').html('');
	    $('#app').html(template);
	    this.layout = this.layoutMakeContainer(this.props.boot.layout);
	    this.layoutSetValue({
	      value: this.layoutMatchAliasToTitle({
	        alias: this.config.layout
	      })
	    });
	  };
	  Comp.prototype.layoutMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'LAYOUT_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          var layout;
	          layout = _this.layoutMatchTitleToAlias({
	            title: value
	          });
	          _this.configSet({
	            config: 'layout',
	            props: layout
	          });
	          if (_this.router.destroy) {
	            _this.router.destroy();
	          }
	          _this.init();
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.layoutGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LAYOUT_GET_VALUE'
	    });
	    return this.layout.getValue();
	  };
	  Comp.prototype.layoutSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LAYOUT_SET_VALUE'
	    });
	    this.layout.setValue(o.value, function(){});
	  };
	  Comp.prototype.layoutMatchAliasToTitle = function(o){
	    var _this, aliases;
	    _this = this;
	    this.action({
	      type: 'LAYOUT_MATCH_ALIAS_TO_TITLE'
	    });
	    aliases = {
	      'split': 'Layout - Split',
	      'split_vtab': 'Layout - Split VTab',
	      'combined': 'Layout - Combined'
	    };
	    return aliases[o.alias];
	  };
	  Comp.prototype.layoutMatchTitleToAlias = function(o){
	    var _this, titles;
	    _this = this;
	    this.action({
	      type: 'LAYOUT_MATCH_TITLE_TO_ALIAS'
	    });
	    titles = {
	      'Layout - Split': 'split',
	      'Layout - Split VTab': 'split_vtab',
	      'Layout - Combined': 'combined'
	    };
	    return titles[o.title];
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\boot\layout.ls.map


/***/ },
/* 38 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initOptionStore = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_OPTION_STORE'
	    });
	    this.optionStoreMake(this.props.boot.options.store_data);
	    this.optionStoreSetDataHeader({
	      title: this.optionStoreMatchAliasToTitle({
	        alias: this.config.store_data.index
	      })
	    });
	  };
	  Comp.prototype.optionStoreMake = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OPTION_STORE_MAKE'
	    });
	    this.options[o.config] = this.optionStoreMakeContainer(o);
	    this.optionStoreMakeInputsAutoConfig(o);
	    this.optionStoreConfigInputs(o);
	    return this.optionStoreSetValue({
	      config: o.config,
	      value: this.optionStoreMatchAliasToTitle({
	        alias: this.config[o.config].index
	      })
	    });
	  };
	  Comp.prototype.optionStoreMakeContainer = function(o){
	    var _this, configSz;
	    _this = this;
	    this.action({
	      type: 'OPTION_STORE_MAKE_CONTAINER'
	    });
	    configSz = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          var adapter;
	          adapter = _this.optionStoreMatchTitleToAlias({
	            title: value
	          });
	          _this.config[o.config].index = adapter;
	          _this.configSet({
	            config: o.config,
	            props: _this.config[o.config]
	          });
	          _this.optionStoreConfigInputs(o);
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(configSz())[0].selectize;
	  };
	  Comp.prototype.optionStoreMakeInputsAutoConfig = function(o){
	    var _this, config, i$, ref$, len$, results$ = [];
	    _this = this;
	    this.action({
	      type: 'OPTION_STORE_MAKE_INPUTS_AUTO_CONFIG'
	    });
	    config = o.config;
	    for (i$ = 0, len$ = (ref$ = o.inputs).length; i$ < len$; ++i$) {
	      results$.push((fn$.call(this, i$, ref$[i$])));
	    }
	    return results$;
	    function fn$(i, input){
	      var id;
	      id = o.id + '__' + input;
	      return $('#' + id).on('change', function(){
	        var val, adapter;
	        val = $(this).val();
	        adapter = _this.config[o.config].index;
	        _this.config[o.config][adapter][input] = val;
	        _this.configSet({
	          config: o.config,
	          props: _this.config[o.config]
	        });
	      });
	    }
	  };
	  Comp.prototype.optionStoreConfigInputs = function(o){
	    var _this, adapter, i$, ref$, len$;
	    _this = this;
	    this.action({
	      type: 'OPTION_STORE_CONFIG_INPUTS'
	    });
	    adapter = this.config[o.config].index;
	    for (i$ = 0, len$ = (ref$ = o.inputs).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(i, input){
	      var id, val;
	      id = o.id + '__' + input;
	      val = this.config[o.config][adapter][input];
	      $('#' + id).val(val);
	    }
	  };
	  Comp.prototype.optionStoreSetValue = function(o){
	    var _this, adapter;
	    _this = this;
	    this.action({
	      type: 'OPTION_STORE_SET_VALUE'
	    });
	    this.options[o.config].setValue(o.value, function(){});
	    adapter = this.optionStoreMatchTitleToAlias({
	      title: o.value
	    });
	    this.config[o.config].index = adapter;
	    this.configSet({
	      config: o.config,
	      props: this.config[o.config]
	    });
	    o.id = 'content__option__store__data';
	    o.inputs = ['db_url', 'table', 'others'];
	    this.optionStoreConfigInputs(o);
	  };
	  Comp.prototype.optionStoreGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OPTION_STORE_GET_VALUE'
	    });
	    return this.options[o.config].getValue();
	  };
	  Comp.prototype.optionStoreMatchAliasToTitle = function(o){
	    var _this, aliases, title;
	    _this = this;
	    this.action({
	      type: 'OPTION_STORE_MATCH_ALIAS_TO_TITLE'
	    });
	    aliases = {
	      'static': 'Static',
	      'indexeddb': 'Browser (IndexedDB)',
	      'localstorage': 'Browser (LocalStorage)',
	      'ajax': 'Server (AJAX)',
	      'dom': 'Server (DOM)',
	      'firebase3': 'Cloud (Firebase 3)'
	    };
	    title = aliases[o.alias] || '';
	    return title;
	  };
	  Comp.prototype.optionStoreMatchTitleToAlias = function(o){
	    var _this, titles, alias;
	    _this = this;
	    this.action({
	      type: 'OPTION_STORE_MATCH_TITLE_TO_ALIAS'
	    });
	    titles = {
	      'Static': 'static',
	      'Browser (IndexedDB)': 'indexeddb',
	      'Browser (LocalStorage)': 'localstorage',
	      'Server (AJAX)': 'ajax',
	      'Server (DOM)': 'dom',
	      'Cloud (Firebase 3)': 'firebase3'
	    };
	    alias = titles[o.title] || '';
	    return alias;
	  };
	  Comp.prototype.optionStoreSetDataHeader = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OPTION_STORE_MATCH_TITLE_TO_ALIAS'
	    });
	    $('#header__data').html(o.title);
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\boot\option\store.ls.map


/***/ },
/* 39 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initOptionRun = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_OPTION_RUN'
	    });
	    this.optionRunMake();
	  };
	  Comp.prototype.optionRunMake = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OPTION_RUN_MAKE'
	    });
	    this.optionRunMakeLoadable(this.props.boot.options.run_preprocessor_md);
	    this.optionRunMakeLoadable(this.props.boot.options.run_preprocessor_jade);
	    this.optionRunMakeLoadable(this.props.boot.options.run_preprocessor_less);
	    this.optionRunMakeLoadable(this.props.boot.options.run_preprocessor_sass);
	    this.optionRunMakeLoadable(this.props.boot.options.run_preprocessor_styl);
	    this.optionRunMakeLoadable(this.props.boot.options.run_transpiler_babeljs);
	    this.optionRunMakeLoadable(this.props.boot.options.run_transpiler_ts);
	    this.optionRunMakeLoadable(this.props.boot.options.run_transpiler_cs);
	    this.optionRunMakeLoadable(this.props.boot.options.run_transpiler_ls);
	    $('#content__option__run__mode__front').iCheck({
	      radioClass: 'iradio_minimal'
	    });
	    $('#content__option__run__mode__index').iCheck({
	      radioClass: 'iradio_minimal'
	    });
	  };
	  Comp.prototype.optionRunMakeLoadable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OPTION_RUN_MAKE_LOADABLE'
	    });
	    $('#' + o.id).iCheck({
	      checkboxClass: 'icheckbox_minimal-red'
	    });
	    $('#' + o.id).on('ifChecked', function(){
	      var ext;
	      ext = $('#' + o.id + '__ext').html();
	      if (!_this.scripts[ext]) {
	        _this.optionRunLoadScript(o);
	      }
	    });
	  };
	  Comp.prototype.optionRunLoadScript = function(o){
	    var _this, script, ext, src, e;
	    _this = this;
	    this.action({
	      type: 'OPTION_RUN_LOAD_SCRIPT'
	    });
	    script = document.createElement('script');
	    ext = $('#' + o.id + '__ext').html();
	    src = $('#' + o.id + '__src').val();
	    script.src = src;
	    script.onload = function(){
	      console.log('Script loaded', o.title);
	      if (_this.onloads[ext]) {
	        _this.onloads[ext]();
	      }
	      _this.scripts[ext] = true;
	      $('#' + o.id).iCheck('check');
	      $('#' + o.id).iCheck('disable');
	      if (o.cb) {
	        o.cb();
	      }
	    };
	    try {
	      document.body.appendChild(script);
	    } catch (e$) {
	      e = e$;
	      console.log('Script error', e);
	      $('#' + o.id).iCheck('uncheck');
	    }
	  };
	  Comp.prototype.optionRunGetMode = function(o){
	    var _this, val;
	    _this = this;
	    this.action({
	      type: 'OPTION_RUN_GET_MODE'
	    });
	    val = $('.checked input[name="run__mode"]').val();
	    return val;
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\boot\option\run.ls.map


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initMain = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_MAIN'
	    });
	    this.main = this.props.main;
	    __webpack_require__(41)(Comp);
	    __webpack_require__(42)(Comp);
	    __webpack_require__(43)(Comp);
	    __webpack_require__(44)(Comp);
	    __webpack_require__(45)(Comp);
	    __webpack_require__(46)(Comp);
	    __webpack_require__(47)(Comp);
	    __webpack_require__(48)(Comp);
	    __webpack_require__(49)(Comp);
	    __webpack_require__(50)(Comp);
	    __webpack_require__(51)(Comp);
	    __webpack_require__(52)(Comp);
	    __webpack_require__(53)(Comp);
	    __webpack_require__(54)(Comp);
	    __webpack_require__(55)(Comp);
	    __webpack_require__(68)(Comp);
	    __webpack_require__(69)(Comp);
	    this.initEditor();
	    this.initFile();
	    this.initExt();
	    this.initMode();
	    this.initResult();
	    this.initFrame();
	    this.initUrlhash();
	    this.initLint();
	    this.initInput();
	    this.initOutput();
	    this.initScript();
	    this.initInclude();
	    this.initRequire();
	    this.initIncrement();
	    this.initRun();
	    this.initSave();
	    this.initLoad();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main.ls.map


/***/ },
/* 41 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initEditor = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_EDITOR'
	    });
	  };
	  Comp.prototype.editorMakeContainer = function(o){
	    var _this, editor;
	    _this = this;
	    this.action({
	      type: 'EDITOR_MAKE_CONTAINER'
	    });
	    editor = CodeMirror.fromTextArea(document.getElementById(o.id), {
	      mode: o.type || 'text/plain',
	      theme: 'blackboard',
	      gutters: ['CodeMirror-lint-markers'],
	      tabMode: 'indent',
	      lineNumbers: true,
	      indentUnit: 2,
	      lineWrapping: true,
	      lint: o.lint || false
	    });
	    if (o.onChange) {
	      editor.on('change', function(){
	        _this[o.onChange]({
	          context: o.context,
	          entity: o.entity
	        });
	      });
	    }
	    return editor;
	  };
	  Comp.prototype.editorSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EDITOR_SET_VALUE'
	    });
	    this.editors[o.context][o.entity].setValue(o.value);
	  };
	  Comp.prototype.editorGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EDITOR_GET_VALUE'
	    });
	    return this.editors[o.context][o.entity].getValue();
	  };
	  Comp.prototype.editorGetProp = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EDITOR_GET_PROP'
	    });
	    return this.editors[o.context][o.entity].getOption(o.prop);
	  };
	  Comp.prototype.editorSetProp = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EDITOR_SET_PROP'
	    });
	    this.editors[o.context][o.entity].setOption(o.prop, o.value);
	  };
	  Comp.prototype.editorSetMode = function(o){
	    var _this, modes, mode;
	    _this = this;
	    this.action({
	      type: 'EDITOR_SET_MODE'
	    });
	    modes = {
	      'txt': 'text/plain',
	      'html': 'text/html',
	      'js': 'text/javascript',
	      'css': 'text/css',
	      'md': 'text/x-markdown',
	      '++.md': 'text/x-markdown',
	      'remark.md': 'text/x-markdown',
	      'jade': 'text/x-jade',
	      'less': 'text/x-less',
	      'sass': 'text/x-sass',
	      'styl': 'text/x-styl',
	      'ls': 'text/x-livescript',
	      'jsx': 'text/jsx',
	      'babel.js': 'text/javascript',
	      'ts': 'text/typescript',
	      'cs': 'text/x-coffeescript',
	      'json': 'application/x-json',
	      'yaml': 'text/x-yaml',
	      'xml': 'text/xml',
	      'sql': 'text/x-sql',
	      'mongo.js': 'text/javascript',
	      'php': 'text/x-php',
	      'rb': 'text/x-ruby',
	      'py': 'text/x-python',
	      'abc': 'text/x-abc',
	      'ashx': 'text/x-csharp',
	      'java': 'text/x-java',
	      'go': 'text/x-go',
	      'rust': 'text/x-rust'
	    };
	    mode = o.value || modes[o.ext];
	    this.editors[o.context][o.entity].setOption('mode', mode);
	  };
	  Comp.prototype.editorGetMode = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EDITOR_GET_MODE'
	    });
	    return this.editors[o.context][o.entity].getOption('mode');
	  };
	  Comp.prototype.editorToggleLint = function(o){
	    var _this, e;
	    _this = this;
	    this.action({
	      type: 'EDITOR_TOGGLE_LINT'
	    });
	    try {
	      this.editors[o.context][o.entity].setOption('lint', o.state);
	    } catch (e$) {
	      e = e$;
	      console.log('Lint error', e);
	    }
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\editor.ls.map


/***/ },
/* 42 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initFile = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_FILE'
	    });
	  };
	  Comp.prototype.fileIsValid = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_IS_VALID'
	    });
	    return true;
	  };
	  Comp.prototype.fileMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'FILE_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        },
	        create: function(value){
	          if (o.onCreate) {
	            return _this[o.onCreate]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        }
	      };
	    };
	    if (o.destroyable) {
	      this.fileMakeDestroyable({
	        context: o.context,
	        entity: o.entity,
	        id: o.id + '__destroy',
	        destroyable: o.destroyable
	      });
	    }
	    if (o.creatable) {
	      this.fileMakeCreatable({
	        context: o.context,
	        entity: o.entity,
	        id: o.id + '__create',
	        creatable: o.creatable
	      });
	    }
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.fileMakeDestroyable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_MAKE_DESTROYABLE'
	    });
	    $('#' + o.id).click(function(){
	      var file;
	      file = _this.fileGetValue({
	        context: o.context,
	        entity: o.entity
	      });
	      _this[o.destroyable]({
	        context: o.context,
	        entity: o.entity,
	        file: file
	      });
	    });
	  };
	  Comp.prototype.fileMakeCreatable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_MAKE_CREATABLE'
	    });
	    $('#' + o.id + '__button').click(function(){
	      var file;
	      $('#' + o.id + '__modal').modal('hide');
	      file = $('#' + o.id + '__text').val();
	      _this[o.creatable]({
	        context: o.context,
	        entity: o.entity,
	        file: file
	      });
	      $('#' + o.id + '__text').val('');
	    });
	  };
	  Comp.prototype.fileSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_SET_VALUE'
	    });
	    this.files[o.context][o.entity].setValue(o.value, function(){});
	  };
	  Comp.prototype.fileGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_GET_VALUE'
	    });
	    return this.files[o.context][o.entity].getValue();
	  };
	  Comp.prototype.fileClear = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_CLEAR'
	    });
	    this.files[o.context][o.entity].clearOptions();
	  };
	  Comp.prototype.fileList = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_LIST'
	    });
	    return this.files[o.context][o.entity].options;
	  };
	  Comp.prototype.fileCreate = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_CREATE'
	    });
	    this.files[o.context][o.entity].addOption({
	      value: o.value,
	      label: o.value
	    });
	  };
	  Comp.prototype.fileDestroy = function(o){
	    var _this, value;
	    _this = this;
	    this.action({
	      type: 'FILE_DESTROY'
	    });
	    value = o.value || this.fileGetValue({
	      context: o.context,
	      entity: o.entity
	    });
	    if (value !== 'index') {
	      this.files[o.context][o.entity].removeOption(value);
	    } else {
	      _this = this;
	      this.action({
	        type: 'INDEX CANNOT BE DELETED!'
	      });
	    }
	  };
	  Comp.prototype.fileEnable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_ENABLE'
	    });
	    this.files[o.context][o.entity].enable();
	  };
	  Comp.prototype.fileDisable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FILE_DISABLE'
	    });
	    this.files[o.context][o.entity].disable();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\file.ls.map


/***/ },
/* 43 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initExt = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_EXT'
	    });
	  };
	  Comp.prototype.extMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'EXT_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.extSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EXT_SET_VALUE'
	    });
	    this.exts[o.context][o.entity].setValue(o.value, function(){});
	  };
	  Comp.prototype.extGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EXT_GET_VALUE'
	    });
	    return this.exts[o.context][o.entity].getValue();
	  };
	  Comp.prototype.extIsValid = function(o){
	    var _this, valid, exts;
	    _this = this;
	    this.action({
	      type: 'EXT_IS_VALID'
	    });
	    valid = true;
	    exts = ['txt', 'html', 'js', 'css', 'md', '++.md', 'jade', 'less', 'sass', 'styl', 'ls', 'babel.js', 'ts', 'cs', 'json', 'yaml', 'xml', 'sql', 'mongo.js', 'php', 'rb', 'py', 'abc', 'ashx', 'java', 'go', 'rust'];
	    if (exts.indexOf(o.ext) === -1) {
	      valid = false;
	    }
	    return valid;
	  };
	  Comp.prototype.extEnable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EXT_ENABLE'
	    });
	    this.exts[o.context][o.entity].enable();
	  };
	  Comp.prototype.extDisable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EXT_DISABLE'
	    });
	    this.exts[o.context][o.entity].disable();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\ext.ls.map


/***/ },
/* 44 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initMode = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_MODE'
	    });
	  };
	  Comp.prototype.modeMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'MODE_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.modeSetValue = function(o){
	    var _this, value;
	    _this = this;
	    this.action({
	      type: 'MODE_SET_VALUE'
	    });
	    value = o.value || this.modeGetFromExt({
	      ext: o.ext
	    });
	    this.modes[o.context][o.entity].setValue(value, function(){});
	  };
	  Comp.prototype.modeGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'MODE_GET_VALUE'
	    });
	    return this.modes[o.context][o.entity].getValue();
	  };
	  Comp.prototype.modeGetFromExt = function(o){
	    var _this, modes, mode;
	    _this = this;
	    this.action({
	      type: 'MODE_GET_FROM_EXT'
	    });
	    modes = {
	      'txt': 'text/plain',
	      'html': 'text/html',
	      'js': 'text/javascript',
	      'css': 'text/css',
	      'md': 'text/x-markdown',
	      '++.md': 'text/x-markdown',
	      'remark.md': 'text/x-markdown',
	      'jade': 'text/x-jade',
	      'less': 'text/x-less',
	      'sass': 'text/x-sass',
	      'styl': 'text/x-styl',
	      'ls': 'text/x-livescript',
	      'jsx': 'text/jsx',
	      'babel.js': 'text/javascript',
	      'ts': 'text/typescript',
	      'cs': 'text/x-coffeescript',
	      'json': 'application/x-json',
	      'yaml': 'text/x-yaml',
	      'xml': 'text/xml'
	    };
	    mode = modes[o.ext] || 'text/plain';
	    return mode;
	  };
	  Comp.prototype.modeEnable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'MODE_ENABLE'
	    });
	    this.modes[o.context][o.entity].enable();
	  };
	  Comp.prototype.modeDisable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'MODE_DISABLE'
	    });
	    this.modes[o.context][o.entity].disable();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\mode.ls.map


/***/ },
/* 45 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initFrame = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_FRAME'
	    });
	  };
	  Comp.prototype.frameMakeContainer = function(o){
	    var _this, iframeInit, iframe;
	    _this = this;
	    this.action({
	      type: 'FRAME_MAKE_CONTAINER'
	    });
	    $('#content__output__index__frame').remove();
	    $('<iframe id="content__output__index__frame"></iframe>').appendTo('#content__output__index__holder');
	    iframeInit = document.getElementById('content__output__index__frame');
	    iframe = iframeInit.contentDocument || iframeInit.contentWindow.document;
	    return iframe;
	  };
	  Comp.prototype.frameMakeUrlhashListenable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FRAME_MAKE_URLHASH_LISTENABLE'
	    });
	    document.getElementById('content__output__index__frame').contentWindow.onhashchange = o.onHashChange;
	  };
	  Comp.prototype.frameWrite = function(o){
	    var _this, frame;
	    _this = this;
	    this.action({
	      type: 'FRAME_WRITE'
	    });
	    frame = this.frameMakeContainer();
	    frame.open();
	    frame.write(o.write);
	    frame.close();
	  };
	  Comp.prototype.frameWriteCustom = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FRAME_WRITE_CUSTOM'
	    });
	    $('#' + o.id).html(o.content);
	  };
	  Comp.prototype.frameSetUrlhash = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FRAME_SET_URLHASH'
	    });
	    document.getElementById('content__output__index__frame').contentWindow.window.location.hash = o.value;
	  };
	  Comp.prototype.frameBuildMarkup = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FRAME_BUILD_MARKUP'
	    });
	    return '<!DOCTYPE html><html><head><style>' + (o.style || '') + '</style></head><body>' + (o.content || '') + '<script>' + (o.script || '') + '<' + '/script>' + '</body></html>';
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\frame.ls.map


/***/ },
/* 46 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initUrlhash = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_URLHASH'
	    });
	  };
	  Comp.prototype.urlhashMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'URLHASH_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        },
	        create: function(value){
	          if (o.onCreate) {
	            return _this[o.onCreate]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        }
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.urlhashSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'URLHASH_SET_VALUE'
	    });
	    this.urlhashes[o.context][o.entity].setValue(o.value, function(){});
	  };
	  Comp.prototype.urlhashGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'URLHASH_GET_VALUE'
	    });
	    return this.urlhashes[o.context][o.entity].getValue();
	  };
	  Comp.prototype.urlhashCreate = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'URLHASH_CREATE'
	    });
	    this.urlhashes[o.context][o.entity].addOption({
	      value: o.value,
	      label: o.value
	    });
	    this.urlhashes[o.context][o.entity].setValue(o.value, function(){});
	  };
	  Comp.prototype.urlhashEnable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'URLHASH_ENABLE'
	    });
	    this.urlhashes[o.context][o.entity].enable();
	  };
	  Comp.prototype.urlhashDisable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'URLHASH_DISABLE'
	    });
	    this.urlhashes[o.context][o.entity].disable();
	  };
	  Comp.prototype.urlhashEnableButton = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'URLHASH_ENABLE_BUTTON'
	    });
	    $('#' + o.id).prop('disabled', false);
	  };
	  Comp.prototype.urlhashDisableButton = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'URLHASH_DISABLE_BUTTON'
	    });
	    $('#' + o.id).prop('disabled', true);
	  };
	  Comp.prototype.urlhashClear = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'URLHASH_CLEAR'
	    });
	    return this.urlhashes[o.context][o.entity].clearOptions();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\urlhash.ls.map


/***/ },
/* 47 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initResult = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_RESULT'
	    });
	  };
	  Comp.prototype.resultMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'RESULT_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              context: o.context,
	              entity: o.entity,
	              value: value
	            });
	          }
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.resultSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RESULT_SET_VALUE'
	    });
	    this.results[o.context][o.entity].setValue(o.value, function(){});
	  };
	  Comp.prototype.resultGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RESULT_GET_VALUE'
	    });
	    return this.results[o.context][o.entity].getValue();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\result.ls.map


/***/ },
/* 48 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initLint = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_LINT'
	    });
	    this.lintMake(this.props.main.lint.inputs.html);
	    this.lintMake(this.props.main.lint.inputs.css);
	    this.lintMake(this.props.main.lint.inputs.js);
	    this.lintMake(this.props.main.lint.outputs.index);
	  };
	  Comp.prototype.lintMake = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LINT_MAKE'
	    });
	    $('#' + o.id).iCheck({
	      checkboxClass: 'icheckbox_minimal'
	    });
	    $('#' + o.id).on('ifChanged', function(){
	      var checked;
	      checked = $('#' + o.id).prop('checked');
	      if (o.onChange) {
	        _this[o.onChange]({
	          context: o.context,
	          entity: o.entity,
	          value: checked
	        });
	      }
	    });
	  };
	  Comp.prototype.lintSetValue = function(o){
	    var _this, ids, value;
	    _this = this;
	    this.action({
	      type: 'LINT_SET_VALUE'
	    });
	    ids = {
	      'outputs': 'output',
	      'inputs': 'input'
	    };
	    value = o.value === true ? 'check' : 'uncheck';
	    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').iCheck(value);
	  };
	  Comp.prototype.lintGetValue = function(o){
	    var _this, ids;
	    _this = this;
	    this.action({
	      type: 'LINT_GET_VALUE'
	    });
	    ids = {
	      'outputs': 'output',
	      'inputs': 'input'
	    };
	    return $('#content__' + ids[o.context] + '__' + o.entity + '__lint').prop('checked');
	  };
	  Comp.prototype.lintEnable = function(o){
	    var _this, ids;
	    _this = this;
	    this.action({
	      type: 'LINT_ENABLE'
	    });
	    ids = {
	      'outputs': 'output',
	      'inputs': 'input'
	    };
	    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').iCheck('enable');
	  };
	  Comp.prototype.lintDisable = function(o){
	    var _this, ids;
	    _this = this;
	    this.action({
	      type: 'LINT_DISABLE'
	    });
	    ids = {
	      'outputs': 'output',
	      'inputs': 'input'
	    };
	    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').iCheck('disable');
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\lint.ls.map


/***/ },
/* 49 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initInput = function(){
	    var _this, i$, ref$, len$;
	    _this = this;
	    this.action({
	      type: 'INIT_INPUT'
	    });
	    for (i$ = 0, len$ = (ref$ = ['html', 'css', 'js']).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    this.typing = 0;
	    function fn$(i, el){
	      this.inputMakeContainer({
	        entity: el,
	        editor: this.props.main.editors.inputs[el],
	        file: this.props.main.files.inputs[el],
	        ext: this.props.main.exts.inputs[el],
	        mode: this.props.main.modes.inputs[el]
	      });
	      this.inputReset({
	        entity: el
	      });
	    }
	  };
	  Comp.prototype.inputGet = function(o){
	    var _this, input;
	    _this = this;
	    this.action({
	      type: 'INPUT_GET'
	    });
	    input = this.inputs[o.entity][this.input[o.entity]];
	    return {
	      name: input.name,
	      src: input.src,
	      ext: input.ext,
	      mode: input.mode
	    };
	  };
	  Comp.prototype.inputGetExts = function(o){
	    var _this, _exts, exts, i$, ref$;
	    _this = this;
	    this.action({
	      type: 'INPUT_GET_EXTS'
	    });
	    _exts = {};
	    exts = [];
	    for (i$ in ref$ = this.inputs) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    if (o.exts) {
	      for (i$ in ref$ = o.exts) {
	        (fn1$.call(this, i$, ref$[i$]));
	      }
	    }
	    for (i$ in _exts) {
	      (fn2$.call(this, i$, _exts[i$]));
	    }
	    return exts;
	    function fn$(i, el){
	      var i$, ref$;
	      for (i$ in ref$ = this.inputs[i]) {
	        (fn$.call(this, i$, ref$[i$]));
	      }
	      function fn$(j, el_j){
	        _exts[el_j.ext] = '';
	      }
	    }
	    function fn1$(i, ext){
	      _exts[ext] = '';
	    }
	    function fn2$(i, el){
	      exts.push(i);
	    }
	  };
	  Comp.prototype.inputSelect = function(o){
	    var _this, file;
	    _this = this;
	    this.action({
	      type: 'INPUT_SELECT'
	    });
	    this.input[o.entity] = o.file;
	    file = this.inputs[o.entity][o.file];
	    this.fileSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.name
	    });
	    this.extSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.ext
	    });
	    this.modeSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.mode
	    });
	    this.editorSetMode({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.mode
	    });
	    this.editorSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: file.src
	    });
	    this.lintSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: false
	    });
	  };
	  Comp.prototype.inputCreate = function(o){
	    var _this, _sample, sample;
	    _this = this;
	    this.action({
	      type: 'INPUT_CREATE'
	    });
	    _sample = 'Template - HTML, CSS, JS';
	    sample = this.samples[_sample]['input_' + o.entity]['index'];
	    this.inputs[o.entity][o.file] = {
	      name: o.file,
	      src: o.src || '\r\n\r\n',
	      ext: o.ext || sample.ext,
	      mode: o.mode || sample.mode
	    };
	    this.fileCreate({
	      context: 'inputs',
	      entity: o.entity,
	      value: o.file
	    });
	  };
	  Comp.prototype.inputUpdate = function(o){
	    var _this, file, inputFile, mode;
	    _this = this;
	    this.action({
	      type: 'INPUT_UPDATE'
	    });
	    file = o.file || this.fileGetValue({
	      entity: o.entity
	    });
	    inputFile = this.inputs[o.entity][file];
	    if (inputFile) {
	      if (o.name) {
	        inputFile.name = o.name || o.file;
	      }
	      if (o.src) {
	        inputFile.src = o.src;
	      }
	      if (o.ext) {
	        inputFile.ext = o.ext;
	        this.editorSetMode({
	          context: 'inputs',
	          entity: o.entity,
	          ext: o.ext
	        });
	        mode = this.editorGetMode({
	          context: 'inputs',
	          entity: o.entity
	        });
	        inputFile.mode = mode;
	        this.modeSetValue({
	          context: 'inputs',
	          entity: o.entity,
	          value: mode
	        });
	      }
	      if (o.mode) {
	        inputFile.mode = o.mode;
	        this.editorSetMode({
	          context: 'inputs',
	          entity: o.entity,
	          value: o.mode
	        });
	      }
	      this.inputSave();
	    }
	  };
	  Comp.prototype.inputDestroy = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INPUT_DESTROY'
	    });
	    if (o.file !== 'index') {
	      delete this.inputs[o.entity][o.file];
	      this.fileDestroy({
	        context: 'inputs',
	        entity: o.entity,
	        value: o.file
	      });
	      this.inputSelect({
	        entity: o.entity,
	        file: 'index'
	      });
	    } else {
	      _this = this;
	      this.action({
	        type: 'INIT_INDEX CANNOT BE DELETED'
	      });
	    }
	  };
	  Comp.prototype.inputFind = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INPUT_FIND'
	    });
	    return this.inputs[o.entity][o.file];
	  };
	  Comp.prototype.inputFindAll = function(o){
	    var _this, inputs;
	    _this = this;
	    this.action({
	      type: 'INPUT_FIND_ALL'
	    });
	    inputs = this.inputs[o.entity];
	    return inputs;
	  };
	  Comp.prototype.inputReset = function(o){
	    var _this, _sample, sample;
	    _this = this;
	    this.action({
	      type: 'INPUT_RESET'
	    });
	    this.fileClear({
	      context: 'inputs',
	      entity: o.entity
	    });
	    this.fileCreate({
	      context: 'inputs',
	      entity: o.entity,
	      value: 'index'
	    });
	    _sample = 'Template - HTML, CSS, JS';
	    sample = this.samples[_sample]['input_' + o.entity]['index'];
	    this.input[o.entity] = 'index';
	    this.inputs[o.entity] = {
	      index: {
	        name: sample.name,
	        src: '\r\n\r\n',
	        ext: sample.ext,
	        mode: sample.mode
	      }
	    };
	    this.inputSelect({
	      entity: o.entity,
	      file: 'index'
	    });
	  };
	  Comp.prototype.inputMakeContainer = function(o){
	    var _this, context;
	    _this = this;
	    this.action({
	      type: 'INPUT_MAKE_CONTAINER'
	    });
	    context = 'inputs';
	    this.editors[context][o.entity] = this.editorMakeContainer(o.editor);
	    this.files[context][o.entity] = this.fileMakeContainer(o.file);
	    this.exts[context][o.entity] = this.extMakeContainer(o.ext);
	    this.modes[context][o.entity] = this.modeMakeContainer(o.mode);
	  };
	  Comp.prototype.inputOnFileChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INPUT_ON_FILE_CHANGE'
	    });
	    if (o.value !== '') {
	      this.inputSelect({
	        entity: o.entity,
	        file: o.value
	      });
	    } else {
	      o.value = 'index';
	    }
	    return o.value;
	  };
	  Comp.prototype.inputOnFileCreate = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INPUT_ON_FILE_CREATE'
	    });
	    this.inputCreate({
	      entity: o.entity,
	      file: o.value
	    });
	    return {
	      value: o.value,
	      label: o.value
	    };
	  };
	  Comp.prototype.inputOnFileCreateModal = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INPUT_ON_FILE_CREATE_MODAL'
	    });
	    if (!this.inputs[o.entity][o.file]) {
	      this.inputCreate({
	        entity: o.entity,
	        file: o.file
	      });
	      this.inputSelect({
	        entity: o.entity,
	        file: o.file
	      });
	    }
	  };
	  Comp.prototype.inputOnExtChange = function(o){
	    var _this, file, _sample, sample;
	    _this = this;
	    this.action({
	      type: 'INPUT_ON_EXT_CHANGE'
	    });
	    file = this.fileGetValue({
	      context: 'inputs',
	      entity: o.entity
	    });
	    _sample = 'Template - HTML, CSS, JS';
	    sample = this.samples[_sample]['input_' + o.entity]['index'];
	    if (o.value !== '') {
	      this.inputUpdate({
	        entity: o.entity,
	        file: file,
	        ext: o.value
	      });
	    } else {
	      o.value = sample.ext;
	    }
	    return o.value;
	  };
	  Comp.prototype.inputOnModeChange = function(o){
	    var _this, file, _sample, sample;
	    _this = this;
	    this.action({
	      type: 'INPUT_ON_MODE_CHANGE'
	    });
	    file = this.fileGetValue({
	      context: 'inputs',
	      entity: o.entity
	    });
	    _sample = 'Template - HTML, CSS, JS';
	    sample = this.samples[_sample]['input_' + o.entity]['index'];
	    if (o.value !== '') {
	      this.inputUpdate({
	        entity: o.entity,
	        file: file,
	        mode: o.value
	      });
	    } else {
	      o.value = sample.mode;
	    }
	    return o.value;
	  };
	  Comp.prototype.inputOnEditorChange = function(o){
	    var _this, file, value;
	    _this = this;
	    this.action({
	      type: 'INPUT_ON_EDITOR_CHANGE'
	    });
	    file = this.fileGetValue({
	      context: 'inputs',
	      entity: o.entity
	    });
	    value = this.editorGetValue({
	      context: 'inputs',
	      entity: o.entity
	    });
	    this.inputUpdate({
	      entity: o.entity,
	      file: file,
	      src: value
	    });
	    this.inputSave({
	      entity: o.entity
	    });
	    this.inputRun({
	      entity: o.entity
	    });
	    this.debounces.inputs[o.entity] = true;
	    setTimeout(function(){
	      _this.debounces.inputs[o.entity] = false;
	    }, 3000);
	    this.inputTyping();
	  };
	  Comp.prototype.inputTyping = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INPUT_TYPING'
	    });
	    this.typing++;
	    setTimeout(function(){
	      if (_this.typing > 0) {
	        _this.typing--;
	      }
	    }, 1000);
	  };
	  Comp.prototype.inputOnLintChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INPUT_ON_LINT_CHANGE'
	    });
	    this.editorToggleLint({
	      context: 'inputs',
	      entity: o.entity,
	      state: o.value
	    });
	  };
	  Comp.prototype.inputSave = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INPUT_SAVE'
	    });
	    if (this.saveIsAuto && this.saveIsAuto()) {
	      setTimeout(function(){
	        _this.saveById();
	      }, 300);
	    }
	  };
	  Comp.prototype.inputRun = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INPUT_RUN'
	    });
	    if (this.runIsAuto && this.runIsAuto()) {
	      setTimeout(function(){
	        _this.runFront({
	          entity: o.entity
	        });
	      }, 300);
	    }
	  };
	  Comp.prototype.inputLoad = function(o){
	    var _this, i$, ref$;
	    _this = this;
	    this.action({
	      type: 'INPUT_LOAD'
	    });
	    for (i$ in ref$ = o.inputs) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(entity, files){
	      this.inputs[entity] = files;
	      this.inputLoadFiles({
	        entity: entity,
	        files: files
	      });
	      this.inputSelect({
	        entity: entity,
	        file: 'index'
	      });
	    }
	  };
	  Comp.prototype.inputLoadFiles = function(o){
	    var _this, i$, ref$;
	    _this = this;
	    this.action({
	      type: 'INPUT_LOAD_FILES'
	    });
	    this.fileClear({
	      context: 'inputs',
	      entity: o.entity
	    });
	    for (i$ in ref$ = o.files) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(file, props){
	      this.fileCreate({
	        context: 'inputs',
	        entity: o.entity,
	        value: file
	      });
	    }
	  };
	  Comp.prototype.inputLoadAuto = function(o){
	    var _this, i$, ref$;
	    _this = this;
	    this.action({
	      type: 'INPUT_LOAD_AUTO'
	    });
	    for (i$ in ref$ = o.inputs) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(entity, files){
	      var i$;
	      this.inputs[entity] = {};
	      for (i$ in files) {
	        (fn$.call(this, i$, files[i$]));
	      }
	      this.inputLoadFilesAuto({
	        entity: entity,
	        files: files
	      });
	      this.inputLoadOthersAuto({
	        entity: entity
	      });
	      function fn$(file, props){
	        this.inputs[entity][file] = props;
	      }
	    }
	  };
	  Comp.prototype.inputLoadFilesAuto = function(o){
	    var _this, filesGlobal, filesLocal, i$;
	    _this = this;
	    this.action({
	      type: 'INPUT_LOAD_FILES_AUTO'
	    });
	    filesGlobal = o.files;
	    filesLocal = this.fileList({
	      context: 'inputs',
	      entity: o.entity
	    });
	    for (i$ in filesGlobal) {
	      (fn$.call(this, i$, filesGlobal[i$]));
	    }
	    for (i$ in filesLocal) {
	      (fn1$.call(this, i$, filesLocal[i$]));
	    }
	    function fn$(file, props){
	      this.fileCreate({
	        context: 'inputs',
	        entity: o.entity,
	        value: file
	      });
	    }
	    function fn1$(file, props){
	      if (!filesGlobal.hasOwnProperty(file)) {
	        this.fileDestroy({
	          context: 'inputs',
	          entity: o.entity,
	          value: file
	        });
	        this.inputSelect({
	          entity: o.entity,
	          file: 'index'
	        });
	      }
	    }
	  };
	  Comp.prototype.inputLoadOthersAuto = function(o){
	    var _this, i$, ref$;
	    _this = this;
	    this.action({
	      type: 'INPUT_LOAD_EDITORS_AUTO'
	    });
	    for (i$ in ref$ = this.inputs) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(entity, props){
	      var input, input_src, input_ext, input_mode, editor_val, ext_val, mode_val;
	      input = this.input[entity];
	      input_src = this.inputs[entity][input].src;
	      input_ext = this.inputs[entity][input].ext;
	      input_mode = this.inputs[entity][input].mode;
	      editor_val = this.editorGetValue({
	        context: 'inputs',
	        entity: entity
	      });
	      ext_val = this.extGetValue({
	        context: 'inputs',
	        entity: entity
	      });
	      mode_val = this.modeGetValue({
	        context: 'inputs',
	        entity: entity
	      });
	      if (input_src !== editor_val) {
	        if (!this.debounces.inputs[o.entity] && this.typing === 0) {
	          this.editorSetValue({
	            context: 'inputs',
	            entity: entity,
	            value: input_src
	          });
	        }
	      }
	      if (input_ext !== ext_val) {
	        this.extSetValue({
	          context: 'inputs',
	          entity: entity,
	          value: input_ext
	        });
	        this.editorSetMode({
	          context: 'inputs',
	          entity: entity,
	          ext: input_ext
	        });
	      }
	      if (input_mode !== mode_val) {
	        this.modeSetValue({
	          context: 'inputs',
	          entity: entity,
	          value: input_mode
	        });
	      }
	    }
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\input.ls.map


/***/ },
/* 50 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initOutput = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_OUTPUT'
	    });
	    this.results.outputs.index = this.resultMakeContainer(this.props.main.result.outputs.index);
	    this.resultSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: 'frame'
	    });
	    this.exts.outputs.index = this.extMakeContainer(this.props.main.exts.outputs.index);
	    this.extSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: 'html'
	    });
	    this.modes.outputs.index = this.modeMakeContainer(this.props.main.modes.outputs.index);
	    this.modeSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: 'text/html'
	    });
	    this.outputMakeContainerFrame();
	  };
	  Comp.prototype.outputRun = function(o){
	    var _this, results;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_RUN'
	    });
	    results = {
	      frame: function(){
	        _this.outputRunFrame(o);
	      },
	      editor: function(){
	        _this.outputRunEditor(o);
	      }
	    };
	    results[o.result]();
	  };
	  Comp.prototype.outputRunFrame = function(o){
	    var _this, content, ext, actions;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_RUN_FRAME'
	    });
	    content = o.src;
	    if (o.src) {
	      content = this.include({
	        content: content,
	        entity: 'html',
	        tag_end: ':not(script):not(style)'
	      });
	      content = this.requireHead({
	        content: content
	      });
	      content = this.include({
	        content: content,
	        entity: 'css',
	        tag: 'style'
	      });
	      content = this.include({
	        content: content,
	        entity: 'js',
	        tag: 'script'
	      });
	      content = this.require({
	        content: content,
	        entity: 'js',
	        tag: 'script'
	      });
	    }
	    if (o['export']) {
	      o['export']({
	        src: content
	      });
	    } else if (o.editor) {
	      ext = this.extGetValue({
	        context: 'outputs',
	        entity: 'index'
	      });
	      actions = {
	        'html': function(content){
	          return content;
	        },
	        'css': function(content){
	          return _this.outputContentInner({
	            content: content,
	            tag: 'style'
	          });
	        },
	        'js': function(content){
	          return _this.outputContentInner({
	            content: content,
	            tag: 'script'
	          });
	        }
	      };
	      content = actions[ext](content);
	      this.editorSetValue({
	        context: 'outputs',
	        entity: 'index',
	        value: content
	      });
	    } else {
	      this.frameWrite({
	        write: content
	      });
	      this.frameMakeUrlhashListenable({
	        onHashChange: function(){
	          var hashurl;
	          hashurl = this.window.location.hash;
	          _this.urlhashCreate({
	            context: 'outputs',
	            entity: 'index',
	            value: hashurl
	          });
	        }
	      });
	    }
	  };
	  Comp.prototype.outputContentInner = function(o){
	    var _this, dom, tags, content, i$, len$;
	    _this = this;
	    this.action({
	      type: 'RUN_GET_TAG_LIST'
	    });
	    dom = new DOMParser().parseFromString(o.content, 'text/html');
	    tags = dom.querySelectorAll(o.tag);
	    content = [];
	    for (i$ = 0, len$ = tags.length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, tags[i$]));
	    }
	    return content.join('');
	    function fn$(i, el){
	      content.push(el.innerHTML);
	    }
	  };
	  Comp.prototype.outputRunEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_RUN_EDITOR'
	    });
	    o.editor = true;
	    this.outputRunFrame(o);
	  };
	  Comp.prototype.outputGetProps = function(o){
	    var _this, props;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_GET_PROPS'
	    });
	    props = {
	      result: this.resultGetValue({
	        context: 'outputs',
	        entity: 'index'
	      }),
	      ext: this.extGetValue({
	        context: 'outputs',
	        entity: 'index'
	      })
	    };
	    return props;
	  };
	  Comp.prototype.outputReset = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_RESET'
	    });
	    delete this.editors.outputs.index;
	    delete this.frames.outputs.index;
	    delete this.urlhashes.outputs.index;
	  };
	  Comp.prototype.outputMakeContainerFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_MAKE_CONTAINER_FRAME'
	    });
	    this.extSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: 'html'
	    });
	    this.extDisable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.modeSetValue({
	      context: 'outputs',
	      entity: 'index',
	      ext: 'html'
	    });
	    this.modeDisable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.lintSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: false
	    });
	    this.lintDisable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.frameWriteCustom({
	      id: 'content__output__index__holder',
	      content: '<iframe id="content__output__index__frame"></iframe>'
	    });
	    this.outputReset();
	    this.urlhashes.outputs.index = this.urlhashMakeContainer({
	      context: 'outputs',
	      entity: 'index',
	      id: 'content__output__index__urlhash',
	      options: [{
	        value: '#/'
	      }],
	      onChange: 'outputOnUrlhashChange',
	      onCreate: 'outputOnUrlhashCreate'
	    });
	    this.urlhashEnable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.urlhashEnableButton({
	      id: 'content__output__index__urlhash__button'
	    });
	  };
	  Comp.prototype.outputMakeContainerEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_MAKE_CONTAINER_EDITOR'
	    });
	    this.extEnable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.modeEnable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.lintEnable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.urlhashDisable({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.urlhashClear({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this.urlhashDisableButton({
	      id: 'content__output__index__urlhash__button'
	    });
	    this.frameWriteCustom({
	      id: 'content__output__index__holder',
	      content: '<textarea id="content__output__index__editor"></textarea>'
	    });
	    this.outputReset();
	    this.editors.outputs.index = this.editorMakeContainer({
	      context: 'outputs',
	      entity: 'index',
	      id: 'content__output__index__editor',
	      type: 'text/html',
	      ext: 'html'
	    });
	  };
	  Comp.prototype.outputOnResultChange = function(o){
	    var _this, run;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_ON_RUN_CHANGE'
	    });
	    run = {
	      frame: function(){
	        _this.outputMakeContainerFrame();
	      },
	      editor: function(){
	        _this.outputMakeContainerEditor();
	      }
	    };
	    run[o.value]();
	  };
	  Comp.prototype.outputOnUrlhashChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_ON_URLHASH_CHANGE'
	    });
	    this.frameSetUrlhash({
	      value: o.value
	    });
	  };
	  Comp.prototype.outputOnUrlhashCreate = function(o){
	    var _this, woHashUrl;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_ON_URLHASH_CREATE'
	    });
	    woHashUrl = o.value.lastIndexOf('#/', 0 === 0);
	    if (woHashUrl) {
	      o.value = '#/';
	    }
	    return {
	      value: o.value,
	      label: o.value
	    };
	  };
	  Comp.prototype.outputOnExtChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_ON_EXT_CHANGE'
	    });
	    this.modeSetValue({
	      context: 'outputs',
	      entity: 'index',
	      ext: o.value
	    });
	    this.editorSetMode({
	      context: 'outputs',
	      entity: 'index',
	      ext: o.value
	    });
	    return o.value;
	  };
	  Comp.prototype.outputOnModeChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_ON_MODE_CHANGE'
	    });
	    this.editorSetMode({
	      context: 'outputs',
	      entity: 'index',
	      value: o.value
	    });
	    return o.value;
	  };
	  Comp.prototype.outputOnLintChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'OUTPUT_ON_LINT_CHANGE'
	    });
	    this.editorToggleLint({
	      context: 'outputs',
	      entity: o.entity,
	      state: o.value
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\output.ls.map


/***/ },
/* 51 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initScript = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_SCRIPT'
	    });
	    this.onloads = {
	      'html': function(o){},
	      'css': function(o){},
	      'js': function(o){},
	      'md': function(o){},
	      'jade': function(o){},
	      'less': function(o){
	        window.less.renderSync = function(src){
	          var css;
	          css = '';
	          this.render(src, {}, function(err, result){
	            css = result.css;
	          });
	          return css;
	        };
	      },
	      'sass': function(o){},
	      'styl': function(o){
	        var stylus;
	        stylus = window['require']('stylus');
	        stylus.renderSync = function(src){
	          var css;
	          css = '';
	          this.render(src, {}, function(err, result){
	            css = result;
	          });
	          return css;
	        };
	        window.stylus = stylus;
	      },
	      'ts': function(o){},
	      'babel.js': function(o){},
	      'cs': function(o){},
	      'ls': function(o){
	        window.LiveScript = window['require']('LiveScript');
	      }
	    };
	    this.loadeds = {
	      'html': function(o){
	        return true;
	      },
	      'css': function(o){
	        return true;
	      },
	      'js': function(o){
	        return true;
	      },
	      'md': function(o){
	        if (window.marked) {
	          return true;
	        } else {
	          return false;
	        }
	      },
	      'jade': function(o){
	        if (window.jade) {
	          return true;
	        } else {
	          return false;
	        }
	      },
	      'less': function(o){
	        if (window.less) {
	          return true;
	        } else {
	          return false;
	        }
	      },
	      'sass': function(o){
	        if (window.Sass) {
	          return true;
	        } else {
	          return false;
	        }
	      },
	      'styl': function(o){
	        if (window.stylus) {
	          return true;
	        } else {
	          return false;
	        }
	      },
	      'babel.js': function(o){
	        if (window.Babel) {
	          return true;
	        } else {
	          return false;
	        }
	      },
	      'ts': function(o){
	        if (window.ts) {
	          return true;
	        } else {
	          return false;
	        }
	      },
	      'cs': function(o){
	        if (window.CoffeeScript) {
	          return true;
	        } else {
	          return false;
	        }
	      },
	      'ls': function(o){
	        if (window.LiveScript) {
	          return true;
	        } else {
	          return false;
	        }
	      }
	    };
	    this.scriptCheckExtsLoaded();
	  };
	  Comp.prototype.scriptIsExtsLoaded = function(o){
	    var _this, all, i$, ref$, len$;
	    _this = this;
	    this.action({
	      type: 'SCRIPT_IS_EXTS_LOADED'
	    });
	    all = true;
	    for (i$ = 0, len$ = (ref$ = o.exts).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    return all;
	    function fn$(i, el){
	      if (!this.scripts[el]) {
	        all = false;
	      }
	    }
	  };
	  Comp.prototype.scriptCheckExtsLoaded = function(o){
	    var _this, i$, ref$, results$ = [];
	    _this = this;
	    this.action({
	      type: 'SCRIPT_CHECK_EXTS_LOADED'
	    });
	    for (i$ in ref$ = this.scripts) {
	      results$.push((fn$.call(this, i$, ref$[i$])));
	    }
	    return results$;
	    function fn$(i, el){
	      var loaded;
	      loaded = this.loadeds[i]();
	      if (loaded) {
	        this.scripts[i] = true;
	        if (i === 'babel.js') {
	          i = 'babel';
	        }
	        $('#content__option__run__' + i).iCheck('check');
	        return $('#content__option__run__' + i).iCheck('disable');
	      }
	    }
	  };
	  Comp.prototype.scriptLoadExts = function(o){
	    var _this, i$, ref$, len$;
	    _this = this;
	    this.action({
	      type: 'SCRIPT_LOAD_EXTS'
	    });
	    for (i$ = 0, len$ = (ref$ = o.exts).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    function fn$(i, el){
	      var id;
	      if (!this.scripts[el]) {
	        id = this.scriptGetIdFromExt({
	          ext: el
	        });
	        this.optionRunLoadScript({
	          id: id,
	          cb: o.cb
	        });
	      }
	    }
	  };
	  Comp.prototype.scriptGetIdFromExt = function(o){
	    var _this, ids, id;
	    _this = this;
	    this.action({
	      type: 'SCRIPT_GET_ID_FROM_EXT'
	    });
	    ids = {
	      'md': 'md',
	      'jade': 'jade',
	      'less': 'less',
	      'sass': 'sass',
	      'styl': 'styl',
	      'ls': 'ls',
	      'babel.js': 'babel',
	      'ts': 'ts',
	      'cs': 'cs'
	    };
	    id = 'content__option__run__' + ids[o.ext];
	    return id;
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\script.ls.map


/***/ },
/* 52 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initInclude = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_INCLUDE'
	    });
	  };
	  Comp.prototype.include = function(o){
	    var _this, dom, tag, tag_end, includes, i$, len$, content;
	    _this = this;
	    this.action({
	      type: 'INCLUDE'
	    });
	    dom = new DOMParser().parseFromString(o.content, 'text/html');
	    tag = o.tag || '';
	    tag_end = o.tag_end || '';
	    includes = dom.querySelectorAll(tag + '[data-include]:not([data-id])' + tag_end);
	    for (i$ = 0, len$ = includes.length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, includes[i$]));
	    }
	    content = entities.decodeHTML(new XMLSerializer().serializeToString(dom));
	    return content;
	    function fn$(i, el){
	      var attrs, name, names, ext, entity, stringify, append, prepend, last, content;
	      attrs = el.attributes;
	      name = attrs['data-include'].nodeValue;
	      name = attrs['data-name'] ? attrs['data-name'].nodeValue : name;
	      names = attrs['data-include'].nodeValue.split('|');
	      ext = attrs['data-ext'] ? attrs['data-ext'].nodeValue : null;
	      entity = attrs['data-entity']
	        ? attrs['data-entity'].nodeValue
	        : o.entity;
	      stringify = attrs['data-stringify'] ? attrs['data-stringify'].nodeValue : false;
	      append = attrs['data-append'] ? attrs['data-append'].nodeValue : '';
	      prepend = attrs['data-prepend'] ? attrs['data-prepend'].nodeValue : '';
	      last = names[names.length - 1];
	      content = this.runConcatFiles({
	        entity: entity,
	        files: names
	      });
	      content = this.incrementGet({
	        content: content,
	        entity: entity,
	        name: name,
	        file: last,
	        ext: ext
	      });
	      if (stringify) {
	        content = stringify + '["' + name + '"] = ' + JSON.stringify(content) + ';';
	      }
	      el.innerHTML = prepend + content + append;
	    }
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\include.ls.map


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var require;var _Component;
	_Component = function(Comp){
	  Comp.prototype.initRequire = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_REQUIRE'
	    });
	  };
	  Comp.prototype.requireHead = function(o){
	    var _this, dom, require, script, content;
	    _this = this;
	    this.action({
	      type: 'REQUIRE_HEAD'
	    });
	    dom = new DOMParser().parseFromString(o.content, 'text/html');
	    require = dom.querySelector('[data-require]');
	    if (require) {
	      script = dom.createElement('script');
	      script.textContent = this._require;
	      dom.head.appendChild(script);
	    }
	    content = entities.decodeHTML(new XMLSerializer().serializeToString(dom));
	    return content;
	  };
	  Comp.prototype.require = function(o){
	    var _this, dom, includes, i$, len$, content;
	    _this = this;
	    this.action({
	      type: 'REQUIRE'
	    });
	    dom = new DOMParser().parseFromString(o.content, 'text/html');
	    includes = dom.querySelectorAll(o.tag + '[data-require]:not([data-id])');
	    for (i$ = 0, len$ = includes.length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, includes[i$]));
	    }
	    content = entities.decodeHTML(new XMLSerializer().serializeToString(dom));
	    return content;
	    function fn$(i, el){
	      var attrs, name, ext, content, root, _export;
	      attrs = el.attributes;
	      name = attrs['data-require'].nodeValue;
	      ext = attrs['data-ext'] ? attrs['data-ext'].nodeValue : null;
	      content = '';
	      root = attrs['data-root'] ? attrs['data-root'].nodeValue : '';
	      _export = attrs['data-export'] ? attrs['data-export'].nodeValue : '';
	      if (name !== '' && _export === '') {
	        content = this.incrementGet({
	          entity: o.entity,
	          name: name,
	          ext: ext
	        });
	        content = '_require({"' + root + name + '": [function(require, module, exports) {\n\n' + content + '\n\n},{}]})';
	      } else if (name !== '' && _export !== '') {
	        content = 'module.exports = "' + _export + '";';
	        content = '_require({"' + root + name + '": [function(require, module, exports) {\n\n' + content + '\n\n},{}]})';
	      } else {
	        content = this._require;
	      }
	      el.innerHTML = content;
	    }
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\require.ls.map


/***/ },
/* 54 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initIncrement = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_INCREMENT'
	    });
	  };
	  Comp.prototype.incrementGet = function(o){
	    var _this, entity, name, file, input, ext, content;
	    _this = this;
	    this.action({
	      type: 'INCREMENT_GET'
	    });
	    entity = o.entity;
	    name = o.name;
	    file = o.file || o.name;
	    input = this.inputFind({
	      entity: entity,
	      file: file
	    });
	    ext = o.ext || input.ext;
	    content = o.content || input.src;
	    if (this.increments[entity][name] && this.increments[entity][name].src === content && this.increments[entity][name].ext === ext) {
	      content = this.increments[entity][name].compiled;
	    } else {
	      this.increments[entity][name] = {
	        src: content,
	        ext: ext,
	        compiled: this.run({
	          entity: entity,
	          src: content,
	          type: 'compile',
	          file: file,
	          ext: ext
	        })
	      };
	      content = this.increments[entity][name].compiled;
	    }
	    return content;
	  };
	  Comp.prototype.incrementReset = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INCREMENT_RESET'
	    });
	    this.increments = {
	      html: {},
	      css: {},
	      js: {}
	    };
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\increment.ls.map


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initRun = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_RUN'
	    });
	    __webpack_require__(56)(Comp);
	    __webpack_require__(57)(Comp);
	    __webpack_require__(58)(Comp);
	    __webpack_require__(59)(Comp);
	    __webpack_require__(60)(Comp);
	    __webpack_require__(61)(Comp);
	    __webpack_require__(62)(Comp);
	    __webpack_require__(63)(Comp);
	    __webpack_require__(64)(Comp);
	    __webpack_require__(65)(Comp);
	    __webpack_require__(66)(Comp);
	    __webpack_require__(67)(Comp);
	    this.runs = {
	      'html': function(o){
	        return _this.runDefaultHtml(o);
	      },
	      'css': function(o){
	        return _this.runDefaultCss(o);
	      },
	      'js': function(o){
	        return _this.runDefaultJs(o);
	      },
	      'md': function(o){
	        return _this.runMarkdownMarked(o);
	      },
	      'jade': function(o){
	        return _this.runTemplateJade(o);
	      },
	      'less': function(o){
	        return _this.runPreprocessorLess(o);
	      },
	      'sass': function(o){
	        return _this.runPreprocessorSass(o);
	      },
	      'styl': function(o){
	        return _this.runPreprocessorStylus(o);
	      },
	      'babel.js': function(o){
	        return _this.runTranspilerBabel(o);
	      },
	      'ts': function(o){
	        return _this.runTranspilerTypescript(o);
	      },
	      'cs': function(o){
	        return _this.runTranspilerCoffeescript(o);
	      },
	      'ls': function(o){
	        return _this.runTranspilerLivescript(o);
	      }
	    };
	    $('#content__run').click(function(){
	      _this.runFront({});
	    });
	    $('#content__run__auto').iCheck({
	      checkboxClass: 'icheckbox_minimal-blue'
	    });
	  };
	  Comp.prototype.run = function(o){
	    var _this, input, params;
	    _this = this;
	    this.action({
	      type: 'RUN'
	    });
	    input = this.inputFind({
	      entity: o.entity,
	      file: o.file
	    });
	    params = {
	      type: o.type,
	      entity: o.entity,
	      name: input.name,
	      src: o.src || input.src,
	      run: o.ext || input.ext,
	      'export': o['export'] || false
	    };
	    return this.runs[params.run](params);
	  };
	  Comp.prototype.runFront = function(o){
	    var _this, input, output, exts_input, exts, isExtsLoaded, cb;
	    _this = this;
	    this.action({
	      type: 'RUN_FRONT'
	    });
	    input = this.inputGet({
	      entity: 'html'
	    });
	    output = this.outputGetProps();
	    exts_input = this.runGetTagList({
	      content: input.src,
	      tag: '[data-ext]',
	      attr: 'data-ext'
	    });
	    exts = this.inputGetExts({
	      exts: exts_input
	    });
	    isExtsLoaded = this.scriptIsExtsLoaded({
	      exts: exts
	    });
	    cb = function(){
	      var exts, isExtsLoaded, name;
	      exts = _this.inputGetExts({
	        exts: exts_input
	      });
	      isExtsLoaded = _this.scriptIsExtsLoaded({
	        exts: exts
	      });
	      name = _this.optionRunGetMode() === 'index'
	        ? 'index'
	        : input.name;
	      if (isExtsLoaded) {
	        _this.run({
	          type: output.result,
	          entity: 'html',
	          file: name,
	          'export': o['export'] || false
	        });
	      }
	    };
	    if (isExtsLoaded) {
	      cb();
	    } else {
	      this.scriptLoadExts({
	        exts: exts,
	        cb: cb
	      });
	    }
	  };
	  Comp.prototype.runDisplay = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DISPLAY'
	    });
	    o.result = o.type;
	    this.outputRun(o);
	  };
	  Comp.prototype.runConcatFiles = function(o){
	    var _this, str, i$, ref$, len$;
	    _this = this;
	    this.action({
	      type: 'RUN_CONCAT_FILES'
	    });
	    str = '';
	    for (i$ = 0, len$ = (ref$ = o.files).length; i$ < len$; ++i$) {
	      (fn$.call(this, ref$[i$]));
	    }
	    return str;
	    function fn$(fileOutput){
	      var fileInput;
	      fileInput = this.inputFind({
	        entity: o.entity,
	        file: fileOutput
	      });
	      str += fileInput.src + '\r\n';
	    }
	  };
	  Comp.prototype.runIsAuto = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_IS_AUTO'
	    });
	    return $('#content__run__auto').prop('checked');
	  };
	  Comp.prototype.runGetTagList = function(o){
	    var _this, dom, tags, list, i$, len$;
	    _this = this;
	    this.action({
	      type: 'RUN_GET_TAG_LIST'
	    });
	    dom = new DOMParser().parseFromString(o.content, 'text/html');
	    tags = dom.querySelectorAll(o.tag);
	    list = [];
	    for (i$ = 0, len$ = tags.length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, tags[i$]));
	    }
	    return list;
	    function fn$(i, el){
	      list.push(el.attributes[o.attr].nodeValue);
	    }
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run.ls.map


/***/ },
/* 56 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runDefaultHtml = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_HTML'
	    });
	    types = {
	      frame: function(){
	        _this.runDefaultHtmlFrame(o);
	      },
	      editor: function(){
	        _this.runDefaultHtmlEditor(o);
	      },
	      compile: function(){
	        return _this.runDefaultHtmlCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runDefaultHtmlFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_HTML_FRAME'
	    });
	    o.src = this.runDefaultHtmlCompile(o);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runDefaultHtmlEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_HTML_EDITOR'
	    });
	    o.src = this.runDefaultHtmlCompile(o);
	    o.ext = 'html';
	    this.runDisplay(o);
	  };
	  Comp.prototype.runDefaultHtmlCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_HTML_COMPILE'
	    });
	    return o.src;
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\default\html.ls.map


/***/ },
/* 57 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runDefaultCss = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_CSS'
	    });
	    types = {
	      frame: function(){
	        _this.runDefaultCssFrame(o);
	      },
	      editor: function(){
	        _this.runDefaultCssEditor(o);
	      },
	      compile: function(){
	        return _this.runDefaultCssCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runDefaultCssFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_CSS_FRAME'
	    });
	    o.style = this.runDefaultCssCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  Comp.prototype.runDefaultCssEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_CSS_EDITOR'
	    });
	    o.src = this.runDefaultCssCompile(o);
	    o.ext = 'css';
	    this.runDisplay(o);
	  };
	  Comp.prototype.runDefaultCssCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_CSS_COMPILE'
	    });
	    return o.src;
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\default\css.ls.map


/***/ },
/* 58 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runDefaultJs = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_JS'
	    });
	    types = {
	      frame: function(){
	        _this.runDefaultJsFrame(o);
	      },
	      editor: function(){
	        _this.runDefaultJsEditor(o);
	      },
	      compile: function(){
	        return _this.runDefaultJsCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runDefaultJsFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_JS_FRAME'
	    });
	    o.script = this.runDefaultJsCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  Comp.prototype.runDefaultJsEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_JS_EDITOR'
	    });
	    o.src = this.runDefaultJsCompile(o);
	    o.ext = 'js';
	    this.runDisplay(o);
	  };
	  Comp.prototype.runDefaultJsCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_DEFAULT_JS_COMPILE'
	    });
	    return o.src;
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\default\js.ls.map


/***/ },
/* 59 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runMarkdownMarkedJs = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_MARKDOWN_MARKED'
	    });
	    types = {
	      frame: function(){
	        _this.runMarkdownMarkedFrame(o);
	      },
	      editor: function(){
	        _this.runMarkdownMarkedEditor(o);
	      },
	      compile: function(){
	        return _this.runMarkdownMarkedCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runMarkdownMarkedFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_MARKDOWN_MARKED_FRAME'
	    });
	    o.src = marked(o.src);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runMarkdownMarkedEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_MARKDOWN_MARKED_EDITOR'
	    });
	    o.src = marked(o.src);
	    o.ext = 'html';
	    this.runDisplay(o);
	  };
	  Comp.prototype.runMarkdownMarkedCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_MARKDOWN_MARKED_COMPILE'
	    });
	    return marked(o.src);
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\markdown\marked.ls.map


/***/ },
/* 60 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runTemplateJade = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_TEMPLATE_JADE'
	    });
	    types = {
	      frame: function(){
	        _this.runTemplateJadeFrame(o);
	      },
	      editor: function(){
	        _this.runTemplateJadeEditor(o);
	      },
	      compile: function(){
	        return _this.runTemplateJadeCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runTemplateJadeFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TEMPLATE_JADE_FRAME'
	    });
	    o.src = this.runTemplateJadeCompile(o);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTemplateJadeEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TEMPLATE_JADE_EDITOR'
	    });
	    o.src = this.runTemplateJadeCompile(o);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTemplateJadeCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TEMPLATE_JADE_COMPILE'
	    });
	    return jade.render(o.src, pretty_true);
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\template\jade.ls.map


/***/ },
/* 61 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runPreprocessorLess = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_LESS'
	    });
	    types = {
	      frame: function(){
	        _this.runPreprocessorLessFrame(o);
	      },
	      editor: function(){
	        _this.runPreprocessorLessEditor(o);
	      },
	      compile: function(){
	        return _this.runPreprocessorLessCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runPreprocessorLessFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_LESS_FRAME'
	    });
	    o.src = this.runPreprocessorLessCompile(o);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runPreprocessorLessEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_LESS_EDITOR'
	    });
	    o.src = this.runPreprocessorLessCompile(o);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runPreprocessorLessCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_LESS_COMPILE'
	    });
	    return less.renderSync(o.src);
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\preprocessor\less.ls.map


/***/ },
/* 62 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runPreprocessorSass = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_SASS'
	    });
	    types = {
	      frame: function(){
	        _this.runPreprocessorSassFrame(o);
	      },
	      editor: function(){
	        _this.runPreprocessorSassEditor(o);
	      },
	      compile: function(){
	        return _this.runPreprocessorSassCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runPreprocessorSassFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_SASS_FRAME'
	    });
	    o.src = this.runPreprocessorSassCompile(o);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runPreprocessorSassEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_SASS_EDITOR'
	    });
	    o.src = this.runPreprocessorSassCompile(o);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runPreprocessorSassCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_SASS_COMPILE'
	    });
	    return Sass.compile(o.src);
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\preprocessor\sass.ls.map


/***/ },
/* 63 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runPreprocessorStylus = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_STYLUS'
	    });
	    types = {
	      frame: function(){
	        _this.runPreprocessorStylusFrame(o);
	      },
	      editor: function(){
	        _this.runPreprocessorStylusEditor(o);
	      },
	      compile: function(){
	        return _this.runPreprocessorStylusCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runPreprocessorStylusFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_STYLUS_FRAME'
	    });
	    o.src = this.runPreprocessorStylusCompile(o);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runPreprocessorStylusEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_STYLUS_EDITOR'
	    });
	    o.src = this.runPreprocessorStylusCompile(o);
	    this.runDisplay(o);
	  };
	  Comp.prototype.runPreprocessorStylusCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_PREPROCESSOR_STYLUS_COMPILE'
	    });
	    return stylus(o.src).render();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\preprocessor\stylus.ls.map


/***/ },
/* 64 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runTranspilerLivescript = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_LIVESCRIPT'
	    });
	    types = {
	      frame: function(){
	        _this.runTranspilerLivescriptFrame(o);
	      },
	      editor: function(){
	        _this.runTranspilerLivescriptEditor(o);
	      },
	      compile: function(){
	        return _this.runTranspilerLivescriptCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runTranspilerLivescriptFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_LIVESCRIPT_FRAME'
	    });
	    o.script = this.runTranspilerLivescriptCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTranspilerLivescriptEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_LIVESCRIPT_EDITOR'
	    });
	    o.src = this.runTranspilerLivescriptCompile(o);
	    o.ext = 'js';
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTranspilerLivescriptCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_LIVESCRIPT_COMPILE'
	    });
	    return LiveScript.compile(o.src, {
	      bare: true
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\transpiler\livescript.ls.map


/***/ },
/* 65 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runTranspilerTypescript = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_TYPESCRIPT'
	    });
	    types = {
	      frame: function(){
	        _this.runTranspilerTypescriptFrame(o);
	      },
	      editor: function(){
	        _this.runTranspilerTypescriptEditor(o);
	      },
	      compile: function(){
	        return _this.runTranspilerTypescriptCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runTranspilerTypescriptFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_TYPESCRIPT_FRAME'
	    });
	    o.script = this.runTranspilerTypescriptCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTranspilerTypescriptEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_TYPESCRIPT_EDITOR'
	    });
	    o.src = this.runTranspilerTypescriptCompile(o);
	    o.ext = 'js';
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTranspilerTypescriptCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_TYPESCRIPT_COMPILE'
	    });
	    return ts.transpile(o.src, {
	      jsx: ts.JsxEmit.React,
	      module: ts.ModuleKind.CommonJS
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\transpiler\typescript.ls.map


/***/ },
/* 66 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runTranspilerBabel = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_BABEL_FRAME'
	    });
	    types = {
	      frame: function(){
	        _this.runTranspilerBabelFrame(o);
	      },
	      editor: function(){
	        _this.runTranspilerBabelEditor(o);
	      },
	      compile: function(){
	        return _this.runTranspilerBabelCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runTranspilerBabelFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_BABEL_FRAME'
	    });
	    o.script = this.runTranspilerBabelCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTranspilerBabelEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_BABEL_EDITOR'
	    });
	    o.src = this.runTranspilerBabelCompile(o);
	    o.ext = 'js';
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTranspilerBabelCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_BABEL_COMPILE'
	    });
	    return Babel.transform(o.src, {
	      presets: ['es2015'],
	      plugins: ['transform-react-jsx']
	    }).code;
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\transpiler\babel.ls.map


/***/ },
/* 67 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.runTranspilerCoffeescript = function(o){
	    var _this, types;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_COFFEESCRIPT'
	    });
	    types = {
	      frame: function(){
	        _this.runTranspilerCoffeescriptFrame(o);
	      },
	      editor: function(){
	        _this.runTranspilerCoffeescriptEditor(o);
	      },
	      compile: function(){
	        return _this.runTranspilerCoffeescriptCompile(o);
	      }
	    };
	    return types[o.type]();
	  };
	  Comp.prototype.runTranspilerCoffeescriptFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_COFFEESCRIPT_FRAME'
	    });
	    o.script = this.runTranspilerCoffeescriptCompile(o);
	    o.src = false;
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTranspilerCoffeescriptEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_COFFEESCRIPT_EDITOR'
	    });
	    o.src = this.runTranspilerCoffeescriptCompile(o);
	    o.ext = 'js';
	    this.runDisplay(o);
	  };
	  Comp.prototype.runTranspilerCoffeescriptCompile = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'RUN_TRANSPILER_COFFEESCRIPT_COMPILE'
	    });
	    return CoffeeScript.compile(o.src, {
	      bare: true
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\run\transpiler\coffeescript.ls.map


/***/ },
/* 68 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initSave = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_SAVE'
	    });
	    $('#content__save').click(function(){
	      _this.saveById();
	    });
	    $('#content__save__auto').iCheck({
	      checkboxClass: 'icheckbox_minimal'
	    });
	    $('#content__save__auto').iCheck('check');
	  };
	  Comp.prototype.saveById = function(o){
	    var _this, props;
	    _this = this;
	    this.action({
	      type: 'SAVE_BY_ID'
	    });
	    if (this.id) {
	      props = {
	        id: this.id,
	        attrs: {
	          input_html: JSON.stringify(this.inputFindAll({
	            entity: 'html'
	          })),
	          input_css: JSON.stringify(this.inputFindAll({
	            entity: 'css'
	          })),
	          input_js: JSON.stringify(this.inputFindAll({
	            entity: 'js'
	          }))
	        }
	      };
	      this.dataUpdate(props);
	    }
	  };
	  Comp.prototype.saveIsAuto = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SAVE_IS_AUTO'
	    });
	    return $('#content__save__auto').prop('checked');
	  };
	  Comp.prototype.saveAutoSetValue = function(o){
	    var _this, value;
	    _this = this;
	    this.action({
	      type: 'SAVE_AUTO_SET_VALUE'
	    });
	    value = o.value === true ? 'check' : 'uncheck';
	    $('#content__save__auto').iCheck(value);
	  };
	  Comp.prototype.saveAutoGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SAVE_AUTO_GET_VALUE'
	    });
	    return $('#content__save__auto').prop('checked');
	  };
	  Comp.prototype.saveAutoEnable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SAVE_AUTO_ENABLE'
	    });
	    $('#content__save__auto').iCheck('enable');
	  };
	  Comp.prototype.saveAutoDisable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SAVE_AUTO_DISABLE'
	    });
	    $('#content__save__auto').iCheck('disable');
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\save.ls.map


/***/ },
/* 69 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initLoad = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_LOAD'
	    });
	    $('#content__load').click(function(){
	      _this.loadById();
	    });
	    $('#content__load__auto').iCheck({
	      checkboxClass: 'icheckbox_minimal'
	    });
	    $('#content__load__auto').on('ifChanged', function(){
	      var checked;
	      checked = $('#content__load__auto').prop('checked');
	      if (_this.data.autoload) {
	        _this.data.autoload(_this, checked);
	      }
	    });
	  };
	  Comp.prototype.loadById = function(o){
	    var _this, props;
	    _this = this;
	    this.action({
	      type: 'LOAD_BY_ID'
	    });
	    if (this.id) {
	      props = {
	        id: this.id,
	        cb: function(attrs){
	          var inputs;
	          inputs = {
	            html: JSON.parse(attrs.input_html),
	            css: JSON.parse(attrs.input_css),
	            js: JSON.parse(attrs.input_js)
	          };
	          _this.inputLoad({
	            inputs: inputs
	          });
	          _this.progressEnd();
	        }
	      };
	      this.progressStart();
	      return this.dataFind(props);
	    }
	  };
	  Comp.prototype.loadByIdAuto = function(o){
	    var _this, props;
	    _this = this;
	    this.action({
	      type: 'LOAD_BY_ID_AUTO'
	    });
	    if (this.id) {
	      props = {
	        id: this.id,
	        cb: function(attrs){
	          var inputs;
	          inputs = {
	            html: JSON.parse(attrs.input_html),
	            css: JSON.parse(attrs.input_css),
	            js: JSON.parse(attrs.input_js)
	          };
	          _this.inputLoadAuto({
	            inputs: inputs
	          });
	        }
	      };
	      this.dataFind(props);
	    }
	  };
	  Comp.prototype.loadReset = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LOAD_RESET'
	    });
	    this.inputReset({
	      entity: 'html'
	    });
	    this.inputReset({
	      entity: 'css'
	    });
	    this.inputReset({
	      entity: 'js'
	    });
	    this.incrementReset();
	  };
	  Comp.prototype.loadIsAuto = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LOAD_IS_AUTO'
	    });
	    return $('#content__load__auto').prop('checked');
	  };
	  Comp.prototype.loadAutoSetValue = function(o){
	    var _this, value;
	    _this = this;
	    this.action({
	      type: 'LOAD_AUTO_SET_VALUE'
	    });
	    value = o.value === true ? 'check' : 'uncheck';
	    $('#content__load__auto').iCheck(value);
	  };
	  Comp.prototype.loadAutoGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LOAD_AUTO_GET_VALUE'
	    });
	    return $('#content__load__auto').prop('checked');
	  };
	  Comp.prototype.loadAutoEnable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LOAD_AUTO_ENABLE'
	    });
	    $('#content__load__auto').iCheck('enable');
	  };
	  Comp.prototype.loadAutoDisable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LOAD_AUTO_DISABLE'
	    });
	    $('#content__load__auto').iCheck('disable');
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\main\load.ls.map


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initAdmin = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_ADMIN'
	    });
	    this.admin = this.props.admin;
	    __webpack_require__(71)(Comp);
	    __webpack_require__(72)(Comp);
	    __webpack_require__(73)(Comp);
	    __webpack_require__(74)(Comp);
	    __webpack_require__(75)(Comp);
	    __webpack_require__(76)(Comp);
	    __webpack_require__(77)(Comp);
	    __webpack_require__(78)(Comp);
	    __webpack_require__(79)(Comp);
	    this.initSrc();
	    this.initRoute();
	    this.initSelect();
	    this.initSample();
	    this.initView();
	    this.initHeader();
	    this.initElement();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin.ls.map


/***/ },
/* 71 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initSrc = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_SRC'
	    });
	  };
	  Comp.prototype.srcMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'SRC_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              value: value,
	              option_store_id: o.option_store_id,
	              option_store_inputs: o.option_store_inputs
	            });
	          }
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.srcSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SRC_SET_VALUE'
	    });
	    this.src.setValue(o.value, function(){});
	  };
	  Comp.prototype.srcGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SRC_GET_VALUE'
	    });
	    return this.src.getValue();
	  };
	  Comp.prototype.srcEnable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SRC_ENABLE'
	    });
	    this.src.enable();
	  };
	  Comp.prototype.srcDisable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SRC_DISABLE'
	    });
	    this.src.disable();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin\src.ls.map


/***/ },
/* 72 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initRoute = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_ROUTE'
	    });
	  };
	  Comp.prototype.routeMake = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ROUTE_MAKE'
	    });
	    this.router = Router(o.routes);
	    this.router.init();
	  };
	  Comp.prototype.routeSet = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ROUTE_SET'
	    });
	    if (this.router.setRoute) {
	      this.router.setRoute(o.route + '');
	    }
	  };
	  Comp.prototype.routeClear = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ROUTE_CLEAR'
	    });
	    if (this.router.setRoute) {
	      this.router.setRoute('');
	    }
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin\route.ls.map


/***/ },
/* 73 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initSelect = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_SELECT'
	    });
	  };
	  Comp.prototype.selectMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'SELECT_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        valueField: 'id',
	        labelField: 'name',
	        sortField: 'id',
	        searchField: ['id', 'name'],
	        options: [],
	        sortDirection: 'desc',
	        maxItems: 1,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              value: value
	            });
	          }
	        },
	        create: function(value){
	          if (o.onCreate) {
	            return value = _this[o.onCreate]({
	              value: value
	            });
	          }
	        },
	        render: {
	          item: function(item, escape){
	            return _this.selectRenderValue({
	              item: item
	            });
	          },
	          option: function(item, escape){
	            return _this.selectRenderOption({
	              item: item
	            });
	          }
	        }
	      };
	    };
	    if (o.refreshable) {
	      this.selectMakeRefreshable({
	        id: o.id + '__refresh',
	        refreshable: o.refreshable
	      });
	    }
	    if (o.creatable) {
	      this.selectMakeCreatable({
	        id: o.id + '__create',
	        creatable: o.creatable
	      });
	    }
	    if (o.updatable) {
	      this.selectMakeUpdatable({
	        id: o.id + '__edit',
	        id_edit: o.id,
	        updatable: o.updatable
	      });
	    }
	    if (o.clonable) {
	      this.selectMakeClonable({
	        id: o.id + '__clone',
	        id_edit: o.id,
	        clonable: o.clonable,
	        options: o.options_clone
	      });
	    }
	    if (o.replaceable) {
	      this.selectMakeReplaceable({
	        id: o.id + '__replace',
	        id_edit: o.id,
	        replaceable: o.replaceable
	      });
	    }
	    if (o.destroyable) {
	      this.selectMakeDestroyable({
	        id: o.id + '__destroy',
	        destroyable: o.destroyable
	      });
	    }
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.selectMakeRefreshable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_MAKE_REFRESHABLE'
	    });
	    $('#' + o.id).click(function(){
	      var cb;
	      cb = function(){};
	      _this[o.refreshable]({
	        cb: cb
	      });
	    });
	  };
	  Comp.prototype.selectMakeDestroyable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_MAKE_DESTROYABLE'
	    });
	    $('#' + o.id).click(function(){
	      var value;
	      value = _this.selectGetValue();
	      _this[o.destroyable]({
	        id: value
	      });
	    });
	  };
	  Comp.prototype.selectMakeCreatable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_MAKE_CREATABLE'
	    });
	    $('#' + o.id + '__button').click(function(){
	      var data;
	      $('#' + o.id + '__modal').modal('hide');
	      data = $('#' + o.id + '__text').val();
	      _this[o.creatable]({
	        value: data
	      });
	      $('#' + o.id + '__text').val('');
	    });
	  };
	  Comp.prototype.selectMakeUpdatable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_MAKE_UPDATABLE'
	    });
	    $('#' + o.id + '__button').click(function(){
	      var data;
	      $('#' + o.id + '__modal').modal('hide');
	      data = $('#' + o.id + '__text').val();
	      _this[o.updatable]({
	        attrs: {
	          name: data
	        }
	      });
	      $('#' + o.id + '__text').val('');
	    });
	  };
	  Comp.prototype.selectMakeClonable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_MAKE_CLONABLE'
	    });
	    $('#' + o.id + '__button').click(function(){
	      $('#' + o.id_edit + '__edit__modal').modal('hide');
	      _this[o.clonable]({
	        options: o.options
	      });
	    });
	  };
	  Comp.prototype.selectMakeReplaceable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_MAKE_REPLACEABLE'
	    });
	    $('#' + o.id + '__button').click(function(){
	      $('#' + o.id_edit + '__edit__modal').modal('hide');
	      _this[o.replaceable]({});
	    });
	  };
	  Comp.prototype.selectSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_SET_VALUE'
	    });
	    this.select.setValue(o.value, function(){});
	  };
	  Comp.prototype.selectGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_GET_VALUE'
	    });
	    return this.select.getValue();
	  };
	  Comp.prototype.selectClear = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_CLEAR'
	    });
	    if (this.select.clearOptions) {
	      this.select.clearOptions();
	    }
	  };
	  Comp.prototype.selectCreate = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_CREATE'
	    });
	    this.select.addOption(o.option);
	  };
	  Comp.prototype.selectDestroy = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_DESTROY'
	    });
	    this.select.removeOption(o.value);
	  };
	  Comp.prototype.selectRenderValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_RENDER_VALUE'
	    });
	    return '<div>' + '<span>' + (o.item.id + '').substring(0, 8) + ' :</span> ' + '<span>' + (o.item.name || '') + '</span> ' + '</div>';
	  };
	  Comp.prototype.selectRenderOption = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_RENDER_OPTION'
	    });
	    return '<div>' + '<span>' + (o.item.id + '').substring(0, 8) + ' :</span> ' + '<span>' + (o.item.name || '') + '</span> ' + '</div>';
	  };
	  Comp.prototype.selectReset = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SELECT_RESET'
	    });
	    this.select.destroy();
	    this.select = null;
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin\select.ls.map


/***/ },
/* 74 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initSample = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_SAMPLE'
	    });
	  };
	  Comp.prototype.sampleMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'SAMPLE_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              value: value
	            });
	          }
	        },
	        create: false,
	        render: {
	          item: function(item, escape){
	            return _this.sampleRenderValue({
	              item: item
	            });
	          },
	          option: function(item, escape){
	            return _this.sampleRenderOption({
	              item: item
	            });
	          }
	        }
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.sampleSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SAMPLE_SET_VALUE'
	    });
	    this.sample.setValue(o.value, function(){});
	  };
	  Comp.prototype.sampleGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'SAMPLE_GET_VALUE'
	    });
	    return this.sample.getValue();
	  };
	  Comp.prototype.sampleRefresh = function(o){
	    var _this, i$, ref$, len$, i, el, option;
	    _this = this;
	    this.action({
	      type: 'SAMPLE_REFRESH'
	    });
	    this.sample.clearOptions();
	    for (i$ = 0, len$ = (ref$ = o.options).length; i$ < len$; ++i$) {
	      i = i$;
	      el = ref$[i$];
	      option = {
	        value: el.value
	      };
	      this.sample.addOption(option);
	    }
	    return this.sampleSetValue({
	      value: o.value || o.options[0]
	    });
	  };
	  Comp.prototype.sampleRenderValue = function(o){
	    var _this, value, _value, _id, _name;
	    _this = this;
	    this.action({
	      type: 'SAMPLE_RENDER_VALUE'
	    });
	    value = o.item.value;
	    _value = '';
	    if (value === 'Clone' && this.id !== null) {
	      _id = (this.id + '').substring(0, 8);
	      _name = this.name ? ' : ' + (this.name + '').substring(0, 8) : '';
	      _value = ' - ' + _id + _name;
	    }
	    return '<div>' + '<span>' + value + _value + '</span> ' + '</div>';
	  };
	  Comp.prototype.sampleRenderOption = function(o){
	    var _this, value, _value, _id, _name;
	    _this = this;
	    this.action({
	      type: 'SAMPLE_RENDER_OPTION'
	    });
	    value = o.item.value;
	    _value = '';
	    if (value === 'Clone' && this.id !== null) {
	      _id = (this.id + '').substring(0, 8);
	      _name = this.name ? ' : ' + (this.name + '').substring(0, 8) : '';
	      _value = ' - ' + _id + _name;
	    }
	    return '<div>' + '<span>' + value + _value + '</span> ' + '</div>';
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin\sample.ls.map


/***/ },
/* 75 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initView = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_VIEW'
	    });
	  };
	  Comp.prototype.viewMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'VIEW_MAKE_CONTAINER'
	    });
	    _this = this;
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            value = _this[o.onChange]({
	              value: value
	            });
	          }
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.viewSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'VIEW_SET_VALUE'
	    });
	    this.view.setValue(o.value, function(){});
	  };
	  Comp.prototype.viewGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'VIEW_GET_VALUE'
	    });
	    return this.view.getValue();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin\view.ls.map


/***/ },
/* 76 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initHeader = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_HEADER'
	    });
	  };
	  Comp.prototype.headerSet = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'HEADER_SET:'
	    });
	    this.headerSetIdName({
	      id: o.id || this.id,
	      name: o.name || this.name
	    });
	    this.headerSetSaveLoad({
	      save: o.id || this.id,
	      load: o.id || this.id
	    });
	  };
	  Comp.prototype.headerSetIdName = function(o){
	    var _this, id, name;
	    _this = this;
	    this.action({
	      type: 'HEADER_SET_ID_NAME'
	    });
	    id = o.id || this.id ? (o.id || this.id) + ' : ' : '';
	    name = o.name || this.name ? o.name || this.name : '';
	    $('#header__id').html(id + name);
	    $('#content__admin__select__edit__text').val(name);
	  };
	  Comp.prototype.headerSetSaveLoad = function(o){
	    var _this, save, load;
	    _this = this;
	    this.action({
	      type: 'HEADER_SET_SAVE_LOAD'
	    });
	    save = o.save || this.id ? false : true;
	    load = o.load || this.id ? false : true;
	    $('#content__save').prop('disabled', save);
	    $('#content__load').prop('disabled', load);
	    if (save) {
	      this.saveAutoDisable();
	    } else {
	      this.saveAutoEnable();
	    }
	    if (load) {
	      this.loadAutoDisable();
	    } else {
	      this.loadAutoEnable();
	    }
	  };
	  Comp.prototype.headerSetEditModal = function(o){
	    var _this, value;
	    _this = this;
	    this.action({
	      type: 'HEADER_SET_MODAL_CLONE'
	    });
	    value = o.value || this.id + ' : ' + this.name;
	    $('#content__admin__select__' + o.id + '__text').val(value);
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin\header.ls.map


/***/ },
/* 77 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.treeDataMakeContainer = function(o){
	    this.treeDataMakeContainerJt(o);
	  };
	  Comp.prototype.treeDataMakeEventable = function(o){
	    this.treeDataMakeEventableJqJt(o);
	  };
	  Comp.prototype.treeDataMakeSearchable = function(o){
	    this.treeDataMakeSearchableJq(o);
	  };
	  Comp.prototype.treeDataMakeRefreshable = function(o){
	    this.treeDataMakeRefreshableJq(o);
	  };
	  Comp.prototype.treeDataRefresh = function(o){
	    this.treeDataRefreshJq(o);
	  };
	  Comp.prototype.treeDataGetMenuFunc = function(o){
	    return this.treeDataGetMenuFuncJqJt(o);
	  };
	  Comp.prototype.treeDataMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'TREE_DATA_MAKE_CONTAINER'
	    });
	    config = {
	      core: {
	        check_callback: true,
	        strings: {
	          'New node': 'new_node'
	        }
	      },
	      plugins: ['search', 'contextmenu', 'sort'],
	      contextmenu: {
	        items: this.treeDataGetMenuFunc()
	      }
	    };
	    $('#content__tree').jstree(config);
	    if (o.eventable) {
	      _this[o.eventable](o);
	    }
	    if (o.searchable) {
	      _this[o.searchable](o);
	    }
	    return this.elementRefresh();
	  };
	  Comp.prototype.treeDataMakeEventable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'TREE_DATA_MAKE_EVENTABLE'
	    });
	    $('#content__tree').on('select_node.jstree', function(e, elem){
	      return _this.elementSelectById({
	        id: elem.node.li_attr.data_id
	      });
	    });
	    return $('#content__tree').on('rename_node.jstree', function(e, elem){
	      var tree, parent_id, new_id, parent_id_new, new_id_new, id, data_id, data, attrs, cb;
	      tree = $('#content__tree').jstree(true);
	      parent_id = elem.node.parent;
	      new_id = elem.text;
	      if (new_id.substr(0, 3) === '../') {
	        parent_id_new = parent_id.substr(0, parent_id.lastIndexOf('/'));
	        new_id_new = new_id.substr(3);
	        parent_id = parent_id_new === '' ? '#' : parent_id_new;
	        new_id = new_id_new;
	      }
	      id = parent_id + '/' + new_id;
	      data_id = elem.node.li_attr.data_id;
	      data = parent_id === '#'
	        ? new_id
	        : parent_id.substr(14, parent_id.length) + '/' + new_id;
	      if (elem.node.data === null) {
	        tree.set_id(elem.node, id);
	        elem.node.data = data;
	        attrs = {
	          name: data
	        };
	        cb = function(id){
	          elem.node.li_attr.data_id = id;
	          _this.elementRefresh();
	        };
	        return _this.elementCreate({
	          attrs: attrs,
	          cb: cb
	        });
	      } else {
	        attrs = {
	          name: data
	        };
	        cb = function(){
	          var children_parent_old, i$, ref$, len$;
	          children_parent_old = elem.node.data;
	          for (i$ = 0, len$ = (ref$ = elem.node.children_d).length; i$ < len$; ++i$) {
	            (fn$.call(this, i$, ref$[i$]));
	          }
	          _this.elementRefresh();
	          function fn$(i, el){
	            var child, child_id, child_data, attrs;
	            child = tree.get_node('#' + el);
	            child_id = child.li_attr.data_id;
	            child_data = child.data;
	            attrs = {
	              name: child_data.replace(children_parent_old, data)
	            };
	            _this.dataUpdate({
	              id: child_id,
	              attrs: attrs,
	              cb: function(){}
	            });
	          }
	        };
	        return _this.dataUpdate({
	          id: data_id,
	          attrs: attrs,
	          cb: cb
	        });
	      }
	    });
	  };
	  Comp.prototype.treeDataMakeSearchable = function(o){
	    var _this, searchTimeout;
	    _this = this;
	    this.action({
	      type: 'TREE_DATA_MAKE_SEARCHABLE'
	    });
	    searchTimeout = false;
	    return $('#content__tree__name').keyup(function(){
	      if (searchTimeout) {
	        clearTimeout(searchTimeout);
	      }
	      searchTimeout = setTimeout(function(){
	        $('#content__tree').jstree(true).search($('#content__tree__name').val());
	      }, 250);
	    });
	  };
	  Comp.prototype.treeDataMakeRefreshable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'TREE_DATA_MAKE_REFRESHABLE'
	    });
	    return $('#content__tree__refresh').click(function(){
	      _this.treeDataRefresh();
	    });
	  };
	  Comp.prototype.treeDataRefresh = function(o){
	    var _this, cb;
	    _this = this;
	    this.action({
	      type: 'TREE_DATA_REFRESH'
	    });
	    $('#content__tree').jstree('deselect_all');
	    cb = function(data){
	      var _data, i$, len$;
	      _data = [];
	      for (i$ = 0, len$ = data.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, data[i$]));
	      }
	      $('#content__tree').jstree(true).settings.core.data = _data;
	      $('#content__tree').jstree(true).refresh();
	      function fn$(i, item){
	        var _item, _text_index;
	        _item = {};
	        if (item.name) {
	          _text_index = item.name.lastIndexOf('/');
	          _item.id = 'content__tree_' + item.name;
	          _item.data = item.name;
	          _item.text = _text_index > 0
	            ? item.name.substr(_text_index + 1, item.name.length)
	            : item.name;
	          _item.li_attr = {
	            data_id: item.id
	          };
	          _item.parent = _text_index > 0 ? 'content__tree_' + item.name.substr(0, _text_index) : '#';
	          _data.push(_item);
	        }
	      }
	    };
	    this.dataFindAll({
	      cb: cb
	    });
	  };
	  Comp.prototype.treeDataGetMenuFunc = function(o){
	    var _this, menu;
	    _this = this;
	    this.action({
	      type: 'TREE_DATA_GET_MENU_FUNC'
	    });
	    menu = function(node){
	      var tree, items;
	      tree = $('#content__tree').jstree(true);
	      return items = {
	        create: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Create Child',
	          action: function(obj){
	            var _node;
	            _node = tree.create_node(node);
	            return tree.edit(_node);
	          }
	        },
	        sibling: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Create Sibling',
	          action: function(obj){
	            var _node;
	            _node = tree.create_node(node.parent, {});
	            return tree.edit(_node);
	          }
	        },
	        rename: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Rename',
	          action: function(obj){
	            return tree.edit(node);
	          }
	        },
	        remove: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Remove',
	          action: function(obj){
	            var children, i$, ref$, len$;
	            children = [];
	            children.push(node.li_attr.data_id);
	            for (i$ = 0, len$ = (ref$ = node.children_d).length; i$ < len$; ++i$) {
	              (fn$.call(this, i$, ref$[i$]));
	            }
	            for (i$ = 0, len$ = children.length; i$ < len$; ++i$) {
	              (fn1$.call(this, i$, children[i$]));
	            }
	            return tree.delete_node(node);
	            function fn$(i, el){
	              var child, child_id;
	              child = tree.get_node('#' + el);
	              child_id = child.li_attr.data_id;
	              children.push(child_id);
	            }
	            function fn1$(i, el){
	              var cb;
	              if (i === children.length - 1) {
	                cb = function(){
	                  _this.treeDataRefresh();
	                };
	              } else {
	                cb = function(){};
	              }
	              _this.dataDestroy({
	                id: el,
	                cb: cb
	              });
	            }
	          }
	        },
	        clone: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Clone',
	          action: function(obj){
	            return _this.elementClone({});
	          }
	        },
	        replace: {
	          separator_before: false,
	          separator_after: false,
	          label: 'Replace',
	          action: function(obj){
	            return _this.elementReplace({});
	          }
	        }
	      };
	    };
	    return menu;
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin\tree\data.ls.map


/***/ },
/* 78 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.listDataMakeContainer = function(o){
	    this.listDataMakeContainerDt(o);
	  };
	  Comp.prototype.listDataMakeHolder = function(o){
	    this.listDataMakeHolderJq(o);
	  };
	  Comp.prototype.listDataGetSelected = function(o){
	    return this.listDataGetSelectedJq(o);
	  };
	  Comp.prototype.listDataFormatRows = function(o){
	    return this.listDataFormatRowsJs(o);
	  };
	  Comp.prototype.listDataFormatRow = function(o){
	    return this.listDataFormatRowJs(o);
	  };
	  Comp.prototype.listDataGetColumns = function(o){
	    return this.listDataGetColumnsJs(o);
	  };
	  Comp.prototype.listDataClearInputs = function(o){
	    this.listDataClearInputsJq(o);
	  };
	  Comp.prototype.listDataRefresh = function(o){
	    this.listDataRefreshJs(o);
	  };
	  Comp.prototype.listDataMakeSearchable = function(o){
	    this.listDataMakeSearchableJq(o);
	  };
	  Comp.prototype.listDataMakeRefreshable = function(o){
	    this.listDataMakeRefreshableJq(o);
	  };
	  Comp.prototype.listDataMakeEditable = function(o){
	    this.listDataMakeEditableJq(o);
	  };
	  Comp.prototype.listDataMakeCheckallable = function(o){
	    this.listDataMakeCheckallableJq(o);
	  };
	  Comp.prototype.listDataMakeContainer = function(o){
	    var _this, cb;
	    _this = this;
	    this.action({
	      type: 'LIST_DATA_MAKE_CONTAINER'
	    });
	    cb = function(list){
	      var table;
	      table = {
	        data: _this.listDataFormatRows({
	          list: list
	        }),
	        columns: _this.listDataGetColumns(),
	        order: [[1, 'desc']]
	      };
	      _this.list = $('#' + o.id).DataTable(table);
	    };
	    if (o.searchable) {
	      _this[o.searchable](o);
	    }
	    if (o.editable) {
	      _this[o.editable](o);
	    }
	    if (o.checkallable) {
	      _this[o.checkallable](o);
	    }
	    this.elementFindAll({
	      cb: cb
	    });
	  };
	  Comp.prototype.listDataMakeHolder = function(o){
	    $('#content__list_wrapper').html('<table id="content__list" class="table table-bordered table-hover"></table>');
	  };
	  Comp.prototype.listDataGetSelected = function(o){
	    var _this, ids;
	    _this = this;
	    this.action({
	      type: 'LIST_DATA_GET_SELECTED'
	    });
	    ids = [];
	    $('#content__list tbody tr input_checked').each(function(key, val){
	      var id;
	      id = $(this).attr('data-id');
	      ids.push(id);
	    });
	    return ids;
	  };
	  Comp.prototype.listDataFormatRows = function(o){
	    var _this, rows, i$, ref$, len$;
	    _this = this;
	    this.action({
	      type: 'LIST_DATA_FORMAT_ROWS'
	    });
	    rows = [];
	    for (i$ = 0, len$ = (ref$ = o.list).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    return rows;
	    function fn$(i, item){
	      var row;
	      row = [
	        '<input type="checkbox" data-id="' + item.id + '">', '<a onclick="app.component.elementSelectById({id: \'' + item.id + '\'})">' + item.id + '</a>', this.listDataFormatRow({
	          id: item.id,
	          val: item.name || '',
	          attr: 'name'
	        }), this.listDataFormatRow({
	          id: item.id,
	          val: item.date || '',
	          attr: 'date'
	        })
	      ];
	      rows.push(row);
	    }
	  };
	  Comp.prototype.listDataFormatRow = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LIST_DATA_FORMAT_ROW'
	    });
	    return '<span data-id="' + o.id + '" data-attr="' + o.attr + '">' + o.val + '</span>';
	  };
	  Comp.prototype.listDataGetColumns = function(o){
	    var _this, columns;
	    _this = this;
	    this.action({
	      type: 'LIST_DATA_GET_COLUMNS'
	    });
	    columns = [
	      {
	        title: '<input type="checkbox">',
	        width: '5%',
	        'orderable': false
	      }, {
	        title: '#',
	        width: '5%'
	      }, {
	        title: 'Name',
	        width: '20%'
	      }, {
	        title: 'Date',
	        width: '5%'
	      }
	    ];
	    return columns;
	  };
	  Comp.prototype.listDataClearInputs = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LIST_DATA_CLEAR_INPUTS'
	    });
	    $('#content__list input[type="text"]').each(function(){
	      $(this).val('');
	    });
	  };
	  Comp.prototype.listDataRefresh = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LIST_REFRESH'
	    });
	    this.listDataClearInputs(o);
	    this.listDataMakeHolder(o);
	    this.listDataMakeContainer({
	      id: 'content__list',
	      name: 'index',
	      editable: 'listDataMakeEditable',
	      checkallable: 'listDataMakeCheckallable'
	    });
	  };
	  Comp.prototype.listDataMakeEditable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LIST_DATA_MAKE_EDITABLE'
	    });
	    $('#content__list').on('click', 'tbody tr :not(:first-child):not(:nth-child(2))', function(e){
	      var td, val, id, attr;
	      td = $(this);
	      val = td.find('span').html();
	      id = td.find('span').attr('data-id');
	      attr = td.find('span').attr('data-attr');
	      $(td).find('span').editable({
	        type: 'textarea',
	        success: function(response, val){
	          var attrs, cb;
	          attrs = {};
	          attrs[attr] = val;
	          cb = function(){
	            _this.elementRefresh();
	          };
	          _this.dataUpdate({
	            id: id,
	            attrs: attrs,
	            cb: cb
	          });
	        }
	      });
	    });
	  };
	  Comp.prototype.listDataMakeCheckallable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LIST_DATA_MAKE_CHECKALLABLE'
	    });
	    $('#content__list').on('change', 'thead tr th input[type="checkbox"]:first-child', function(){
	      if ($(this).is(':checked')) {
	        $('#content__list tbody tr input_first-child').each(function(){
	          $(this).prop('checked', true);
	        });
	      } else {
	        $('#content__list tbody tr input_first-child').each(function(){
	          $(this).prop('checked', false);
	        });
	      }
	    });
	  };
	  Comp.prototype.listDataMakeSearchable = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'LIST_DATA_MAKE_SEARCHABLE'
	    });
	    $('#content__list__id').on('keyup', function(){
	      _this.list.column(1).search(this.value, {
	        regex: true
	      }).draw();
	    });
	    $('#content__list__name').on('keyup', function(){
	      _this.list.column(2).search(this.value, {
	        regex: true
	      }).draw();
	    });
	    $('#content__list__date').on('keyup', function(){
	      _this.list.column(3).search(this.value, {
	        regex: true
	      }).draw();
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin\list\data.ls.map


/***/ },
/* 79 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initElement = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_ELEMENT'
	    });
	    this.elementMakeContainer({
	      src: this.props.admin.src,
	      select: this.props.admin.select,
	      sample: this.props.admin.sample,
	      view: this.props.admin.view
	    });
	    this.elementMakeData();
	    this.elementRefresh();
	    this.headerSet({});
	    this.srcSetValue({
	      value: this.optionStoreGetValue({
	        config: 'store_data'
	      })
	    });
	    this.elementMakeRoutes();
	    this.elementOnViewChange({
	      value: this.viewGetValue()
	    });
	  };
	  Comp.prototype.elementMakeData = function(o){
	    var _this, config, adapter, params, e;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_MAKE_DATA'
	    });
	    config = this.configGet({
	      config: 'store_data'
	    });
	    adapter = config.index;
	    params = config[adapter];
	    try {
	      this.dataMake({
	        adapter: adapter,
	        params: params
	      });
	    } catch (e$) {
	      e = e$;
	      console.log(e);
	      this.srcSetValue({
	        value: 'Static'
	      });
	      this.elementOnSrcChange({
	        value: 'Static'
	      });
	    }
	  };
	  Comp.prototype.elementMakeContainer = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_MAKE_CONTAINER'
	    });
	    this.src = this.srcMakeContainer(o.src);
	    o.select.options_clone = o.sample.options;
	    this.select = this.selectMakeContainer(o.select);
	    this.sample = this.sampleMakeContainer(o.sample);
	    this.sampleSetValue({
	      value: o.sample.options[0].value
	    });
	    this.view = this.viewMakeContainer(o.view);
	    this.viewSetValue({
	      value: o.view.options[0].value
	    });
	  };
	  Comp.prototype.elementMakeRoutes = function(o){
	    var _this, routes;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_MAKE_ROUTES'
	    });
	    routes = {
	      '/id/:id': function(id){
	        _this.elementOnRouteId({
	          id: id
	        });
	      },
	      '/data/:adapter/?((w|.)*)': function(adapter, params){
	        _this.elementOnRouteData({
	          adapter: adapter,
	          params: params
	        });
	      },
	      '/data-static/?((w|.)*)': function(db_url){
	        _this.elementOnRouteDataStatic({
	          db_url: db_url
	        });
	      },
	      '/data-script/?((w|.)*)': function(db_url){
	        _this.elementOnRouteDataStatic({
	          db_url: db_url,
	          script: true
	        });
	      }
	    };
	    this.routeMake({
	      routes: routes
	    });
	  };
	  Comp.prototype.elementSelectById = function(o){
	    var _this, cb;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_SELECT_BY_ID'
	    });
	    cb = function(attrs){
	      var e;
	      if (attrs && attrs.id !== _this.id) {
	        _this.id = attrs.id || '';
	        _this.name = attrs.name || '';
	        _this.headerSet({});
	        _this.loadReset();
	        _this.loadById();
	        _this.selectSetValue({
	          value: attrs.id
	        });
	        try {
	          if (attrs.id) {
	            _this.routeSet({
	              route: 'id/' + attrs.id
	            });
	          } else {
	            _this.routeClear();
	          }
	        } catch (e$) {
	          e = e$;
	          console.log(e);
	        }
	      }
	    };
	    this.child = null;
	    this.loadAutoSetValue({
	      value: false
	    });
	    this.elementFind({
	      id: o.id,
	      cb: cb
	    });
	  };
	  Comp.prototype.elementSelectByName = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_SELECT_BY_NAME'
	    });
	  };
	  Comp.prototype.elementCreate = function(o){
	    var _this, sample, i$, ref$, cb;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_CREATE'
	    });
	    sample = this.sampleGetValue();
	    for (i$ in ref$ = this.samples[sample]) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    cb = function(item){
	      o.cb(item);
	      _this.elementRefresh();
	    };
	    this.dataCreate({
	      attrs: o.attrs,
	      cb: cb
	    });
	    function fn$(i, el){
	      o.attrs[i] = JSON.stringify(el);
	    }
	  };
	  Comp.prototype.elementUpdate = function(o){
	    var _this, id, cb;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_UPDATE'
	    });
	    id = o.id || this.id;
	    cb = o.cb || function(){
	      _this.elementRefresh();
	    };
	    this.dataUpdate({
	      id: id,
	      attrs: o.attrs,
	      cb: cb
	    });
	  };
	  Comp.prototype.elementDestroy = function(o){
	    var _this, selected, cb, i$, len$;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_DESTROY'
	    });
	    selected = this.selected();
	    cb = function(){
	      _this.id = null;
	      _this.name = null;
	      _this.headerSet({});
	      _this.loadReset();
	      _this.elementRefresh();
	    };
	    if (selected.length === 0 && o.id) {
	      this.dataDestroy({
	        id: o.id,
	        cb: cb
	      });
	    } else if (selected.length > 0) {
	      for (i$ = 0, len$ = selected.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, selected[i$]));
	      }
	    }
	    function fn$(i, el){
	      var _cb;
	      if (i === selected.length - 1) {
	        _cb = cb;
	      } else {
	        _cb = function(){};
	      }
	      this.dataDestroy({
	        id: el,
	        cb: _cb
	      });
	    }
	  };
	  Comp.prototype.elementFind = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_FIND'
	    });
	    this.dataFind({
	      id: o.id,
	      cb: o.cb
	    });
	  };
	  Comp.prototype.elementFindAll = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_FIND_ALL'
	    });
	    this.dataFindAll({
	      cb: o.cb
	    });
	  };
	  Comp.prototype.elementRefresh = function(o){
	    var _this, cb;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_REFRESH'
	    });
	    this.elementClear();
	    this.refresh();
	    cb = function(list){
	      var i$, len$, i, el, option;
	      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	        i = i$;
	        el = list[i$];
	        option = {
	          id: el.id,
	          name: el.name || ''
	        };
	        _this.selectCreate({
	          option: option
	        });
	      }
	      if (_this.id) {
	        _this.selectSetValue({
	          value: _this.id
	        });
	        _this.routeSet({
	          route: 'id/' + _this.id
	        });
	      }
	    };
	    this.elementFindAll({
	      cb: cb
	    });
	  };
	  Comp.prototype.elementClone = function(o){
	    var _this, i$, ref$, options;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_CLONE'
	    });
	    this.samples['Clone'] = {};
	    for (i$ in ref$ = this.inputs) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    options = o.options || this.admin.select.options_clone;
	    this.sampleRefresh({
	      options: options,
	      value: 'Clone'
	    });
	    this.headerSetEditModal({
	      id: 'clone'
	    });
	    function fn$(input, files){
	      var i$;
	      this.samples['Clone']['input_' + input] = {};
	      for (i$ in files) {
	        (fn$.call(this, i$, files[i$]));
	      }
	      function fn$(file, props){
	        this.samples['Clone']['input_' + input][file] = {
	          name: props.name,
	          ext: props.ext,
	          mode: props.mode,
	          src: props.src
	        };
	      }
	    }
	  };
	  Comp.prototype.elementReplace = function(o){
	    var _this, sample, inputs, i$, ref$, len$;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_REPLACE'
	    });
	    sample = this.sampleGetValue();
	    inputs = {};
	    for (i$ = 0, len$ = (ref$ = ['html', 'css', 'js']).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    this.inputLoad({
	      inputs: inputs
	    });
	    this.saveById();
	    function fn$(i, entity){
	      var i$, ref$;
	      inputs[entity] = {};
	      for (i$ in ref$ = this.samples[sample]['input_' + entity]) {
	        (fn$.call(this, i$, ref$[i$]));
	      }
	      function fn$(file, props){
	        var i$;
	        inputs[entity][file] = {};
	        for (i$ in props) {
	          (fn$.call(this, i$, props[i$]));
	        }
	        function fn$(prop, val){
	          inputs[entity][file][prop] = val;
	        }
	      }
	    }
	  };
	  Comp.prototype.elementClear = function(o){
	    var _this, i$, ref$, len$;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_CLEAR'
	    });
	    this.id = null;
	    this.name = null;
	    this.headerSet({});
	    for (i$ = 0, len$ = (ref$ = ['html', 'css', 'js']).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    this.selectClear();
	    this.routeClear();
	    function fn$(i, el){
	      this.inputReset({
	        entity: el
	      });
	    }
	  };
	  Comp.prototype.elementOnSrcChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_ON_SRC_CHANGE'
	    });
	    this.optionStoreSetValue({
	      config: 'store_data',
	      value: o.value
	    });
	    this.optionStoreSetDataHeader({
	      title: o.value
	    });
	    this.elementClear();
	    this.elementMakeData();
	    this.elementRefresh();
	  };
	  Comp.prototype.elementOnSelectChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_ON_SELECT_CHANGE'
	    });
	    this.elementSelectById({
	      id: o.value
	    });
	  };
	  Comp.prototype.elementOnSampleChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_ON_SAMPLE_CHANGE'
	    });
	    this.headerSetEditModal({
	      id: 'replace',
	      value: o.value
	    });
	  };
	  Comp.prototype.elementOnViewChange = function(o){
	    var _this, view, views;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_ON_VIEW_CHANGE'
	    });
	    view = o.value;
	    views = {
	      'Tree': {
	        refresh: function(){
	          _this.treeDataRefresh();
	        },
	        selected: function(){
	          return [];
	        },
	        template: this.templates.admin.tree_data,
	        container: function(){
	          _this.treeDataMakeContainer(_this.admin.tree.data);
	        }
	      },
	      'List': {
	        refresh: function(){
	          _this.listDataRefresh();
	        },
	        selected: function(){
	          return _this.listDataGetSelected();
	        },
	        template: this.templates.admin.list_data,
	        container: function(){
	          _this.listDataRefresh();
	          _this.listDataMakeSearchable();
	        }
	      }
	    };
	    this.refresh = views[view].refresh;
	    this.selected = views[view].selected;
	    $('#content__admin').html('');
	    $('#content__admin').html(views[view].template);
	    views[view].container();
	  };
	  Comp.prototype.elementOnSelectCreate = function(o){
	    var _this, cb;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_ON_SELECT_CREATE'
	    });
	    if (o.value) {
	      cb = function(attrs){
	        _this.selectCreate({
	          option: {
	            id: attrs.id,
	            name: attrs.name
	          }
	        });
	        _this.selectSetValue({
	          value: attrs.id
	        });
	        _this.elementSelectById({
	          id: attrs.id
	        });
	      };
	      this.elementCreate({
	        attrs: {
	          name: o.value
	        },
	        cb: cb
	      });
	      return null;
	    }
	  };
	  Comp.prototype.elementOnRouteId = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_ON_ROUTE_ID'
	    });
	    this.elementSelectById({
	      id: o.id
	    });
	  };
	  Comp.prototype.elementOnRouteData = function(o){
	    var _this, params, title, e;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_ON_ROUTE_DATA'
	    });
	    params = {};
	    title = this.optionStoreMatchAliasToTitle({
	      alias: o.adapter
	    });
	    try {
	      params = JSON.parse(o.params);
	    } catch (e$) {
	      e = e$;
	      console.log(e);
	    }
	    if (title !== '') {
	      if (params.db_url) {
	        this.config.store_data[o.adapter].db_url = params.db_url;
	      }
	      if (params.table) {
	        this.config.store_data[o.adapter].table = params.table;
	      }
	      if (params.others) {
	        this.config.store_data[o.adapter].others = params.others;
	      }
	      this.srcSetValue({
	        value: title
	      });
	      this.elementOnSrcChange({
	        value: title
	      });
	    } else {
	      this.elementClear();
	    }
	  };
	  Comp.prototype.elementOnRouteDataStatic = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'ELEMENT_ON_ROUTE_DATA_STATIC'
	    });
	    this.config.store_data['static'].db_url = o.db_url;
	    if (o.script) {
	      this.config.store_data['static'].others = '{"script": true}';
	    }
	    this.srcSetValue({
	      value: 'Static'
	    });
	    this.elementOnSrcChange({
	      value: 'Static'
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\admin\element.ls.map


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initUtil = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_UTIL'
	    });
	    this.util = this.props.util;
	    __webpack_require__(81)(Comp);
	    __webpack_require__(82)(Comp);
	    __webpack_require__(86)(Comp);
	    this.initFormat();
	    this.initExport();
	    this.initImport();
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util.ls.map


/***/ },
/* 81 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initFormat = function(){
	    var _this, i$, ref$, len$;
	    _this = this;
	    this.action({
	      type: 'INIT_FORMAT'
	    });
	    for (i$ = 0, len$ = (ref$ = ['html', 'css', 'js']).length; i$ < len$; ++i$) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    this.formats.admin.index = this.formatMakeContainer(this.props.util.formats.admin.index);
	    this.formatSetValue({
	      context: 'admin',
	      entity: 'index',
	      value: this.props.util.formats.admin.index.options[0].value
	    });
	    function fn$(i, el){
	      this.formats.inputs[el] = this.formatMakeContainer(this.props.util.formats.inputs[el]);
	      this.formatSetValue({
	        context: 'inputs',
	        entity: [el],
	        value: this.props.util.formats.inputs[el].options[0].value
	      });
	    }
	  };
	  Comp.prototype.formatMakeContainer = function(o){
	    var _this, config;
	    _this = this;
	    this.action({
	      type: 'FORMAT_MAKE_CONTAINER'
	    });
	    config = function(){
	      return {
	        maxItems: 1,
	        valueField: 'value',
	        labelField: 'value',
	        sortField: 'value',
	        searchField: 'value',
	        options: o.options,
	        onChange: function(value){
	          if (o.onChange) {
	            _this[o.onChange]({
	              value: value
	            });
	          }
	        },
	        create: false
	      };
	    };
	    return $('#' + o.id).selectize(config())[0].selectize;
	  };
	  Comp.prototype.formatSetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FORMAT_SET_VALUE'
	    });
	    this.formats[o.context][o.entity].setValue(o.value, function(){});
	  };
	  Comp.prototype.formatGetValue = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FORMAT_GET_VALUE'
	    });
	    return this.formats[o.context][o.entity].getValue();
	  };
	  Comp.prototype.formatOnImportDataChange = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'FORMAT_ON_IMPORT_DATA_CHANGE'
	    });
	    $('#content__admin__import').prop('disabled', o.value === 'zip');
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util\format.ls.map


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initExport = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_EXPORT'
	    });
	    __webpack_require__(83)(Comp);
	    __webpack_require__(84)(Comp);
	    __webpack_require__(85)(Comp);
	    this.exportMakeInput({
	      entity: 'html'
	    });
	    this.exportMakeInput({
	      entity: 'css'
	    });
	    this.exportMakeInput({
	      entity: 'js'
	    });
	    this.exportMakeOutput({
	      entity: 'index'
	    });
	    this.exportMakeData();
	  };
	  Comp.prototype['export'] = function(o){
	    var _this, blob, date, name;
	    _this = this;
	    this.action({
	      type: 'EXPORT'
	    });
	    blob = new Blob([o.blob]);
	    date = moment().format('MMM[]Do-h[]mm[]a');
	    name = o.name + '-' + date + '.' + o.ext;
	    saveAs(blob, 'rcx-' + name);
	  };
	  Comp.prototype.exportMakeInput = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EXPORT_MAKE_INPUT'
	    });
	    $('#content__input__' + o.entity + '__export').click(function(){
	      var format, exporter;
	      format = _this.formatGetValue({
	        context: 'inputs',
	        entity: o.entity
	      });
	      exporter = {
	        editor: function(){
	          _this.exportInputEditor(o);
	        },
	        json: function(){
	          _this.exportInputJson(o);
	        },
	        zip: function(){
	          _this.exportInputZip(o);
	        }
	      };
	      exporter[format]();
	    });
	  };
	  Comp.prototype.exportMakeOutput = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EXPORT_MAKE_OUTPUT'
	    });
	    $('#content__output__index__export').click(function(){
	      var format, exporter;
	      format = _this.resultGetValue({
	        context: 'outputs',
	        entity: 'index'
	      });
	      exporter = {
	        frame: function(){
	          _this.exportOutputFrame(o);
	        },
	        editor: function(){
	          _this.exportOutputEditor(o);
	        }
	      };
	      exporter[format]();
	    });
	  };
	  Comp.prototype.exportMakeData = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'EXPORT_MAKE_DATA'
	    });
	    $('#content__admin__export').click(function(){
	      var format, exporter;
	      format = _this.formatGetValue({
	        context: 'admin',
	        entity: 'index'
	      });
	      exporter = {
	        json: function(){
	          _this.exportDataJson(o);
	        },
	        zip: function(){
	          _this.exportDataZip(o);
	        }
	      };
	      exporter[format]();
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util\export.ls.map


/***/ },
/* 83 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.exportInputEditor = function(o){
	    this.exportInputEditorJs(o);
	  };
	  Comp.prototype.exportInputJson = function(o){
	    this.exportInputJsonJs(o);
	  };
	  Comp.prototype.exportInputZip = function(o){
	    this.exportInputZipJz(o);
	  };
	  Comp.prototype.exportInputEditor = function(o){
	    var _this, file;
	    _this = this;
	    this.action({
	      type: 'EXPORT_INPUT_EDITOR'
	    });
	    file = this.inputGet({
	      entity: o.entity
	    });
	    this['export']({
	      blob: file.src,
	      name: file.ext,
	      ext: file.ext
	    });
	  };
	  Comp.prototype.exportInputJson = function(o){
	    var _this, blob;
	    _this = this;
	    this.action({
	      type: 'EXPORT_INPUT_JSON'
	    });
	    blob = JSON.stringify(this.inputs, null, 2);
	    this['export']({
	      blob: blob,
	      name: 'inputs',
	      ext: 'json'
	    });
	  };
	  Comp.prototype.exportInputZip = function(o){
	    var _this, zip, i$, ref$, blob;
	    _this = this;
	    this.action({
	      type: 'EXPORT_INPUT_ZIP'
	    });
	    zip = new JSZip();
	    for (i$ in ref$ = this.inputs) {
	      (fn$.call(this, i$, ref$[i$]));
	    }
	    blob = zip.generate({
	      type: 'blob'
	    });
	    this['export']({
	      blob: blob,
	      name: 'inputs',
	      ext: 'zip'
	    });
	    function fn$(input, props){
	      var i$, ref$;
	      for (i$ in ref$ = this.inputFindAll({
	        entity: input
	      })) {
	        (fn$.call(this, i$, ref$[i$]));
	      }
	      function fn$(j, file){
	        zip.file(file.name + '.' + file.ext, file.src);
	      }
	    }
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util\export\input.ls.map


/***/ },
/* 84 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.exportOutputFrame = function(o){
	    var _this, cb;
	    _this = this;
	    this.action({
	      type: 'EXPORT_OUTPUT_FRAME'
	    });
	    cb = function(o){
	      _this['export']({
	        blob: o.src,
	        name: 'output',
	        ext: 'html'
	      });
	    };
	    this.runFront({
	      entity: 'notes',
	      'export': cb
	    });
	  };
	  Comp.prototype.exportOutputEditor = function(o){
	    var _this, file, ext;
	    _this = this;
	    this.action({
	      type: 'EXPORT_OUTPUT_EDITOR'
	    });
	    file = this.editorGetValue({
	      context: 'outputs',
	      entity: 'index'
	    });
	    ext = this.extGetValue({
	      context: 'outputs',
	      entity: 'index'
	    });
	    this['export']({
	      blob: file,
	      name: 'output',
	      ext: ext
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util\export\output.ls.map


/***/ },
/* 85 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.exportDataJson = function(o){
	    var _this, cb;
	    _this = this;
	    this.action({
	      type: 'EXPORT_DATA_JSON'
	    });
	    cb = function(list){
	      var blob;
	      list = _this.exportDataFilterList({
	        list: list
	      });
	      blob = JSON.stringify(list, null, 2);
	      _this['export']({
	        blob: blob,
	        name: 'data',
	        ext: 'json'
	      });
	    };
	    this.dataFindAll({
	      cb: cb
	    });
	  };
	  Comp.prototype.exportDataZip = function(o){
	    var _this, zip, cb;
	    _this = this;
	    this.action({
	      type: 'EXPORT_DATA_ZIP'
	    });
	    zip = new JSZip();
	    cb = function(list){
	      var i$, len$, blob;
	      list = _this.exportDataFilterList({
	        list: list
	      });
	      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
	        (fn$.call(this, i$, list[i$]));
	      }
	      blob = zip.generate({
	        type: 'blob'
	      });
	      _this['export']({
	        blob: blob,
	        name: 'data',
	        ext: 'zip'
	      });
	      function fn$(i, el){
	        var i$, ref$, len$;
	        for (i$ = 0, len$ = (ref$ = ['html', 'css', 'js']).length; i$ < len$; ++i$) {
	          (fn$.call(this, ref$[i$]));
	        }
	        function fn$(entity){
	          var i$, ref$;
	          for (i$ in ref$ = JSON.parse(el['input_' + entity])) {
	            (fn$.call(this, i$, ref$[i$]));
	          }
	          function fn$(j, file){
	            zip.file(el.id + '/' + file.name + '.' + file.ext, file.src);
	          }
	        }
	      }
	    };
	    this.dataFindAll({
	      cb: cb
	    });
	  };
	  Comp.prototype.exportDataFilterList = function(o){
	    var _this, list, selected, i$, ref$, len$, i, el, id;
	    _this = this;
	    this.action({
	      type: 'EXPORT_DATA_FILTER_LIST'
	    });
	    list = [];
	    selected = this.selected();
	    if (selected.length === 0) {
	      list = o.list;
	    } else {
	      for (i$ = 0, len$ = (ref$ = o.list).length; i$ < len$; ++i$) {
	        i = i$;
	        el = ref$[i$];
	        id = el.id;
	        if (selected.indexOf(el.id + '') !== -1) {
	          list.push(el);
	        }
	      }
	    }
	    return list;
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util\export\data.ls.map


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.initImport = function(){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'INIT_IMPORT'
	    });
	    __webpack_require__(87)(Comp);
	    __webpack_require__(88)(Comp);
	    __webpack_require__(89)(Comp);
	    this.importMakeInput({
	      entity: 'html'
	    });
	    this.importMakeInput({
	      entity: 'css'
	    });
	    this.importMakeInput({
	      entity: 'js'
	    });
	    this.importMakeOutput({
	      entity: 'index'
	    });
	    this.importMakeData();
	  };
	  Comp.prototype.importMakeInput = function(o){
	    var _this, read_as;
	    _this = this;
	    this.action({
	      type: 'IMPORT_MAKE_INPUT'
	    });
	    read_as = {
	      editor: 'readAsText',
	      json: 'readAsText',
	      zip: 'readAsArrayBuffer'
	    };
	    $('#content__input__' + o.entity + '__import').change(function(){
	      var format, importer, reader;
	      format = _this.formatGetValue({
	        context: 'inputs',
	        entity: o.entity
	      });
	      importer = {
	        editor: function(o){
	          _this.importInputEditor(o);
	        },
	        json: function(o){
	          _this.importInputJson(o);
	        },
	        zip: function(o){
	          _this.importInputZip(o);
	        }
	      };
	      reader = new FileReader();
	      reader[read_as[format]](this.files[0]);
	      reader.onload = function(e){
	        var file;
	        file = e.target.result;
	        importer[format]({
	          file: file,
	          entity: o.entity
	        });
	      };
	    });
	  };
	  Comp.prototype.importMakeOutput = function(o){
	    var _this, read_as;
	    _this = this;
	    this.action({
	      type: 'IMPORT_MAKE_OUTPUT'
	    });
	    read_as = {
	      frame: 'readAsText',
	      editor: 'readAsText',
	      json: 'readAsText',
	      zip: 'readAsArrayBuffer'
	    };
	    $('#content__output__index__import').change(function(){
	      var format, importer, reader;
	      format = _this.resultGetValue({
	        context: 'outputs',
	        entity: 'index'
	      });
	      importer = {
	        frame: function(o){
	          _this.importOutputFrame(o);
	        },
	        editor: function(o){
	          _this.importOutputEditor(o);
	        }
	      };
	      reader = new FileReader();
	      reader[read_as[format]](this.files[0]);
	      reader.onload = function(e){
	        var file;
	        file = e.target.result;
	        importer[format]({
	          file: file,
	          entity: 'index'
	        });
	      };
	    });
	  };
	  Comp.prototype.importMakeData = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'IMPORT_MAKE_DATA'
	    });
	    $('#content__admin__import').change(function(){
	      var format, importer, reader;
	      format = 'json';
	      importer = {
	        json: function(o){
	          _this.importDataJson(o);
	        }
	      };
	      reader = new FileReader();
	      reader.readAsText(this.files[0]);
	      reader.onload = function(e){
	        var file;
	        file = e.target.result;
	        importer[format]({
	          file: file
	        });
	      };
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util\import.ls.map


/***/ },
/* 87 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.importInputEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'IMPORT_INPUT_EDITOR'
	    });
	    this.editorSetValue({
	      context: 'inputs',
	      entity: o.entity,
	      value: o.file
	    });
	  };
	  Comp.prototype.importInputJson = function(o){
	    var _this, inputs;
	    _this = this;
	    this.action({
	      type: 'IMPORT_INPUT_JSON'
	    });
	    inputs = JSON.parse(o.file);
	    this.inputLoad({
	      inputs: inputs
	    });
	  };
	  Comp.prototype.importInputZip = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'IMPORT_INPUT_ZIP'
	    });
	    /*
	    zip = new JSZip o.file
	    inputs = 
	      notes: {}
	    $.each zip.files, (index, zipEntry) !->
	      dot  = index.indexOf '.'
	      name = index.substring 0, dot
	      src  = zipEntry.asText!
	      ext  = index.substring dot + 1, index.length
	      if !_this.extIsValid ext: ext then ext = '++.md'
	      if name != ''
	        inputs.notes[name] = 
	          name: name
	          src:  src
	          ext:  ext
	          mode: (_this.modeGetFromExt ext: ext) || 'text/x-markdown'
	    if !inputs.notes.index 
	      inputs.notes.index = name: 'index', src: '\n\n', ext: '++.md', mode: 'text/x-markdown'
	    @inputLoad inputs: inputs
	    */
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util\import\input.ls.map


/***/ },
/* 88 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.importOutputFrame = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'IMPORT_OUTPUT_FRAME'
	    });
	    this.frameWrite({
	      write: o.file
	    });
	  };
	  Comp.prototype.importOutputEditor = function(o){
	    var _this;
	    _this = this;
	    this.action({
	      type: 'IMPORT_OUTPUT_EDITOR'
	    });
	    this.editorSetValue({
	      context: 'outputs',
	      entity: 'index',
	      value: o.file
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util\import\output.ls.map


/***/ },
/* 89 */
/***/ function(module, exports) {

	var _Component;
	_Component = function(Comp){
	  Comp.prototype.importDataJson = function(o){
	    this.importDataJsonJs(o);
	  };
	  Comp.prototype.importDataJson = function(o){
	    var _this, list, cb;
	    _this = this;
	    this.action({
	      type: 'IMPORT_DATA_JSON'
	    });
	    list = JSON.parse(o.file);
	    cb = function(){
	      _this.elementRefresh();
	    };
	    this.dataImportTable({
	      list: list,
	      cb: cb
	    });
	  };
	};
	module.exports = _Component;
	//# sourceMappingURL=e:\play\rcx-play\node_modules\livescript-loader\index.js!e:\play\rcx-play\src\component\util\import\data.ls.map


/***/ }
/******/ ]);