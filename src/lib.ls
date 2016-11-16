
window.app.meta = require '../meta'

window.data      = (list) !-> 
  if list['data'] then list = list['data']
  app.component.dataImportTable list: list
window.script    = (resp) !-> 
  app.component.response.script =  resp
window.onmessage = (msg) !->
  app.component.response.form =  msg.data
  app.component.response.form_cb msg.data

lib = 
  debug:          window.app.meta['app'].debug
  Stores: 
    static:       require 'src/store/static/js/store'
    indexeddb:    require 'src/store/browser/indexeddb-dexie/store'
    localstorage: require 'src/store/browser/localstorage-localforage/store'
    ajax:         require 'src/store/server/ajax-jquery/store'
    dom:          require 'src/store/server/dom-jquery/store'
    firebase3:    require 'src/store/cloud/firebase-3/store'
  templates:
    layout:
      split:      require 'src/template/layout/split'
      split_vtab: require 'src/template/layout/split-vtab'
      combined:   require 'src/template/layout/combined'
    admin:
      tree_data:  require 'src/template/admin/data/tree'
      list_data:  require 'src/template/admin/data/list'
  props:             
    _title:      'rcx'
    boot:         require 'src/lib/props/boot'
    main:         require 'src/lib/props/main'
    admin:        require 'src/lib/props/admin'
    util:         require 'src/lib/props/util'
  samples:
    'Template - HTML, CSS, JS':
      input_html:
        index:
          name:    'index', ext: 'html', mode: 'text/html'
          src:     require 'raw!src/lib/samples/html-css-js/html'
      input_css:
        index:
          name:    'index', ext: 'css', mode: 'text/css'
          src:     require 'raw!src/lib/samples/html-css-js/css'
      input_js:
        index:
          name:    'index', ext: 'js', mode: 'text/javascript'
          src:     require 'raw!src/lib/samples/html-css-js/js'
    'Template - Jade, CSS, JS':
      input_html:
        index:
          name:    'index', ext: 'jade', mode: 'text/x-jade'
          src:     require 'raw!src/lib/samples/jade-css-js/jade'
      input_css:
        index:
          name:    'index', ext: 'css', mode: 'text/css'
          src:     require 'raw!src/lib/samples/jade-css-js/css'
      input_js:
        index:
          name:    'index', ext: 'js', mode: 'text/javascript'
          src:     require 'raw!src/lib/samples/jade-css-js/js'
    'Clone':
      input_html:
        index:
          name:    'index', ext: 'html', mode: 'text/html'
          src:     '\r\n\r\n'
      input_css:
        index:
          name:    'index', ext: 'css', mode: 'text/css'
          src:     '\r\n\r\n'
      input_js:
        index:
          name:    'index', ext: 'js', mode: 'text/javascript'
          src:     '\r\n\r\n'
  _require:        require 'raw!src/lib/_require'

module.exports = lib
