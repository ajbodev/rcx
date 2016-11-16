
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods urlhash {
  #   MakeContainer, SetValue, GetValue, Create,
  #   Enable, Disable, EnableButton, DisableButton, Clear
  # }
  
  Comp::initUrlhash = !->
    _this = @; @action type: 'INIT_URLHASH'
    
  # @vendors jqy, slz
  # @params  o:{ context:S, entity:S, id:S, options:[], ?onChange:S, ?onCreate:S }
  Comp::urlhashMakeContainer = (o) -> # 
    _this = @; @action type: 'URLHASH_MAKE_CONTAINER'
    config = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
        if o.onChange
          value = _this[o.onChange] context: o.context, entity: o.entity, value: value
      create: (value) ->
        if o.onCreate
          _this[o.onCreate] context: o.context, entity: o.entity, value: value
    $ '#' + o.id .selectize (config!) .0 .selectize

  # @vendors slz
  # @params  o:{ context:S, entity:S, value:S }
  Comp::urlhashSetValue = (o) !-> # 
    _this = @; @action type: 'URLHASH_SET_VALUE'
    @urlhashes[o.context][o.entity].setValue o.value, ->

  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::urlhashGetValue = (o) -> # 
    _this = @; @action type: 'URLHASH_GET_VALUE'
    @urlhashes[o.context][o.entity].getValue!
  
  # @vendors slz
  # @params  o:{ context:S, entity:S, value:S }
  Comp::urlhashCreate = (o) !-> # 
    _this = @; @action type: 'URLHASH_CREATE'
    @urlhashes[o.context][o.entity].addOption value: o.value, label: o.value
    @urlhashes[o.context][o.entity].setValue o.value, ->
    
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::urlhashEnable = (o) !-> # 
    _this = @; @action type: 'URLHASH_ENABLE'
    @urlhashes[o.context][o.entity].enable!
    
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::urlhashDisable = (o) !-> # 
    _this = @; @action type: 'URLHASH_DISABLE'
    @urlhashes[o.context][o.entity].disable!

  # @vendors jqy
  # @params  o:{ id:S }
  Comp::urlhashEnableButton = (o) !-> # 
    _this = @; @action type: 'URLHASH_ENABLE_BUTTON'
    $ '#' + o.id .prop 'disabled', false

  # @vendors jqy
  # @params  o:{ id:S }
  Comp::urlhashDisableButton = (o) !-> # id
    _this = @; @action type: 'URLHASH_DISABLE_BUTTON'
    $ '#' + o.id .prop 'disabled', true
  
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::urlhashClear = (o) -> # 
    _this = @; @action type: 'URLHASH_CLEAR'
    @urlhashes[o.context][o.entity].clearOptions!

module.exports = _Component
