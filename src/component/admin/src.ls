
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods src {
  #   MakeContainer, SetValue, GetValue,
  #   Enable, Disable
  # }
  
  Comp::initSrc = !->
    _this = @; @action type: 'INIT_SRC'
    
  # @vendors jqy, slz
  # @params  o:{ context:S, entity:S, id:S, options:[], ?onChange:S, ?option_store_id:S, ?option_store_inputs:[] }
  # @return  {}
  Comp::srcMakeContainer = (o) -> 
    _this = @; @action type: 'SRC_MAKE_CONTAINER'
    config = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
        if o.onChange
          value = _this[o.onChange] do
            value: value, option_store_id: o.option_store_id, option_store_inputs: o.option_store_inputs
      create: false
    $ '#' + o.id .selectize (config!) .0 .selectize

  # @vendors slz
  # @params  o:{ src:S, value:S }
  Comp::srcSetValue = (o) !-> 
    _this = @; @action type: 'SRC_SET_VALUE'
    @src.setValue o.value, ->

  # @vendors slz
  # @params  o:{ src:S, value:S }
  # @return  S
  Comp::srcGetValue = (o) -> 
    _this = @; @action type: 'SRC_GET_VALUE'
    @src.getValue!
    
  # @vendors slz
  Comp::srcEnable = (o) !-> 
    _this = @; @action type: 'SRC_ENABLE'
    @src.enable!
    
  # @vendors slz
  Comp::srcDisable = (o) !-> 
    _this = @; @action type: 'SRC_DISABLE'
    @src.disable!

module.exports = _Component
