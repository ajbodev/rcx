
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  
  Comp::initBoot = !->
    _this = @; @action type: 'INIT_BOOT'
    
    @boot = @props.boot
    
    (require 'src/component/boot/default') Comp
    (require 'src/component/boot/config')  Comp
    (require 'src/component/boot/meta')    Comp
    (require 'src/component/boot/layout')  Comp
    
    (require 'src/component/boot/option/store') Comp
    (require 'src/component/boot/option/run')   Comp
    
    @initDefault!
    @initConfig!
    @initMeta!
    @initLayout!
    
    @initOptionStore!
    @initOptionRun!

module.exports = _Component
