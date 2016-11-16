
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors stylus|sty
  # @methods runPreprocessorStylus {
  #   @, Frame, Editor, Compile
  # }
  
  # @vendors  
  # @params  o:{  }
  Comp::runPreprocessorStylus = (o) -> 
    _this = @; @action type: 'RUN_PREPROCESSOR_STYLUS'
    types = 
      frame:   !-> _this.runPreprocessorStylusFrame   o
      editor:  !-> _this.runPreprocessorStylusEditor  o
      compile:  -> _this.runPreprocessorStylusCompile o
    types[o.type]!
    
  # @params  o:{ src:S }
  Comp::runPreprocessorStylusFrame = (o) !-> 
    _this = @; @action type: 'RUN_PREPROCESSOR_STYLUS_FRAME'
    o.src = @runPreprocessorStylusCompile o
    @runDisplay o
  
  # @params  o:{ src:S }
  Comp::runPreprocessorStylusEditor = (o) !-> 
    _this = @; @action type: 'RUN_PREPROCESSOR_STYLUS_EDITOR'
    o.src = @runPreprocessorStylusCompile o
    @runDisplay o
  
  # @vendors sty
  # @params  o:{ src:S }
  # @return  S
  Comp::runPreprocessorStylusCompile = (o) -> 
    _this = @; @action type: 'RUN_PREPROCESSOR_STYLUS_COMPILE'
    stylus o.src .render!

module.exports = _Component
