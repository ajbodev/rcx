
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods ext {
  #   MakeContainer, SetValue, GetValue, IsValid
  #   Enable, Disable
  # }

  Comp::initExt = !->
    _this = @; @action type: 'INIT_EXT'
    
  # @vendors jqy, slz
  # @params  o:{ context:S, entity:S, id:S, options:[], ?onChange:S }
  Comp::extMakeContainer = (o) -> 
    _this = @; @action type: 'EXT_MAKE_CONTAINER'
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
  Comp::extSetValue = (o) !-> 
    _this = @; @action type: 'EXT_SET_VALUE'
    @exts[o.context][o.entity].setValue o.value, ->

  # @vendors slz
  # @params  o:{ context:S, entity:S, value:S }
  Comp::extGetValue = (o) -> 
    _this = @; @action type: 'EXT_GET_VALUE'
    @exts[o.context][o.entity].getValue!

  # @params  o:{ ext:S }
  Comp::extIsValid = (o) -> 
    _this = @; @action type: 'EXT_IS_VALID'
    valid = true
    exts = [
      # Default
      'txt', 'html', 'js', 'css',
      # Markdown
      'md', '++.md'
      # Template
      'jade',
      # Style
      'less', 'sass', 'styl',
      # Transpiler
      'ls', 'babel.js', 'ts', 'cs',
      # Format
      'json', 'yaml', 'xml',
      # Database
      'sql', 'mongo.js',
      # Lang
      'php', 'rb', 'py'
      # Music
      'abc',
      # Misc_Lang
      'ashx', 'java', 'go', 'rust'
    ]
    if (exts.indexOf o.ext) == -1 then valid = false
    valid
    
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::extEnable = (o) !-> 
    _this = @; @action type: 'EXT_ENABLE'
    @exts[o.context][o.entity].enable!
    
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::extDisable = (o) !-> 
    _this = @; @action type: 'EXT_DISABLE'
    @exts[o.context][o.entity].disable!

module.exports = _Component
