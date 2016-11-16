
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors less|les
  # @methods runPreprocessorLess {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runPreprocessorLess = (o) -> 
    _this = @; @action type: 'RUN_PREPROCESSOR_LESS'
    types = 
      frame:   !-> _this.runPreprocessorLessFrame   o
      editor:  !-> _this.runPreprocessorLessEditor  o
      compile:  -> _this.runPreprocessorLessCompile o
    types[o.type]!
    
  # @params  o:{ src:S }
  Comp::runPreprocessorLessFrame = (o) !-> 
    _this = @; @action type: 'RUN_PREPROCESSOR_LESS_FRAME'
    o.src = @runPreprocessorLessCompile o
    @runDisplay o
  
  # @params  o:{ src:S }
  Comp::runPreprocessorLessEditor = (o) !-> 
    _this = @; @action type: 'RUN_PREPROCESSOR_LESS_EDITOR'
    o.src = @runPreprocessorLessCompile o
    @runDisplay o
  
  # @vendors les
  # @params  o:{ src:S }
  # @return  S
  Comp::runPreprocessorLessCompile = (o) -> 
    _this = @; @action type: 'RUN_PREPROCESSOR_LESS_COMPILE'
    less.renderSync o.src

module.exports = _Component
