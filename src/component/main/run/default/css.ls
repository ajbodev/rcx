
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @methods runDefaultCss {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runDefaultCss = (o) -> 
    _this = @; @action type: 'RUN_DEFAULT_CSS'
    types = 
      frame:   !-> _this.runDefaultCssFrame   o
      editor:  !-> _this.runDefaultCssEditor  o
      compile:  -> _this.runDefaultCssCompile o
    types[o.type]!
    
  # @params  o:{ src:S, ?ext:S }
  Comp::runDefaultCssFrame = (o) !-> 
    _this = @; @action type: 'RUN_DEFAULT_CSS_FRAME'
    o.style = @runDefaultCssCompile o
    o.src   = false
    @runDisplay o
  
  # @params  o:{ src:S, ?ext:S }
  Comp::runDefaultCssEditor = (o) !-> 
    _this = @; @action type: 'RUN_DEFAULT_CSS_EDITOR'
    o.src = @runDefaultCssCompile o
    o.ext = 'css'
    @runDisplay o
  
  # @params  o:{ src:S, ?ext:S }
  Comp::runDefaultCssCompile = (o) -> 
    _this = @; @action type: 'RUN_DEFAULT_CSS_COMPILE'
    o.src

module.exports = _Component
