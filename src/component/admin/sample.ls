
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods sample {
  #   MakeContainer, SetValue, GetValue,
  #   Refresh, RenderValue, RenderOption
  # }
  
  Comp::initSample = !->
    _this = @; @action type: 'INIT_SAMPLE'
    
  # @vendors jqy, slz
  # @params  o:{ id:S, options:[], ?onChange:S }
  # @return  {}
  Comp::sampleMakeContainer = (o) -> 
    _this = @; @action type: 'SAMPLE_MAKE_CONTAINER'
    config = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
        if o.onChange
          value = _this[o.onChange] value: value
      create: false
      render: 
        item: (item, escape) ->
          _this.sampleRenderValue item: item 
        option: (item, escape) ->
          _this.sampleRenderOption item: item 
    $ '#' + o.id .selectize (config!) .0 .selectize
    
  # @vendors slz
  # @params  o:{ value:S }
  Comp::sampleSetValue = (o) !-> 
    _this = @; @action type: 'SAMPLE_SET_VALUE'
    @sample.setValue o.value, ->
  
  # @vendors slz
  # @return  S
  Comp::sampleGetValue = (o) -> 
    _this = @; @action type: 'SAMPLE_GET_VALUE'
    @sample.getValue!
  
  # @vendors slz
  # @params  o:{ value:S, ?options:[] }
  Comp::sampleRefresh = (o) -> 
    _this = @; @action type: 'SAMPLE_REFRESH'
    @sample.clearOptions!
    for el, i in o.options
      option = value: el.value
      @sample.addOption option
    @sampleSetValue value: o.value || o.options.0
  
  # @vendors 
  # @params  o:{ item:{value:S} }
  # @return  S
  Comp::sampleRenderValue = (o) -> 
    _this = @; @action type: 'SAMPLE_RENDER_VALUE'
    value = o.item.value; _value = ''
    if (value == 'Clone' && @id != null)
      _id    = (@id + '').substring(0, 8)
      _name  = if @name then ' : ' + (@name + '').substring(0, 8) else ''
      _value = ' - ' + _id + _name
    '<div>' + 
    '<span>' + value + _value + '</span> ' + 
    '</div>'
  
  # @vendors 
  # @params  o:{ item:{value:S} }
  # @return  S
  Comp::sampleRenderOption = (o) -> 
    _this = @; @action type: 'SAMPLE_RENDER_OPTION'
    value = o.item.value; _value = ''
    if (value == 'Clone' && @id != null)
      _id    = (@id + '').substring(0, 8)
      _name  = if @name then ' : ' + (@name + '').substring(0, 8) else ''
      _value = ' - ' + _id + _name
    '<div>' + 
    '<span>' + value + _value + '</span> ' + 
    '</div>'

module.exports = _Component
