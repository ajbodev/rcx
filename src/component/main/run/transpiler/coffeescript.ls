
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors coffeescript|csc
  # @methods runTranspilerCoffeescript {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runTranspilerCoffeescript = (o) -> 
    _this = @; @action type: 'RUN_TRANSPILER_COFFEESCRIPT'
    types = 
      frame:   !-> _this.runTranspilerCoffeescriptFrame   o
      editor:  !-> _this.runTranspilerCoffeescriptEditor  o
      compile:  -> _this.runTranspilerCoffeescriptCompile o
    types[o.type]!
    
  # @params  o:{ src:S }
  Comp::runTranspilerCoffeescriptFrame = (o) !-> 
    _this = @; @action type: 'RUN_TRANSPILER_COFFEESCRIPT_FRAME'
    o.script = @runTranspilerCoffeescriptCompile o
    o.src    = false
    @runDisplay o
  
  # @params  o:{ src:S }
  Comp::runTranspilerCoffeescriptEditor = (o) !-> 
    _this = @; @action type: 'RUN_TRANSPILER_COFFEESCRIPT_EDITOR'
    o.src = @runTranspilerCoffeescriptCompile o
    o.ext = 'js'
    @runDisplay o
  
  # @vendors tsc
  # @params  o:{ src:S }
  # @return  S
  Comp::runTranspilerCoffeescriptCompile = (o) -> 
    _this = @; @action type: 'RUN_TRANSPILER_COFFEESCRIPT_COMPILE'
    CoffeeScript.compile o.src, bare: true

module.exports = _Component
