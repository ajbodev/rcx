
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  
  Comp::initLib = !->
    _this = @; console.log 'INIT_LIB' if @debug
    
    (require 'src/component/lib/action')   Comp
    (require 'src/component/lib/date')     Comp
    (require 'src/component/lib/progress') Comp
    #(require 'src/component/lib/notify')   Comp
    
    @initAction!
    @initDate!
    @initProgress!
    #@initNotify!

module.exports = _Component
