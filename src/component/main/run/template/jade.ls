
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jade|jad
  # @methods runTemplateJade {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runTemplateJade = (o) -> 
    _this = @; @action type: 'RUN_TEMPLATE_JADE'
    types = 
      frame:   !-> _this.runTemplateJadeFrame   o
      editor:  !-> _this.runTemplateJadeEditor  o
      compile:  -> _this.runTemplateJadeCompile o
    types[o.type]!
    
  # @params  o:{ src:S }
  Comp::runTemplateJadeFrame = (o) !-> 
    _this = @; @action type: 'RUN_TEMPLATE_JADE_FRAME'
    o.src = @runTemplateJadeCompile o
    @runDisplay o
  
  # @params  o:{ src:S }
  Comp::runTemplateJadeEditor = (o) !-> 
    _this = @; @action type: 'RUN_TEMPLATE_JADE_EDITOR'
    o.src = @runTemplateJadeCompile o
    @runDisplay o
  
  # @vendors jad
  # @params  o:{ src:S }
  # @return  S
  Comp::runTemplateJadeCompile = (o) -> 
    _this = @; @action type: 'RUN_TEMPLATE_JADE_COMPILE'
    jade.render o.src, pretty_true

module.exports = _Component
