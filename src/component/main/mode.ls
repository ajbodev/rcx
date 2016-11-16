
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods mode {
  #   MakeContainer, SetValue, getValue
  #   GetFromExt, Enable, Disable
  # }
  
  Comp::initMode = !->
    _this = @; @action type: 'INIT_MODE'
    
  # @vendors jqy, slz
  # @params  o:{ context:S, entity:S, id:S, options:[], ?onChange:S }
  Comp::modeMakeContainer = (o) -> 
    _this = @; @action type: 'MODE_MAKE_CONTAINER'
    config = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
        if o.onChange
          value = _this[o.onChange] context: o.context, entity: o.entity, value: value
      create: false
    $ '#' + o.id .selectize (config!) .0 .selectize

  # @vendors slz
  # @params  o:{ context:S, entity:S, ?value:S, ?ext:S }
  Comp::modeSetValue = (o) !-> 
    _this = @; @action type: 'MODE_SET_VALUE'
    value = o.value || @modeGetFromExt ext: o.ext
    @modes[o.context][o.entity].setValue value, ->

  # @vendors slz
  # @params  o:{ context:S, entity:S, value:S }
  # @return  S
  Comp::modeGetValue = (o) -> 
    _this = @; @action type: 'MODE_GET_VALUE'
    @modes[o.context][o.entity].getValue!

  # @params  o:{ ext:S }
  # @return  S
  Comp::modeGetFromExt = (o) -> 
    _this = @; @action type: 'MODE_GET_FROM_EXT'
    modes = 
      # Default
      'txt': 'text/plain',
      'html': 'text/html', 'js': 'text/javascript', 'css': 'text/css',
      # Markdown
      'md': 'text/x-markdown', '++.md': 'text/x-markdown', 'remark.md': 'text/x-markdown'
      # Template
      'jade': 'text/x-jade',
      # Style
      'less': 'text/x-less', 'sass': 'text/x-sass', 'styl': 'text/x-styl'
      # Transpiler
      'ls': 'text/x-livescript', 'jsx': 'text/jsx',
      'babel.js': 'text/javascript', 'ts': 'text/typescript', 'cs': 'text/x-coffeescript',
      # Format
      'json': 'application/x-json', 'yaml': 'text/x-yaml', 'xml': 'text/xml',
    mode = modes[o.ext] || 'text/plain'
    mode
    
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::modeEnable = (o) !-> 
    _this = @; @action type: 'MODE_ENABLE'
    @modes[o.context][o.entity].enable!
    
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::modeDisable = (o) !-> 
    _this = @; @action type: 'MODE_DISABLE'
    @modes[o.context][o.entity].disable!

module.exports = _Component
