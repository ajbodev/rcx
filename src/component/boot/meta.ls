
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @vendors jquery|jqy
  # @methods meta {
  #   Make, Act
  #   ?ActDebug, ?ActDataIndex, ?ActDataAdapter, ?ActOptionRun
  # }
  
  Comp::initMeta = !->
    _this = @; @action type: 'INIT_META'

    @metaMake!
  
  # @vendors jqy
  Comp::metaMake = (o) !-> 
    _this = @; @action type: 'META_MAKE'

    # @params  o:{ prop:S, db_url:S, table:S, others:S }
    data = (o) !-> 
      # prop = adapter
      if o.dburl  then _this.config.store_data[o.prop].db_url = o.dburl
      if o.table  then _this.config.store_data[o.prop].table  = o.table
      if o.others then _this.config.store_data[o.prop].others = o.others

    # @params  o:{ run:S, url:S }
    ext = (o) !-> 
      if o.url then $ '#content__option__run__' + o.run + '__src' .html o.url

    @metas = 
      # Debug
      'meta[data-debug="data"][data-prop="index"]': (o) !-> # debug
        if o.debug then _this.debug = (o.debug == 'true')
        console.clear!
      # Store - Data - Index
      'meta[data-config="data"][data-prop="index"]': (o) !-> # value
        if o.value then _this.config.store_data.index = o.value
      # Store - Data - Static
      'meta[data-config="data"][data-prop="static"]': (o) !-> # prop, ?dburl, ?table, ?others
        data o
      # Store - Data - IndexedDB
      'meta[data-config="data"][data-prop="indexeddb"]': (o) !-> # prop, dburl, table, ?others
        data o
      # Store - Data - LocalStorage
      'meta[data-config="data"][data-prop="localstorage"]': (o) !-> # prop, dburl, table, ?others
        data o
      # Store - Data - AJAX
      'meta[data-config="data"][data-prop="ajax"]': (o) !-> # prop, dburl, ?table, ?others
        data o
      # Store - Data - DOM
      'meta[data-config="data"][data-prop="dom"]': (o) !-> # prop, dburl, ?table, ?others
        data o
      # Store - Data - Firebase
      'meta[data-config="data"][data-prop="firebase"]': (o) !-> # prop, dburl, ?table, ?others
        data o
      # ..
      # Run - Markdown - Marked
      'meta[data-ext="md"]': (o) !-> # run, url
        ext o
      # Run - Template - Jade
      'meta[data-ext="jade"]': (o) !-> # run, url
        ext o
      # Run - Preprocessor - Less
      'meta[data-ext="less"]': (o) !-> # run, url
        ext o
      # Run - Preprocessor - Sass
      'meta[data-ext="sass"]': (o) !-> # run, url
        ext o
      # Run - Preprocessor - Stylus
      'meta[data-ext="styl"]': (o) !-> # run, url
        ext o
      # Run - Transpiler - Babel
      'meta[data-ext="babel.js"]': (o) !-> # run, url
        ext o
      # Run - Transpiler - TypeScript
      'meta[data-ext="ts"]': (o) !-> # run, url
        ext o
      # Run - Transpiler - CoffeeScript
      'meta[data-ext="cs"]': (o) !-> # run, url
        ext o
      # Run - Transpiler - LiveScript
      'meta[data-ext="ls"]': (o) !-> # run, url
        ext o
      # ..
    for let i, el of @metas
      @metaAct meta: i
  
  # @vendors jqy
  # @params  o:{ meta:S }
  Comp::metaAct = (o) !-> 
    _this = @; @action type: 'META_MAKE'
  
    $ o.meta .each (el, i) !->
      _this.metas[o.meta] @dataset

module.exports = _Component
