
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods view {
  #   MakeContainer, SetValue, GetValue
  # }
  
  Comp::initView = !->
    _this = @; @action type: 'INIT_VIEW'
    
  # @vendors jqy, slz
  # @params  o:{ id:S, options:[], ?onChange:S }
  # @return  {}
  Comp::viewMakeContainer = (o) -> 
    _this = @; @action type: 'VIEW_MAKE_CONTAINER'
    _this = @
    config = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
        if o.onChange
          value = _this[o.onChange] value: value
      create: false
    $ '#' + o.id .selectize (config!) .0 .selectize

  # @vendors slz
  # @params  o:{ value:S }
  Comp::viewSetValue = (o) !-> # value
    _this = @; @action type: 'VIEW_SET_VALUE'
    @view.setValue o.value, ->

  # @vendors slz
  # @params  o:{  }
  # @return  S
  Comp::viewGetValue = (o) -> 
    _this = @; @action type: 'VIEW_GET_VALUE'
    @view.getValue!

module.exports = _Component
