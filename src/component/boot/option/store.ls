
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @vendors jquery|jqy, selectize|slz
  # @methods optionStore {
  #   Make, MakeContainer, MakeInputsAutoConfig,
  #   ConfigInputs, SetValue, GetValue,
  #   MatchAliasToTitle, MatchTitleToAlias
  #   SetDataHeader
  # }
  
  Comp::initOptionStore = !->
    _this = @; @action type: 'INIT_OPTION_STORE'
    
    @optionStoreMake @props.boot.options.store_data
    @optionStoreSetDataHeader title: do
      @optionStoreMatchAliasToTitle alias: @config.store_data.index
  
  # @params  o:{ config:S, .. }
  Comp::optionStoreMake = (o) -> 
    _this = @; @action type: 'OPTION_STORE_MAKE'
    @options[o.config] = @optionStoreMakeContainer o
    @optionStoreMakeInputsAutoConfig o
    @optionStoreConfigInputs o
    @optionStoreSetValue config: o.config, value: do
      @optionStoreMatchAliasToTitle alias: @config[o.config].index
  
  # @vendors jqy, slz
  # @params  o:{ config:S, options:[] }
  Comp::optionStoreMakeContainer = (o) -> 
    _this = @; @action type: 'OPTION_STORE_MAKE_CONTAINER'
    configSz = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
        adapter = _this.optionStoreMatchTitleToAlias title: value
        _this.config[o.config].index = adapter
        _this.configSet config: o.config, props: _this.config[o.config]
        _this.optionStoreConfigInputs o
      create: false
    $ '#' + o.id .selectize (configSz!) .0 .selectize
  
  # @vendors jqy
  # @params  o:{ config:S, id:S, inputs:[S] }
  Comp::optionStoreMakeInputsAutoConfig = (o) -> 
    _this = @; @action type: 'OPTION_STORE_MAKE_INPUTS_AUTO_CONFIG'
    config  = o.config
    for let input, i in o.inputs
      id    = o.id + '__' + input
      $ '#' + id .on 'change', !->
        val     = ($ @ .val!) # db_url / table
        adapter = _this.config[o.config].index
        _this.config[o.config][adapter][input] = val
        _this.configSet config: o.config, props: _this.config[o.config]
  
  # @vendors 
  # @params  o:{ config:S }
  Comp::optionStoreConfigInputs = (o) !-> 
    _this = @; @action type: 'OPTION_STORE_CONFIG_INPUTS'
    adapter = @config[o.config].index
    for let input, i in o.inputs
      id      = o.id + '__' + input
      val     = @config[o.config][adapter][input]
      $ '#' + id .val val
  
  # @params  o:{ value:S, config:S }
  Comp::optionStoreSetValue = (o) !-> 
    _this = @; @action type: 'OPTION_STORE_SET_VALUE'
    @options[o.config].setValue o.value, ->
    adapter = @optionStoreMatchTitleToAlias title: o.value
    @config[o.config].index = adapter
    @configSet config: o.config, props: @config[o.config]
    o.id     = 'content__option__store__data'
    o.inputs = ['db_url', 'table', 'others']
    @optionStoreConfigInputs o
  
  # @vendors slz
  # @params  o:{ config:S }
  # @return  S
  Comp::optionStoreGetValue = (o) -> 
    _this = @; @action type: 'OPTION_STORE_GET_VALUE'
    @options[o.config].getValue!
  
  # @params  o:{ alias:S }
  # @return  S
  Comp::optionStoreMatchAliasToTitle = (o) -> 
    _this = @; @action type: 'OPTION_STORE_MATCH_ALIAS_TO_TITLE'
    aliases = 
      'static':       'Static'
      'indexeddb':    'Browser (IndexedDB)'
      'localstorage': 'Browser (LocalStorage)'
      'ajax':         'Server (AJAX)'
      'dom':          'Server (DOM)'
      'firebase3':    'Cloud (Firebase 3)'
    title = aliases[o.alias] || ''
    title
  
  # @params  o:{ title:S }
  # @return  S
  Comp::optionStoreMatchTitleToAlias = (o) -> 
    _this = @; @action type: 'OPTION_STORE_MATCH_TITLE_TO_ALIAS'
    titles = 
      'Static':                 'static'
      'Browser (IndexedDB)':    'indexeddb'
      'Browser (LocalStorage)': 'localstorage'
      'Server (AJAX)':          'ajax'
      'Server (DOM)':           'dom'
      'Cloud (Firebase 3)':     'firebase3'
    alias = titles[o.title] || ''
    alias
  
  # @params  o:{ title:S }
  Comp::optionStoreSetDataHeader = (o) !-> 
    _this = @; @action type: 'OPTION_STORE_MATCH_TITLE_TO_ALIAS'
    $ '#header__data' .html o.title

module.exports = _Component
