
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, codemirror|cdm
  # @methods editor {
  #   MakeContainer, SetValue, GetValue
  #   SetProp, GetProp, SetMode, GetMode, ToggleLint
  # }

  Comp::initEditor = !->
    _this = @; @action type: 'INIT_EDITOR'
    
  # @vendors jqy, cdm
  # @params  o:{ context:S, entity:S, id:S, ?onChange:S }
  # @return  {}
  Comp::editorMakeContainer =  (o) -> # context, entity, id, ?onChange
    _this = @; @action type: 'EDITOR_MAKE_CONTAINER'
    editor = CodeMirror.fromTextArea (document.getElementById o.id), do
      mode:         o.type || 'text/plain'
      theme:        'blackboard'
      gutters:      ['CodeMirror-lint-markers']
      tabMode:      'indent'
      lineNumbers:  true
      indentUnit:   2
      lineWrapping: true
      lint:         o.lint || false
    if o.onChange
      editor.on 'change', !->
        _this[o.onChange] context: o.context, entity: o.entity
    editor
    
  # @vendors cdm
  # @params  o:{ context:S, entity:S, value:S }
  Comp::editorSetValue = (o) !-> 
    _this = @; @action type: 'EDITOR_SET_VALUE'
    @editors[o.context][o.entity].setValue o.value
    
  # @vendors cdm
  # @params  o:{ context:S, entity:S, value:S }
  # @return  S
  Comp::editorGetValue = (o) -> 
    _this = @; @action type: 'EDITOR_GET_VALUE'
    @editors[o.context][o.entity].getValue!
      
  # @vendors cdm
  # @params  o:{ context:S, entity:S, prop:S }
  # @return  S
  Comp::editorGetProp = (o) -> 
    _this = @; @action type: 'EDITOR_GET_PROP'
    @editors[o.context][o.entity].getOption o.prop
      
  # @vendors cdm
  # @params  o:{ context:S, entity:S, prop:S, value:S }
  # @return  S
  Comp::editorSetProp = (o) !-> 
    _this = @; @action type: 'EDITOR_SET_PROP'
    @editors[o.context][o.entity].setOption o.prop, o.value
      
  # @vendors cdm
  # @params  o:{ context:S, entity:S, value:S, ?ext:S }
  Comp::editorSetMode = (o) !-> 
    _this = @; @action type: 'EDITOR_SET_MODE'
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
      # Database
      'sql': 'text/x-sql', 'mongo.js': 'text/javascript',
      # Lang
      'php': 'text/x-php', 'rb': 'text/x-ruby', 'py': 'text/x-python'
      # Music
      'abc': 'text/x-abc',
      # Generator
      # Misc_Lang
      'ashx': 'text/x-csharp', 'java': 'text/x-java', 'go': 'text/x-go', 'rust': 'text/x-rust'
    mode = o.value || modes[o.ext]
    @editors[o.context][o.entity].setOption 'mode', mode
      
  # @vendors cdm
  # @params  o:{ context:S, entity:S }
  # @return  S
  Comp::editorGetMode = (o) -> 
    _this = @; @action type: 'EDITOR_GET_MODE'
    @editors[o.context][o.entity].getOption 'mode'
      
  # @vendors cdm
  # @params  o:{ context:S, entity:S, state:S }
  Comp::editorToggleLint = (o) !-> 
    _this = @; @action type: 'EDITOR_TOGGLE_LINT'
    try
      @editors[o.context][o.entity].setOption 'lint', o.state
    catch e
      console.log 'Lint error', e
      
module.exports = _Component
