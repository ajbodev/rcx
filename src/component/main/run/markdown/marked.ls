
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors marked|mkd
  # @methods runMarkdownMarked {
  #   @, Frame, Editor, Compile
  # }
  
  # @params  o:{ type:S, src:S, ?ext:S }
  # @return  S|?
  Comp::runMarkdownMarkedJs = (o) -> 
    _this = @; @action type: 'RUN_MARKDOWN_MARKED'
    types = 
      frame:   !-> _this.runMarkdownMarkedFrame   o
      editor:  !-> _this.runMarkdownMarkedEditor  o
      compile:  -> _this.runMarkdownMarkedCompile o
    types[o.type]!
    
  # @vendors mkd
  # @params  o:{ src:S }
  Comp::runMarkdownMarkedFrame = (o) !-> 
    _this = @; @action type: 'RUN_MARKDOWN_MARKED_FRAME'
    o.src = marked o.src
    @runDisplay o
  
  # @vendors mkd
  # @params  o:{ src:S }
  Comp::runMarkdownMarkedEditor = (o) !-> 
    _this = @; @action type: 'RUN_MARKDOWN_MARKED_EDITOR'
    o.src = marked o.src
    o.ext = 'html'
    @runDisplay o
  
  # @vendors mkd
  # @params  o:{ src:S }
  # @return  S
  Comp::runMarkdownMarkedCompile = (o) -> 
    _this = @; @action type: 'RUN_MARKDOWN_MARKED_COMPILE'
    marked o.src

module.exports = _Component
