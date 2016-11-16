
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @methods default {
  #   makeBoot, makeStore, makeMain, makeAdmin, makeUtil
  #   ?makeUser
  # }
  
  Comp::initDefault = !->
    _this = @; @action type: 'INIT_DEFAULT'

    @defaultMake!
  
  Comp::defaultMake = (o) !-> 
    _this = @; @action type: 'DEFAULT_MAKE'

    @defaultMakeBoot!
    @defaultMakeStore!
    @defaultMakeMain!
    @defaultMakeAdmin!
    @defaultMakeUtil!
    #@defaultMakeUser!
  
  Comp::defaultMakeBoot = (o) !-> 
    _this = @; @action type: 'DEFAULT_MAKE_BOOT'
    
    @boot       = {} # config
    @config     = # config, prop, params
      layout: 'split'
      store_data:
        index:        'static'
        static:       {db_url: '',    table: '',     others: '{}'}
        indexeddb:    {db_url: 'rcx', table: 'data', others: '{}'}
        localstorage: {db_url: 'rcx', table: 'data', others: '{}'}
        dom:          {db_url: '',    table: '',     others: '{}'}
        ajax:         {db_url: '',    table: '',     others: '{}'}
        firebase3:    {db_url: '',    table: '',     others: '{}'}
      meta: {}
    @metas      = {} # ?
    @options    =      
      stores: {}
  
  Comp::defaultMakeStore = (o) !-> 
    _this = @; @action type: 'DEFAULT_MAKE_STORE'
    
    @store      = {} 
    @setting    = 'settings_rcx'
    @id         = null
    @name       = null
    @child      = null # firebase
    @data       = {}
    @repo       = {}
    @response   = {script: null, form: null, form_cb: !->} # dom
  
  Comp::defaultMakeMain = (o) !-> 
    _this = @; @action type: 'DEFAULT_MAKE_MAIN'
    
    @main       = {} # config
    @editors    = inputs:  {html: {}, css: {}, js: {}}, outputs: {index: {}}
    @files      = inputs:  {html: {}, css: {}, js: {}}, outputs: {index: {}}
    @exts       = inputs:  {html: {}, css: {}, js: {}}, outputs: {index: {}}
    @modes      = inputs:  {html: {}, css: {}, js: {}}, outputs: {index: {}}
    @input      = html: 'index', css: 'index', js: 'index'
    @inputs     = html: {}, css: {}, js: {} #(JSON.parse @samples.main['md'].input_html)
    @frames     = outputs: {index: {}}
    @urlhashes  = outputs: {index: {}}
    @results    = outputs: {index: {}}
    @output     = index: 'index'
    @outputs    = index: {'index': {}}
    @delays     = run: 0, save: 0, load: 0
    @debounces  = inputs: {html: 0, css: 0, js: 0}
    @runs       = {} # md, html, ..
    @scripts    =
      # Default
      'html': true, 'js': true, 'css': true,
      # Markdown
      'md': false, 
      # Template
      'jade': false,
      # Style
      'less': false, 'sass': false, 'styl': false,
      # Transpiler
      'ls': false, 'babel.js': false, 'ts': false, 'cs': false
    @onloads    = {} # md, html, ..
    @loadeds    = {} # md, html, ..
    @increments = html: {}, css: {}, js: {}
  
  Comp::defaultMakeAdmin = (o) !-> 
    _this = @; @action type: 'DEFAULT_MAKE_ADMIN'
    
    @admin      = {} # config
    @select     = {}
    @router     = {}
    @src        = {}
    @sample     = {}
    @view       = {}
    @tree       = {}
    @list       = {}
    @refresh    = !->
    @selected   =  ->
  
  Comp::defaultMakeUtil = (o) !-> 
    _this = @; @action type: 'DEFAULT_MAKE_UTIL'
    
    @util       = {} # config
    @formats    = 
      inputs:  {html: {}, css: {}, js: {}}
      admin:   {index: {}} 

module.exports = _Component
