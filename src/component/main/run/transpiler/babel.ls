
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors babel|bab
  # @methods runTranspilerBabel {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runTranspilerBabel = (o) ->
    _this = @; @action type: 'RUN_TRANSPILER_BABEL_FRAME'
    types = 
      frame:   !-> _this.runTranspilerBabelFrame   o
      editor:  !-> _this.runTranspilerBabelEditor  o
      compile:  -> _this.runTranspilerBabelCompile o
    types[o.type]!
    
  # @params  o:{ src:S }
  Comp::runTranspilerBabelFrame = (o) !-> 
    _this = @; @action type: 'RUN_TRANSPILER_BABEL_FRAME'
    o.script = @runTranspilerBabelCompile o
    o.src    = false
    @runDisplay o
  
  # @params  o:{ src:S }
  Comp::runTranspilerBabelEditor = (o) !-> 
    _this = @; @action type: 'RUN_TRANSPILER_BABEL_EDITOR'
    o.src = @runTranspilerBabelCompile o
    o.ext = 'js'
    @runDisplay o
  
  # @vendors bab
  # @params  o:{ src:S }
  # @return  S
  Comp::runTranspilerBabelCompile = (o) -> 
    _this = @; @action type: 'RUN_TRANSPILER_BABEL_COMPILE'
    Babel.transform o.src, do
      presets: ['es2015']
      plugins: ['transform-react-jsx']
    .code

module.exports = _Component
