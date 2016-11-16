
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  
  Comp::initStore = !->
    _this = @; @action type: 'INIT_STORE'
    
    (require 'src/component/store/setting') Comp
    (require 'src/component/store/data')    Comp
    
    @initSetting!
    @initData!

module.exports = _Component
