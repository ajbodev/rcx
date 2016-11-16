
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @methods runDefaultJs {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runDefaultJs = (o) -> 
    _this = @; @action type: 'RUN_DEFAULT_JS'
    types = 
      frame:   !-> _this.runDefaultJsFrame   o
      editor:  !-> _this.runDefaultJsEditor  o
      compile:  -> _this.runDefaultJsCompile o
    types[o.type]!
    
  # @params  o:{ src:S, ?ext:S }
  Comp::runDefaultJsFrame = (o) !-> 
    _this = @; @action type: 'RUN_DEFAULT_JS_FRAME'
    o.script = @runDefaultJsCompile o
    o.src    = false
    @runDisplay o
  
  # @params  o:{ src:S, ?ext:S }
  Comp::runDefaultJsEditor = (o) !-> 
    _this = @; @action type: 'RUN_DEFAULT_JS_EDITOR'
    o.src = @runDefaultJsCompile o
    o.ext = 'js'
    @runDisplay o
  
  # @params  o:{ src:S, ?ext:S }
  # @return  S
  Comp::runDefaultJsCompile = (o) -> 
    _this = @; @action type: 'RUN_DEFAULT_JS_COMPILE'
    o.src

module.exports = _Component
