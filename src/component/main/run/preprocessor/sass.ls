
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors sass|sas
  # @methods runPreprocessorSass {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runPreprocessorSass = (o) -> 
    _this = @; @action type: 'RUN_PREPROCESSOR_SASS'
    types = 
      frame:   !-> _this.runPreprocessorSassFrame   o
      editor:  !-> _this.runPreprocessorSassEditor  o
      compile:  -> _this.runPreprocessorSassCompile o
    types[o.type]!
    
  # @params  o:{ src:S }
  Comp::runPreprocessorSassFrame = (o) !-> 
    _this = @; @action type: 'RUN_PREPROCESSOR_SASS_FRAME'
    o.src = @runPreprocessorSassCompile o
    @runDisplay o
  
  # @params  o:{ src:S }
  Comp::runPreprocessorSassEditor = (o) !-> 
    _this = @; @action type: 'RUN_PREPROCESSOR_SASS_EDITOR'
    o.src = @runPreprocessorSassCompile o
    @runDisplay o
  
  # @vendors sas
  # @params  o:{ src:S }
  # @return  S
  Comp::runPreprocessorSassCompile = (o) -> 
    _this = @; @action type: 'RUN_PREPROCESSOR_SASS_COMPILE'
    Sass.compile o.src

module.exports = _Component
