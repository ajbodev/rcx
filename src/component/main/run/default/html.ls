
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @methods runDefaultHtml {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runDefaultHtml = (o) -> 
    _this = @; @action type: 'RUN_DEFAULT_HTML'
    types = 
      frame:   !-> _this.runDefaultHtmlFrame   o
      editor:  !-> _this.runDefaultHtmlEditor  o
      compile:  -> _this.runDefaultHtmlCompile o
    types[o.type]!
    
  # @params  o:{ src:S, ?ext:S }
  Comp::runDefaultHtmlFrame = (o) !-> 
    _this = @; @action type: 'RUN_DEFAULT_HTML_FRAME'
    o.src = @runDefaultHtmlCompile o
    @runDisplay o
  
  # @params  o:{ src:S, ?ext:S }
  Comp::runDefaultHtmlEditor = (o) !-> 
    _this = @; @action type: 'RUN_DEFAULT_HTML_EDITOR'
    o.src = @runDefaultHtmlCompile o
    o.ext = 'html'
    @runDisplay o
  
  # @params  o:{ src:S, ?ext:S }
  # @return  S
  Comp::runDefaultHtmlCompile = (o) -> 
    _this = @; @action type: 'RUN_DEFAULT_HTML_COMPILE'
    o.src

module.exports = _Component
