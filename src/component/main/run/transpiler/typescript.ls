
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors typescript|tsc
  # @methods runTranspilerTypescript {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runTranspilerTypescript = (o) -> 
    _this = @; @action type: 'RUN_TRANSPILER_TYPESCRIPT'
    types = 
      frame:   !-> _this.runTranspilerTypescriptFrame   o
      editor:  !-> _this.runTranspilerTypescriptEditor  o
      compile:  -> _this.runTranspilerTypescriptCompile o
    types[o.type]!
    
  # @params  o:{ src:S }
  Comp::runTranspilerTypescriptFrame = (o) !-> 
    _this = @; @action type: 'RUN_TRANSPILER_TYPESCRIPT_FRAME'
    o.script = @runTranspilerTypescriptCompile o
    o.src    = false
    @runDisplay o
  
  # @params  o:{ src:S }
  Comp::runTranspilerTypescriptEditor = (o) !-> 
    _this = @; @action type: 'RUN_TRANSPILER_TYPESCRIPT_EDITOR'
    o.src = @runTranspilerTypescriptCompile o
    o.ext = 'js'
    @runDisplay o
  
  # @vendors tsc
  # @params  o:{ src:S }
  # @return  S
  Comp::runTranspilerTypescriptCompile = (o) -> 
    _this = @; @action type: 'RUN_TRANSPILER_TYPESCRIPT_COMPILE'
    ts.transpile o.src, do
      jsx:    ts.JsxEmit.React
      module: ts.ModuleKind.CommonJS

module.exports = _Component
