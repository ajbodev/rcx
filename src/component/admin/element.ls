
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @methods element {
  #   MakeData, MakeContainer, MakeRoutes,
  #   SelectById, ?SelectByName,
  #   Create, Update, Destroy, Find, FindAll,
  #   Refresh, Clone, Replace, Clear,
  #   OnSrcChange, OnSelectChange, OnSelectCreate, 
  #   OnRouteId, OnRouteData, OnRouteDataStatic,
  #   OnSampleChange, ViewChange,
  #   ?OnRouteName, ?OnRouteMeta,
  #   ?OnRouteDataCreate, ?OnRouteDataUpdate, ?OnRouteDataDestroy
  # }
  
  Comp::initElement = !->
    _this = @; @action type: 'INIT_ELEMENT'

    @elementMakeContainer do
      src:    @props.admin.src
      select: @props.admin.select
      sample: @props.admin.sample
      view:   @props.admin.view
    
    @elementMakeData!

    @elementRefresh!
    @headerSet {}
    @srcSetValue value: @optionStoreGetValue config: 'store_data'
    
    @elementMakeRoutes!

    @elementOnViewChange value: @viewGetValue!
    
  # @params  o:{  }
  Comp::elementMakeData = (o) !->  
    _this = @; @action type: 'ELEMENT_MAKE_DATA'
    config  = @configGet config: 'store_data'
    adapter = config.index
    params  = config[adapter]
    try
      @dataMake adapter: adapter, params: params
    catch e
      console.log e
      @srcSetValue        value: 'Static'
      @elementOnSrcChange value: 'Static'
      #@notify
    
  # @params  o:{ src:{}, select:{}, route:{}, sample:{}, view:{} }
  Comp::elementMakeContainer = (o) !->  
    _this = @; @action type: 'ELEMENT_MAKE_CONTAINER'
    # Src
    @src =       @srcMakeContainer o.src
    #@srcDisable!
    #@srcSetValue value: @optionStoreGetValue config: 'store_data'
    # Select
    o.select.options_clone = o.sample.options
    @select = @selectMakeContainer o.select
    # Sample
    @sample = @sampleMakeContainer o.sample
    @sampleSetValue value: o.sample.options.0.value
    # View
    @view = @viewMakeContainer o.view
    @viewSetValue value: o.view.options.0.value
    # 
    #@elementRefresh!
    #@headerSet {}
    
  Comp::elementMakeRoutes = (o) !->  
    _this = @; @action type: 'ELEMENT_MAKE_ROUTES'
    routes =
      '/id/:id': (id) !-> 
        _this.elementOnRouteId id: id
      #'/name/?((\w|.)*)': (name) !-> _this.elementOnName name: name
      '/data/:adapter/?((\w|.)*)': (adapter, params) !-> 
        _this.elementOnRouteData adapter: adapter, params: params
      '/data-static/?((\w|.)*)': (db_url) !-> 
        _this.elementOnRouteDataStatic db_url: db_url
      '/data-script/?((\w|.)*)': (db_url) !-> 
        _this.elementOnRouteDataStatic db_url: db_url, script: true
    @routeMake routes: routes
    
  # @params  o:{ id:N|S }
  Comp::elementSelectById = (o) !->  
    _this = @; @action type: 'ELEMENT_SELECT_BY_ID'
    cb = (attrs) !->
      if attrs && (attrs.id != _this.id)
        _this.id   = attrs.id   || ''
        _this.name = attrs.name || ''
        _this.headerSet {}
        # Load
        _this.loadReset!
        _this.loadById!
        # Select
        _this.selectSetValue value: attrs.id
        # Route
        try
          if attrs.id then _this.routeSet route: 'id/' + attrs.id else _this.routeClear!
        catch e
          console.log e
    @child = null # ? firebase
    @loadAutoSetValue value: false
    @elementFind id: o.id, cb: cb
    
  Comp::elementSelectByName = (o) !->  
    _this = @; @action type: 'ELEMENT_SELECT_BY_NAME'
    
  # @params  o:{ attrs:{}, cb:F }
  Comp::elementCreate = (o) !->  
    _this = @; @action type: 'ELEMENT_CREATE'
    sample = @sampleGetValue!
    for let i, el of @samples[sample]
      o.attrs[i] = JSON.stringify el # JSON.stringify
    cb = (item) !->
      o.cb item
      #_this.refresh!
      _this.elementRefresh!
    @dataCreate attrs: o.attrs, cb: cb
    
  # @params  o:{ ?id:N|S, attrs:{}, cb:F }
  Comp::elementUpdate = (o) !->  
    _this = @; @action type: 'ELEMENT_UPDATE'
    id = o.id || @id
    cb = o.cb || !-> _this.elementRefresh!
    @dataUpdate id: id, attrs: o.attrs, cb: cb
    
  # @params  o:{ id:N|S, ?cb:F, ?ids:[N|S] }
  Comp::elementDestroy = (o) !->  
    _this = @; @action type: 'ELEMENT_DESTROY'
    selected = @selected!
    cb = !->
      _this.id = null; _this.name = null
      _this.headerSet {}
      _this.loadReset!
      _this.elementRefresh!
    if (selected.length == 0) && o.id
      @dataDestroy id: o.id, cb: cb
    else if (selected.length > 0)
      for let el, i in selected
        if i == selected.length - 1
          _cb = cb
        else
          _cb = !->
        @dataDestroy id: el, cb: _cb
    
  # @params  o:{ id:N|S, cb:F }
  Comp::elementFind = (o) !->  
    _this = @; @action type: 'ELEMENT_FIND'
    @dataFind id: o.id, cb: o.cb
    
  # @params  o:{ cb:F }
  Comp::elementFindAll = (o) !->  
    _this = @; @action type: 'ELEMENT_FIND_ALL'
    @dataFindAll cb: o.cb
    
  Comp::elementRefresh = (o) !->  
    _this = @; @action type: 'ELEMENT_REFRESH'
    @elementClear!
    @refresh!
    cb = (list) !->
      for el, i in list
        option = id: el.id, name: (el.name || '')
        _this.selectCreate option: option
      # ?
      if _this.id
        _this.selectSetValue value: _this.id
        _this.routeSet       route: 'id/' + _this.id
      # ?
    @elementFindAll cb: cb
    
  # @params  o:{ ?options:[] }
  Comp::elementClone = (o) !->  
    _this = @; @action type: 'ELEMENT_CLONE'
    @samples['Clone'] = {}
    for let input, files of @inputs
      @samples['Clone']['input_' + input] = {}
      for let file, props of files
        @samples['Clone']['input_' + input][file] = do
          name: props.name, ext: props.ext, mode: props.mode, src: props.src
    options = o.options || @admin.select.options_clone
    @sampleRefresh options: options, value: 'Clone'
    @headerSetEditModal id: 'clone'
    
  Comp::elementReplace = (o) !->  
    _this = @; @action type: 'ELEMENT_REPLACE'
    sample = @sampleGetValue!
    inputs = {}
    for let entity, i in ['html' 'css' 'js']
      inputs[entity] = {}
      for let file, props of @samples[sample]['input_' + entity]
        inputs[entity][file] = {}
        for let prop, val of props
          inputs[entity][file][prop] = val
    @inputLoad inputs: inputs
    @saveById!
    
  Comp::elementClear = (o) !->  
    _this = @; @action type: 'ELEMENT_CLEAR'
    @id   = null
    @name = null
    @headerSet {}
    for let el, i in ['html' 'css' 'js']
      @inputReset entity: el
    @selectClear!
    @routeClear!
    
  # @params  o:{ value:S }
  Comp::elementOnSrcChange = (o) !->  
    _this = @; @action type: 'ELEMENT_ON_SRC_CHANGE'
    @optionStoreSetValue config: 'store_data', value: o.value
    @optionStoreSetDataHeader title: o.value
    @elementClear!
    @elementMakeData!
    @elementRefresh!
    
  # @params  o:{ value:S }
  Comp::elementOnSelectChange = (o) !->  
    _this = @; @action type: 'ELEMENT_ON_SELECT_CHANGE'
    @elementSelectById  id: o.value
    
  # @params  o:{ value:S }
  Comp::elementOnSampleChange = (o) !->  
    _this = @; @action type: 'ELEMENT_ON_SAMPLE_CHANGE'
    @headerSetEditModal id: 'replace', value: o.value
  
  # @params  o:{ value:S }
  Comp::elementOnViewChange = (o) !->  
    _this = @; @action type: 'ELEMENT_ON_VIEW_CHANGE'
    view  = o.value
    views = 
      'Tree': 
        refresh:   !-> _this.treeDataRefresh!
        selected:   -> []
        template:  @templates.admin.tree_data
        container: !-> _this.treeDataMakeContainer _this.admin.tree.data
      'List': 
        refresh:   !-> _this.listDataRefresh!
        selected:   -> _this.listDataGetSelected!
        template:  @templates.admin.list_data
        container: !-> _this.listDataRefresh!; _this.listDataMakeSearchable!
    @refresh  = views[view].refresh
    @selected = views[view].selected
    $ '#content__admin' .html ''
    $ '#content__admin' .html views[view].template
    views[view].container!
    #@refresh!
    
  # @params  o:{ value:S }
  Comp::elementOnSelectCreate = (o) ->  
    _this = @; @action type: 'ELEMENT_ON_SELECT_CREATE'
    if o.value
      cb = (attrs) !->
        _this.selectCreate   option: {id: attrs.id, name: attrs.name}
        _this.selectSetValue value: attrs.id
        _this.elementSelectById  id: attrs.id
      @elementCreate attrs: {name: o.value}, cb: cb
      null
    
  # @params  o:{ id:N|S }
  Comp::elementOnRouteId = (o) !->  
    _this = @; @action type: 'ELEMENT_ON_ROUTE_ID'
    @elementSelectById id: o.id
    
  # @params  o:{ adapter:S, ?params:S }
  Comp::elementOnRouteData = (o) !->  
    _this = @; @action type: 'ELEMENT_ON_ROUTE_DATA'
    params = {}
    title  = @optionStoreMatchAliasToTitle alias: o.adapter
    try
      params = JSON.parse o.params
    catch e
      console.log e
    if title != ''
      if params.db_url
        @config.store_data[o.adapter].db_url = params.db_url
      if params.table
        @config.store_data[o.adapter].table  = params.table
      if params.others
        @config.store_data[o.adapter].others = params.others
      @srcSetValue value: title
      @elementOnSrcChange value: title
    else
      @elementClear!
    
  # @params  o:{ db_url:S, ?script:B }
  Comp::elementOnRouteDataStatic = (o) !->  
    _this = @; @action type: 'ELEMENT_ON_ROUTE_DATA_STATIC'
    @config.store_data['static'].db_url = o.db_url
    if o.script
      @config.store_data['static'].others = '{"script": true}'
    @srcSetValue value: 'Static'
    @elementOnSrcChange value: 'Static'

module.exports = _Component
