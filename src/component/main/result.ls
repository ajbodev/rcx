
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods result {
  #   MakeContainer, SetValue, GetValue
  # }
  
  Comp::initResult = !->
    _this = @; @action type: 'INIT_RESULT'
    
  # @vendors jqy, slz
  # @params  o:{ context:S, entity:S, id:S, options:[], ?onChange:S }
  # @return  {}
  Comp::resultMakeContainer = (o) -> 
    _this = @; @action type: 'RESULT_MAKE_CONTAINER'
    config = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
        if o.onChange
          value = _this[o.onChange] context: o.context, entity: o.entity, value: value
      create: false
    $ '#' + o.id .selectize (config!) .0 .selectize

  # @vendors slz
  # @params  o:{ context:S, entity:S, value:S }
  Comp::resultSetValue = (o) !-> 
    _this = @; @action type: 'RESULT_SET_VALUE'
    @results[o.context][o.entity].setValue o.value, ->

  # @vendors 
  # @params  o:{ context:S, entity:S, value:S }
  # @return  S
  Comp::resultGetValue = (o) -> 
    _this = @; @action type: 'RESULT_GET_VALUE'
    @results[o.context][o.entity].getValue!

module.exports = _Component
