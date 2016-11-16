
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, icheck|ich
  # @methods script {
  #   IsExtsLoaded, CheckExtsLoaded, LoadExts, GetIdFromExt
  # }
  
  Comp::initScript = !->
    _this = @; @action type: 'INIT_SCRIPT'
      
    @onloads = 
      # Default
      'html':      (o) !-> 
      'css':       (o) !-> 
      'js':        (o) !-> 
      # Markdown
      'md':        (o) !-> 
      # Template
      'jade':      (o) !-> 
      # Preprocessor
      'less':      (o) !-> 
        window.less.renderSync = (src) ->
          css = ''
          @render src, {}, (err, result) !->
            css := result.css
          css
      'sass':      (o) !-> 
      'styl':      (o) !-> 
        stylus = window['require'] 'stylus'
        stylus.renderSync = (src) ->
          css = ''
          @render src, {}, (err, result) !->
            css := result
          css
        window.stylus = stylus
      # Transpiler
      'ts':        (o) !-> 
      'babel.js':  (o) !-> 
      'cs':        (o) !-> 
      'ls':        (o) !-> 
        window.LiveScript = window['require'] 'LiveScript'
    
    @loadeds = 
      # Default
      'html':      (o)  -> true
      'css':       (o)  -> true
      'js':        (o)  -> true
      # Markdown
      'md':        (o)  -> if window.marked then true else false
      # Template
      'jade':      (o)  -> if window.jade then true else false
      # Preprocessor
      'less':      (o)  -> if window.less then true else false
      'sass':      (o)  -> if window.Sass then true else false
      'styl':      (o)  -> if window.stylus then true else false
      # Transpiler
      'babel.js':  (o)  -> if window.Babel then true else false
      'ts':        (o)  -> if window.ts then true else false
      'cs':        (o)  -> if window.CoffeeScript then true else false
      'ls':        (o)  -> if window.LiveScript then true else false

    @scriptCheckExtsLoaded!
  
  # @params  o:{ exts:[] }
  Comp::scriptIsExtsLoaded = (o) -> # 
    _this = @; @action type: 'SCRIPT_IS_EXTS_LOADED'
    all = true
    for let el, i in o.exts
      if !@scripts[el]
        all := false
    all
  
  # @vendors jqy, ich
  Comp::scriptCheckExtsLoaded = (o) -> # 
    _this = @; @action type: 'SCRIPT_CHECK_EXTS_LOADED'
    for let i, el of @scripts
      loaded = @loadeds[i]!
      if loaded
        @scripts[i] = true
        if i == 'babel.js' then i = 'babel' # :)
        $ '#content__option__run__' + i .iCheck 'check'
        $ '#content__option__run__' + i .iCheck 'disable'
  
  # @params  o:{ exts:[], cb:F }
  Comp::scriptLoadExts = (o) !-> # 
    _this = @; @action type: 'SCRIPT_LOAD_EXTS'
    for let el, i in o.exts
      if !@scripts[el]
        id = @scriptGetIdFromExt ext: el
        @optionRunLoadScript id: id, cb: o.cb
    
  # @params  o:{ ext:S }
  Comp::scriptGetIdFromExt = (o) -> # 
    _this = @; @action type: 'SCRIPT_GET_ID_FROM_EXT'
    ids = 
      # Default
      #'txt': 'txt', 'html': 'html', 'js': 'js', 'css': 'css', 
      # Markdown
      'md': 'md'
      # Template
      'jade': 'jade',
      # Style
      'less': 'less', 'sass': 'sass', 'styl': 'styl',
      # Transpiler
      'ls': 'ls', 'babel.js': 'babel', 'ts': 'ts', 'cs': 'cs',
    id = 'content__option__run__' + ids[o.ext]
    id

module.exports = _Component
