
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors livescript|lsc
  # @methods runTranspilerLivescript {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runTranspilerLivescript = (o) -> 
    _this = @; @action type: 'RUN_TRANSPILER_LIVESCRIPT'
    types = 
      frame:   !-> _this.runTranspilerLivescriptFrame   o
      editor:  !-> _this.runTranspilerLivescriptEditor  o
      compile:  -> _this.runTranspilerLivescriptCompile o
    types[o.type]!
    
  # @params  o:{ src:S }
  Comp::runTranspilerLivescriptFrame = (o) !-> 
    _this = @; @action type: 'RUN_TRANSPILER_LIVESCRIPT_FRAME'
    o.script = @runTranspilerLivescriptCompile o
    o.src    = false
    @runDisplay o
  
  # @params  o:{ src:S }
  Comp::runTranspilerLivescriptEditor = (o) !-> 
    _this = @; @action type: 'RUN_TRANSPILER_LIVESCRIPT_EDITOR'
    o.src = @runTranspilerLivescriptCompile o
    o.ext = 'js'
    @runDisplay o
  
  # @vendors lsc
  # @params  o:{ src:S }
  # @return  S
  Comp::runTranspilerLivescriptCompile = (o) -> 
    _this = @; @action type: 'RUN_TRANSPILER_LIVESCRIPT_COMPILE'
    LiveScript.compile o.src, bare: true

module.exports = _Component
