
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods format {
  #   MakeContainer, SetValue, GetValue, OnImportDataChange
  # }
  
  Comp::initFormat = !->
    _this = @; @action type: 'INIT_FORMAT'
    
    for let el, i in ['html' 'css' 'js']
      @formats.inputs[el] = @formatMakeContainer @props.util.formats.inputs[el]
      @formatSetValue do
        context: 'inputs', entity: [el], value: @props.util.formats.inputs[el].options.0.value

    @formats.admin.index = @formatMakeContainer @props.util.formats.admin.index
    @formatSetValue do
      context: 'admin', entity: 'index', value: @props.util.formats.admin.index.options.0.value
    
  # @vendors jqy, slz
  # @params  o:{ context:S, entity:S, id:S, options:[], ?onChange:S }
  Comp::formatMakeContainer = (o) -> # 
    _this = @; @action type: 'FORMAT_MAKE_CONTAINER'
    config = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
       if o.onChange
         _this[o.onChange] value: value
      create: false
    $ '#' + o.id .selectize (config!) .0 .selectize

  # @vendors slz
  # @params  o:{ context:S, entity:S, value:S }
  Comp::formatSetValue = (o) !-> # 
    _this = @; @action type: 'FORMAT_SET_VALUE'
    @formats[o.context][o.entity].setValue o.value, ->

  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::formatGetValue = (o) -> # 
    _this = @; @action type: 'FORMAT_GET_VALUE'
    @formats[o.context][o.entity].getValue!

  # @vendors jqy
  # @params  o:{ value:S }
  Comp::formatOnImportDataChange = (o) !-> # 
    _this = @; @action type: 'FORMAT_ON_IMPORT_DATA_CHANGE'
    $ '#content__admin__import' .prop 'disabled', (o.value == 'zip')

module.exports = _Component
