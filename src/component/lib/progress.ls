
# @params  Comp:{src/component}
_Component = (Component) !-> 
  # @vendors nprogress|npr
  # @methods progress {
  #   Start, End
  # }
  
  Component::initProgress = !->
    _this = @; @action type: 'INIT_PROGRESS'
  
  # @vendors npr
  Component::progressStart = (o) !-> 
    _this = @; @action type: 'PROGRESS_START'
    NProgress.start!
  
  # @vendors npr
  Component::progressEnd = (o) !-> 
    _this = @; @action type: 'PROGRESS_END'
    NProgress.done!

module.exports = _Component
